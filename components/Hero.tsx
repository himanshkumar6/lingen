import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Container } from './Layout/Container';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-32 lg:py-48">
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-8"
        >
          <Sparkles className="h-4 w-4" />
          <span>New AI Features are live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-4xl font-black tracking-tight md:text-7xl lg:text-8xl lg:leading-[1.1]"
        >
          Supercharge your <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Creator Workflow
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground"
        >
          LinkGen.in is the all-in-one productivity hub for YouTube and Instagram creators.
          Generate SEO bios, extract competitor tags, and optimize your content in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="h-12 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 flex items-center gap-2">
            Explore Tools <ArrowRight className="h-4 w-4" />
          </button>
          <button className="h-12 rounded-full border border-border bg-background px-8 text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800">
            Read Blog
          </button>
        </motion.div>
      </Container>

      {/* Background decoration */}
      <div className="absolute top-0 -z-10 h-full w-full opacity-50 dark:opacity-20">
        <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]"></div>
      </div>
    </section>
  );
};

export default Hero;
