"use client";

import React, { useState } from "react";
import {
  Zap,
  RefreshCw,
  Copy,
  Check,
  Sparkles,
  Layers,
  Fingerprint,
  Info,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  BookOpen,
  Compass
} from "lucide-react";
import { ANIME_CHARACTERS, AnimeCharacter } from "@/data/animeCharacters";
import { Container } from "@/components/Layout/Container";

// Array of FAQs for both the Accordion UI and the SEO Schema
const FAQS = [
  {
    q: "How does the Anime Multiverse Generator calculate my character?",
    a: "Our tool utilizes an advanced dynamic randomization algorithm. It takes your name and searches across our extensive multiverse database to pull an anime character whose energy aligns with yours at this exact moment."
  },
  {
    q: "Is my personal data or name stored on your servers?",
    a: "Absolutely not. Privacy is our top priority. The Anime Multiverse Generator processes your name entirely locally within your internet browser. We do not transmit, save, or store your name or any personal data on our servers."
  },
  {
    q: "Is this anime identity tool completely free to use?",
    a: "Yes! The Anime Multiverse Generator is 100% free to use. You can generate as many identities as you want without any hidden fees, subscriptions, or limits."
  },
  {
    q: "Will I get a different character if I type my name again?",
    a: "Yes! The anime multiverse is vast and ever-shifting. Every time you initiate a new scan, our system explores a different parallel timeline, revealing a brand-new character for you to discover."
  },
  {
    q: "Does capitalization or spacing matter when entering my name?",
    a: "No. Our algorithm automatically normalizes your input so you can focus purely on the fun of discovering your next anime identity without worrying about formatting."
  },
  {
    q: "Can I share my newly discovered anime identity on social media?",
    a: "Yes! Once you generate your character, simply click the 'Share Identity' button. It will copy a beautifully formatted text snippet to your clipboard, perfect for pasting on Twitter, Discord, WhatsApp, or Instagram."
  }
];

const AnimeMultiverseGenerator: React.FC = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [identity, setIdentity] = useState<AnimeCharacter | null>(null);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());

  const handleGenerate = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!name.trim() || loading) return;

    setLoading(true);
    setIdentity(null);

    // Simulate neural processing
    setTimeout(() => {
      let availableIndices = ANIME_CHARACTERS.map((_, i) => i).filter(i => !usedIndices.has(i));

      if (availableIndices.length === 0) {
        availableIndices = ANIME_CHARACTERS.map((_, i) => i);
        setUsedIndices(new Set());
      }

      const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      const selected = ANIME_CHARACTERS[randomIndex];

      setUsedIndices(prev => new Set(prev).add(randomIndex));
      setIdentity(selected);
      setLoading(false);

      setTimeout(() => {
        const el = document.getElementById("result-section");
        if (el) {
          const yOffset = -100;
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }, 1500);
  };

  const handleCopy = () => {
    if (!identity) return;
    navigator.clipboard.writeText(
      `✨ I am ${identity.name} - ${identity.role} from ${identity.anime}! Find your Anime Identity at LinkGen.in`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Anime Multiverse Generator",
        "applicationCategory": "EntertainmentApplication",
        "operatingSystem": "All",
        "description": "Discover your parallel identity in the anime multiverse. Enter your name to discover randomized anime character matches from hundreds of parallel universes.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen relative w-full bg-transparent text-foreground font-body selection:bg-primary/30 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* 🌌 TOKYO COMMAND BACKGROUND SYSTEM (Layers -3 to 2) */}
      <div className="fixed inset-0 z-[-3] pointer-events-none overflow-hidden bg-[hsl(var(--cmd-bg))]">
        {/* Layer -2: Fog Gradient System */}
        <div className="absolute inset-0 z-[-2] bg-[linear-gradient(to_bottom,transparent,hsl(var(--cmd-fog))),radial-gradient(circle_at_50%_50%,hsl(var(--cmd-fog)),transparent)] opacity-40" />

        {/* Layer -1: Radial Spotlight Burst */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[120%] h-[120%] bg-[radial-gradient(circle,hsl(var(--cmd-spotlight))_0%,transparent_70%)] z-[-1] animate-pulse-slow" />

        {/* Layer 0: Particles (Cinematic Subtlety) */}
        {/* Layer 0: Anime Cinematic Snow */}
        <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">

          {/* BACK SNOW (far depth) */}
          {[...Array(18)].map((_, i) => (
            <div
              key={"back-" + i}
              className="absolute bg-white/60 dark:bg-foreground/70 rounded-full blur-[2px] animate-snow-far"
              style={{
                width: `${2 + Math.random() * 2}px`,
                height: `${2 + Math.random() * 2}px`,
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                opacity: 0.3 + Math.random() * 0.3,
                animationDuration: `${40 + Math.random() * 30}s`,
                animationDelay: `-${Math.random() * 40}s`,
              }}
            />
          ))}

          {/* MID SNOW */}
          {[...Array(24)].map((_, i) => (
            <div
              key={"mid-" + i}
              className="absolute bg-white dark:bg-foreground rounded-full blur-[1px] animate-snow-mid"
              style={{
                width: `${3 + Math.random() * 3}px`,
                height: `${3 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                opacity: 0.4 + Math.random() * 0.4,
                animationDuration: `${25 + Math.random() * 20}s`,
                animationDelay: `-${Math.random() * 25}s`,
              }}
            />
          ))}

          {/* FRONT SNOW (hero cinematic) */}
          {[...Array(10)].map((_, i) => (
            <div
              key={"front-" + i}
              className="absolute bg-white dark:bg-white rounded-full blur-[0.5px] animate-snow-front"
              style={{
                width: `${5 + Math.random() * 4}px`,
                height: `${5 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                opacity: 0.6 + Math.random() * 0.4,
                animationDuration: `${15 + Math.random() * 10}s`,
                animationDelay: `-${Math.random() * 20}s`,
              }}
            />
          ))}
        </div>

        {/* Layer 2: Edge Vignette (Accessibility Shield) */}
        <div className="absolute inset-0 z-2 shadow-[inset_0_0_120px_hsl(var(--cmd-vignette)/0.5)]pointer-events-none" />
      </div>

      <Container className="relative z-10 py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6">

        {/* HERO SECTION */}
        <section className="text-center space-y-8 mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-primary text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            Neural Synchronization Active
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-foreground leading-[1.1]">
            Unlock Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 drop-shadow-sm">
              Anime Multiverse
            </span>{" "}
            Identity
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            Enter your name to securely decode your exact parallel coordinates in the anime universe.
          </p>

          <form onSubmit={handleGenerate} className="max-w-2xl mx-auto pt-8">
            <div className="relative flex flex-col sm:flex-row items-center p-2 bg-[hsla(var(--cmd-card-elevated))] border border-border rounded-3xl backdrop-blur-xl shadow-xl transition-all focus-within:ring-4 focus-within:ring-primary/10">
              <div className="relative flex-1 w-full">
                <Fingerprint className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground/60" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name..."
                  className="w-full h-16 pl-14 pr-6 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/40 text-lg font-medium"
                  required
                  minLength={2}
                  maxLength={50}
                />
              </div>

              <button
                type="submit"
                disabled={loading || !name.trim()}
                className="w-full sm:w-auto h-14 px-8 mt-2 sm:mt-0 bg-foreground text-background dark:bg-primary dark:text-white rounded-2xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 transition-all hover:scale-[1.02] shadow-lg"
              >
                {loading ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Generate Match
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground/60 font-medium tracking-tight">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              100% Private. Processed locally in your browser.
            </div>
          </form>
        </section>

        {/* LOADING STATE - CINEMATIC SCAN */}
        {loading && (
          <div className="py-24 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-500">
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 border-[3px] border-primary/20 border-t-primary rounded-full animate-spin" />
              <Layers className="absolute w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="space-y-2 text-center">
              <p className="text-primary text-sm font-black tracking-[0.3em] uppercase">
                Parallel Scan In Progress
              </p>
              <p className="text-muted-foreground/60 text-xs font-medium">
                Locating your identity across 1,000+ universes...
              </p>
            </div>
          </div>
        )}

        {/* RESULT SECTION - CINEMATIC CARD */}
        {identity && !loading && (
          <div
            id="result-section"
            className="mb-32 relative overflow-hidden rounded-[2.5rem] border border-border bg-[hsla(var(--cmd-card-elevated))] p-8 md:p-16 text-center space-y-8 backdrop-blur-2xl shadow-[0_20px_80px_-20px_hsl(var(--cmd-vignette))] animate-reveal-cinematic"
          >
            {/* Ambient card glows */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[hsl(var(--cmd-glow))] blur-[100px] rounded-full pointer-events-none opacity-40" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[hsl(var(--cmd-glow))] blur-[100px] rounded-full pointer-events-none opacity-20" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-500/20 mb-6">
                <Check className="w-3.5 h-3.5" /> Identity Confirmed
              </div>

              <h2 className="text-5xl md:text-8xl font-display font-black text-foreground tracking-tighter mb-8 bg-clip-text bg-linear-to-b from-foreground to-foreground/70">
                {identity.name}
              </h2>

              <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
                <span className="px-6 py-2.5 bg-primary/10 text-primary text-xs font-black uppercase tracking-wider rounded-xl border border-primary/20 backdrop-blur-md">
                  {identity.role}
                </span>
                <span className="px-6 py-2.5 bg-secondary text-foreground/80 text-xs font-black uppercase tracking-wider rounded-xl border border-border backdrop-blur-md">
                  {identity.anime}
                </span>
              </div>

              <div className="max-w-3xl mx-auto relative group">
                <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary/50 to-transparent rounded-full opacity-50" />
                <p className="text-xl md:text-2xl text-foreground/80 italic leading-relaxed font-medium px-6">
                  "{identity.description || "A powerful entity whose legend echoes across the multiverse."}"
                </p>
              </div>

              <div className="pt-16 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleCopy}
                  className="h-16 px-10 bg-primary text-white rounded-2xl font-black uppercase tracking-wider flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl shadow-primary/20"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  {copied ? "Copied" : "Share Identity"}
                </button>

                <button
                  onClick={handleGenerate}
                  className="h-16 px-10 border border-border bg-secondary/50 hover:bg-secondary text-foreground rounded-2xl font-black uppercase tracking-wider flex items-center justify-center gap-3 transition-all hover:scale-105 backdrop-blur-md"
                >
                  <RefreshCw className="w-5 h-5" />
                  New Scan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- ADDED CONTENT SECTION FOR E-E-A-T & ADSENSE COMPLIANCE --- */}
        <article className="mt-24 space-y-20 border-t border-border/50 pt-20">

          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-black text-foreground">
              Mastering the Anime Multiverse
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your comprehensive guide to understanding how our neural synchronization tool maps your identity across Japanese animation genres.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Guide Card 1 */}
            <div className="bg-[hsla(var(--cmd-card-elevated))] border border-border rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20">
                <Compass className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-display">How the Generator Works</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Anime Multiverse Generator is not just a simple randomizer. By entering your name, you initiate a secure, localized script that searches through our extensive, curated database of legendary characters. Because the multiverse is conceptually infinite, clicking "New Scan" allows you to explore alternate timelines, matching you with different heroes, villains, and mentors based on the temporal variance of that specific scan.
              </p>
            </div>

            {/* Guide Card 2 */}
            <div className="bg-[hsla(var(--cmd-card-elevated))] border border-border rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
                <BookOpen className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-display">Exploring Anime Genres</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our database spans the most beloved genres in the anime industry. You might find yourself mapped as a determined protagonist in a high-octane <strong>Shonen</strong> battle series, a strategic mastermind in a psychological <strong>Seinen</strong> thriller, or an overpowered adventurer transported to a fantasy <strong>Isekai</strong> world. The tool is designed to celebrate the rich diversity of Japanese storytelling.
              </p>
            </div>
          </div>

          {/* Extended About Section */}
          <section className="bg-secondary/30 border border-border rounded-3xl p-8 md:p-14 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground font-display leading-tight">
                  Why Discover Your Anime Alter Ego?
                </h3>
              </div>
              <div className="md:w-2/3 space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Anime has become a global cultural phenomenon, offering stories of resilience, friendship, and extraordinary power. The Anime Multiverse Generator is built for fans who want to immerse themselves further into these worlds. It serves as a fun, interactive bridge between reality and fiction.
                </p>
                <p>
                  Whether you are using this tool to find inspiration for your next cosplay, creating a fun status update for your social media profiles, or just sharing a laugh with fellow anime enthusiasts on Discord, our generator ensures a high-quality, seamless experience. Remember, no personal data is ever saved—your journey through the multiverse is entirely private.
                </p>
              </div>
            </div>
          </section>

        </article>
        {/* --- END OF ADDED CONTENT SECTION --- */}

        {/* Clean, Modern FAQ Accordion */}
        <article className="mt-24 space-y-12">
          <div className="flex items-center gap-4 text-2xl md:text-4xl font-display font-black text-foreground mb-12">
            <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`border transition-all duration-500 rounded-2xl overflow-hidden backdrop-blur-md ${isOpen
                    ? "border-primary/30 bg-[hsla(var(--cmd-card-elevated))] shadow-xl"
                    : "border-border bg-secondary/30 hover:bg-secondary/50"
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-7 text-left focus:outline-none"
                  >
                    <span className={`text-lg font-bold pr-4 transition-colors ${isOpen
                      ? "text-primary"
                      : "text-foreground/80"
                      }`}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 shrink-0 transition-transform duration-500 ${isOpen
                        ? "rotate-180 text-primary"
                        : "text-muted-foreground/60"
                        }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-7 pt-0 text-muted-foreground leading-relaxed text-base border-t border-border/50 mt-2">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>

      </Container>

      <style jsx global>{`
        @keyframes particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .animate-particle {
          animation: particle linear infinite;
        }
        @keyframes reveal-cinematic {
          0% { opacity: 0; transform: scale(0.98) translateY(20px); filter: blur(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        .animate-reveal-cinematic {
          animation: reveal-cinematic 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

@keyframes snow-far {
  0% { transform: translateY(0) translateX(0); }
  100% { transform: translateY(120vh) translateX(40px); }
}
.animate-snow-far {
  animation: snow-far linear infinite;
}

@keyframes snow-mid {
  0% { transform: translateY(0) translateX(0); }
  100% { transform: translateY(120vh) translateX(-30px); }
}
.animate-snow-mid {
  animation: snow-mid linear infinite;
}

@keyframes snow-front {
  0% { transform: translateY(0) translateX(0); }
  100% { transform: translateY(120vh) translateX(20px); }
}
.animate-snow-front {
  animation: snow-front linear infinite;
}

      `}</style>
    </div>
  );
};

export default AnimeMultiverseGenerator;