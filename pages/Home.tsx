import React, { useState } from "react";
import { TOOLS } from "../constants";
import ToolCard from "../components/ToolCard";
import Hero from "../components/Hero";
import {
  Search,
  LayoutGrid,
  SlidersHorizontal,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../components/Layout/Container";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Extract unique categories safely
  const categories = Array.from(
    new Set(TOOLS.map((tool) => tool.category))
  );

  // Combined filter logic (Search + Category)
  const filteredTools = TOOLS.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = activeCategory
      ? tool.category === activeCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="pb-20 md:pb-28 lg:pb-36">
      {/* ================= HERO ================= */}
      <Hero />

      <Container>
        {/* ================= SEARCH ================= */}
        <section className="mt-10 md:mt-14 mb-16 flex justify-center">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools (Instagram, YouTube SEO...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 md:py-4 
                         rounded-xl border border-border bg-background 
                         text-sm md:text-base focus:outline-none 
                         focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>
        </section>

        {/* ================= POPULAR TOOLS ================= */}
        <section className="space-y-10 md:space-y-14">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
              <LayoutGrid className="w-5 h-5 text-primary" />
              Productivity Tools
            </h2>

            {/* FILTER BUTTON */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full border border-border hover:bg-muted transition"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
          </div>

          {/* CATEGORY FILTERS */}
          {showFilters && (
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 text-xs rounded-full border transition ${activeCategory === null
                    ? "bg-primary text-white border-primary"
                    : "border-border hover:bg-muted"
                  }`}
              >
                All
              </button>

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs rounded-full border transition ${activeCategory === category
                      ? "bg-primary text-white border-primary"
                      : "border-border hover:bg-muted"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* TOOL GRID */}
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
              <div className="col-span-full text-center py-16">
                <p className="text-muted-foreground italic">
                  No tools found matching your search.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ================= SEO VALUE SECTION ================= */}
        <section className="mt-24 py-12 border-t border-border">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                Everything You Need for Content Growth
              </h2>
              <p className="text-muted-foreground text-lg">
                LinkGen.in provides a suite of professional tools designed to help creators, digital marketers, and developers optimize their online presence.
                Our platform simplifies complex tasks like <strong>PDF compression to 200kb</strong>, <strong>YouTube SEO extraction</strong>, and <strong>Instagram bio generation</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base text-muted-foreground leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Why use LinkGen?
                </h3>
                <p>
                  In the modern creator economy, speed is everything. We built LinkGen to be the fastest mobile-first platform for metadata management.
                  Whether you are scaling a YouTube channel or managing professional documents, our tools ensure maximum efficiency without the friction of heavy software.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Data Privacy & Security
                </h3>
                <p>
                  Your data security is our priority. Tools like our PDF compressor process files locally or via secure encrypted tunnels, ensuring that your
                  sensitive information never stays on our servers. We follow industry-standard practices to provide a safe, AdSense-compliant user experience.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ================= FEATURE SECTION ================= */}
        <section className="relative mt-24 md:mt-32 lg:mt-40">
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="w-175 h-175 bg-primary/10 blur-[120px] rounded-full opacity-40"></div>
          </div>

          <div className="relative rounded-3xl border border-border bg-linear-to-br from-card to-card/70 backdrop-blur-xl p-8 md:p-14 lg:p-20 shadow-2xl shadow-primary/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
                    Built for the <br />
                    <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                      Modern Creator Economy
                    </span>
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                    LinkGen.in helps creators automate SEO research, bio optimization, metadata extraction, and formatting workflows — all in one lightning-fast, mobile-first platform built for growth.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "AI-powered bio & description generation with SEO focus",
                    "Instant YouTube tag & metadata extraction for ranking",
                    "Mobile-first responsive interface for on-the-go editing",
                    "Secure and AdSense-safe structured architecture"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                      <p className="text-sm md:text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-105 rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-indigo-500/10 to-primary/5 p-10 shadow-xl shadow-primary/10">
                  <div className="space-y-6 text-center">
                    <div className="h-12 w-12 mx-auto rounded-xl bg-primary/15 flex items-center justify-center text-primary font-bold text-lg">⚡</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">Built for Speed</h3>
                    <p className="text-sm text-muted-foreground">Instant tools. Zero friction. Maximum growth.</p>
                    <div className="pt-4 space-y-3">
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

        {/* ================= NEW: FAQ SECTION (High Value Content) ================= */}
        <section className="mt-24 space-y-12">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h4 className="font-semibold mb-2 text-foreground">How do I compress a PDF to exactly 200kb?</h4>
              <p className="text-sm text-muted-foreground text-pretty">LinkGen uses advanced compression algorithms to reduce file size while maintaining readability, helping you meet strict government or job application limits.</p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card">
              <h4 className="font-semibold mb-2 text-foreground">Are these tools free to use?</h4>
              <p className="text-sm text-muted-foreground text-pretty">Yes, all tools on LinkGen.in are 100% free. We aim to support the creator community by providing high-quality utility tools without a subscription.</p>
            </div>
          </div>
        </section>

      </Container>
    </main>
  );
};

export default Home;