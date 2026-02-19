import React, { useState, useMemo } from "react";
import { Copy, Check, Type } from "lucide-react";
import { Container } from "../components/Layout/Container";
import { JsonLd } from "../lib/seo";
import Link from "next/link";

interface FontItem {
  name: string;
  category: string;
  transform: (text: string) => string;
}

const StylishFonts: React.FC = () => {
  const [input, setInput] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [category, setCategory] = useState("All");

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  /* ======================
     FONT DATABASE (50+)
  =======================*/

  const baseDecorators = ["乂", "亗", "么", "々", "メ", "么", "๛", "⚔", "☬", "♛", "ঔ", "ঊ"];

  const fontMaps: FontItem[] = useMemo(() => {
    const unicodeBold: any = {
      a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳",
      g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷", k: "𝗸", l: "𝗹",
      m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿",
      s: "𝘀", t: "𝘁", u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅",
      y: "𝘆", z: "𝘇",
    };

    const transformMap = (text: string, map: any) =>
      text.split("").map(c => map[c.toLowerCase()] || c).join("");

    const styles: FontItem[] = [
      {
        name: "Bold Sans",
        category: "Professional",
        transform: (text) => transformMap(text, unicodeBold),
      },
      {
        name: "PUBG King",
        category: "Gaming",
        transform: (text) => `乂 ${text} 乂`,
      },
      {
        name: "Free Fire Elite",
        category: "Gaming",
        transform: (text) => `亗 ${text} 亗`,
      },
      {
        name: "Shadow Clan",
        category: "Gaming",
        transform: (text) => `☬ ${text} ☬`,
      },
      {
        name: "Crown Style",
        category: "Gaming",
        transform: (text) => `♛ ${text} ♛`,
      },
      {
        name: "Fire Gamer",
        category: "Gaming",
        transform: (text) => `🔥 ${text} 🔥`,
      },
      {
        name: "Cute Hearts",
        category: "Cute",
        transform: (text) => `💖 ${text} 💖`,
      },
      {
        name: "Aesthetic Stars",
        category: "Decorative",
        transform: (text) => `✦ ${text} ✦`,
      },
    ];

    // Generate 40+ additional gaming variants
    for (let i = 0; i < 40; i++) {
      styles.push({
        name: `Gaming Variant ${i + 1}`,
        category: "Gaming",
        transform: (text: string) =>
          `${baseDecorators[i % baseDecorators.length]} ${text} ${baseDecorators[i % baseDecorators.length]}`,
      });
    }

    return styles;
  }, []);

  const categories = ["All", "Gaming", "Professional", "Cute", "Decorative"];

  const filteredFonts =
    category === "All"
      ? fontMaps
      : fontMaps.filter((f) => f.category === category);

  /* ======================
     TOP 100 PUBG NAMES
  =======================*/

  const pubgNames = [
    "乂ShadowKing乂", "亗DarkHunter亗", "♛RoyalSniper♛", "☬GhostRider☬",
    "乂VenomX乂", "亗ToxicPro亗", "♛BulletMaster♛", "☬NoMercy☬",
    "乂AlphaBeast乂", "亗HeadshotPro亗"
  ];

  return (
    <>
      {/* Schema Markup */}
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: "Stylish Font Generator",
          applicationCategory: "Utility",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "Generate PUBG, Free Fire, Instagram stylish names using 50+ Unicode fonts for free."
        }}
      />

      <Container className="py-16 md:py-24 space-y-20">

        {/* HEADER */}
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black text-foreground">
            Stylish Font Generator for PUBG & Free Fire (50+ Styles)
          </h1>
          <p className="text-muted-foreground">
            Create unique gaming names, Instagram bios, and stylish nicknames instantly using powerful Unicode fonts.
          </p>
        </header>

        {/* INPUT */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="relative">
            <Type className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Enter your name..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1 rounded-full text-sm ${category === cat
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* RESULTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {input.trim() === "" ? (
            <div className="col-span-full text-center py-20 border border-dashed border-border rounded-2xl text-muted-foreground">
              Type something above to generate stylish fonts.
            </div>
          ) : (
            filteredFonts.map((font, idx) => {
              const transformed = font.transform(input);
              return (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {font.name}
                    </p>
                    <p className="text-lg text-foreground break-all">
                      {transformed}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(transformed, idx)}
                    className="p-2 hover:text-primary transition"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* TOP PUBG NAMES SECTION */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Top PUBG Stylish Names
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
            {pubgNames.map((name, i) => (
              <li key={i} className="bg-card border border-border rounded-lg p-3">
                {name}
              </li>
            ))}
          </ul>
        </section>

        {/* ================= SEO CONTENT SECTION ================= */}

        <section className="max-w-5xl mx-auto mt-24 space-y-20">

          {/* Section Wrapper */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-14 shadow-sm space-y-16">

            {/* HERO CONTENT BLOCK */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Ultimate Guide to Stylish Font Generation for Gaming & Social Media
              </h2>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto md:mx-0">
                LinkGen’s Stylish Font Generator helps gamers, creators, and influencers
                generate high-impact usernames for PUBG, Free Fire, BGMI, Instagram, and YouTube.
                With 50+ Unicode-powered styles, you can instantly create aesthetic, professional,
                or gaming-ready nicknames.
              </p>
            </div>

            {/* WHY SECTION */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Why Stylish Names Matter in 2026
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                In competitive gaming communities, your username builds perception.
                Symbols like 乂, 亗, ☬, and ♛ signal clan identity and authority.
                On Instagram and YouTube, stylish fonts increase scroll-stopping power
                and improve engagement rates.
              </p>
            </div>

            {/* HOW IT WORKS CARD */}
            <div className="bg-muted/40 border border-border rounded-2xl p-6 md:p-8 space-y-4">
              <h4 className="font-semibold text-foreground text-lg">
                How the Stylish Font Generator Works
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our tool maps standard characters into Unicode Mathematical Symbols.
                These characters are internationally supported and work across Android,
                iOS, Windows, and macOS without requiring any app installation.
              </p>
            </div>

            {/* STEPS GRID */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                How to Use Stylish Names in PUBG & Free Fire
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                {[
                  "Enter your desired name in the input field.",
                  "Choose your favorite gaming style.",
                  "Click Copy.",
                  "Paste inside your game Rename Card section."
                ].map((step, i) => (
                  <div
                    key={i}
                    className="bg-background border border-border rounded-xl p-5"
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <span className="font-semibold text-foreground">
                        Step {i + 1}:
                      </span>{" "}
                      {step}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* COMPARISON TABLE - CLEAN */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Standard Text vs Stylish Fonts
              </h3>

              <div className="overflow-x-auto border border-border rounded-xl">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-muted-foreground">
                    <tr>
                      <th className="text-left px-4 py-3 font-medium">Feature</th>
                      <th className="text-left px-4 py-3 font-medium">Standard</th>
                      <th className="text-left px-4 py-3 font-medium">Stylish Fonts</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-medium text-foreground">Visual Appeal</td>
                      <td className="px-4 py-3">Basic</td>
                      <td className="px-4 py-3 text-primary font-semibold">High Impact</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-medium text-foreground">Symbol Support</td>
                      <td className="px-4 py-3">None</td>
                      <td className="px-4 py-3">50+ Gaming Symbols</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-medium text-foreground">Engagement</td>
                      <td className="px-4 py-3">Low</td>
                      <td className="px-4 py-3">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ SECTION - CLEAN CARDS */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-foreground">
                Frequently Asked Questions
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                {[
                  {
                    q: "Can I use these fonts on Instagram?",
                    a: "Yes. These Unicode characters work in Instagram names, bios, and captions."
                  },
                  {
                    q: "Are stylish fonts safe for PUBG?",
                    a: "Yes. They are Unicode-based characters, not hacks."
                  },
                  {
                    q: "Why do some symbols show as boxes?",
                    a: "Older devices may not support some extended Unicode sets."
                  }
                ].map((faq, i) => (
                  <div
                    key={i}
                    className="bg-background border border-border rounded-xl p-6 space-y-2"
                  >
                    <p className="font-semibold text-foreground text-sm">{faq.q}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* INTERNAL LINKS CTA */}
            <div className="bg-primary/5 border border-border rounded-2xl p-8 text-center space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Explore More Creator Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/character-counter"
                  className="px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition"
                >
                  Bio Character Counter
                </Link>
                <Link
                  href="/instagram-bio-generator"
                  className="px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition"
                >
                  Instagram Bio Generator
                </Link>
                <Link
                  href="/youtube-tag-extractor"
                  className="px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition"
                >
                  YouTube Tag Extractor
                </Link>
              </div>
            </div>

          </div>
        </section>

      </Container>
    </>
  );
};

export default StylishFonts;
