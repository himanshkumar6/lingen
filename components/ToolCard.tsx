import React from 'react';
import Link from 'next/link';
import { Tool } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Link
        href={tool.path}
        className="group relative block h-full overflow-hidden rounded-2xl md:rounded-[2rem] border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 active:scale-[0.99]"
      >
        {/* Subtle elegance: faint primary surface shift on hover */}
        <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/[0.02]" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              {/* Fix: Added explicit props type to React.ReactElement for cloneElement */}
              {React.cloneElement(tool.icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7" })}
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {tool.name}
              </h3>
              {tool.isAi && (
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter text-primary">
                  AI
                </span>
              )}
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {tool.description}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
            <span>Launch Tool</span>
            <div className="h-px flex-grow bg-border group-hover:bg-primary/30" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ToolCard;