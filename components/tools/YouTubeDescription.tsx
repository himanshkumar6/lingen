"use client";

import React, { useState } from 'react';
import {
  Youtube, Search, Copy, Check, FileText, Loader2, AlertCircle,
  BarChart, Hash, Globe, Info, Target, LayoutTemplate
} from 'lucide-react';
import SEOWrapper from '../SEOWrapper';
import { JsonLd } from '../../lib/seo';
import { isValidYoutubeUrl, sanitizeInput } from '../../lib/validation';

const YouTubeDescription: React.FC = () => {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const extractVideoId = (inputUrl: string) => {
    const regex =
      /(?:youtube\.com\/(?:.*v=|shorts\/)|youtu\.be\/)([^&?/]+)/;
    const match = inputUrl.match(regex);
    return match ? match[1] : null;
  };

  const extractDescription = async () => {
    const cleanUrl = sanitizeInput(url);

    if (!isValidYoutubeUrl(cleanUrl)) {
      setError('Please enter a valid YouTube video URL (e.g. https://youtube.com/watch?v=...)');
      return;
    }

    const videoId = extractVideoId(cleanUrl);

    if (!videoId) {
      setError('Invalid YouTube URL');
      return;
    }

    setError('');
    setLoading(true);
    setDescription('');

    try {
      const response = await fetch(`/api/youtube?v=${videoId}`);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setDescription(data.description || '');
    } catch (err: any) {
      setError(err.message || 'Failed to extract description. The video might be private or deleted.');
      setDescription('');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!description) return;
    navigator.clipboard.writeText(description);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Expanded AdSense-Optimized Article Content
  const articleContent = (
    <div className="space-y-12 text-muted-foreground leading-relaxed text-base">

      {/* Introduction Section */}
      <section className="space-y-5">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-3">
          <BarChart className="w-7 h-7 text-primary" />
          The Hidden Power of YouTube Description SEO
        </h2>
        <p>
          YouTube is officially the world's second-largest search engine, processing billions of queries every single month. While creators spend hours perfecting their video edits and thumbnail designs, they often treat the description box as an afterthought. This is a massive missed opportunity for organic growth.
        </p>
        <p>
          To rank your videos on the first page, your description must act as a dense, keyword-rich road map for YouTube's neural algorithm. Our free <strong>YouTube Description Extractor</strong> allows you to bypass the manual work and instantly analyze how top-performing creators structure their metadata, keyword density, and revenue-generating Call-to-Actions (CTAs).
        </p>
      </section>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:border-primary/30 transition-colors">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Hash className="w-6 h-6 text-primary" /> Metadata Insights
          </h3>
          <p className="text-sm leading-relaxed">
            By extracting descriptions from viral videos in your niche, you can easily identify hidden hashtags, secondary keywords, and the exact social media linking strategies that massive influencers use to boost their cross-platform growth and sponsorships.
          </p>
        </div>
        <div className="bg-card p-8 rounded-3xl border border-border shadow-sm hover:border-primary/30 transition-colors">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Globe className="w-6 h-6 text-primary" /> Competitive Research
          </h3>
          <p className="text-sm leading-relaxed">
            Understand how top competitors utilize video timestamps to improve "Audience Retention." Learning their specific chapter-marking style can help you organize your own content better, keeping viewers watching your videos for a much longer duration.
          </p>
        </div>
      </div>

      {/* NEW: Anatomy of a Perfect Description */}
      <section className="space-y-6 pt-6">
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-3">
          <LayoutTemplate className="w-7 h-7 text-primary" />
          Anatomy of a Perfect Description
        </h3>
        <p>
          Analyzing thousands of ranking videos reveals a clear, repetitive structure. The best descriptions are not just walls of text; they are meticulously organized landing pages for the video.
        </p>
        <div className="space-y-4 bg-muted/30 p-8 rounded-3xl border border-border">
          <div className="space-y-2">
            <h4 className="font-bold text-foreground text-lg">1. The "Hook" (First 200 Characters)</h4>
            <p className="text-sm">This is the most critical part of your SEO. Only the first two lines appear in YouTube search results before the "Show More" button. Your primary target keyword must be placed here naturally, written in a compelling way to encourage clicks.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-foreground text-lg">2. The "Body" (Detailed Summary)</h4>
            <p className="text-sm">Write a 150-300 word mini-blog post summarizing the video. Use variations of your main keyword (LSI keywords) throughout this section. This gives YouTube's text parsers maximum context about your content.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-foreground text-lg">3. The "Index" (Timestamps)</h4>
            <p className="text-sm">Always include video chapters starting exactly at <code>00:00</code>. This not only improves user experience but allows Google to index individual segments of your video directly into standard Google Search results.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-foreground text-lg">4. The "Action" (Links & Socials)</h4>
            <p className="text-sm">Place your affiliate links, Patreon, merchandise store, and other social media profiles at the bottom. Organize them cleanly with emojis or symbols.</p>
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="bg-primary/5 p-8 lg:p-10 rounded-3xl border border-primary/20 mt-10 shadow-sm">
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" /> Pro Tips for Creators (2026 Updated)
        </h3>
        <ul className="grid gap-5">
          <li className="flex gap-4 items-start">
            <div className="mt-1.5 h-2 w-2 min-w-[8px] rounded-full bg-primary shrink-0" />
            <span className="text-sm md:text-base"><strong>Prioritize Your Call-To-Action (CTA):</strong> If you are selling a course or promoting a lead magnet, always include that specific link within the top third of the description, above the "Show More" fold.</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="mt-1.5 h-2 w-2 min-w-[8px] rounded-full bg-primary shrink-0" />
            <span className="text-sm md:text-base"><strong>Avoid Keyword Stuffing:</strong> Do not just paste a massive list of tags at the bottom of your description. YouTube actively penalizes channels for this spam tactic. Always weave keywords into natural, readable sentences.</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="mt-1.5 h-2 w-2 min-w-[8px] rounded-full bg-primary shrink-0" />
            <span className="text-sm md:text-base"><strong>Use Strategic Hashtags:</strong> Include 3 to 5 highly relevant hashtags at the very bottom of your text. YouTube will automatically take the first three hashtags and display them prominently as clickable links above your video title.</span>
          </li>
        </ul>
      </section>
    </div>
  );

  // Expanded FAQs
  const faqs = [
    {
      q: "How long should a YouTube description be for optimal SEO?",
      a: "YouTube allows a generous limit of up to 5,000 characters per video description. For the best SEO ranking results, you should aim to write at least 250 to 500 words of unique, high-quality text that accurately describes the video content. Do not leave it blank."
    },
    {
      q: "Can I use this extractor tool for any YouTube video or format?",
      a: "Yes, you can extract text from any public YouTube video, including standard long-form videos, Live Stream archives, and YouTube Shorts. Just paste the URL into the search box, and our tool will retrieve the exact metadata instantly."
    },
    {
      q: "Do hashtags in the description actually help video performance?",
      a: "Yes, hashtags play a significant role in categorizing your video within YouTube's broader topic ecosystem. Furthermore, the first three hashtags you include in your description will appear as blue, clickable links right above your video title, driving niche traffic."
    },
    {
      q: "Is it safe to copy and paste another creator's description?",
      a: "Directly copy-pasting someone else's description verbatim can lead to 'Duplicate Content' issues, which harms your channel's authority. You should use this extractor tool for competitive research only. Analyze their structure, identify their keywords, and then write your own unique text to maintain your authentic brand voice."
    }
  ];

  return (
    <>
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: "YouTube Description Extractor & SEO Analyzer",
          operatingSystem: "Web",
          applicationCategory: "MultimediaApplication",
          offers: { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          description: "Free online tool to extract, copy, and analyze YouTube video descriptions for SEO research and metadata optimization."
        }}
      />

      {/* Adding FAQ Schema for Google Rich Snippets */}
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

      <SEOWrapper
        title="YouTube Description Extractor | Free Copy Text SEO Tool"
        articleTitle="Optimizing Your Video Metadata for Search Rankings"
        articleContent={articleContent}
        faqs={faqs}
      >
        <div className="space-y-24">
          <header className="text-center space-y-8 max-w-4xl mx-auto pt-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
              YT Description <span className="text-primary">Extractor</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
              Extract metadata and analyze descriptions from any YouTube video instantly to improve your search ranking strategy.
            </p>
          </header>

          <div className="max-w-3xl mx-auto w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative grow group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Youtube className="h-5 w-5 text-red-500" />
                </div>
                <input
                  type="text"
                  placeholder="Paste YouTube Video or Shorts URL here..."
                  className="block w-full pl-12 pr-4 py-5 border-2 border-border bg-background rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all text-base md:text-lg shadow-sm"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && extractDescription()}
                />
              </div>

              <button
                onClick={extractDescription}
                disabled={loading || !url}
                className="px-8 md:px-10 py-5 bg-primary text-white rounded-2xl font-black hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                <span className="hidden md:inline">{loading ? 'Analyzing...' : 'Extract'}</span>
                <span className="md:hidden">{loading ? 'Wait...' : 'Extract'}</span>
              </button>
            </div>

            {error && (
              <div className="text-destructive text-sm mt-4 p-4 bg-destructive/10 rounded-xl border border-destructive/20 flex items-center gap-2 font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0" /> {error}
              </div>
            )}
          </div>

          {description && (
            <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
                <h3 className="flex items-center gap-2 font-black text-xl text-foreground">
                  <FileText className="w-6 h-6 text-primary" /> Description Metadata
                </h3>
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-xl font-bold text-sm hover:bg-primary/20 transition-all border border-primary/20 w-full sm:w-auto"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied to Clipboard' : 'Copy All Text'}
                </button>
              </div>

              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm max-h-[600px] overflow-y-auto custom-scrollbar">
                <pre className="whitespace-pre-wrap font-sans text-muted-foreground leading-relaxed text-sm md:text-base">
                  {description}
                </pre>
              </div>

              <div className="bg-blue-500/10 p-5 rounded-xl border border-blue-500/20 flex gap-4 text-sm text-blue-600">
                <Info className="w-6 h-6 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="font-bold">SEO Note:</strong> Descriptions are heavily used by YouTube's algorithm to determine "Suggested Videos." Analyze the text above to understand exactly which keywords and phrases are causing this video to rank on the first page.
                </p>
              </div>
            </div>
          )}
        </div>
      </SEOWrapper>
    </>
  );
};

export default YouTubeDescription;