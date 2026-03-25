"use client";

import React, { useState } from "react";
import { TOOLS } from "../../constants";
import ToolCard from "../ToolCard";
import Hero from "../Hero";
import { JsonLd } from "@/lib/seo";
import {
  Search,
  LayoutGrid,
  SlidersHorizontal,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../Layout/Container";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(TOOLS.map((tool) => tool.category))
  );

  const filteredTools = TOOLS.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = activeCategory
      ? tool.category === activeCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  const faqs = [
    {
      q: "How does the AI Instagram Bio Generator work?",
      a: "Our AI analyzes your specific niche, target keywords, and audience to craft professional, SEO-optimized Instagram bios. It helps you rank better in Instagram search and converts profile visitors into loyal followers."
    },
    {
      q: "Are all the creator tools completely free to use?",
      a: "Yes, absolutely! All productivity tools on LinkGen.in, including the YouTube Tag Extractor and Font Converter, are 100% free. Our mission is to support the creator economy by providing premium utility tools without expensive subscriptions."
    },
    {
      q: "Is my data safe when using these tools?",
      a: "Your privacy and data security are our top priorities. Our tools process your requests securely, and we do not store your personal social media data, passwords, or search queries on our servers."
    },
    {
      q: "Do these tools help with YouTube SEO and ranking?",
      a: "Yes! Our YouTube specific tools, like the description and tag extractors, allow you to analyze top-performing competitor metadata. This helps you optimize your own videos for better search rankings and higher click-through rates (CTR)."
    }
  ];

  return (
    <main className="pb-20 md:pb-28 lg:pb-36">
      {/* Homepage WebSite Schema for Google Search Sitelinks */}
      <JsonLd
        type="WebSite"
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "LinkGen",
          "url": "https://linkgen.in",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://linkgen.in/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "description": "Free suite of creator tools including YouTube SEO metadata extractors, AI Instagram bio generators, and stylish gaming fonts."
        }}
      />

      {/* FAQ Schema for Homepage */}
      <JsonLd
        type="FAQPage"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        }}
      />

      <Hero />

      <Container>
        <section className="mt-10 md:mt-14 mb-16 flex justify-center px-4">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools (Instagram, YouTube SEO...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border border-border bg-background text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 transition shadow-sm"
            />
          </div>
        </section>

        <section className="space-y-10 md:space-y-14">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
              <LayoutGrid className="w-5 h-5 text-primary" />
              Creator Productivity Tools
            </h2>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full border border-border hover:bg-muted transition font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter Tools
            </button>
          </div>

          {showFilters && (
            <div className="flex flex-wrap gap-3 animate-in fade-in duration-300">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 text-xs font-medium rounded-full border transition ${activeCategory === null
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "border-border hover:bg-muted"
                  }`}
              >
                All Tools
              </button>

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs font-medium rounded-full border transition ${activeCategory === category
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                    : "border-border hover:bg-muted"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool, idx) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <ToolCard tool={tool} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-card border border-dashed border-border rounded-3xl">
                <p className="text-muted-foreground text-lg">
                  No tools found matching "{search}".
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="mt-24 py-16 border-t border-border">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Everything You Need for Organic Growth
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                LinkGen.in provides a premium suite of free tools designed to help digital creators, YouTubers, and marketers optimize their online presence.
                Our platform simplifies complex workflows like <strong>YouTube SEO metadata extraction</strong>, <strong>AI-powered Instagram bio generation</strong>, and <strong>stylish gaming font creation</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-base text-muted-foreground leading-relaxed pt-8">
              <div className="space-y-4 bg-card p-8 rounded-3xl border border-border shadow-sm">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Why use LinkGen?
                </h3>
                <p>
                  In the modern creator economy, speed and optimization are everything. We built LinkGen to be the fastest, mobile-first platform for digital metadata management.
                  Whether you are scaling a new YouTube channel, hunting for viral tags, or crafting the perfect aesthetic profile, our tools ensure maximum efficiency without the friction of heavy software.
                </p>
              </div>
              <div className="space-y-4 bg-card p-8 rounded-3xl border border-border shadow-sm">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Data Privacy & Security
                </h3>
                <p>
                  Your data security is our absolute priority. Tools like our AI Watermark Remover and Character Counters process information using secure, encrypted tunnels or entirely within your local browser. We follow strict industry-standard practices to ensure your sensitive content remains private and AdSense-compliant.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-24 md:mt-32">
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="w-175 h-175 bg-primary/10 blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
          </div>

          <div className="relative rounded-[2.5rem] border border-border bg-linear-to-br from-card to-card/70 backdrop-blur-xl p-8 md:p-14 lg:p-20 shadow-2xl shadow-primary/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
                    Built for the <br />
                    <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
                      Modern Creator Economy
                    </span>
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                    LinkGen.in helps you automate SEO research, social media bio optimization, and content formatting workflows — all in one lightning-fast platform built specifically for audience growth.
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    "AI-powered bio & description generation with SEO focus",
                    "Instant YouTube tag & high-res thumbnail extraction",
                    "Mobile-first responsive interface for on-the-go editing",
                    "Secure, private, and 100% free to use"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-sm md:text-base font-semibold text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm rounded-[2rem] border border-border bg-gradient-to-br from-primary/10 via-indigo-500/10 to-primary/5 p-10 shadow-2xl shadow-primary/10">
                  <div className="space-y-6 text-center">
                    <div className="h-16 w-16 mx-auto rounded-2xl bg-background border border-primary/20 flex items-center justify-center text-primary font-black text-2xl shadow-inner">
                      ⚡
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Built for Speed</h3>
                      <p className="text-sm text-muted-foreground font-medium">Instant tools. Zero friction. Maximum growth.</p>
                    </div>
                    <div className="pt-4 space-y-3 opacity-70">
                      <div className="h-3 rounded-full bg-background border border-border"></div>
                      <div className="h-3 rounded-full bg-background border border-border w-4/5 mx-auto"></div>
                      <div className="h-3 rounded-full bg-background border border-border w-3/5 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32 space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="p-8 rounded-3xl border border-border bg-card hover:border-primary/30 transition-colors shadow-sm">
                <h4 className="font-bold text-lg mb-3 text-foreground">{faq.q}</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Home;