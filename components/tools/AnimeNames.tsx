"use client";

import React, { useState } from "react";
import { Smile, Sparkles, Copy, Check, Loader2, BookOpen, Zap, ShieldCheck, PenTool, LayoutTemplate } from "lucide-react";
import { generateAnimeNames } from "@/services/gemini";
import { Container } from "@/components/Layout/Container";
import { JsonLd } from "@/lib/seo";

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

  const faqs = [
    {
      q: "Can I legally use these generated names for my commercial manga or novel?",
      a: "Yes! The AI-generated names are unique linguistic combinations created purely for your creative use. You hold full rights to use them in your commercial novels, manga, video games, or streaming profiles without any copyright concerns."
    },
    {
      q: "How exactly are these Japanese names generated?",
      a: "We utilize advanced AI models trained heavily on Japanese naming patterns across various historical eras and anime tropes. It blends traditional Kanji phonetics with modern linguistic creativity to produce names that sound authentic to your selected genre."
    },
    {
      q: "Why do protagonist and villain names sound different?",
      a: "In anime, a character's name often reflects their soul. Villains typically have names with sharper consonant sounds (like K, Z, G) which feel aggressive. Protagonists often have names with softer vowel endings (like O, A, U) which create a heroic and relatable resonance. Our AI understands and applies this linguistic theory."
    },
    {
      q: "Is this anime name generator free to use?",
      a: "Yes, our AI-Powered Anime Character Creator is completely free. There are no limits on how many times you can click 'Generate', making it the perfect brainstorming tool for writers."
    }
  ];

  return (
    <>
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: "AI Anime Character Creator & Name Generator",
          applicationCategory: "EntertainmentApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Use advanced AI to generate highly detailed anime character names, complete with unique genre alignments for your manga, novel, or roleplay."
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

      <Container className="py-16 md:py-24 lg:py-32 space-y-24">
        <header className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
            AI-Powered <span className="text-orange-500">Anime Name</span> Generator
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Unlock your next character's identity with our advanced neural naming engine.
            Perfect for mangakas, web novel writers, roleplayers, and game developers seeking authentic Japanese-inspired aesthetics.
          </p>
        </header>

        {/* TOOL SECTION */}
        <div className="max-w-3xl mx-auto space-y-12">
          <section className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground">
                Select Narrative Universe (Theme)
              </label>
              <select
                className="w-full px-4 py-4 border-2 border-border bg-background text-foreground rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all cursor-pointer"
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
                className="w-full px-4 py-4 border-2 border-border bg-background text-foreground rounded-xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 outline-none transition-all cursor-pointer"
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
              className="w-full py-5 mt-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 text-lg shadow-lg shadow-orange-500/20 active:scale-[0.98]"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <Sparkles className="w-6 h-6" />
              )}
              {loading ? "Analyzing Linguistics..." : "Generate Unique Names"}
            </button>
          </section>

          <section className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-xl font-bold text-foreground px-1 flex items-center gap-2">
              <Zap className="w-6 h-6 text-orange-500" />
              Curated Recommendations
            </h2>

            {results.length > 0 ? (
              <div className="grid gap-4">
                {results.map((name, idx) => (
                  <div
                    key={idx}
                    className="bg-card p-5 rounded-xl border-2 border-border flex items-center justify-between hover:border-orange-500/50 transition-all group"
                  >
                    <div className="font-bold text-foreground text-lg md:text-xl tracking-tight">
                      {name}
                    </div>
                    <button
                      onClick={() => copyToClipboard(name, idx)}
                      className="p-3 rounded-lg bg-muted hover:bg-orange-500/10 hover:text-orange-500 transition-colors text-muted-foreground"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-64 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-muted-foreground p-8 text-center bg-card/30">
                <PenTool className="w-12 h-12 mb-4 opacity-20 text-orange-500" />
                <p className="text-lg">Select your universe and role above, then hit generate to reveal your characters.</p>
              </div>
            )}
          </section>
        </div>

        {/* ================= IN-DEPTH SEO CONTENT SECTION ================= */}
        <div className="mt-32 pt-20 border-t border-border">
          <div className="bg-card border border-border rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-sm space-y-16">

            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                Mastering the Art of Anime Naming
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                In the world of Japanese manga and light novels, naming a character is more than just picking a cool-sounding label. It is about defining their soul, their destiny, and their heritage within your carefully constructed universe.
              </p>
            </div>

            <div className="grid gap-12 lg:gap-16 md:grid-cols-2 items-start">

              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-orange-500 shrink-0" />
                    Linguistic Authenticity
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Generic random name generators often mash syllables together, creating words that sound awkward to native Japanese speakers or seasoned anime fans. Our AI specifically considers Kanji phonetics and deep cultural symbolism. Whether you need a name reflecting "Eternal Shadow" for a dark fantasy setting or "Quantum Spark" for a Neon Cyberpunk world, our generator balances traditional Japanese roots with genre-specific flair.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-3">
                    <LayoutTemplate className="w-6 h-6 text-orange-500 shrink-0" />
                    Genre-Specific Logic
                  </h3>
                  <ul className="space-y-5 text-base text-muted-foreground leading-relaxed pl-2 border-l-2 border-orange-500/20">
                    <li className="pl-4">
                      <span className="font-bold text-foreground block mb-1">
                        Isekai & High Fantasy:
                      </span>
                      Focuses on majestic, heroic-sounding titles. These names often blend Japanese phonetics with slight European/Gothic undertones to suggest an otherworldly origin.
                    </li>
                    <li className="pl-4">
                      <span className="font-bold text-foreground block mb-1">
                        Shonen & Seinen:
                      </span>
                      Prioritizes impactful, punchy names. Shonen names are designed to be yelled during a special attack, while Seinen names carry a heavier, more mature psychological weight.
                    </li>
                    <li className="pl-4">
                      <span className="font-bold text-foreground block mb-1">
                        School Life (Slice of Life):
                      </span>
                      Generates realistic, modern Japanese names that you would actually find in a Tokyo high school, ensuring your story remains grounded and relatable.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="bg-background border border-border p-5 rounded-2xl">
                        <h4 className="font-bold text-foreground text-base mb-2">
                          {faq.q}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-500/5 border border-orange-500/20 p-8 rounded-3xl space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none" />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2 relative z-10">
                    <Smile className="w-6 h-6 text-orange-500" />
                    Pro Tip for Writers
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed relative z-10">
                    Are you writing a fight scene? Remember that <strong>Signature Moves</strong> and Guild Names play a huge part in world-building. Use our tool's 'Role' dropdown to generate not just character names, but the legendary attacks and secretive clans that exist within your anime universe.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AnimeNames;