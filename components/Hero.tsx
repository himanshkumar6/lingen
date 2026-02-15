import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Container } from "./Layout/Container";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Hero: React.FC = () => {
  const [init, setInit] = useState(false);

  // Initialize tsparticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [8, -8]);
  const rotateY = useTransform(x, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set(e.clientX - window.innerWidth / 2);
    y.set(e.clientY - window.innerHeight / 2);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 md:py-40 
                 bg-indigo-500/5 dark:bg-indigo-500/5 transition-colors duration-700"
    >
      {/* ===== BACKGROUND GRADIENT OVERLAYS ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/5" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/5" />
      </div>

      {/* ===== PARTICLES BACKGROUND ===== */}
      {init && (
        <Particles
          id="heroParticles"
          className="absolute inset-0 z-0 pointer-events-none"
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            fpsLimit: 60,
            particles: {
              number: {
                value: 60,
                density: { enable: true, area: 1000 },
              },
              color: {
                value: ["#6366f1", "#818cf8", "#a78bfa"],
              },
              shape: { type: "circle" },
              opacity: {
                value: { min: 0.1, max: 0.4 },
                animation: {
                  enable: true,
                  speed: 0.5,
                  sync: false,
                },
              },
              size: {
                value: { min: 1, max: 2 },
              },
              links: {
                enable: true,
                distance: 150,
                color: "#6366f1",
                opacity: 0.1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                grab: {
                  distance: 180,
                  links: { opacity: 0.2 },
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* ===== CONTENT ===== */}
      <Container className="relative z-10">
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="backdrop-blur-md 
                     bg-white/40 dark:bg-white/[0.02]
                     border border-slate-200/50 dark:border-white/[0.05]
                     rounded-[2.5rem] p-8 md:p-16 lg:p-20
                     shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]
                     transition-all duration-500 text-center"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full 
                       bg-indigo-500/10 dark:bg-indigo-400/10 
                       px-4 py-1.5 text-xs md:text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-8
                       border border-indigo-500/20"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>New AI Features are live</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-4xl text-4xl font-black tracking-tight md:text-7xl lg:text-8xl 
                       text-slate-900 dark:text-indigo-500 leading-[1.1]"
          >
            Supercharge your <br />
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Creator Workflow
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 max-w-2xl text-base md:text-xl 
                       text-slate-600 dark:text-slate-400 leading-relaxed font-medium"
          >
            LinkGen.in is the all-in-one productivity hub for YouTube and Instagram creators.
            Generate SEO bios, extract competitor tags, and optimize your content in seconds.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative h-14 rounded-full 
                         bg-indigo-600 px-10 text-sm font-bold text-white 
                         shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] 
                         hover:bg-indigo-500 hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)]
                         flex items-center gap-3 transition-all duration-300"
            >
              Read Blog
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

        </motion.div>
      </Container>

    </section>
  );
};

export default Hero;
