"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/data/blogData";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Container } from "@/components/Layout/Container";

interface Heading {
  id: string;
  text: string;
}

export default function BlogArticle() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const post = blogPosts.find((p) => p.slug === slug);

  const [progress, setProgress] = useState(0);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  // Progress Bar Logic
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;
      const scrollPercent = (scrollPosition / totalHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Extract Headings for TOC
  useEffect(() => {
    if (!post) return;

    const timeout = setTimeout(() => {
      const elements = Array.from(
        document.querySelectorAll("article h2, article h3")
      );

      const mapped = elements.map((el) => ({
        id: el.id,
        text: el.textContent || "",
      }));

      setHeadings(mapped);
    }, 200);

    return () => clearTimeout(timeout);
  }, [post]);

  // Active TOC Link Logic
  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160) {
            current = heading.id;
          }
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground text-lg">Article not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1.5 bg-primary z-50 transition-all duration-200 shadow-[0_0_10px_rgba(var(--primary),0.5)]"
        style={{ width: `${progress}%` }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-10 sm:pb-14">
        <Container className="space-y-6 sm:space-y-8 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground font-medium">
            <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full tracking-wide">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
              {post.publishDate}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.15]">
            <span className="text-primary">{post.title.charAt(0)}</span>
            {post.title.slice(1)}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>
        </Container>
      </section>

      {/* Cover Image */}
      <section className="pb-12 sm:pb-16">
        <Container className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-border/50 shadow-2xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </Container>
      </section>

      {/* Content & Sidebar Grid */}
      <Container className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-start">
          
          {/* ARTICLE SURFACE - Left Column (8 cols) */}
          <article className="lg:col-span-8 bg-card rounded-3xl p-6 sm:p-10 shadow-sm border border-border/60">
            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none dark:prose-invert 
              prose-p:text-muted-foreground prose-p:leading-relaxed 
              prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight 
              prose-strong:text-foreground prose-strong:font-bold
              prose-li:text-muted-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
            >
              <ReactMarkdown
                components={{
                  h2: ({ children }) => {
                    const text = String(children);
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                    return (
                      <h2 id={id} className="text-2xl sm:text-3xl font-extrabold mt-12 mb-6 scroll-mt-32">
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children }) => {
                    const text = String(children);
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                    return (
                      <h3 id={id} className="text-xl sm:text-2xl font-bold mt-8 mb-4 scroll-mt-32">
                        {children}
                      </h3>
                    );
                  },
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-8 rounded-xl border border-border">
                      <table className="min-w-full text-sm text-left">{children}</table>
                    </div>
                  ),
                  pre: ({ children }) => (
                    <div className="overflow-x-auto my-8 rounded-2xl bg-secondary/50 border border-border/50 p-5 shadow-inner">
                      <pre className="m-0 text-sm font-mono">{children}</pre>
                    </div>
                  ),
                  img: ({ src, alt }) => (
                    <img src={src} alt={alt} className="rounded-2xl border border-border my-8 w-full" />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>

          {/* TABLE OF CONTENTS - Right Column (4 cols) - FIXED STICKY LOGIC */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-32 self-start">
            <div className="bg-[hsla(var(--cmd-card-elevated))] border border-border/60 rounded-3xl p-6 shadow-xl backdrop-blur-xl">
              <h4 className="font-bold mb-6 text-xs tracking-widest uppercase text-foreground/80 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Table of Contents
              </h4>

              <div className="space-y-1.5 text-sm font-medium max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block px-3 py-2 rounded-lg transition-all duration-200 ${
                      activeId === heading.id
                        ? "bg-primary/10 text-primary translate-x-1"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
                
                {headings.length === 0 && (
                  <p className="text-muted-foreground italic text-sm px-3">No headings found.</p>
                )}
              </div>
            </div>
          </aside>

        </div>
      </Container>
    </div>
  );
}