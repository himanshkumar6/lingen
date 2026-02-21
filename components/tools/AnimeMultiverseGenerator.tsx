"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Zap,
  RefreshCw,
  Copy,
  Check,
  Search,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Fingerprint
} from "lucide-react";
import { ANIME_CHARACTERS, AnimeCharacter } from "@/data/animeCharacters";
import { Container } from "@/components/Layout/Container";
import { CharacterCard } from "./CharacterCard";

// Helper to generate visual prompts without using copyrighted names
const POSES = [
  "standing heroically",
  "mid-air combat stance",
  "calm composed pose",
  "power charging stance",
  "walking forward confidently",
  "dramatic side profile",
  "arms crossed dominant pose",
  "weapon ready stance",
  "looking over shoulder",
  "cinematic close-up portrait"
];

const BACKGROUNDS = [
  "epic battlefield background",
  "dark fantasy ruined city",
  "mystical glowing forest",
  "burning cityscape",
  "ancient stone castle ruins",
  "stormy battlefield sky",
  "dramatic sunset skyline",
  "anime city night",
  "snow covered battlefield",
  "shadow dungeon environment",
  "mystical energy aura background"
];

const generateVisualPrompt = (character: AnimeCharacter): string => {
  const role = character.role?.toLowerCase() || "";
  const desc = (character.description || "").toLowerCase();

  const traits: string[] = [];

  if (role.includes("protagonist")) traits.push("young shonen hero energy");
  if (role.includes("villain")) traits.push("dark intimidating antagonist aura");
  if (role.includes("support")) traits.push("tactical support fighter");
  if (role.includes("mage")) traits.push("mystic shadow mage");
  if (role.includes("ninja")) traits.push("stealth ninja aesthetic");
  if (role.includes("pirate")) traits.push("anime pirate captain vibe");
  if (role.includes("knight")) traits.push("armored fantasy knight");

  if (desc.includes("black hair")) traits.push("black hair");
  if (desc.includes("blond")) traits.push("spiky blond hair");
  if (desc.includes("red hair")) traits.push("red hair");
  if (desc.includes("cloak")) traits.push("flowing dark cloak");
  if (desc.includes("armor")) traits.push("detailed battle armor");
  if (desc.includes("sword")) traits.push("holding powerful sword");
  if (desc.includes("blue eyes")) traits.push("bright blue eyes");
  if (desc.includes("red eyes")) traits.push("glowing red eyes");

  const randomPose =
    POSES[Math.floor(Math.random() * POSES.length)];

  const randomBackground =
    BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];

  return [
    `${character.name} from ${character.anime}`,
    "faithful to original anime design",
    "accurate costume and hairstyle",
    "true to manga appearance",
    "character reference accurate",
    "anime key visual style",
    ...traits,
    randomPose,
    randomBackground,
    "detailed environment background",
    "not plain background",
    "not white background",
    "clean cel shading",
    "sharp anime lineart",
    "high detail illustration",
    "dramatic cinematic lighting",
    "professional anime artwork"
  ].join(", ");
};
const AnimeMultiverseGenerator: React.FC = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatingImage, setGeneratingImage] = useState(false);
  const [identity, setIdentity] = useState<AnimeCharacter | null>(null);
  const [curated, setCurated] = useState<AnimeCharacter[]>([]);
  const [usedNames, setUsedNames] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});
  const [aiImages, setAiImages] = useState<Record<string, string>>({}); // id -> objectURL


  useEffect(() => {
    const shuffled = [...ANIME_CHARACTERS].sort(() => 0.5 - Math.random());
    setCurated(shuffled.slice(0, 6));
  }, []);

  /* ---------------- AUTO FETCH FOR CURATED ---------------- */
  useEffect(() => {
    curated.forEach((char) => {
      if (!aiImages[char.id]) {
        fetchAiImage(char);
      }
    });
  }, [curated]);

  /* ---------------- CLEANUP ---------------- */
  useEffect(() => {
    return () => {
      Object.values(aiImages).forEach(url => {
        try {
          URL.revokeObjectURL(url);
        } catch { }
      });
    };
  }, [aiImages]);


  const fetchAiImage = async (character: AnimeCharacter) => {
    if (aiImages[character.id]) return;

    try {
      const prompt = generateVisualPrompt(character);

      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error("Image generation failed");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      setAiImages(prev => ({
        ...prev,
        [character.id]: url,
      }));

    } catch (error) {
      console.error("AI Image error:", error);
      setImgError(prev => ({
        ...prev,
        [character.id]: true,
      }));
    }
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!name.trim() || loading || generatingImage) return;

    setLoading(true);
    setImgError({});

    // Deterministic selection based on name (optional improvement)
    setTimeout(async () => {
      let available = ANIME_CHARACTERS.filter(c => !usedNames.has(c.id));
      if (available.length === 0) {
        setUsedNames(new Set());
        available = ANIME_CHARACTERS;
      }

      const selected = available[Math.floor(Math.random() * available.length)];
      setUsedNames(prev => new Set(prev).add(selected.id));
      setIdentity(selected);
      setLoading(false);

      // Trigger AI generation only if needed
      if (!aiImages[selected.id]) {
        setGeneratingImage(true);
        await fetchAiImage(selected);
        setGeneratingImage(false);
      }

      // Scroll to result section
      setTimeout(() => {
        const el = document.getElementById("result-section");
        if (el) {
          const yOffset = -100;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }, 1200);
  };

  const handleCopy = () => {
    if (!identity) return;
    navigator.clipboard.writeText(`${identity.name} - ${identity.role} from ${identity.anime}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-transparent text-foreground">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow delay-700" />
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <Container className="relative z-10 py-12 md:py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section className="text-center space-y-8 mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4 animate-in fade-in slide-in-from-top-4 duration-1000">
            <Sparkles className="w-3 h-3" />
            Multiverse Synchronization Active
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground balance max-w-4xl mx-auto leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500">
              Anime Multiverse
            </span>
            <br /> Generator
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover your parallel identity in the anime multiverse. Enter your name and let our algorithm map your neural signature across infinite timelines.
          </p>

          <form onSubmit={handleGenerate} className="max-w-2xl mx-auto pt-10">
            <div className="group relative glass-card p-2 rounded-2xl border border-border flex flex-col sm:flex-row gap-3 shadow-2xl transition-premium hover:neon-border">
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary">
                  <Fingerprint className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name to scan..."
                  className="w-full h-14 pl-12 pr-6 rounded-xl bg-background/50 outline-none focus:ring-0 transition-all text-lg placeholder:text-muted-foreground/60"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading || !name.trim()}
                className="h-14 px-10 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-3 transition-premium active:scale-[0.98] disabled:opacity-50 shadow-lg shadow-primary/20 hover:shadow-primary/40 relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                {loading ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Zap className="w-5 h-5 fill-current" />
                    <span>Initialize Scan</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* LOADING STATE - Cinematic */}
        {loading && (
          <div className="py-32 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-500">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
              <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin" />
              <div className="absolute inset-4 border-4 border-b-blue-500 rounded-full animate-spin-slow" />
              <Layers className="absolute inset-0 m-auto w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-xl font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 animate-pulse">
                Synchronizing Neural Core
              </p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-[0.3em]">
                Accessing Multiverse Metadata...
              </p>
            </div>
          </div>
        )}

        {/* RESULT SECTION */}
        {identity && !loading && (
          <div id="result-section" className="mb-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="glass-card rounded-[2rem] border border-border shadow-2xl overflow-hidden neon-border">
              <div className="flex flex-col lg:flex-row">
                {/* Image Container - Enhanced */}
                <div className="w-full lg:w-[450px] shrink-0 relative bg-muted/30">
                  <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] relative overflow-hidden">
                    {generatingImage && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-background/80 backdrop-blur-md">
                        <div className="relative w-16 h-16 mb-6">
                          <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-ping" />
                          <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin" />
                        </div>
                        <p className="text-sm font-bold text-foreground uppercase tracking-widest animate-pulse">
                          Materializing Identity...
                        </p>
                      </div>
                    )}

                    {aiImages[identity.id] ? (
                      <Image
                        src={aiImages[identity.id]}
                        alt={identity.name}
                        fill
                        className="object-cover transition-all duration-700"
                        unoptimized
                      />
                    ) : generatingImage ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-md">
                        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
                        <p className="text-sm font-bold uppercase tracking-widest text-foreground">
                          Materializing...
                        </p>
                      </div>
                    ) : imgError[identity.id] ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-muted/20">
                        <AlertCircle className="w-8 h-8 text-red-500 mb-4" />
                        <p className="font-bold text-foreground mb-2">
                          Visualization Interrupted
                        </p>
                        <button
                          onClick={() => fetchAiImage(identity)}
                          className="px-6 py-3 bg-secondary text-secondary-foreground rounded-xl text-sm font-bold border border-border"
                        >
                          Retry
                        </button>
                      </div>
                    ) : null}
                  </div>

                  {/* Energy Aura Overlay */}
                  {!generatingImage && aiImages[identity.id] && (
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/40 to-transparent" />
                  )}
                </div>

                {/* Content - Cinematic Typography */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center flex-1 relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -z-10 rounded-full" />

                  <div className="space-y-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-black rounded-full uppercase tracking-widest border border-primary/20">
                        {identity.role}
                      </span>
                      <span className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                        <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                        {identity.anime}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <p className="text-xs font-bold text-primary uppercase tracking-[0.4em]">Neural Match Found</p>
                      <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tight leading-none balance">
                        {identity.name}
                      </h2>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl italic">
                      &quot;{identity.description || "A fragment of the multiverse defined by unyielding spirit and mysterious high-energy resonance."}&quot;
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={handleCopy}
                        className="h-14 px-8 bg-foreground text-background rounded-2xl font-black flex items-center justify-center gap-3 transition-premium hover:opacity-90 active:scale-[0.98] shadow-xl"
                      >
                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        {copied ? "ID Synced" : "Share Identity"}
                      </button>
                      <button
                        onClick={() => {
                          setIdentity(null);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="h-14 px-8 glass-card border-border rounded-2xl font-black flex items-center justify-center gap-3 transition-premium hover:bg-muted active:scale-[0.98]"
                      >
                        <RefreshCw className="w-5 h-5" />
                        Reset Algorithm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RECENTLY GENERATED - Premium Grid */}
        <section className="pt-24 border-t border-border/50 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
                Multiverse Log
              </h3>
              <p className="text-muted-foreground font-medium max-w-md">
                Entities successfully synchronized across recent temporal fluctuations within the LinkGen network.
              </p>
            </div>
            <a
              href="#generate"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 group px-6 py-3 rounded-xl glass-card border-border hover:neon-border transition-premium"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Back to Core</span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {curated.map((char, index) => (
              <div
                key={char.id}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CharacterCard
                  character={char}
                  image={aiImages[char.id]}
                  onClick={async () => {
                    setIdentity(char);
                    window.scrollTo({ top: 0, behavior: 'smooth' });

                    if (!aiImages[char.id]) {
                      await fetchAiImage(char);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AnimeMultiverseGenerator;
