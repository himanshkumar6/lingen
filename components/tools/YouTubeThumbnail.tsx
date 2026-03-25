"use client";

import React, { useState } from 'react';
import {
  Youtube, Download, ExternalLink, AlertCircle, Sparkles, Target, Info,
  BookOpen, Briefcase, Layout
} from 'lucide-react';
import SEOWrapper from '@/components/SEOWrapper';
import { JsonLd } from '@/lib/seo';
import { extractYoutubeId } from '@/lib/validation';

const YouTubeThumbnail: React.FC = () => {
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [error, setError] = useState('');

  const handleUrlChange = (input: string) => {
    setUrl(input);
    const id = extractYoutubeId(input);
    if (id) {
      setVideoId(id);
      setError('');
    } else {
      setVideoId('');
      if (input) setError('Invalid YouTube URL');
    }
  };

  const handleDownload = (quality: string) => {
    let thumbUrl = '';
    switch (quality) {
      case 'max': thumbUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; break;
      case 'hq': thumbUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; break;
      case 'mq': thumbUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`; break;
      default: thumbUrl = `https://img.youtube.com/vi/${videoId}/default.jpg`;
    }
    window.open(thumbUrl, '_blank');
  };

  // Expanded AdSense-Optimized Article Content
  const articleContent = (
    <div className="space-y-12 text-muted-foreground leading-relaxed text-base">

      {/* Introduction Section */}
      <section className="space-y-5">
        <p className="text-lg">
          The thumbnail is the digital handshake of your YouTube channel. In the modern creator economy, it is the very first thing a viewer sees before they ever hear your voice, read your title, or watch your carefully edited content.
        </p>
        <p>
          In the complex ecosystem of <strong>YouTube SEO</strong>, your <strong>Click-Through Rate (CTR)</strong> is the absolute primary driver of the algorithm. If your video has a low CTR, YouTube stops recommending it—regardless of how good the actual video is. Our free <strong>YouTube Thumbnail Downloader</strong> allows creators, marketers, and designers to extract and analyze high-performing designs from the platform, helping you build better assets for your own channel.
        </p>
      </section>

      {/* NEW: How to Use Section */}
      <section className="space-y-5">
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
          <BookOpen className="text-primary w-7 h-7" />
          How to Download a YouTube Thumbnail
        </h3>
        <p>
          Extracting a thumbnail image using our tool is completely frictionless. Follow these three simple steps to grab any video cover in seconds:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Copy the Video URL:</strong> Go to YouTube and find the video whose thumbnail you want to save. Copy the link from your browser's address bar or use the "Share" button to copy the URL.</li>
          <li><strong>Paste into the Extractor:</strong> Paste the copied link into the search box above. Our tool automatically detects the unique Video ID format (including YouTube Shorts).</li>
          <li><strong>Select Quality & Download:</strong> The tool will generate a preview instantly. Click on "Max Resolution" (1080p) or "Standard High Quality" (720p/480p) to open and save the image directly to your device.</li>
        </ol>
      </section>

      {/* Technical/Quality Section */}
      <section className="space-y-5">
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
          <Target className="text-primary w-7 h-7" />
          Why 1080p (MaxRes) Quality Matters
        </h3>
        <p>
          YouTube officially suggests a minimum thumbnail resolution of 1280x720 pixels (720p). However, top-tier creators almost always upload their files in 1920x1080 (1080p). The platform stores these higher quality <code>maxresdefault</code> versions on its backend servers.
        </p>
        <p>
          Using our downloader, you bypass the compressed versions shown on the homepage and retrieve the absolute highest quality asset available. This is critical for <strong>Competitor Analysis</strong>. By viewing a 1080p thumbnail, graphic designers can zoom in to see exactly how a top creator uses edge lighting, drop shadows, color grading, and focal blurring to make their subject pop off the screen.
        </p>
      </section>

      {/* NEW: Use Cases Section */}
      <section className="space-y-5">
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
          <Briefcase className="text-primary w-7 h-7" />
          Who Should Use This Tool?
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <Layout className="w-5 h-5 text-primary shrink-0 mt-1" />
            <span><strong>Content Creators & YouTubers:</strong> Build a "swipe file" or mood board of high-performing thumbnails in your specific niche to inspire your next Photoshop session.</span>
          </li>
          <li className="flex items-start gap-3">
            <Layout className="w-5 h-5 text-primary shrink-0 mt-1" />
            <span><strong>Graphic Designers:</strong> Extract thumbnails to study typography choices, color combinations, and layout structuring used by massive channels like MrBeast or Ali Abdaal.</span>
          </li>
          <li className="flex items-start gap-3">
            <Layout className="w-5 h-5 text-primary shrink-0 mt-1" />
            <span><strong>Digital Marketers:</strong> Grab thumbnails to use in presentations, case studies, or social media blog posts when discussing successful video marketing campaigns.</span>
          </li>
        </ul>
      </section>

      {/* Best Practices Grid */}
      <section className="bg-muted/30 p-8 rounded-3xl border border-border mt-8">
        <h4 className="text-xl lg:text-2xl font-bold text-foreground mb-6">Thumbnail Design Best Practices (2026 Updated)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="font-bold text-primary text-lg">1. High Contrast Faces</p>
            <p className="text-sm leading-relaxed">Exaggerated emotional expressions and highly contrasted skin tones against a dark or vibrant background are proven to increase Click-Through Rates by up to 30%. Humans naturally look at faces first.</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-primary text-lg">2. Large, Minimalist Text</p>
            <p className="text-sm leading-relaxed">Keep text to an absolute maximum of 3-5 words. Over 70% of YouTube traffic is mobile, meaning your text must remain easily readable even when the thumbnail is scaled down to the size of a postage stamp.</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-primary text-lg">3. Branded Visual Consistency</p>
            <p className="text-sm leading-relaxed">Use consistent color palettes, unique borders, or signature fonts across all your uploads. This ensures that your loyal subscribers instantly recognize your video in their subscription feed without even reading the channel name.</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-primary text-lg">4. The Rule of Thirds</p>
            <p className="text-sm leading-relaxed">Avoid placing important text or your face in the bottom-right corner, as YouTube's timestamp overlay will block it. Keep your main subject aligned using the classic photography rule of thirds for a balanced look.</p>
          </div>
        </div>
      </section>

      {/* Legal & Ethical Section */}
      <section className="space-y-5">
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
          <Sparkles className="text-amber-500 w-7 h-7" />
          Legal & Ethical Considerations
        </h3>
        <p>
          While our HD thumbnail grabber makes it incredibly easy to download images, it is vital to respect intellectual property and <strong>copyright laws</strong>. Thumbnails are the creative property of the original channel owner or their hired graphic designer.
        </p>
        <p>
          You should <strong>never</strong> re-upload another creator's exact thumbnail for your own video. Doing so violates YouTube's community guidelines and can result in severe copyright strikes or permanent channel termination. You should exclusively use these downloaded assets for <em>inspiration, educational research, A/B testing analysis, and private mood-boarding</em> to craft your own unique, transformative designs.
        </p>
      </section>
    </div>
  );

  // Expanded FAQs
  const faqs = [
    {
      q: "Can I download 4K resolution thumbnails using this tool?",
      a: "No, because YouTube does not natively store thumbnails in 4K resolution. The absolute maximum resolution YouTube saves and serves for video covers is 1920x1080 (Full HD). Our tool automatically fetches this 'maxresdefault' file from YouTube's servers whenever it is available."
    },
    {
      q: "Is this thumbnail extractor completely free to use?",
      a: "Yes, absolutely! LinkGen.in provides this YouTube Thumbnail Downloader completely free of charge. There are no hidden fees, no required account registrations, and no limits on how many video thumbnails you can download in a single day."
    },
    {
      q: "Does this downloader work for YouTube Shorts and Live Streams?",
      a: "Yes! YouTube Shorts and Live Stream archives both generate unique video IDs just like standard long-form videos. Simply paste the URL of the Short or the Live Stream, and our tool will extract the associated cover image instantly."
    },
    {
      q: "Why is the downloaded thumbnail image blurry or low quality?",
      a: "If the 'Max Resolution' option gives you a small or blurry image, it means the original creator uploaded a low-resolution file (like 480p or 720p), or the video is very old (pre-2015) before HD thumbnails became standard. Our tool can only retrieve the maximum quality that exists on YouTube's servers."
    },
    {
      q: "Where do downloaded thumbnails save on my device?",
      a: "When you click to download, the image will open in a new secure browser tab. From there, you can right-click (or long-press on mobile) and select 'Save Image As' to download it directly to your device's default Downloads folder or Photos app."
    }
  ];

  return (
    <>
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: "YouTube Thumbnail Downloader",
          operatingSystem: "Web",
          applicationCategory: "MultimediaApplication",
          offers: { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          description: "Download high-quality 1080p YouTube thumbnails for research, SEO analysis, and design inspiration instantly."
        }}
      />
      <SEOWrapper
        title="Free HD YouTube Thumbnail Downloader | Save 1080p Images"
        articleTitle="The Science of the Click: YouTube Thumbnails"
        articleContent={articleContent}
        faqs={faqs}
      >
        <div className="space-y-20 lg:space-y-24">
          <div className="max-w-2xl mx-auto space-y-8 text-center pt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              YouTube Thumbnail Downloader
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Download high-quality HD thumbnails instantly for research, inspiration,
              and competitive channel analysis.
            </p>
            <div className="relative group mt-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Youtube className="h-5 w-5 text-red-500 transition-transform group-focus-within:rotate-12" />
              </div>
              <input
                type="text"
                placeholder="Paste YouTube Video URL here..."
                className="block w-full pl-12 pr-4 py-4 border border-border bg-background rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base shadow-sm"
                value={url}
                onChange={(e) => handleUrlChange(e.target.value)}
              />
            </div>
            {error && (
              <p className="text-destructive text-sm font-medium flex items-center justify-center gap-1 mt-3">
                <AlertCircle className="w-4 h-4" /> {error}
              </p>
            )}
          </div>

          {videoId && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-5xl mx-auto">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-lg">
                  Thumbnail Preview
                </h3>
                <div className="relative overflow-hidden rounded-2xl border border-border shadow-md">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="YouTube Thumbnail Preview"
                    className="w-full transition-transform duration-500 hover:scale-[1.02]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold text-foreground text-lg">
                  Download Options
                </h3>
                <div className="grid gap-4">
                  <button
                    onClick={() => handleDownload("max")}
                    className="flex items-center justify-between p-5 bg-primary/5 border border-primary/20 rounded-2xl hover:bg-primary/10 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-white p-2 rounded-lg">
                        <Download className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">
                          Max Resolution
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          1920x1080 • Best quality available
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </button>

                  <button
                    onClick={() => handleDownload("hq")}
                    className="flex items-center justify-between p-5 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-muted p-2 rounded-lg text-foreground">
                        <Download className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">
                          Standard High Quality
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          480x360 • Smaller file size
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>

                <div className="p-5 bg-muted/40 rounded-2xl border border-border flex gap-3 text-sm mt-6">
                  <Info className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Pro Tip:
                    </p>
                    <p className="text-muted-foreground">
                      Always click "Max Resolution" first. Most modern creators upload in full 1080p. If the image doesn't load, use the standard quality fallback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </SEOWrapper>
    </>
  );
};

export default YouTubeThumbnail;