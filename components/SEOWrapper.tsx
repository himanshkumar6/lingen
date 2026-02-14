import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, ChevronRight, CheckCircle2 } from "lucide-react";

interface SEOWrapperProps {
  title: string;
  children: React.ReactNode;
  articleTitle?: string;
  articleContent?: React.ReactNode;
  faqs?: { q: string; a: string }[];
}

import { Container } from "./Layout/Container";

const SEOWrapper: React.FC<SEOWrapperProps> = ({
  title,
  children,
  articleTitle,
  articleContent,
  faqs = [],
}) => {
  return (
    <Container className="py-16 md:py-24 lg:py-32 space-y-24 md:space-y-32">

      {/* Tool Container */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-5xl overflow-hidden rounded-2xl md:rounded-[2.5rem] border border-border bg-card shadow-xl shadow-primary/5 p-0"
      >
        <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 md:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="h-3 w-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
              <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/40" />
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              Live
            </span>
          </div>
        </div>

        <div className="p-6 md:p-12">{children}</div>
      </motion.section>

      {/* SEO Article */}
      {(articleTitle || articleContent) && (
        <div className="mx-auto max-w-4xl space-y-20">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            {articleTitle && (
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-10 text-center md:text-left">
                {articleTitle}
              </h2>
            )}

            {articleContent && (
              <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-8">
                {articleContent}
              </div>
            )}
          </article>

          {/* FAQ */}
          {faqs.length > 0 && (
            <section className="space-y-12">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="rounded-3xl border border-border bg-card p-6 transition hover:border-primary/40"
                  >
                    <h4 className="flex items-start gap-3 text-lg font-bold text-foreground mb-4">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1.5" />
                      {faq.q}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                      {faq.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* Bottom CTA */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-5xl rounded-3xl border border-primary/20 bg-primary/5 p-10 md:p-16 text-center backdrop-blur-sm"
      >
        <div className="space-y-6">
          <h3 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            Ready to grow faster?
          </h3>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Join thousands of creators using LinkGen to optimize their growth
            and visibility.
          </p>

          <div className="pt-4">
            <button className="inline-flex h-12 items-center gap-3 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition hover:opacity-90">
              Get Started <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div> */}
    </Container>
  );
};

export default SEOWrapper;
