import React, { useState } from "react";
import {
  Youtube,
  Search,
  Copy,
  Check,
  Hash,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Container } from "../components/Layout/Container";
import { JsonLd } from "../lib/seo";
import { Link } from "react-router-dom";

const YouTubeTags: React.FC = () => {
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const API_KEY = import.meta.env.VITE_YT_API_KEY;

  const extractTags = async () => {
    if (!url) return;

    setLoading(true);
    setTags([]);

    try {
      // Extract Video ID (supports watch, shorts, youtu.be)
      const regex =
        /(?:youtube\.com\/(?:.*v=|shorts\/)|youtu\.be\/)([^&?/]+)/;
      const match = url.match(regex);
      const videoId = match ? match[1] : null;

      if (!videoId) {
        alert("Invalid YouTube URL");
        setLoading(false);
        return;
      }

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
      );

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        throw new Error("Video not found");
      }

      const snippet = data.items[0].snippet;

      setTags(snippet.tags || []);
    } catch (error) {
      console.error(error);
      alert("Failed to extract tags");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(tags.join(", "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: "YouTube Tag Extractor",
          applicationCategory: "SEO Tool",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "Extract hidden YouTube tags from any video URL instantly for SEO research and competitor analysis.",
        }}
      />

      <Container className="py-16 md:py-24 space-y-24">

        {/* ================= HEADER ================= */}
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            YouTube Tag Extractor Tool (Free SEO Analyzer)
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Discover hidden YouTube tags used by top creators. Improve your
            rankings, suggested video visibility, and keyword targeting
            strategy.
          </p>
        </header>

        {/* ================= INPUT SECTION ================= */}
        <section className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
              <input
                type="text"
                placeholder="Paste YouTube Video URL here..."
                className="w-full pl-12 pr-4 py-4 text-sm md:text-base border border-border bg-background rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <button
              onClick={extractTags}
              disabled={loading || !url}
              className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition-all disabled:bg-muted flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Extracting...
                </>
              ) : (
                <>
                  Extract Tags
                  <Search className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-muted-foreground">
            Paste any public YouTube video link. Our system analyzes the page
            source and extracts SEO metadata tags.
          </p>
        </section>

        {/* ================= RESULTS ================= */}
        {tags.length > 0 && (
          <section className="max-w-4xl mx-auto space-y-8">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center gap-2">
                <Hash className="w-5 h-5 text-primary" />
                Extracted Tags
              </h2>

              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy All"}
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-card border border-border rounded-full text-xs md:text-sm text-muted-foreground hover:border-primary/40 hover:bg-primary/5 transition"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-muted/50 border border-border rounded-xl p-5 text-sm text-muted-foreground flex gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 text-primary" />
              <p>
                Tags are not visible in the YouTube interface, but they still
                help contextualize your content for ranking and suggested
                videos.
              </p>
            </div>
          </section>
        )}

        {/* ================= SEO CONTENT SECTION ================= */}
        <section className="max-w-5xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-14 shadow-sm space-y-16">

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Why YouTube Tags Still Matter in 2026
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While titles and thumbnails drive click-through rate, YouTube
              tags provide contextual signals to the algorithm. Tags help
              clarify spelling variations, niche terminology, and long-tail
              keyword targeting.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">
              Competitor SEO Analysis Strategy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Analyze high-ranking videos in your niche. Extract their tags.
              Identify recurring patterns and keyword clusters. Use those
              insights to structure your own optimized metadata strategy.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">
              Best Practices for Using Tags
            </h3>

            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Primary Keyword First:</strong> Place your main keyword
                as the first tag.
              </li>
              <li>
                <strong>Use Long-Tail Keywords:</strong> Example: “how to grow
                on youtube fast in 2026”.
              </li>
              <li>
                <strong>Avoid Keyword Stuffing:</strong> Quality over quantity.
              </li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-border rounded-2xl p-8 text-center space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Explore More Free SEO Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/youtube-description-extractor"
                className="px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition"
              >
                YouTube Description Extractor
              </Link>
              <Link
                to="/bio-character-counter"
                className="px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition"
              >
                Bio Character Counter
              </Link>
              <Link
                to="/stylish-fonts"
                className="px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition"
              >
                Stylish Font Generator
              </Link>
            </div>
          </div>

        </section>
      </Container>
    </>
  );
};

export default YouTubeTags;
