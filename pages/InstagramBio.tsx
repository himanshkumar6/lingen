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
  Lightbulb,
  ShieldCheck,
  Rocket,
  Zap,
  Star,
  Search as SearchIcon
} from "lucide-react";
import { generateBio } from "../services/gemini";
import SEOWrapper from "../components/SEOWrapper";
import { JsonLd } from "../lib/seo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
          name: "Advanced AI Instagram Bio Generator",
          operatingSystem: "Web",
          applicationCategory: "SocialMediaTool",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: "Professional Instagram bio generator using Google Gemini AI. Create aesthetic, SEO-optimized, and high-converting bios for brands and creators.",
        }}
      />

      <SEOWrapper title="Free AI Instagram Bio Generator">
        <div className="space-y-12 md:space-y-24 py-6 md:py-20 px-4 sm:px-6 lg:px-8">

          {/* ================= HEADER ================= */}
          <header className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3 h-3" /> New: 2026 Optimization Engine
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
              AI Instagram Bio Generator <br className="hidden sm:block" />
              <span className="text-primary">For Creators & Brands</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-xl leading-relaxed max-w-2xl mx-auto text-pretty">
              Don't just write a bio, build a brand. Our AI analyzes your niche to generate
              aesthetic, professional, and SEO-friendly bios that drive followers.
            </p>
          </header>

          {/* ================= TOOL GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">

            {/* LEFT PANEL (Inputs) */}
            <div className="space-y-6 bg-card border border-border p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-sm order-1">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Target className="w-4 h-4 text-primary" />
                  Define Your Identity (Niche)
                </label>
                <input
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="e.g. Digital Nomad, SaaS Founder..."
                  className="w-full px-4 py-3 md:py-4 rounded-xl md:rounded-2xl bg-background border border-border text-foreground text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <SearchIcon className="w-4 h-4 text-primary" />
                  Target Keywords (SEO)
                </label>
                <input
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="e.g. fitness tips, remote work..."
                  className="w-full px-4 py-3 md:py-4 rounded-xl md:rounded-2xl bg-background border border-border text-foreground text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full sm:flex-1 px-4 py-3 md:py-4 rounded-xl md:rounded-2xl bg-background border border-border text-foreground text-sm focus:outline-none transition"
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
                  className="w-full sm:w-auto px-8 py-3 md:py-4 rounded-xl md:rounded-2xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 transition hover:opacity-90 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Wand2 className="w-5 h-5" />}
                  Generate Bios
                </button>
              </div>
            </div>

            {/* RIGHT PANEL (Preview) */}
            <div className="relative rounded-2xl md:rounded-3xl border border-border bg-card p-5 md:p-6 min-h-[300px] md:min-h-[400px] shadow-sm order-2 lg:order-2">
              <div className="flex items-center gap-2 mb-4 md:mb-6 border-b border-border pb-4">
                <Instagram className="w-5 h-5 text-pink-500" />
                <span className="font-bold text-foreground text-sm md:text-base">Profile Preview</span>
              </div>

              <div className="space-y-3 md:space-y-4">
                {results.map((bio, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-background border border-border rounded-xl md:rounded-2xl p-4 flex justify-between items-start transition hover:border-primary/40 group"
                  >
                    <p className="text-xs md:text-sm text-foreground whitespace-pre-line leading-relaxed italic pr-2">
                      {bio}
                    </p>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(bio);
                        setCopiedIndex(idx);
                        setTimeout(() => setCopiedIndex(null), 2000);
                      }}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors shrink-0"
                    >
                      {copiedIndex === idx ? <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500" /> : <Copy className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110" />}
                    </button>
                  </motion.div>
                ))}

                {results.length === 0 && !loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-muted-foreground p-6 opacity-60">
                    <Star className="w-10 h-10 md:w-16 md:h-16 mb-4 text-primary/20" />
                    <p className="text-xs md:text-sm font-medium">Input your niche to unlock your custom bio.</p>
                  </div>
                )}

                {loading && (
                  <div className="flex flex-col items-center justify-center py-16 space-y-4">
                    <Loader2 className="w-8 h-8 md:w-10 md:h-10 animate-spin text-primary" />
                    <p className="text-xs md:text-sm font-semibold text-primary animate-pulse">Brainstorming the best bios...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= ENHANCED HIGH-VALUE SEO CONTENT ================= */}
          <section className="max-w-4xl mx-auto space-y-16 md:space-y-24">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: <Rocket />, title: "Conversion Focus", desc: "Every bio is built to drive link clicks and follow actions." },
                { icon: <SearchIcon />, title: "SEO Integration", desc: "Strategically places keywords for better profile discoverability." },
                { icon: <ShieldCheck />, title: "Brand Safety", desc: "No cookies or data tracking—your privacy is our priority." }
              ].map((item, i) => (
                <div key={i} className="text-center space-y-2 p-4 border border-border bg-card/50 rounded-2xl">
                  <div className="h-10 w-10 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary">{item.icon}</div>
                  <h4 className="font-bold text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <article className="text-muted-foreground space-y-12 leading-relaxed text-sm md:text-lg border-t border-border pt-12 md:pt-20">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                  The Science of a High-Converting Instagram Bio
                </h2>
                <p>
                  In 2026, an Instagram bio isn't just a description; it's a <strong>ranking factor</strong>.
                  With the rise of "Social Search," users are finding profiles through keywords. Our
                  generator uses <strong>Natural Language Processing (NLP)</strong> to ensure your profile
                  speaks both to humans and the Instagram algorithm.
                </p>
              </div>

              <div className="space-y-6 bg-muted/30 p-6 md:p-10 rounded-3xl border border-border">
                <h3 className="text-lg md:text-3xl font-bold text-foreground">Why Your Bio Matters</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="font-bold text-foreground">First Impression (0.05s)</h4>
                    <p className="text-sm">It takes less than a second for a visitor to decide if they should follow you. A clear, aesthetic bio is the key.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-foreground">Search Optimization</h4>
                    <p className="text-sm">Including niche keywords (like "UGC Creator" or "Crypto Analyst") helps you show up in top search results.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg md:text-3xl font-bold text-foreground italic">Instagram Bio Best Practices</h3>
                <div className="grid gap-4">
                  {[
                    { t: "The Value Proposition", d: "Clearly state what value you provide to the follower." },
                    { t: "The Social Proof", d: "Mention a metric or achievement (e.g., '10k+ clients served')." },
                    { t: "The Call to Action (CTA)", d: "Use action words like 'Download', 'Book', or 'Register'." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-background border border-border rounded-2xl">
                      <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-black">{i + 1}</div>
                      <div>
                        <p className="font-bold text-foreground text-sm md:text-base">{step.t}</p>
                        <p className="text-xs md:text-sm">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-lg md:text-3xl font-bold text-foreground">Creator FAQ</h3>
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <p className="font-bold text-foreground text-base md:text-xl underline decoration-primary/30">Does using emojis help in Instagram Bios?</p>
                    <p className="text-sm md:text-base text-muted-foreground">Yes, emojis help break up text and act as visual bullet points. However, overusing them can look unprofessional. Our AI balances them perfectly.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-foreground text-base md:text-xl underline decoration-primary/30">How often should I change my bio?</p>
                    <p className="text-sm md:text-base text-muted-foreground">We recommend updating your bio every 3-6 months or whenever you launch a new product, service, or achieve a major milestone.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Quick Links */}
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-14 text-center space-y-8">
              <div className="space-y-2">
                <h4 className="text-xl md:text-3xl font-black text-foreground">Explore More Free Tools</h4>
                <p className="text-sm text-muted-foreground">Take your digital presence to the next level with our full creator suite.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/youtube-tag-extractor" className="px-6 py-3 bg-background border border-border rounded-xl text-xs md:text-sm font-bold hover:border-primary hover:text-primary transition shadow-sm">Video SEO Extractor</Link>
                <Link to="/character-counter" className="px-6 py-3 bg-background border border-border rounded-xl text-xs md:text-sm font-bold hover:border-primary hover:text-primary transition shadow-sm">Bio Word Counter</Link>
                <Link to="/anime-name-generator" className="px-6 py-3 bg-background border border-border rounded-xl text-xs md:text-sm font-bold hover:border-primary hover:text-primary transition shadow-sm">Anime Name Generator</Link>
              </div>
            </div>
          </section>
        </div>
      </SEOWrapper>
    </>
  );
};

export default InstagramBio;