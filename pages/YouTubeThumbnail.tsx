
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
        <div className="space-y-24">
          <div className="max-w-3xl mx-auto space-y-10 text-center">
            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
              YT Thumbnail Downloader
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Download high-quality YouTube thumbnails for research and design inspiration.
            </p>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Youtube className="h-6 w-6 text-red-500 transition-transform group-focus-within:rotate-12" />
              </div>
              <input
                type="text"
                placeholder="Paste Video URL (e.g., https://youtu.be/...)"
                className="block w-full pl-12 pr-4 py-5 border-2 border-border bg-background rounded-2xl focus:border-primary outline-none transition-all text-lg shadow-sm"
                value={url}
                onChange={(e) => {
                  handleUrlChange(e.target.value);
                }}
              />
            </div>
            {error && <p className="text-destructive text-sm font-bold flex items-center justify-center gap-1 animate-pulse"><AlertCircle className="w-4 h-4" /> {error}</p>}
          </div>

          {videoId && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-foreground">Image Preview</h3>
                  <span className="text-[10px] font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20 uppercase tracking-tighter">Verified Link</span>
                </div>
                <div className="group relative overflow-hidden rounded-3xl border-4 border-border shadow-2xl">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="YouTube Thumbnail Preview"
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <ImageIcon className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-black text-foreground">Download in High Definition</h3>
                <div className="grid gap-4">
                  <button
                    onClick={() => handleDownload('max')}
                    className="flex items-center justify-between p-5 bg-primary/5 border-2 border-primary/10 rounded-2xl hover:bg-primary/10 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary p-2.5 rounded-xl text-white shadow-lg shadow-primary/30">
                        <Download className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="font-black text-foreground">Max Resolution (4K/HD)</p>
                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">1920x1080 • Best for analysis</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                  </button>

                  <button
                    onClick={() => handleDownload('hq')}
                    className="flex items-center justify-between p-5 bg-card border-2 border-border rounded-2xl hover:border-primary/40 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-slate-700 p-2.5 rounded-xl text-white">
                        <Download className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-foreground">Standard High Quality</p>
                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">480x360 • Smaller file size</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 transition-colors" />
                  </button>
                </div>

                <div className="p-5 bg-primary/10 rounded-2xl border border-primary/20 flex gap-4 text-sm text-primary">
                  <Info className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold mb-1">Pro Strategy:</p>
                    <p>Always check the 'Max Resolution' first. Many top creators use 4K source files which our tool can retrieve for your design mood-board.</p>
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
