"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Container } from "../Layout/Container";
import Link from "next/link";

const HeroContent: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [8, -8]);
  const rotateY = useTransform(x, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set(e.clientX - window.innerWidth / 2);
    y.set(e.clientY - window.innerHeight / 2);
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative z-10 w-full">
      <Container>
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
            <Sparkles className="h-3.5 w-3.5 animate-pulse" aria-hidden="true" />
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
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative h-14 rounded-full 
                           bg-indigo-600 px-10 text-sm font-bold text-white 
                           shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] 
                           hover:bg-indigo-500 hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)]
                           flex items-center gap-3 transition-all duration-300"
                aria-label="Read our latest blog posts to supercharge your workflow"
              >
                Read Blog
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroContent;
