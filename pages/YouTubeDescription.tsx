
import React, { useState } from 'react';
import { Youtube, Search, Copy, Check, FileText, Loader2, AlertCircle, Info, TrendingUp, Target, Zap } from 'lucide-react';
import SEOWrapper from '../components/SEOWrapper';
import { JsonLd } from '../lib/seo';
import { fetchVideoMetadata } from '../services/youtube';
import { isValidYoutubeUrl, sanitizeInput } from '../lib/validation';

const YouTubeDescription: React.FC = () => {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const extractDescription = async () => {
    const cleanUrl = sanitizeInput(url);
    if (!isValidYoutubeUrl(cleanUrl)) {
      setError('Please enter a valid YouTube video URL (e.g. https://youtube.com/watch?v=...)');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const data = await fetchVideoMetadata(cleanUrl);
      setDescription(data.description);
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

  const articleContent = (
    <div className="space-y-8">
      <section>
        <p className="text-lg leading-relaxed">
          In the competitive landscape of digital video, your <strong>YouTube Description</strong> acts as the connective tissue between your content and the search engine algorithm. While many creators focus solely on the visual aspects of their videos, high-ranking channels know that the text accompanying their video is a goldmine for SEO and viewer conversion. Our <strong>YouTube Description Extractor</strong> is designed to help you decode the strategies of top performers.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Target className="text-primary w-6 h-6" /> The Strategy of "Above the Fold" Content
        </h3>
        <p>
          The first two sentences of your description are arguably the most important real estate on your entire channel. This is the snippet that appears in Google and YouTube search results. By extracting descriptions from successful videos in your niche, you'll notice a pattern: they almost always include their primary keyword within the first 100 characters while providing a clear value proposition to the viewer.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="text-green-500 w-6 h-6" /> Why Timestamps and Chapters are Non-Negotiable
        </h3>
        <p>
          As we move into 2025, user retention is the king of metrics. YouTube's "Chapters" feature, powered by timestamps in the description, allows users to navigate directly to the information they need. This not only improves user experience but also allows your video to appear in "Key Moments" on Google Search results, significantly increasing your organic reach. Our extractor helps you see how competitors structure these timestamps for maximum clarity.
        </p>
      </section>

      <section className="bg-muted/50 p-6 rounded-2xl border border-border">
        <h4 className="font-bold text-foreground mb-2">The Creator's Research Workflow:</h4>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Extract descriptions from the top 5 videos for your target keyword.</li>
          <li>Analyze their use of secondary keywords and long-tail phrases.</li>
          <li>Observe their Call-to-Action (CTA) placement—are they pushing for subs, newsletters, or affiliate sales?</li>
          <li>Note their hashtag strategy (YouTube typically only counts the first three as highly relevant).</li>
        </ul>
      </section>
    </div>
  );

  const faqs = [
    { q: "How long should a YouTube description be?", a: "YouTube allows up to 5,000 characters. For best SEO results, aim for at least 250-500 words of unique, high-quality text." },
    { q: "Do hashtags in the description help?", a: "Yes, but don't overdo it. The first three hashtags appear above your video title and are indexed most heavily." },
    { q: "Can I use this tool to copy descriptions?", a: "We recommend using this tool for research and inspiration only. Copying descriptions directly can lead to duplicate content flags and harms your brand's unique voice." }
  ];

  return (
    <>
      <JsonLd
        type="SoftwareApplication"
        data={{
          name: "YouTube Description Extractor",
          operatingSystem: "Web",
          applicationCategory: "BusinessApplication",
          offers: { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          description: "Analyze and extract metadata from YouTube descriptions to improve your video SEO."
        }}
      />
      <SEOWrapper
        title="YT SEO Tool"
        articleTitle="Mastering the Art of the YouTube Description"
        articleContent={articleContent}
        faqs={faqs}
      >
        <div className="space-y-24">
          <header className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
              YT Description Extractor
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Extract and analyze descriptions from any YouTube video for SEO research.
            </p>
          </header>

          <div className="max-w-3xl mx-auto w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Youtube className="h-5 w-5 text-red-500 group-focus-within:scale-110 transition-transform" />
                </div>
                <input
                  type="text"
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="block w-full pl-12 pr-4 py-5 border-2 border-border bg-background rounded-2xl focus:border-primary outline-none transition-all text-lg shadow-sm"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && extractDescription()}
                />
              </div>
              <button
                onClick={extractDescription}
                disabled={loading || !url}
                className="px-10 py-5 bg-primary text-white rounded-2xl font-black hover:opacity-90 active:scale-95 transition-all disabled:bg-slate-300 flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                {loading ? 'Analyzing...' : 'Extract'}
              </button>
            </div>
            {error && <div className="text-destructive text-sm mt-4 p-4 bg-destructive/10 rounded-xl border border-destructive/20 flex items-center gap-2 font-semibold animate-in fade-in zoom-in"><AlertCircle className="w-4 h-4" /> {error}</div>}
          </div>

          {description && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h3 className="flex items-center gap-2 font-black text-xl text-foreground">
                  <FileText className="w-6 h-6 text-primary" /> Analysis Results
                </h3>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-xl font-bold text-sm hover:bg-primary/20 transition-all border border-primary/20"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied to Clipboard' : 'Copy Text'}
                </button>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6 md:p-8 border border-border shadow-inner max-h-[500px] overflow-y-auto custom-scrollbar">
                <pre className="whitespace-pre-wrap font-sans text-foreground leading-relaxed text-base">
                  {description}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50">
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-tighter mb-1">Character Count</p>
                  <p className="text-2xl font-black text-indigo-700 dark:text-indigo-300">{description.length}</p>
                </div>
                <div className="p-4 rounded-2xl bg-pink-50 dark:bg-pink-900/20 border border-pink-100 dark:border-pink-800/50">
                  <p className="text-[10px] font-black text-pink-400 uppercase tracking-tighter mb-1">Word Count</p>
                  <p className="text-2xl font-black text-pink-700 dark:text-pink-300">{description.split(/\s+/).length}</p>
                </div>
                <div className="p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/50">
                  <p className="text-[10px] font-black text-green-400 uppercase tracking-tighter mb-1">Links Found</p>
                  <p className="text-2xl font-black text-green-700 dark:text-green-300">{(description.match(/https?:\/\/[^\s]+/g) || []).length}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </SEOWrapper>
    </>
  );
};

export default YouTubeDescription;
