"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { blogPosts } from "@/data/blogData";
import { Container } from "@/components/Layout/Container";

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Pagination Logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = blogPosts.slice(indexOfFirstArticle, indexOfLastArticle);
  
  const totalPages = Math.ceil(blogPosts.length / articlesPerPage);

  // Featured post logic (Sirf Page 1 par dikhega)
  const featured = blogPosts[0];

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 pb-20">
      {/* Header Section */}
      <section className="py-28 px-6 text-center border-b border-border">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Creator Growth Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Data-backed growth strategies for creators. 
            Learn YouTube SEO, Instagram branding, and monetization frameworks.
          </p>
        </div>
      </section>

      <Container className="pt-24 space-y-16">
        
        {/* FEATURED POST - Only show on Page 1 */}
        {currentPage === 1 && (
          <section>
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500">
              <div className="h-[300px] lg:h-full">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 lg:p-12 space-y-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                  <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
                    Featured
                  </span>
                  <span>{featured.publishDate}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  {featured.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {featured.excerpt}
                </p>

                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ARTICLES GRID */}
        <section className="space-y-12">
          <div className="flex items-center justify-between border-b border-border pb-6">
            <h2 className="text-2xl font-bold tracking-tight">Latest Articles</h2>
            <p className="text-sm text-muted-foreground font-medium">
              Showing {indexOfFirstArticle + 1}-{Math.min(indexOfLastArticle, blogPosts.length)} of {blogPosts.length}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((post) => (
              <div
                key={post.slug}
                className="group flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/90 backdrop-blur-md text-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-border">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground font-bold uppercase tracking-wider">
                    <span>{post.publishDate}</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="w-full text-center bg-secondary text-secondary-foreground py-3 rounded-xl text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 pt-10">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-xl border border-border hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              ←
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-12 h-12 rounded-xl font-bold transition-all ${
                  currentPage === number
                    ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/20"
                    : "border border-border hover:bg-muted text-muted-foreground"
                }`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl border border-border hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              →
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Blog;