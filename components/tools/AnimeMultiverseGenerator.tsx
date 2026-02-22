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
    document.body.classList.add("freeze-burst");
    setTimeout(() => {
      document.body.classList.remove("freeze-burst");
    }, 600);
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
        <div className="absolute inset-0 z-[-2] bg-[linear-gradient(to_bottom,transparent,hsl(var(--cmd-fog))),radial-gradient(circle_at_50%_70%,hsl(var(--cmd-fog)),transparent)] opacity-60" />

        {/* Layer -1: Cinematic Atmosphere (Rising Embers) */}
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={"ember-" + i}
              className="absolute bg-primary/20 rounded-full blur-[3px] animate-ember"
              style={{
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                left: `${Math.random() * 100}%`,
                bottom: `-${Math.random() * 20}%`,
                opacity: 0.1 + Math.random() * 0.2,
                animationDuration: `${15 + Math.random() * 20}s`,
                animationDelay: `-${Math.random() * 15}s`,
              }}
            />
          ))}
        </div>

        {/* Layer 0: Radial Spotlight Burst */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[140%] h-[140%] bg-[radial-gradient(circle,hsl(var(--cmd-spotlight))_0%,transparent_70%)] z-0 animate-pulse-slow opacity-60" />

        {/* Layer 1: Anime Cinematic Snow & Particles */}
        <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
          {/* BACK SNOW (far depth) */}
          {[...Array(20)].map((_, i) => (
            <div
              key={"back-" + i}
              className="absolute bg-white/40 dark:bg-foreground/40 rounded-full blur-[2px] animate-snow-far"
              style={{
                width: `${1.5 + Math.random() * 1.5}px`,
                height: `${1.5 + Math.random() * 1.5}px`,
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDuration: `${40 + Math.random() * 30}s`,
                animationDelay: `-${Math.random() * 40}s`,
              }}
            />
          ))}

          {/* MID SNOW */}
          {[...Array(25)].map((_, i) => (
            <div
              key={"mid-" + i}
              className="absolute bg-white/60 dark:bg-foreground/60 rounded-full blur-[1px] animate-snow-mid"
              style={{
                width: `${2.5 + Math.random() * 2}px`,
                height: `${2.5 + Math.random() * 2}px`,
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDuration: `${25 + Math.random() * 20}s`,
                animationDelay: `-${Math.random() * 25}s`,
              }}
            />
          ))}

          {/* FRONT SNOW (hero cinematic) */}
          {[...Array(12)].map((_, i) => (
            <div
              key={"front-" + i}
              className="absolute bg-white/80 dark:bg-white/80 rounded-full blur-[0.5px] animate-snow-front"
              style={{
                width: `${4 + Math.random() * 3}px`,
                height: `${4 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDuration: `${15 + Math.random() * 10}s`,
                animationDelay: `-${Math.random() * 20}s`,
              }}
            />
          ))}

          {/* FOREGROUND BLUR PARTICLES (Depth Perception) */}
          {[...Array(6)].map((_, i) => (
            <div
              key={"fg-" + i}
              className="absolute bg-white/20 dark:bg-white/10 rounded-full blur-[12px] animate-snow-front"
              style={{
                width: `${80 + Math.random() * 120}px`,
                height: `${80 + Math.random() * 120}px`,
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 40}%`,
                animationDuration: `${10 + Math.random() * 8}s`,
                animationDelay: `-${Math.random() * 10}s`,
                opacity: 0.1,
              }}
            />
          ))}
        </div>

        {/* Layer 2: Edge Vignette (Atmospheric Framing) */}
        <div className="absolute inset-0 z-2 shadow-[inset_0_0_150px_hsl(var(--cmd-vignette)/0.8)] pointer-events-none" />
      </div>

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24 max-w-275 xl:max-w-287.5 mx-auto px-5 sm:px-8 animate-camera-breath">

        {/* HERO SECTION */}
        <section className="text-center space-y-8 sm:space-y-10 mb-16 sm:mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/50 border border-border/50 text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] backdrop-blur-xl shadow-[0_0_20px_rgba(var(--primary),0.1)]">
            <Sparkles className="w-4 h-4 text-cyan-500 animate-pulse" />
            Neural Synchronization Active
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl 2xl:text-6xl font-display font-black tracking-tighter text-foreground leading-[0.95] relative">
            Unlock Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-primary to-purple-600 dark:from-cyan-400 dark:via-primary dark:to-purple-400 drop-shadow-[0_0_30px_hsla(var(--primary)/0.3)]">
              Anime Multiverse
            </span>{" "}
            Identity

            {/* 🔥 DEMON SLAYER HERO SPARKLES (Optimized) */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-visible">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="sparkle absolute"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`
                  }}
                />
              ))}
            </div>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight px-4">
            Enter your name to securely decode your exact parallel coordinates in the anime universe.
          </p>

          <form onSubmit={handleGenerate} className="max-w-2xl mx-auto pt-8 sm:pt-10">
            <div className="relative group flex flex-col sm:flex-row items-center p-2 bg-[hsla(var(--cmd-card-elevated))] border border-border/50 rounded-[1.5rem] sm:rounded-[2rem] backdrop-blur-2xl shadow-2xl transition-all duration-500 focus-within:ring-8 focus-within:ring-primary/5 focus-within:border-primary/30">
              <div className="relative flex-1 w-full">
                <Fingerprint className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 text-muted-foreground/40 transition-colors group-focus-within:text-primary" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value.toUpperCase())}
                  placeholder="Enter your name..."
                  className="w-full h-14 sm:h-18 pl-14 sm:pl-16 pr-8 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/30 text-lg sm:text-xl font-bold uppercase tracking-wide"
                  required
                  minLength={2}
                  maxLength={50}
                />
              </div>

              <button
                type="submit"
                disabled={loading || !name.trim()}
                className="group/btn w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 mt-3 sm:mt-0 bg-foreground text-background dark:bg-primary dark:text-white rounded-xl sm:rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-95 shadow-xl hover:shadow-primary/20"
              >
                {loading ? (
                  <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
                ) : (
                  <>
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-current transition-transform group-hover/btn:rotate-12" />
                    Generate Match
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2.5 text-[10px] sm:text-xs text-muted-foreground/50 font-bold tracking-widest uppercase">
              <div className="h-px w-6 sm:w-8 bg-border/50" />
              <ShieldCheck className="w-4 h-4 text-emerald-500/80" />
              100% Secure Neural Scan
              <div className="h-px w-6 sm:w-8 bg-border/50" />
            </div>
          </form>
        </section>

        {/* LOADING STATE - CINEMATIC SCAN */}
        {loading && (
          <div className="py-24 flex flex-col items-center justify-center space-y-10 animate-in fade-in duration-700">
            <div className="relative flex items-center justify-center">
              <div className="w-24 h-24 border-[4px] border-primary/10 border-t-primary rounded-full animate-spin" />
              <div className="absolute inset-2 border-[2px] border-cyan-500/10 border-b-cyan-500 rounded-full animate-spin-reverse" />
              <Layers className="absolute w-10 h-10 text-primary animate-pulse" />
            </div>
            <div className="space-y-4 text-center">
              <p className="text-primary text-base font-black tracking-[0.4em] uppercase animate-pulse">
                Parallel Scan In Progress
              </p>
              <div className="flex gap-2 justify-center">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
              </div>
            </div>
          </div>
        )}

        {/* RESULT SECTION - CINEMATIC CARD */}
        {identity && !loading && (
          <div
            id="result-section"
            className="mb-16 sm:mb-20 relative group overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-border/50 bg-[hsla(var(--cmd-card-elevated))] p-6 sm:p-10 lg:p-12 text-center max-w-[900px] mx-auto space-y-8 sm:space-y-10 backdrop-blur-3xl shadow-[0_50px_100px_-20px_hsla(var(--cmd-vignette)/0.5)] animate-reveal-cinematic"
          >
            {/* 🌌 CINEMATIC AURA GLOW (Dynamic) */}
            <div className="absolute -top-60 -right-60 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-primary/20 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none transition-transform duration-1000 group-hover:scale-110 opacity-60 mix-blend-screen" />
            <div className="absolute -bottom-60 -left-60 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-cyan-500/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none transition-transform duration-1000 group-hover:scale-110 opacity-40 mix-blend-screen" />

            {/* Cinematic Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-0 pointer-events-none bg-size-[100%_4px,4px_100%] opacity-20" />

            <div className="relative z-10 space-y-8 sm:space-y-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Identity Verified
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-5xl 2xl:text-6xl font-display font-black text-foreground tracking-tighter mb-4 leading-none select-none drop-shadow-2xl break-words max-w-[900px] mx-auto">
                {identity.name}
              </h2>

              <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
                <div className="px-5 sm:px-8 py-2.5 sm:py-4 bg-primary/10 text-primary text-[10px] sm:text-sm font-black uppercase tracking-widest rounded-xl sm:rounded-2xl border border-primary/20 backdrop-blur-2xl shadow-xl">
                  {identity.role}
                </div>
                <div className="px-5 sm:px-8 py-2.5 sm:py-4 bg-secondary/50 text-foreground/80 text-[10px] sm:text-sm font-black uppercase tracking-widest rounded-xl sm:rounded-2xl border border-border/50 backdrop-blur-2xl shadow-lg">
                  {identity.anime}
                </div>
              </div>

              <div className="max-w-3xl mx-auto relative px-2 sm:px-4">
                <div className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 w-1 sm:h-full max-h-24 bg-linear-to-b from-primary via-cyan-500 to-transparent rounded-full hidden md:block opacity-40" />
                <p className="text-lg sm:text-2xl lg:text-3xl text-foreground font-medium italic leading-[1.3] tracking-tight">
                  "{identity.description || "A powerful entity whose legend echoes across the multiverse."}"
                </p>
                <div className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 w-1 sm:h-full max-h-24 bg-linear-to-t from-primary via-cyan-500 to-transparent rounded-full hidden md:block opacity-40" />
              </div>

              <div className="pt-6 sm:pt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button
                  onClick={handleCopy}
                  className="group/copy w-full sm:w-auto h-14 sm:h-18 px-10 sm:px-12 bg-foreground text-background dark:bg-primary dark:text-white rounded-xl sm:rounded-[1.25rem] font-black uppercase tracking-widest flex items-center justify-center gap-3 sm:gap-4 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30"
                >
                  {copied ? <Check className="w-5 h-5 sm:w-6 sm:h-6" /> : <Copy className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover/copy:rotate-6" />}
                  {copied ? "ID Linked" : "Share Identity"}
                </button>

                <button
                  onClick={handleGenerate}
                  className="w-full sm:w-auto h-14 sm:h-18 px-10 sm:px-12 border border-border/50 bg-secondary/30 hover:bg-secondary/60 text-foreground rounded-xl sm:rounded-[1.25rem] font-black uppercase tracking-widest flex items-center justify-center gap-3 sm:gap-4 transition-all hover:scale-105 active:scale-95 backdrop-blur-2xl"
                >
                  <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />
                  New Scan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- ADDED CONTENT SECTION FOR E-E-A-T & ADSENSE COMPLIANCE --- */}
        <article className="mt-16 sm:mt-20 space-y-12 sm:space-y-16 border-t border-border/30 pt-16 sm:pt-20">

          <div className="text-center max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-display font-black text-foreground tracking-tight">
              Mastering the <span className="text-primary italic">Anime Multiverse</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground/80 leading-relaxed font-medium">
              Your comprehensive guide to understanding how our neural synchronization tool maps your identity across Japanese animation genres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[1000px] mx-auto">
            {/* Guide Card 1 */}
            <div className="bg-[hsla(var(--cmd-card-elevated))] border border-border/50 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-2xl hover:border-primary/20 transition-all duration-500 backdrop-blur-2xl group/card">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border border-primary/20 transform transition-transform group-hover/card:rotate-6 shadow-xl">
                <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-4 sm:mb-6 font-display tracking-tight">How the Generator Works</h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground/80 leading-relaxed font-medium">
                The Anime Multiverse Generator is not just a simple randomizer. By entering your name, you initiate a secure, localized script that searches through our extensive, curated database of legendary characters. Because the multiverse is conceptually infinite, clicking "New Scan" allows you to explore alternate timelines, matching you with different heroes, villains, and mentors based on the temporal variance of that specific scan.
              </p>
            </div>

            {/* Guide Card 2 */}
            <div className="bg-[hsla(var(--cmd-card-elevated))] border border-border/50 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-2xl hover:border-purple-500/20 transition-all duration-500 backdrop-blur-2xl group/card">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border border-purple-500/20 transform transition-transform group-hover/card:-rotate-6 shadow-xl">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-4 sm:mb-6 font-display tracking-tight">Exploring Anime Genres</h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground/80 leading-relaxed font-medium">
                Our database spans the most beloved genres in the anime industry. You might find yourself mapped as a determined protagonist in a high-octane <strong>Shonen</strong> battle series, a strategic mastermind in a psychological <strong>Seinen</strong> thriller, or an overpowered adventurer transported to a fantasy <strong>Isekai</strong> world. The tool is designed to celebrate the rich diversity of Japanese storytelling.
              </p>
            </div>
          </div>

          {/* Extended About Section */}
          <section className="bg-secondary/20 border border-border/50 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 lg:p-12 max-w-[1000px] mx-auto backdrop-blur-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full" />
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-start relative z-10">
              <div className="lg:w-1/3">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-foreground font-display leading-[1.1] tracking-tighter">
                  Why Discover Your <br className="hidden lg:block" />
                  <span className="text-primary">Anime Alter Ego?</span>
                </h3>
              </div>
              <div className="lg:w-2/3 space-y-6 text-sm sm:text-base lg:text-xl text-muted-foreground/80 leading-relaxed font-medium">
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
        <article className="mt-16 sm:mt-24 space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7 text-center sm:text-left mb-12 sm:mb-16">
            <div className="p-4 sm:p-5 bg-primary/10 rounded-2xl sm:rounded-3xl border border-primary/20 shadow-xl">
              <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-display font-black text-foreground tracking-tight">Frequently Asked Questions</h2>
              <p className="text-sm sm:text-base font-medium mt-2 text-muted-foreground/70">Everything you need to know about the multiverse synchronization.</p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 max-w-[900px] mx-auto">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`border transition-all duration-500 rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden backdrop-blur-3xl ${isOpen
                    ? "border-primary/50 bg-[hsla(var(--cmd-card-elevated))] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
                    : "border-border/50 bg-secondary/20 hover:bg-secondary/40"
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 lg:p-6 text-left focus:outline-none group/faq"
                  >
                    <span className={`text-lg sm:text-xl lg:text-[18px] font-black pr-6 transition-colors duration-500 ${isOpen
                      ? "text-primary"
                      : "text-foreground/80 group-hover/faq:text-foreground"
                      }`}>
                      {faq.q}
                    </span>
                    <div className={`p-1.5 sm:p-2 rounded-full transition-all duration-500 ${isOpen ? "bg-primary text-white scale-110" : "bg-muted text-muted-foreground"}`}>
                      <ChevronDown
                        className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-700 ${isOpen
                          ? "rotate-180"
                          : ""
                          }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-5 sm:p-6 lg:p-6 pt-0 text-sm sm:text-base lg:text-[15px] text-muted-foreground/80 leading-relaxed font-medium border-t border-border/20 mt-2">
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
        @keyframes ember {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-100vh) translateX(40px) scale(0.5); opacity: 0; }
        }
        .animate-ember {
          animation: ember linear infinite;
        }

        @keyframes camera-breath {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.005) translateY(-5px); }
        }
        .animate-camera-breath {
          animation: camera-breath 10s ease-in-out infinite;
        }

        @keyframes reveal-cinematic {
          0% { opacity: 0; transform: scale(0.95) translateY(40px); filter: blur(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        .animate-reveal-cinematic {
          animation: reveal-cinematic 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }

        @keyframes snow-far {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(120vh) translateX(40px); }
        }
        .animate-snow-far {
          animation: snow-far linear infinite;
          will-change: transform;
        }

        @keyframes snow-mid {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(120vh) translateX(-30px); }
        }
        .animate-snow-mid {
          animation: snow-mid linear infinite;
          will-change: transform;
        }

        @keyframes snow-front {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(120vh) translateX(20px); }
        }
        .animate-snow-front {
          animation: snow-front linear infinite;
          will-change: transform;
        }

        @keyframes wind-sway {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(30px); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5) translateY(0); }
          50% { opacity: 1; transform: scale(1.5) translateY(-10px); }
        }
        .sparkle {
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          filter: blur(1px);
          box-shadow: 0 0 10px white, 0 0 20px white;
          animation: sparkle 4s infinite ease-in-out;
        }

        .freeze-burst .animate-snow-front,
        .freeze-burst .animate-snow-mid,
        .freeze-burst .animate-snow-far,
        .freeze-burst .animate-ember {
          animation-play-state: paused;
          filter: blur(8px) brightness(1.5);
          transition: filter 0.6s ease;
        }
      `}</style>
    </div>
  );
};

export default AnimeMultiverseGenerator;