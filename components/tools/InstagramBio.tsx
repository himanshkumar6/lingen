"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  Loader2,
  Wand2,
  Instagram,
  Target,
  ShieldCheck,
  Rocket,
  Zap,
  Star,
  Search as SearchIcon
} from "lucide-react";
import { generateBio } from "@/services/gemini";
import SEOWrapper from "@/components/SEOWrapper";
import { JsonLd } from "@/lib/seo";
import { motion } from "framer-motion";

const InstagramBio: React.FC = () => {
  const [niche, setNiche] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("Creative & Fun");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = async () => {
    if (!niche) return;
    setLoading(true);
    try {
      const bios = await generateBio(niche, keywords, tone);
      setResults(bios);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <JsonLd
        type="SoftwareApplication"
        data={{
          "@context": "https://schema.org",
          name: "Advanced AI Instagram Bio Generator",
          operatingSystem: "Web",
          applicationCategory: "SocialMediaTool",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "Professional Instagram bio generator using Google Gemini AI. Create aesthetic, SEO-optimized bios for creators and brands.",
        }}
      />

      <SEOWrapper title="Free AI Instagram Bio Generator">
        <div className="space-y-16 lg:space-y-20 py-8 lg:py-16 px-4 sm:px-6">
          <header className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
              <Zap className="w-3 h-3" /> 2026 Optimization Engine
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              AI Instagram Bio Generator
              <br className="hidden sm:block" />
              <span className="text-primary">For Creators & Brands</span>
            </h1>

            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Build a brand, not just a bio. Generate aesthetic and SEO-friendly
              bios that drive profile visits and followers.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start max-w-5xl mx-auto">
            <div className="space-y-6 bg-card border border-border p-6 lg:p-8 rounded-2xl shadow-sm">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Target className="w-4 h-4 text-primary" />
                  Your Niche
                </label>
                <input
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="e.g. SaaS Founder, Fitness Coach..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <SearchIcon className="w-4 h-4 text-primary" />
                  Target Keywords
                </label>
                <input
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="e.g. fitness tips, remote work..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none"
                >
                  <option>Professional & Bold</option>
                  <option>Aesthetic & Minimal</option>
                  <option>Creative & Fun</option>
                  <option>Direct & Catchy</option>
                  <option>Minimalist</option>
                </select>

                <button
                  onClick={handleGenerate}
                  disabled={loading || !niche}
                  className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-md transition hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <Wand2 className="w-5 h-5" />
                  )}
                  Generate
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl border border-border bg-card p-6 min-h-75 lg:min-h-85 shadow-sm">
              <div className="flex items-center gap-2 mb-5 border-b border-border pb-4">
                <Instagram className="w-5 h-5 text-pink-500" />
                <span className="font-semibold text-sm">Profile Preview</span>
              </div>

              <div className="space-y-4">
                {results.map((bio, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-background border border-border rounded-xl p-4 flex justify-between items-start hover:border-primary/40 transition"
                  >
                    <p className="text-sm text-foreground whitespace-pre-line leading-relaxed pr-3">
                      {bio}
                    </p>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(bio);
                        setCopiedIndex(idx);
                        setTimeout(() => setCopiedIndex(null), 2000);
                      }}
                      className="p-2 text-muted-foreground hover:text-primary transition"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </motion.div>
                ))}

                {results.length === 0 && !loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground opacity-60 text-sm text-center p-6">
                    <Star className="w-12 h-12 mb-3 text-primary/20" />
                    Enter your niche to generate bios.
                  </div>
                )}

                {loading && (
                  <div className="flex flex-col items-center justify-center py-16 space-y-4">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    <p className="text-sm text-primary animate-pulse">
                      Generating bios...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <section className="max-w-4xl mx-auto space-y-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Rocket />, title: "Conversion Focus", desc: "Optimized for profile visits & follows." },
                { icon: <SearchIcon />, title: "SEO Optimized", desc: "Smart keyword placement for discoverability." },
                { icon: <ShieldCheck />, title: "Privacy Safe", desc: "No tracking or cookies." }
              ].map((item, i) => (
                <div key={i} className="text-center p-5 border border-border bg-card rounded-2xl">
                  <div className="h-10 w-10 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <article className="text-muted-foreground space-y-12 leading-relaxed text-base border-t border-border pt-14">
              <div className="space-y-5">
                <h2 className="text-2xl lg:text-4xl font-extrabold text-foreground tracking-tight">
                  The Science of a High-Converting Instagram Bio
                </h2>
                <p>
                  In 2026, an Instagram bio isn't just a description; it's a <strong>search ranking factor</strong>.
                  With social search growing rapidly, profiles now rank based on keywords.
                  Our generator uses AI-based Natural Language Processing (NLP) to craft bios
                  optimized for both users and algorithms.
                </p>
              </div>

              <div className="space-y-6 bg-muted/30 p-8 rounded-3xl border border-border">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                  Why Your Bio Matters
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      First Impression (0.05s)
                    </h4>
                    <p className="text-sm">
                      Visitors decide in under a second whether to follow you.
                      A clear and aesthetic bio builds instant trust.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Search Optimization
                    </h4>
                    <p className="text-sm">
                      Including niche keywords helps you appear in Instagram search results
                      and suggested accounts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                  Instagram Bio Best Practices
                </h3>

                <div className="grid gap-4">
                  {[
                    { t: "Value Proposition", d: "Clearly communicate what value you provide." },
                    { t: "Social Proof", d: "Mention achievements or metrics for credibility." },
                    { t: "Call to Action", d: "Guide visitors with clear action steps." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-background border border-border rounded-2xl">
                      <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {item.t}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                  Creator FAQ
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-foreground">
                      Do emojis help in Instagram bios?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Yes. Emojis improve readability and structure, but overuse can reduce professionalism.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      How often should I update my bio?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Every 3–6 months or whenever you launch something new.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </SEOWrapper>
    </>
  );
};

export default InstagramBio;
