import React, { useState, useEffect } from 'react';
import { Copy, Trash2, Info } from 'lucide-react';
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
          Bio Character Counter
        </h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Write your social media bios and descriptions perfectly within platform limits with real-time analytics.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* TEXT AREA */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-card p-6 rounded-2xl border border-border space-y-4">

            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-muted-foreground">
                Type or paste your text
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
              placeholder="Start typing..."
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
            Platform Limits
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
              Tip: Shorter bios are easier to read on mobile. Aim for 80–100 characters for Instagram.
            </p>
          </div>
        </div>

      </div>
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
