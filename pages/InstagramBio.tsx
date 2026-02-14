import React, { useState } from "react";
import {
  Sparkles,
  Copy,
  Check,
  Loader2,
  Wand2,
  Instagram,
  Target,
  Heart,
} from "lucide-react";
import { generateBio } from "../services/gemini";
import SEOWrapper from "../components/SEOWrapper";
import { JsonLd } from "../lib/seo";
import { Link } from "react-router-dom";

const InstagramBio: React.FC = () => {
  const [niche, setNiche] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("Creative");
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
          name: "Instagram Bio Generator",
          operatingSystem: "Web",
          applicationCategory: "BusinessApplication",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "Generate professional, aesthetic and high-converting Instagram bios using AI for free.",
        }}
      />

      <SEOWrapper title="Instagram Bio Generator">

        <div className="space-y-24">

          {/* ================= HEADER ================= */}

          <header className="text-center space-y-6 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
              Free AI Instagram Bio Generator
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Create high-converting Instagram bios using AI. Optimized for branding,
              discoverability, and follower growth.
            </p>
          </header>

          {/* ================= TOOL ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4 max-w-6xl mx-auto">

            {/* LEFT PANEL */}
            <div className="space-y-6">

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Target className="w-4 h-4 text-primary" />
                  Your Niche
                </label>
                <input
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="e.g. Fitness Coach, Travel Blogger..."
                  className="w-full px-5 py-4 rounded-2xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Focus Keywords
                </label>
                <input
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="e.g. mindset, reels growth..."
                  className="w-full px-5 py-4 rounded-2xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="flex-1 px-5 py-4 rounded-2xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                >
                  <option>Professional</option>
                  <option>Creative</option>
                  <option>Aesthetic</option>
                  <option>Funny</option>
                </select>

                <button
                  onClick={handleGenerate}
                  disabled={loading || !niche}
                  className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold transition hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
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

            {/* RIGHT PANEL */}
            <div className="relative rounded-3xl border border-border bg-card p-6 min-h-[320px]">

              <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
                <Instagram className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">
                  Preview Results
                </span>
              </div>

              <div className="space-y-4">
                {results.map((bio, idx) => (
                  <div
                    key={idx}
                    className="bg-background border border-border rounded-2xl p-5 flex justify-between items-start transition hover:border-primary/40"
                  >
                    <p className="text-sm text-foreground whitespace-pre-line leading-relaxed">
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
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                ))}

                {results.length === 0 && !loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-muted-foreground p-10">
                    <Heart className="w-12 h-12 mb-4 opacity-20" />
                    <p className="text-sm">
                      Your AI-generated bio suggestions will appear here.
                    </p>
                  </div>
                )}

                {loading && (
                  <div className="flex flex-col items-center justify-center py-16 space-y-4">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Generating optimized bios...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= SEO CONTENT ================= */}

          <section className="max-w-4xl mx-auto px-4 space-y-16">

            <article className="max-w-3xl mx-auto text-muted-foreground space-y-8 leading-relaxed text-base md:text-lg">

              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                How to Write a High-Converting Instagram Bio
              </h2>

              <p>
                Your Instagram bio acts as your digital introduction. Within 150 characters,
                you must communicate clarity, value, and a reason to follow. A strong bio
                increases profile conversions and improves search visibility inside Instagram.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                The 3-Part Formula Used by Top Creators
              </h3>

              <ul className="space-y-3 pl-5 list-disc">
                <li><strong>Hook:</strong> Clearly define who you help or what you do.</li>
                <li><strong>Value:</strong> Highlight your unique expertise.</li>
                <li><strong>Call-To-Action:</strong> Direct users to take the next step.</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Why Keywords Matter in Instagram Bios
              </h3>

              <p>
                Instagram now indexes bios for search. Including relevant keywords
                improves discoverability and helps your profile appear in niche-specific results.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Frequently Asked Questions
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-foreground">
                    How long should an Instagram bio be?
                  </p>
                  <p>
                    Instagram allows 150 characters. 80–120 optimized characters
                    typically perform best.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    Is this bio generator free?
                  </p>
                  <p>
                    Yes. It is completely free and optimized for creators and businesses.
                  </p>
                </div>
              </div>

            </article>

            {/* Internal Links */}
            <div className="max-w-3xl mx-auto bg-muted/30 border border-border rounded-2xl p-6 text-center space-y-6">
              <h4 className="text-lg md:text-xl font-semibold text-foreground">
                Explore More Free Creator Tools
              </h4>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/character-counter"
                  className="px-6 py-3 border border-border rounded-xl hover:border-primary hover:text-primary transition"
                >
                  Bio Character Counter
                </Link>

                <Link
                  to="/font-converter"
                  className="px-6 py-3 border border-border rounded-xl hover:border-primary hover:text-primary transition"
                >
                  Stylish Font Generator
                </Link>

                <Link
                  to="/youtube-tag-extractor"
                  className="px-6 py-3 border border-border rounded-xl hover:border-primary hover:text-primary transition"
                >
                  YouTube Tag Extractor
                </Link>
              </div>
            </div>

          </section>

        </div>
      </SEOWrapper>
    </>
  );
};

export default InstagramBio;
