"use client";

import React, { useState, useEffect } from "react";
import {
  Zap,
  RefreshCw,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Layers,
  Fingerprint
} from "lucide-react";
import { ANIME_CHARACTERS, AnimeCharacter } from "@/data/animeCharacters";
import { Container } from "@/components/Layout/Container";
import { CharacterCard } from "./CharacterCard";

const AnimeMultiverseGenerator: React.FC = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [identity, setIdentity] = useState<AnimeCharacter | null>(null);
  const [curated, setCurated] = useState<AnimeCharacter[]>([]);
  const [usedNames, setUsedNames] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const shuffled = [...ANIME_CHARACTERS].sort(() => 0.5 - Math.random());
    setCurated(shuffled.slice(0, 6));
  }, []);

  const handleGenerate = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!name.trim() || loading) return;

    setLoading(true);

    setTimeout(() => {
      let available = ANIME_CHARACTERS.filter(c => !usedNames.has(c.id));

      if (available.length === 0) {
        setUsedNames(new Set());
        available = ANIME_CHARACTERS;
      }

      const selected =
        available[Math.floor(Math.random() * available.length)];

      setUsedNames(prev => new Set(prev).add(selected.id));
      setIdentity(selected);
      setLoading(false);

      setTimeout(() => {
        const el = document.getElementById("result-section");
        if (el) {
          const yOffset = -100;
          const y =
            el.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }, 1200);
  };

  const handleCopy = () => {
    if (!identity) return;

    navigator.clipboard.writeText(
      `${identity.name} - ${identity.role} from ${identity.anime}`
    );

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-transparent text-foreground">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <Container className="relative z-10 py-12 md:py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <section className="text-center space-y-8 mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            Multiverse Synchronization Active
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500">
              Anime Multiverse
            </span>
            <br />
            Generator
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your parallel identity in the anime multiverse.
          </p>

          <form onSubmit={handleGenerate} className="max-w-2xl mx-auto pt-10">
            <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl border border-border glass-card">
              <div className="relative flex-1">
                <Fingerprint className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name..."
                  className="w-full h-14 pl-12 pr-6 rounded-xl bg-background/50 outline-none text-lg"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading || !name.trim()}
                className="h-14 px-10 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Zap className="w-5 h-5 fill-current" />
                    Initialize Scan
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* LOADING */}
        {loading && (
          <div className="py-32 flex flex-col items-center space-y-6">
            <Layers className="w-10 h-10 text-primary animate-spin" />
            <p className="text-muted-foreground uppercase tracking-widest text-sm">
              Synchronizing Neural Core...
            </p>
          </div>
        )}

        {/* RESULT */}
        {identity && !loading && (
          <div
            id="result-section"
            className="mb-32 rounded-[2rem] border border-border p-12 glass-card text-center space-y-6"
          >
            <p className="text-xs font-bold text-primary uppercase tracking-[0.4em]">
              Neural Match Found
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              {identity.name}
            </h2>

            <div className="flex items-center justify-center gap-4 flex-wrap text-center">
              <span className="inline-flex items-center h-8 px-4 bg-primary/10 text-primary text-xs font-black rounded-full uppercase tracking-widest border border-primary/20 whitespace-nowrap">
                {identity.role}
              </span>

              <span className="inline-flex items-center h-8 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] whitespace-nowrap">
                {identity.anime}
              </span>
            </div>

            <p className="text-lg text-muted-foreground italic max-w-xl mx-auto">
              "{identity.description ||
                "A fragment of the multiverse defined by unyielding spirit."}"
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCopy}
                className="h-14 px-8 bg-foreground text-background rounded-2xl font-black flex items-center justify-center gap-3"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copied ? "ID Synced" : "Share Identity"}
              </button>

              <button
                onClick={() => {
                  setIdentity(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="h-14 px-8 border border-border rounded-2xl font-black flex items-center justify-center gap-3"
              >
                <RefreshCw className="w-5 h-5" />
                Reset Algorithm
              </button>
            </div>
          </div>
        )}

        {/* MULTIVERSE LOG */}
        <section className="pt-24 border-t border-border/50">
          <div className="mb-14 flex justify-between items-end flex-wrap gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                Multiverse Log
              </h3>
              <p className="text-muted-foreground font-medium max-w-md">
                Recently synchronized entities.
              </p>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Back to Core
              </span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {curated.map((char) => (
              <CharacterCard
                key={char.id}
                character={char}
                onClick={() => {
                  setIdentity(char);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AnimeMultiverseGenerator;