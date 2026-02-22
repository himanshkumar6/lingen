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
        <p className="text-muted-foreground">Article not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-14 border-b border-border">
        <Container className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span>{post.publishDate}</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-3xl">
            <span className="text-primary">{post.title.charAt(0)}</span>
            {post.title.slice(1)}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            {post.excerpt}
          </p>
        </Container>
      </section>

      {/* Cover Image */}
      <section className="py-14 md:py-16">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Content */}
      <Container className="grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* ARTICLE SURFACE FIXED */}
        <article className="lg:col-span-3 pb-20 prose-optimal bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border">
          
          {/* PROSE VISIBILITY FIXED */}
          <div className="prose md:prose-lg max-w-none dark:prose-invert prose-p:text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-li:text-foreground">
            
            <ReactMarkdown
              components={{
                h2: ({ children }) => {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                  return (
                    <h2 id={id} className="text-xl md:text-2xl font-bold">
                      {children}
                    </h2>
                  );
                },
                h3: ({ children }) => {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                  return (
                    <h3 id={id} className="text-lg md:text-xl font-bold">
                      {children}
                    </h3>
                  );
                },
                table: ({ children }) => (
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full">{children}</table>
                  </div>
                ),
                pre: ({ children }) => (
                  <div className="overflow-x-auto my-6 rounded-xl bg-muted/50 p-4">
                    <pre className="m-0">{children}</pre>
                  </div>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Table of Contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 bg-card border border-border rounded-xl p-5 shadow-sm">
            <h4 className="font-semibold mb-4 text-sm uppercase text-muted-foreground">
              Table of Contents
            </h4>

            <div className="space-y-3 text-sm">
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className={`block pl-3 border-l-2 transition ${
                    activeId === heading.id
                      ? "text-primary border-primary font-medium"
                      : "text-muted-foreground border-transparent hover:text-primary"
                  }`}
                >
                  {heading.text}
                </a>
              ))}
            </div>
          </div>
        </aside>

      </Container>
    </div>
  );
}