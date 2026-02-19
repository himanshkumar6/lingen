"use client";

import React from 'react';
import Link from 'next/link';
import { blogPosts } from "@/data/blogData";
import { Container } from "@/components/Layout/Container";

const Blog: React.FC = () => {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 pb-20">
      <section className="py-28 px-6 text-center border-b border-border">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Creator Growth Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Data-backed growth strategies for creators in the United States.
            Learn YouTube SEO, Instagram branding, and monetization frameworks.
          </p>
        </div>
      </section>

      <Container className="pt-24 space-y-24">
        {/* FEATURED POST */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-card border border-border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">
            <div className="h-full">
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-10 space-y-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {featured.category}
                </span>
                <span>{featured.publishDate}</span>
                <span>{featured.readingTime}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {featured.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {featured.excerpt}
              </p>

              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition shadow-md"
              >
                Read Full Article →
              </Link>
            </div>
          </div>
        </section>

        {/* GRID POSTS */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rest.map((post) => (
            <div
              key={post.slug}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl transition"
            >
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span>{post.readingTime}</span>
                </div>

                <h3 className="text-lg font-semibold group-hover:text-primary transition">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition"
                >
                  Read Article
                </Link>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
};

export default Blog;
