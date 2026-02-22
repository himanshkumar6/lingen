"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Link as LinkIcon, Layout } from "lucide-react";
import Link from "next/link";

const HeroContent: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative z-15 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-sm font-semibold shadow-sm"
        >
          <LinkIcon className="w-4 h-4" />
          <span>Free Productivity Tools for Creators</span>
        </motion.div>

      <motion.h1
  variants={itemVariants}
  className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight"
>
  Make Your Work Easier with <br className="hidden md:block" />
  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
    Smart Tools
  </span>
</motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl leading-relaxed font-medium"
        >
          Access a comprehensive suite of tools designed for YouTube and Instagram growth. Generate AI bios, extract video tags, and optimize your metadata efficiently.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/blog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:scale-95"
          >
            Read Blog
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold shadow-sm transition-all focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 active:scale-95"
          >
            <Layout className="w-5 h-5" />
            About Us
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;