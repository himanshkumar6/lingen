import React, { useState, useEffect } from 'react';
import { Copy, Trash2, Info, Target, Zap, BarChart3, Globe } from 'lucide-react';
import { Container } from '../components/Layout/Container';

const STORAGE_KEY = "bio-counter-text";

const BioCounter: React.FC = () => {
  const [text, setText] = useState('');

  // ✅ Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setText(saved);
      }
    }
  }, []);

  // ✅ Save to localStorage whenever text changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, text);
    }
  }, [text]);

  const handleClear = () => {
    setText('');
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const platforms = [
    { name: 'Instagram Bio', limit: 150 },
    { name: 'Twitter / X', limit: 280 },
    { name: 'TikTok Bio', limit: 80 },
    { name: 'YouTube Description', limit: 5000 },
  ];

  return (
    <Container className="py-16 md:py-24 lg:py-32 space-y-20">

      {/* HEADER */}
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight">
          Social Media <span className="text-primary">Bio Character Counter</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          The ultimate utility to craft pixel-perfect bios. Monitor character counts, word density, and platform compliance in real-time.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* TEXT AREA */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-card p-6 rounded-2xl border border-border space-y-4">

            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-muted-foreground">
                Bio Workspace
              </label>

              <div className="flex gap-2">
                <button
                  onClick={() => navigator.clipboard.writeText(text)}
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition"
                  title="Copy"
                >
                  <Copy className="w-4 h-4" />
                </button>

                <button
                  onClick={handleClear}
                  className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition"
                  title="Clear"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <textarea
              className="w-full h-64 px-4 py-4 border border-border bg-background text-foreground rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm leading-relaxed resize-none transition"
              placeholder="Craft your bio here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <StatCard
                label="Characters"
                value={text.length}
                highlight
              />
              <StatCard
                label="Words"
                value={text.trim() === '' ? 0 : text.trim().split(/\s+/).length}
              />
              <StatCard
                label="Sentences"
                value={text.split(/[.!?]+/).filter(Boolean).length}
              />
            </div>
          </div>
        </div>

        {/* PLATFORM LIMITS */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-foreground">
            Platform Specifications
          </h2>

          <div className="space-y-4">
            {platforms.map(platform => {
              const percentage = Math.min((text.length / platform.limit) * 100, 100);
              const isOver = text.length > platform.limit;

              return (
                <div
                  key={platform.name}
                  className="bg-card p-4 rounded-xl border border-border space-y-2"
                >
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-foreground">
                      {platform.name}
                    </span>

                    <span className={`font-semibold ${isOver ? 'text-destructive' : 'text-muted-foreground'}`}>
                      {text.length} / {platform.limit}
                    </span>
                  </div>

                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${isOver ? 'bg-destructive' : 'bg-primary'}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* TIP BOX */}
          <div className="bg-primary/10 p-4 rounded-xl border border-primary/20 flex gap-3 text-sm text-primary">
            <Info className="w-5 h-5 shrink-0" />
            <p>
              <strong>Optimization Tip:</strong> Mobile users prefer bios under 100 characters. Keep the most important info in the first 2 lines.
            </p>
          </div>
        </div>
      </div>

      {/* --- NEW HIGH-VALUE SEO CONTENT SECTION --- */}
      <section className="pt-20 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Why Character Count Matters for SEO & Branding
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your social media bio is your digital elevator pitch. Every platform has strict character limitations, 
                and exceeding them can lead to cut-off text, losing your call-to-action (CTA). Using an accurate 
                <strong> bio character counter</strong> ensures your message remains professional and complete.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card p-5 rounded-2xl border border-border">
                <Zap className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-bold mb-2">Real-time Analysis</h3>
                <p className="text-sm text-muted-foreground">Get instant feedback on word count, sentence structure, and total length as you type.</p>
              </div>
              <div className="bg-card p-5 rounded-2xl border border-border">
                <Globe className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-bold mb-2">Cross-Platform</h3>
                <p className="text-sm text-muted-foreground">Optimized for Instagram, TikTok, X (Twitter), and YouTube description standards.</p>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-8 rounded-3xl border border-border space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-primary" />
              Best Practices for 2026 Bios
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <span className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">1</span>
                <span><strong>Instagram:</strong> Use line breaks and emojis to save space while conveying personality.</span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">2</span>
                <span><strong>Twitter (X):</strong> Keywords are searchable here. Include relevant industry terms in your 280 characters.</span>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">3</span>
                <span><strong>TikTok:</strong> With only 80 characters, lead with your most impressive achievement or offer immediately.</span>
              </li>
            </ul>
            <div className="pt-4 text-xs text-muted-foreground italic border-t border-border">
              Note: Character limits include spaces and emojis. Emojis usually count as 2 characters.
            </div>
          </div>
        </div>
      </section>

    </Container>
  );
};

/* ---------- Reusable Stat Card ---------- */
const StatCard = ({
  label,
  value,
  highlight = false
}: {
  label: string;
  value: number;
  highlight?: boolean;
}) => (
  <div className="bg-muted/50 p-4 rounded-xl border border-border">
    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
      {label}
    </p>
    <p className={`text-2xl font-bold ${highlight ? 'text-primary' : 'text-foreground'}`}>
      {value}
    </p>
  </div>
);

export default BioCounter;