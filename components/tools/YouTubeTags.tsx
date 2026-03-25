"use client";

import React, { useState } from "react";
import {
  Youtube,
  Search,
  Copy,
  Check,
  Hash,
  AlertCircle,
  Loader2,
  BookOpen
} from "lucide-react";
import { Container } from "../Layout/Container";
import { JsonLd } from "../../lib/seo";

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
          mainEntity: [
            {
              "@type": "Question",
              name: "Are YouTube tags visible publicly?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, YouTube hides tags from the standard public interface. However, they still exist within the webpage's backend metadata. Our tool legally scans the source code to extract these hidden keywords for your research."
              }
            },
            {
              "@type": "Question",
              name: "Do YouTube tags improve ranking in 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "While titles and thumbnails are the primary ranking factors, tags still provide crucial contextual signals to the algorithm. They are particularly effective for capturing traffic from common misspellings or regional language variations of your main keywords."
              }
            },
            {
              "@type": "Question",
              name: "What is the maximum limit for YouTube tags?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "YouTube allows a maximum of 500 characters in the tags section. It is recommended not to stuff tags, but rather use 10 to 15 highly relevant long-tail keywords that accurately describe the video content."
              }
            },
            {
              "@type": "Question",
              name: "Why does some video show no tags?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Many established creators with millions of subscribers no longer rely on tags, trusting their audience size and pure engagement metrics to push the video. If the creator left the tag box empty, our tool will accurately report that no tags were found."
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
            Extract hidden YouTube tags instantly. Uncover your competitors&apos; SEO strategy, perform deep keyword analysis, and rank your videos higher.
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
                className="w-full pl-12 pr-4 py-4 border border-border bg-background rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-base"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <button
              onClick={extractTags}
              disabled={loading || !url}
              className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition-all disabled:bg-muted disabled:text-muted-foreground flex items-center justify-center gap-2"
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
            <div className="text-sm font-medium text-destructive flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> {error}
            </div>
          )}
        </section>

        {/* RESULTS */}
        {(tags.length > 0 || noTags) && (
          <section className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2 text-foreground">
                <Hash className="w-5 h-5 text-primary" />
                Extracted Tags
              </h2>

              {tags.length > 0 && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold hover:bg-primary/20 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied to Clipboard!" : "Copy All Tags"}
                </button>
              )}
            </div>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-3 p-6 bg-card border border-border rounded-2xl shadow-sm">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-muted/50 border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/50 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {noTags && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-sm text-foreground flex gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 text-destructive" />
                <p>
                  <strong>No Tags Found:</strong> This specific video does not contain any public tags in its metadata. The creator has opted not to use them, likely relying entirely on an optimized title, detailed description, and strong viewer engagement metrics.
                </p>
              </div>
            )}
          </section>
        )}

        {/* ================= HIGH VALUE SEO CONTENT FOR ADSENSE ================= */}
        <section className="max-w-4xl mx-auto space-y-16 border-t border-border pt-20 text-muted-foreground leading-relaxed">

          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground flex items-center gap-3">
              <BookOpen className="text-primary w-7 h-7" />
              01. Why YouTube Tags Still Matter in 2026
            </h2>
            <p>
              There is a common misconception in the creator community that YouTube tags are completely dead. While it is true that YouTube&apos;s neural network relies heavily on titles, thumbnails, and watch time to rank videos, tags still serve as a foundational layer of metadata. They act as the invisible glue that helps the algorithm understand context, categorization, and topical authority.
            </p>
            <p>
              Tags are specifically designed to help the system process misspellings, abbreviations, and multi-language queries. For instance, if you are uploading a tutorial on &quot;Search Engine Optimization,&quot; including tags like &quot;SEO,&quot; &quot;S.E.O,&quot; or even common typos ensures that you don&apos;t miss out on search traffic from users typing too fast on mobile devices.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              02. How to Use Competitor Tags Strategically
            </h3>
            <p>
              YouTube removed the ability to view tags publicly a few years ago to stop tag-stuffing. However, using our YouTube Tag Extractor, you can safely scan the backend <code>og:video:tag</code> elements of any viral video to reverse-engineer your competitors&apos; SEO strategies.
            </p>
            <p>
              The goal isn&apos;t to blindly copy every tag a top creator uses. Instead, extract tags from 3 to 4 top-ranking videos in your niche. Look for <strong>recurring keyword clusters</strong> (phrases that all successful videos are using). Once you identify these high-value long-tail phrases, integrate them naturally not just into your tag box, but into your video&apos;s title and the first 200 words of your description for maximum impact.
            </p>
          </div>

          <div className="bg-muted/30 p-8 rounded-3xl border border-border">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              03. Best Practices for YouTube Tags (SEO Checklist)
            </h3>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <div>
                  <strong className="text-foreground">Primary Keyword First:</strong>
                  <p className="mt-1">YouTube reads tags from left to right. Always place your exact target keyword as the very first tag. If your video is about &quot;React Hooks Tutorial,&quot; that exact phrase must be tag number one.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <div>
                  <strong className="text-foreground">Embrace Long-Tail Variations:</strong>
                  <p className="mt-1">Broad tags like &quot;gaming&quot; or &quot;tech&quot; are virtually useless due to massive competition. Instead, use specific long-tail variations like &quot;best budget gaming keyboard 2026&quot; or &quot;how to build a PC step by step.&quot;</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <div>
                  <strong className="text-foreground">Channel Branding:</strong>
                  <p className="mt-1">Always include your channel name and core brand identity as tags in every single video. Over time, this helps YouTube associate your videos with each other, increasing the chance of your content showing up in the &quot;Up Next&quot; sidebar.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">4.</span>
                <div>
                  <strong className="text-foreground">Respect the 500 Character Limit:</strong>
                  <p className="mt-1">You have 500 characters to work with. Do not stuff irrelevant keywords just to fill the space. Relevancy is the most important metric. Irrelevant tags can actively harm your CTR and get your channel flagged for spam.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              04. Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {[
                {
                  q: "Are YouTube tags visible publicly to normal viewers?",
                  a: "No, they are completely hidden from the standard YouTube interface. However, they still exist in the video's backend metadata. SEO tools like our extractor scan the page's source code to retrieve them."
                },
                {
                  q: "Do tags directly increase a video's ranking?",
                  a: "Tags alone will not make a bad video rank #1. They support contextual understanding. Your Click-Through Rate (CTR), average view duration (Watch Time), and overall engagement are the true kings of YouTube ranking."
                },
                {
                  q: "Can I just copy and paste a famous YouTuber's tags?",
                  a: "While you can extract them for research, simply copy-pasting MrBeast's tags won't make you viral. Your content must actually match the search intent of those tags, otherwise viewers will click away instantly, destroying your retention rate."
                },
                {
                  q: "Is this YouTube metadata tool really free?",
                  a: "Yes, the LinkGen.in tag extractor is 100% free to use. There are no daily limits, no hidden paywalls, and no registration required. It is built to support the creator community."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 border border-border rounded-2xl bg-card transition-all hover:border-primary/40"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="h-7 w-7 flex items-center justify-center rounded-md bg-primary/10 text-primary text-sm font-bold shrink-0">
                      Q
                    </div>
                    <p className="font-bold text-foreground text-lg pt-0.5">
                      {faq.q}
                    </p>
                  </div>
                  <p className="text-muted-foreground pl-11 text-sm md:text-base">
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