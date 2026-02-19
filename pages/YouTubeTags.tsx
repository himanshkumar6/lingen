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

const YouTubeTags: React.FC = () => {
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [noTags, setNoTags] = useState(false);
  const [error, setError] = useState("");

  const extractTags = async () => {
    if (!url) return;

    setLoading(true);
    setTags([]);
    setNoTags(false);
    setError("");

    try {
      const regex =
        /(?:youtube\.com\/(?:.*v=|shorts\/)|youtu\.be\/)([^&?/]+)/;
      const match = url.match(regex);
      const videoId = match ? match[1] : null;

      if (!videoId) {
        setError("Invalid YouTube URL");
        setLoading(false);
        return;
      }

      const response = await fetch(`/api/youtube?v=${videoId}`);
      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      if (!data.tags || data.tags.length === 0) {
        setNoTags(true);
      } else {
        setTags(data.tags);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to extract tags");
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
        type="FAQPage"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Are YouTube tags visible publicly?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "YouTube tags are not visible in the public interface of a video, but they exist in the video's metadata. SEO tools like this extractor analyze the video data to retrieve them."
              }
            },
            {
              "@type": "Question",
              "name": "Do YouTube tags improve ranking in 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tags help YouTube understand context and topic relevance. However, ranking is more strongly influenced by click-through rate, watch time, audience retention, and engagement."
              }
            },
            {
              "@type": "Question",
              "name": "Why do some videos not have tags?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Some creators choose not to add tags or rely more on title, description, and engagement signals. In such cases, no tags will be returned."
              }
            },
            {
              "@type": "Question",
              "name": "Is this YouTube tag extractor free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, this tool is completely free and designed for creators, marketers, and researchers who want to analyze competitor metadata."
              }
            }
          ]
        }}
      />

      <Container className="py-16 md:py-24 space-y-24">
        {/* HEADER */}
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            YouTube Tag Extractor Tool
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Extract hidden YouTube tags for SEO research, keyword analysis, and competitor insights.
          </p>
        </header>

        {/* INPUT SECTION */}
        <section className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative grow">
              <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
              <input
                type="text"
                placeholder="Paste YouTube Video URL here..."
                className="w-full pl-12 pr-4 py-4 border border-border bg-background rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
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

          {error && (
            <div className="text-sm text-red-500">{error}</div>
          )}
        </section>

        {/* RESULTS */}
        {(tags.length > 0 || noTags) && (
          <section className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                <Hash className="w-5 h-5 text-primary" />
                Extracted Tags
              </h2>

              {tags.length > 0 && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy All"}
                </button>
              )}
            </div>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-card border border-border rounded-full text-xs md:text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {noTags && (
              <div className="bg-muted/50 border border-border rounded-xl p-6 text-sm text-muted-foreground flex gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 text-primary" />
                <p>
                  This video does not contain public tags. Some creators rely
                  primarily on title, description, and engagement signals.
                </p>
              </div>
            )}
          </section>
        )}

        {/* ================= HIGH VALUE SEO CONTENT ================= */}
        <section className="max-w-4xl mx-auto space-y-20 border-t border-border pt-20">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              01. Why YouTube Tags Still Matter in 2026
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While YouTube’s algorithm has evolved, tags still provide contextual
              metadata that helps the system understand niche terminology,
              spelling variations, and topic associations. They are especially
              useful for new channels trying to establish topical authority.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              02. How to Use Competitor Tags Strategically
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Analyze high-performing videos in your niche. Extract recurring
              keyword clusters. Identify long-tail phrases. Then integrate those
              patterns into your own optimized title, description, and tags
              structure for stronger ranking signals.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              03. Best Practices for YouTube Tags
            </h3>
            <ul className="space-y-3 text-muted-foreground list-decimal pl-6">
              <li><strong>Primary keyword first:</strong> Add your main keyword as the first tag.</li>
              <li><strong>Use long-tail variations:</strong> Include natural search phrases.</li>
              <li><strong>Avoid keyword stuffing:</strong> Keep tags relevant and concise.</li>
              <li><strong>Cover misspellings:</strong> Add slight variations if relevant.</li>
            </ul>
          </div>

          <div className="space-y-10">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              04. Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              {[
                {
                  q: "Are YouTube tags visible publicly?",
                  a: "They are not shown in the interface, but they exist in video metadata and can be analyzed."
                },
                {
                  q: "Do tags directly increase ranking?",
                  a: "Tags support contextual understanding, but CTR, watch time, and engagement are stronger ranking factors."
                },
                {
                  q: "Is this tool free?",
                  a: "Yes. This YouTube tag extractor is completely free to use."
                },
                {
                  q: "Why does some video show no tags?",
                  a: "Some creators do not add tags manually. Others rely mainly on optimized titles and descriptions."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 border border-border rounded-2xl bg-card/50 space-y-3"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary text-white text-sm font-bold shrink-0">
                      {index + 1}
                    </div>
                    <p className="font-semibold text-foreground">
                      {faq.q}
                    </p>
                  </div>
                  <p className="text-muted-foreground pl-12 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default YouTubeTags;
