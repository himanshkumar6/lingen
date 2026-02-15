import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

const BlogArticle = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const [progress, setProgress] = useState(0);
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState("");

  /* =======================
     Reading Progress
  ======================== */
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

  /* =======================
     Extract Headings
  ======================== */
  useEffect(() => {
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

  /* =======================
     Active Section Detection
  ======================== */
  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      for (let i = 0; i < headings.length; i++) {
        const element = document.getElementById(headings[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160) {
            current = headings[i].id;
          }
        }
      }

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

      {/* ================= HERO ================= */}
      <section className="relative pt-20 md:pt-24 pb-14 border-b border-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 space-y-6">

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span>{post.publishDate}</span>
            <span>{post.readingTime}</span>
          </div>

          {/* FIXED RESPONSIVE HEADING */}
          <h1 className="
            text-[26px]
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            xl:text-6xl
            font-extrabold
            leading-[1.25]
            md:leading-[1.15]
            tracking-tight
            text-foreground
            max-w-3xl
          ">
            <span className="text-primary">
              {post.title.charAt(0)}
            </span>
            {post.title.slice(1)}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ================= COVER ================= */}
      <section className="py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border shadow-xl">

            <img
              src={post.coverImage}
              alt={post.title}
              className="
                w-full
                h-[220px]
                sm:h-[300px]
                md:h-[420px]
                lg:h-[500px]
                object-cover
              "
            />
          </div>
        </div>
      </section>

      {/* ================= CONTENT + SIDEBAR ================= */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* ARTICLE */}
        <article className="lg:col-span-3 pb-20">

          <div
            className="
              prose
              prose-base
              md:prose-lg
              max-w-none

              prose-headings:text-foreground
              prose-p:text-muted-foreground
              prose-strong:text-foreground
              prose-a:text-primary
              prose-li:text-muted-foreground
              prose-blockquote:text-muted-foreground

              dark:prose-invert
            "
          >
            <ReactMarkdown
              components={{
                p: ({ children, node }) => {
                  const isFirst =
                    node?.position?.start?.line === 1;

                  return (
                    <p
                      className={
                        isFirst
                          ? "first-letter:text-5xl first-letter:font-extrabold first-letter:mr-2 first-letter:float-left first-letter:text-primary first-letter:leading-none"
                          : ""
                      }
                    >
                      {children}
                    </p>
                  );
                },
                h2: ({ children }) => {
                  const text = String(children);
                  const id = text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-");

                  return (
                    <h2 id={id} className="scroll-mt-28">
                      {children}
                    </h2>
                  );
                },
                h3: ({ children }) => {
                  const text = String(children);
                  const id = text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-");

                  return (
                    <h3 id={id} className="scroll-mt-28">
                      {children}
                    </h3>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Author */}
          <div className="mt-16 p-8 bg-muted/30 rounded-2xl border border-border">
            <h3 className="text-lg font-bold">
              About LinkGen Editorial Team
            </h3>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">
              We help creators in the United States grow their presence through
              actionable YouTube SEO and Instagram branding strategies.
            </p>
          </div>

        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 bg-card border border-border rounded-xl p-5 shadow-sm">

            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
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

      </div>
    </div>
  );
};

export default BlogArticle;
