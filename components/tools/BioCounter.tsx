"use client";

import React, { useState, useEffect } from 'react';
import { Copy, Trash2, Info, Target, Zap, BarChart3, Globe, LayoutTemplate, HelpCircle } from 'lucide-react';
import { Container } from '@/components/Layout/Container';
import { JsonLd } from '@/lib/seo'; // Added JSON-LD import

const STORAGE_KEY = "bio-counter-text";

const BioCounter: React.FC = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setText(saved);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, text);
    }
  }, [text]);

  const handleClear = () => {
    setText('');
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const platforms = [
    { name: 'Instagram Bio', limit: 150 },
    { name: 'Twitter / X', limit: 280 },
    { name: 'TikTok Bio', limit: 80 },
    { name: 'YouTube Description', limit: 5000 },
  ];

  const faqs = [
    {
      q: "Do spaces and line breaks count as characters?",
      a: "Yes. Every single space, line break (Enter/Return), and punctuation mark is processed as a character by social media platforms like Instagram, TikTok, and X (Twitter). Our counter tracks these hidden characters in real-time to ensure your bio is perfectly compliant."
    },
    {
      q: "How many characters does an emoji use?",
      a: "Emojis can be tricky! While they look like one character to the human eye, under the hood, standard emojis usually count as 2 characters due to Unicode formatting. Complex emojis (like skin-tone modifiers or family combinations) can count as up to 4 to 7 characters depending on the platform."
    },
    {
      q: "Why is my Instagram bio getting cut off?",
      a: "Instagram has a hard limit of 150 characters. If your bio exceeds this, Instagram will either block you from saving the changes or truncate your text with a '...more' button. It is crucial to keep your most important information and Call-to-Action (CTA) in the first two lines."
    },
    {
      q: "Is this bio character counter free to use?",
      a: "Yes! The LinkGen Social Media Bio Counter is 100% free. It runs entirely in your browser, saves your progress locally without requiring an account, and ensures your data remains completely private."
    }
  ];

  return (
    <>
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: "Social Media Bio Character Counter",
          applicationCategory: "Utility",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Free real-time character and word counter tool optimized for Instagram, TikTok, X (Twitter), and YouTube bios."
        }}
      />
      
      <JsonLd
        type="FAQPage"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a
            }
          }))
        }}
      />

      <Container className="py-16 md:py-24 lg:py-32 space-y-20">
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
            <BarChart3 className="w-3 h-3" /> Live Tracking
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight">
            Social Media <span className="text-primary">Bio Character Counter</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            The ultimate utility to craft pixel-perfect profiles. Monitor character counts, word density, and strict platform compliance in real-time before you publish.
          </p>
        </header>

        {/* TOOL SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <label className="text-base font-bold text-foreground flex items-center gap-2">
                  <LayoutTemplate className="w-5 h-5 text-primary" />
                  Bio Workspace
                </label>

                <div className="flex gap-2">
                  <button
                    onClick={() => navigator.clipboard.writeText(text)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
                    title="Copy to Clipboard"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">Copy Text</span>
                  </button>

                  <button
                    onClick={handleClear}
                    className="p-2 rounded-xl text-destructive bg-destructive/10 hover:bg-destructive/20 transition-colors"
                    title="Clear Workspace"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <textarea
                className="w-full h-64 px-5 py-5 border-2 border-border bg-background text-foreground rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none text-base leading-relaxed resize-none transition-all"
                placeholder="Start drafting your perfect social media bio here... (Auto-saves as you type)"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <StatCard label="Characters" value={text.length} highlight />
                <StatCard label="Words" value={text.trim() === '' ? 0 : text.trim().split(/\s+/).length} />
                <StatCard label="Sentences" value={text.split(/[.!?]+/).filter(Boolean).length} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">
              Platform Limits
            </h2>

            <div className="space-y-4">
              {platforms.map(platform => {
                const percentage = Math.min((text.length / platform.limit) * 100, 100);
                const isOver = text.length > platform.limit;

                return (
                  <div
                    key={platform.name}
                    className="bg-card p-5 rounded-2xl border border-border space-y-3 shadow-sm hover:border-primary/40 transition-colors"
                  >
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-foreground">
                        {platform.name}
                      </span>
                      <span className={`font-bold ${isOver ? 'text-destructive' : 'text-muted-foreground'}`}>
                        {text.length} <span className="text-muted-foreground font-normal">/ {platform.limit}</span>
                      </span>
                    </div>

                    <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${isOver ? 'bg-destructive' : 'bg-primary'}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    {isOver && (
                      <p className="text-xs text-destructive font-medium">Over limit! Text will be cut off.</p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="bg-blue-500/10 p-5 rounded-2xl border border-blue-500/20 flex gap-3 text-sm text-blue-600">
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Optimization Tip:</strong> Mobile users prefer bios under 100 characters. Keep your main value proposition and Linktree in the first two lines!
              </p>
            </div>
          </div>
        </div>

        {/* ================= ADSENSE OPTIMIZED ARTICLE SECTION ================= */}
        <section className="pt-24 border-t border-border max-w-5xl mx-auto space-y-20">
          
          <div className="space-y-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground flex items-center justify-center md:justify-start gap-3">
              <Target className="w-8 h-8 text-primary" />
              Why Character Count Matters for SEO & Branding
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              In the fast-paced modern creator economy, your social media bio is your digital elevator pitch. You have exactly 0.05 seconds to convince a profile visitor to hit the "Follow" button. Because every platform (from Instagram to X) imposes strict character limitations, exceeding them leads to cut-off text, hidden keywords, and broken call-to-actions (CTAs). 
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Using a dedicated <strong>social media character counter</strong> allows you to draft, edit, and perfect your pitch in a safe workspace before you hit publish. It ensures your message remains professional, punchy, and fully optimized for platform-specific search engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Real-time Analysis Workspace</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Our tool automatically saves your progress locally in your browser. As you type, you get instant mathematical feedback on your total character usage, word density, and sentence structure. No more guessing if your bio will fit!
              </p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <Globe className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Cross-Platform Synchronization</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Writing a bio for multiple platforms? Our intelligent progress bars simultaneously track your text against the strict 150-character limit of Instagram, the 80-character limit of TikTok, and the generous 5,000-character allowance of YouTube.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 p-8 md:p-12 rounded-3xl border border-border space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
              <BarChart3 className="w-7 h-7 text-primary" />
              Platform-by-Platform Bio Limits (2026 Guide)
            </h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-foreground text-lg mb-2">1. Instagram Bio Limit: 150 Characters</h4>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Instagram forces extreme brevity. You only have 150 characters to explain who you are, what you do, and why someone should follow you. <strong>Best Practice:</strong> Use vertical formatting (line breaks) and emojis to save space. Always leave room for a strong CTA pointing to your profile link.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-foreground text-lg mb-2">2. X (Twitter) Bio Limit: 280 Characters</h4>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Twitter gives you slightly more breathing room. More importantly, X bios are highly searchable. <strong>Best Practice:</strong> Treat your Twitter bio like an SEO playground. Include relevant industry keywords (e.g., "SaaS Founder", "Web3 Developer") to ensure you appear in user searches.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground text-lg mb-2">3. TikTok Bio Limit: 80 Characters</h4>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  TikTok has the strictest limitations of all major platforms. With only 80 characters, there is zero room for fluff. <strong>Best Practice:</strong> State your niche immediately (e.g., "Daily Fitness Tips") and use a pointing emoji (⬇️) directing users to your link-in-bio.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground text-lg mb-2">4. YouTube Description Limit: 5,000 Characters</h4>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  YouTube is a massive search engine. The 5,000 character limit is a canvas for SEO optimization. <strong>Best Practice:</strong> Use the first 200 characters for your primary video summary (this appears in search results). Use the rest of the space for video chapters, affiliate links, and long-tail keyword paragraphs.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="space-y-8 pt-10 border-t border-border">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-primary" />
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-3 hover:border-primary/30 transition-colors">
                  <p className="font-bold text-foreground text-lg">{faq.q}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>
      </Container>
    </>
  );
};

const StatCard = ({ label, value, highlight = false }: { label: string; value: number; highlight?: boolean; }) => (
  <div className="bg-muted/30 p-5 rounded-2xl border border-border hover:border-primary/20 transition-colors">
    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">{label}</p>
    <p className={`text-4xl font-black ${highlight ? 'text-primary' : 'text-foreground'}`}>{value}</p>
  </div>
);

export default BioCounter;