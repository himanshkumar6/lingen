
import React, { useState } from 'react';
import { Youtube, Download, ExternalLink, Image as ImageIcon, AlertCircle, Sparkles, Target, Info } from 'lucide-react';
import SEOWrapper from '../components/SEOWrapper';
import { JsonLd } from '../lib/seo';
import { extractYoutubeId } from '../lib/validation';

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

  const articleContent = (
    <div className="space-y-8">
      <section>
        <p className="text-lg leading-relaxed">
          The thumbnail is the digital handshake of your YouTube channel. It's the very first thing a viewer sees before they ever hear your voice or see your content. In the ecosystem of <strong>YouTube SEO</strong>, your <strong>Click-Through Rate (CTR)</strong> is the primary driver of the algorithm. Our <strong>YouTube Thumbnail Downloader</strong> allows you to analyze high-performing designs and retrieve your own assets in pristine quality.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Target className="text-primary w-6 h-6" /> Why 1080p Quality Matters
        </h3>
        <p>
          YouTube suggests a resolution of 1280x720, but the platform often stores even higher quality <code>maxresdefault</code> versions if the creator uploaded them. Using our tool, you can ensure you're seeing every pixel of the design. This is critical for <strong>Competitor Analysis</strong>—seeing exactly how a top creator balances contrast, saturation, and focal points to grab attention in a crowded feed.
        </p>
      </section>

      <section className="bg-muted/50 p-8 rounded-3xl border border-border">
        <h4 className="text-xl font-bold text-foreground mb-4">Thumbnail Design Best Practices (2025)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="font-bold text-primary">1. High Contrast Faces</p>
            <p className="text-sm text-muted-foreground">Exaggerated emotions and high-contrast skin tones are proven to increase CTR by up to 30%.</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-primary">2. Large, Readable Text</p>
            <p className="text-sm text-muted-foreground">Keep it to 3-5 words maximum. It must be readable even on the smallest mobile screens.</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-primary">3. Branded Consistency</p>
            <p className="text-sm text-muted-foreground">Use consistent colors and fonts so your subscribers can recognize your video instantly.</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-primary">4. Avoid "Dead" Space</p>
            <p className="text-sm text-muted-foreground">Every corner of your thumbnail should serve a purpose, but avoid looking cluttered.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Sparkles className="text-amber-500 w-6 h-6" /> Legal & Ethical Considerations
        </h3>
        <p>
          While our tool allows for easy downloading, it's vital to respect <strong>copyright laws</strong>. Never re-upload another creator's thumbnail for your own video. This can lead to community guideline strikes and permanent channel termination. Use these downloads for <em>inspiration, research, and mood-boarding</em> your own unique designs.
        </p>
      </section>
    </div>
  );

  const faqs = [
    { q: "Can I download 4K thumbnails?", a: "YouTube currently caps most thumbnail storage at 1080p (Full HD). Our tool fetches the highest resolution available on YouTube's servers." },
    { q: "Is this tool free to use?", a: "Yes, LinkGen.in provides this tool completely free of charge for the creator community." },
    { q: "Does this work for YouTube Shorts?", a: "Yes! YouTube Shorts also have thumbnails, and you can extract them using the Shorts video URL." },
    { q: "Why is the thumbnail blurry?", a: "This usually happens if the creator uploaded a low-resolution image. Our tool only provides what is available on the YouTube server." }
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
          description: "Download high-quality YouTube thumbnails for research and design inspiration."
        }}
      />
      <SEOWrapper
        title="YT Thumbnail Downloader"
        articleTitle="The Science of the Click: YouTube Thumbnails"
        articleContent={articleContent}
        faqs={faqs}
      >
        <div className="space-y-20 lg:space-y-24">

          {/* HERO */}
          <div className="max-w-2xl mx-auto space-y-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              YouTube Thumbnail Downloader
            </h1>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Download high-quality thumbnails instantly for research, inspiration,
              and competitive analysis.
            </p>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Youtube className="h-5 w-5 text-red-500 transition-transform group-focus-within:rotate-12" />
              </div>

              <input
                type="text"
                placeholder="Paste YouTube Video URL..."
                className="block w-full pl-12 pr-4 py-4 border border-border bg-background rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base shadow-sm"
                value={url}
                onChange={(e) => handleUrlChange(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-destructive text-sm font-medium flex items-center justify-center gap-1">
                <AlertCircle className="w-4 h-4" /> {error}
              </p>
            )}
          </div>

          {/* RESULT SECTION */}
          {videoId && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-5xl mx-auto">

              {/* IMAGE PREVIEW */}
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

              {/* DOWNLOAD OPTIONS */}
              <div className="space-y-6">
                <h3 className="font-semibold text-foreground text-lg">
                  Download Options
                </h3>

                <div className="grid gap-4">

                  {/* MAX */}
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
                        <p className="text-xs text-muted-foreground">
                          1920x1080 • Best quality available
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </button>

                  {/* HQ */}
                  <button
                    onClick={() => handleDownload("hq")}
                    className="flex items-center justify-between p-5 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-muted p-2 rounded-lg">
                        <Download className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">
                          Standard High Quality
                        </p>
                        <p className="text-xs text-muted-foreground">
                          480x360 • Smaller file
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </button>

                </div>

                {/* INFO BOX */}
                <div className="p-5 bg-muted/40 rounded-2xl border border-border flex gap-3 text-sm">
                  <Info className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Pro Tip:
                    </p>
                    <p className="text-muted-foreground">
                      Always check Max Resolution first. Many creators upload
                      higher-quality source images.
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
