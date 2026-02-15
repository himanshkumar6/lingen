import React, { useState } from 'react';
import { Youtube, Search, Copy, Check, FileText, Loader2, AlertCircle, BarChart, Hash, Globe, Info } from 'lucide-react';
import SEOWrapper from '../components/SEOWrapper';
import { JsonLd } from '../lib/seo';
import { isValidYoutubeUrl, sanitizeInput } from '../lib/validation';

const YouTubeDescription: React.FC = () => {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_YT_API_KEY;

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
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
      );

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        throw new Error('Video not found or private');
      }

      const snippet = data.items[0].snippet;

      setDescription(snippet.description || '');
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

  // ✅ FIXED: High Value Content for SEO
  const articleContent = (
    <div className="space-y-10 text-muted-foreground leading-relaxed">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <BarChart className="w-6 h-6 text-primary" />
          The Importance of YouTube Description SEO
        </h2>
        <p>
          YouTube is the world's second-largest search engine. To rank your videos, your description must act as a
          road map for YouTube's algorithm. Our <strong>YouTube Description Extractor</strong> allows you to analyze
          how top-performing creators structure their metadata, keyword density, and call-to-actions (CTAs).
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card p-6 rounded-2xl border border-border">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Hash className="w-5 h-5 text-primary" /> Metadata Insights
          </h3>
          <p className="text-sm">
            By extracting descriptions, you can identify hidden hashtags and social media linking strategies
            that influencers use to boost their engagement rates and cross-platform growth.
          </p>
        </div>
        <div className="bg-card p-6 rounded-2xl border border-border">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" /> Competitive Research
          </h3>
          <p className="text-sm">
            Understand how competitors use timestamps to improve "Audience Retention." Learning their
            chapter-marking style can help you keep viewers on your videos longer.
          </p>
        </div>
      </div>

      <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
        <h3 className="text-xl font-bold text-foreground mb-4">Pro Tips for YouTube Descriptions</h3>
        <ul className="grid gap-4">
          <li className="flex gap-3">
            <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
            <span><strong>The First 200 Characters:</strong> This is the most critical part. Ensure your primary keyword appears here as it shows up in search snippets.</span>
          </li>
          <li className="flex gap-3">
            <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
            <span><strong>Call-To-Action (CTA):</strong> Always include a link to subscribe or a lead magnet within the top third of the description.</span>
          </li>
          <li className="flex gap-3">
            <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
            <span><strong>Timestamp Accuracy:</strong> Use the 00:00 format to help Google index your video chapters for "Key Moments" in search results.</span>
          </li>
        </ul>
      </section>
    </div>
  );

  const faqs = [
    { q: "How long should a YouTube description be?", a: "YouTube allows up to 5,000 characters. For best SEO results, aim for at least 250-500 words of unique, high-quality text that describes the video content accurately." },
    { q: "Can I use this tool for any video?", a: "Yes, you can extract descriptions from any public YouTube video or Short. Just paste the URL and our tool will retrieve the metadata instantly." },
    { q: "Do hashtags in the description help?", a: "Yes, hashtags help in categorizing your video. The first three hashtags you include will appear above your video title on some devices." },
    { q: "Is copying descriptions bad for SEO?", a: "Directly copying can lead to 'Duplicate Content' issues. Use this tool for research and then write your own unique description to maintain your brand voice." }
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
          description: "Free tool to extract and analyze YouTube video descriptions for SEO research and metadata optimization."
        }}
      />

      <SEOWrapper
        title="YouTube Description Extractor - Free SEO Tool"
        articleTitle="Optimizing Your Video Metadata for Search Rankings"
        articleContent={articleContent}
        faqs={faqs}
      >
        <div className="space-y-24">
          <header className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
              YT Description <span className="text-primary">Extractor</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Extract metadata and analyze descriptions from any YouTube video to improve your ranking strategy.
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
                  placeholder="Paste YouTube Video or Shorts URL..."
                  className="block w-full pl-12 pr-4 py-5 border-2 border-border bg-background rounded-2xl focus:border-primary outline-none transition-all text-lg shadow-sm"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && extractDescription()}
                />
              </div>

              <button
                onClick={extractDescription}
                disabled={loading || !url}
                className="px-10 py-5 bg-primary text-white rounded-2xl font-black hover:opacity-90 active:scale-95 transition-all disabled:bg-primary flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                {loading ? 'Analyzing...' : 'Extract'}
              </button>
            </div>

            {error && (
              <div className="text-destructive text-sm mt-4 p-4 bg-destructive/10 rounded-xl border border-destructive/20 flex items-center gap-2 font-semibold">
                <AlertCircle className="w-4 h-4" /> {error}
              </div>
            )}
          </div>

          {description && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h3 className="flex items-center gap-2 font-black text-xl text-foreground">
                  <FileText className="w-6 h-6 text-primary" /> Description Metadata
                </h3>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-xl font-bold text-sm hover:bg-primary/20 transition-all border border-primary/20"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy Text'}
                </button>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6 md:p-8 border border-border shadow-inner max-h-125 overflow-y-auto">
                <pre className="whitespace-pre-wrap font-sans text-foreground leading-relaxed text-base">
                  {description}
                </pre>
              </div>

              <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 flex gap-3 text-sm text-blue-600">
                <Info className="w-5 h-5 shrink-0" />
                <p>
                  <strong>Note:</strong> Descriptions are often used by YouTube to determine "Related Videos." Analyze the keywords above to understand why this video is ranking.
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