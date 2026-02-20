"use client";

import React, { useState } from "react";
import { Smile, Sparkles, Copy, Check, Loader2, BookOpen, Zap, ShieldCheck } from "lucide-react";
import { generateAnimeNames } from "@/services/gemini";
import { Container } from "@/components/Layout/Container";

const AnimeNames: React.FC = () => {
  const [theme, setTheme] = useState("Cyberpunk / Futuristic");
  const [type, setType] = useState("Protagonist");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (loading) return;
    setLoading(true);
    setError("");
    try {
      const names = await generateAnimeNames(theme, type);
      setResults(names);
    } catch (err: any) {
      if (err.message.includes("quota")) {
        setError("Rate limit reached. Please wait 1 minute.");
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Container className="py-16 md:py-24 lg:py-32 space-y-24">
      <header className="text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
          AI-Powered <span className="text-orange-500">Anime Name</span> Generator
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
          Unlock your next character's identity with our advanced neural naming engine.
          Perfect for mangakas, roleplayers, and gamers seeking authentic Japanese-inspired aesthetics.
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-12">
        <section className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-muted-foreground">
              Select Narrative Universe (Theme)
            </label>
            <select
              className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option>Cyberpunk / Futuristic</option>
              <option>Traditional / Feudal Japan</option>
              <option>Fantasy / Isekai</option>
              <option>School Life / Modern</option>
              <option>Dark / Edgy</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-muted-foreground">
              Character Archetype (Role)
            </label>
            <select
              className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Protagonist</option>
              <option>Villain / Antagonist</option>
              <option>Sidekick / Support</option>
              <option>Group / Clan Name</option>
              <option>Signature Move / Skill</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-4 bg-orange-500 hover:bg-orange-600 transition-colors text-white rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Sparkles className="w-5 h-5" />
            )}
            {loading ? "Analyzing Linguistics..." : "Generate Unique Names"}
          </button>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold text-foreground px-1 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-500" />
            Curated Recommendations
          </h2>

          {results.length > 0 ? (
            results.map((name, idx) => (
              <div
                key={idx}
                className="bg-card p-4 rounded-xl border border-border flex items-center justify-between hover:border-orange-500/50 transition-all group"
              >
                <div className="font-bold text-foreground text-lg">
                  {name}
                </div>
                <button
                  onClick={() => copyToClipboard(name, idx)}
                  className="p-2 rounded-lg hover:bg-muted transition text-muted-foreground hover:text-foreground"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            ))
          ) : (
            <div className="h-48 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-muted-foreground p-8 text-center bg-card/30">
              <BookOpen className="w-10 h-10 mb-4 opacity-20" />
              <p>Configure your preferences and hit generate to reveal results.</p>
            </div>
          )}
        </section>
      </div>

      <Container className="mt-24">
        <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Mastering the Art of Anime Naming
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Naming a character is more than just picking a label; it's about defining their soul,
              destiny, and heritage within the anime multiverse.
            </p>
          </div>

          <div className="grid gap-12 lg:gap-20 md:grid-cols-2">
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-orange-500 shrink-0" />
                  Linguistic Authenticity
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Unlike generic generators, our AI considers Kanji phonetics and cultural symbolism.
                  Whether you need a name reflecting "Eternal Shadow" for a dark fantasy or
                  "Quantum Spark" for a Cyberpunk setting, the generator balances Japanese
                  roots with genre-specific flair.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  Genre-Specific Logic
                </h3>
                <ul className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li>
                    <span className="font-semibold text-foreground">
                      Isekai & Fantasy:
                    </span>{" "}
                    Focuses on majestic, heroic-sounding titles suggesting otherworldly origins.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">
                      Shonen & Seinen:
                    </span>{" "}
                    Prioritizes impactful, punchy names that are memorable and emotionally strong.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      Can I use these names for commercial projects?
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Yes, the generated names are unique combinations intended for
                      creative use in novels, games, and streaming profiles.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      How are the names generated?
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      We utilize advanced AI models to analyze Japanese naming patterns
                      across various anime eras, blending tradition with modern creativity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/5 border border-orange-500/20 p-6 sm:p-8 rounded-2xl space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  Pro Tip for Creators
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  When choosing a name for a Villain, sharper consonant sounds
                  (K, Z, G) feel intense and aggressive. Protagonists often use
                  softer vowel endings (O, A, U) for a heroic and relatable resonance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default AnimeNames;
