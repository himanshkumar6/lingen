import React, { useState } from 'react';
import { Smile, Sparkles, Copy, Check, Loader2 } from 'lucide-react';
import { generateAnimeNames } from '../services/gemini';
import { Container } from '../components/Layout/Container';

const AnimeNames: React.FC = () => {
  const [theme, setTheme] = useState('Cyberpunk');
  const [type, setType] = useState('Protagonist');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setError('');
    setLoading(true);
    try {
      const names = await generateAnimeNames(theme, type);
      setResults(names);
    } catch (err: any) {
      // Avoid mentions of API keys or environment setup in production UI
      setError('Failed to generate names. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Container className="py-16 md:py-24 lg:py-32 space-y-24">
      <header className="text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
          Anime Name Generator
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
          Generate unique, meaningful, and cool anime-style names for your brand, characters, or online handles.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-muted-foreground">Name Theme</label>
            <select
              className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-xl focus:ring-2 focus:ring-primary outline-none transition"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option>Cyberpunk / Futuristic</option>
              <option>Traditional / Feudal Japan</option>
              <option>Fantasy / Isekai</option>
              <option>School Life / Modern</option>
              <option>Dark / Edgy</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-muted-foreground">Role Type</label>
            <select
              className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-xl focus:ring-2 focus:ring-primary outline-none transition"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Protagonist</option>
              <option>Villain / Antagonist</option>
              <option>Sidekick / Support</option>
              <option>Group / Clan Name</option>
              <option>Signature Move / Skill</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors disabled:bg-muted shadow-lg shadow-orange-500/20"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Smile className="w-5 h-5" />}
            {loading ? 'Generating...' : 'Get Names'}
          </button>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold text-foreground px-1">Cool Generated Names</h2>
          {results.length > 0 ? (
            results.map((name, idx) => (
              <div key={idx} className="bg-card p-4 rounded-xl border border-border shadow-sm flex items-center justify-between group animate-in slide-in-from-right duration-300" style={{ animationDelay: `${idx * 50}ms` }}>
                <div className="font-bold text-foreground text-lg">
                  {name}
                </div>
                <button
                  onClick={() => copyToClipboard(name, idx)}
                  className="p-2 text-slate-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all"
                >
                  {copiedIndex === idx ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            ))
          ) : (
            <div className="h-64 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-muted-foreground p-8 text-center bg-card/30">
              <Sparkles className="w-10 h-10 mb-4 opacity-20" />
              <p>Your anime names will appear here. Choose a theme and start generating!</p>
            </div>
          )}
        </section>
      </div>

      <article className="prose prose-neutral dark:prose-invert max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm text-muted-foreground">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Creating a Memorable Brand with Anime-Inspired Names</h2>
        <div className="space-y-6">
          <p>
            Anime culture has a massive influence on modern branding, from streetwear labels to gaming streamers. An <strong>Anime-inspired name</strong> often carries deep meaning, aesthetic appeal, and a sense of power or mystery. Our generator uses AI to synthesize traditional naming conventions with modern creative themes.
          </p>
          <h3 className="text-xl font-bold text-foreground">Understanding Japanese Naming Roots</h3>
          <p>
            Many anime names use <em>Kanji</em> combinations that represent nature, elements, or personality traits. For example, "Yuki" often relates to snow, while "Kaito" might relate to the ocean or soaring. Our tool tries to incorporate these symbolic elements into the suggestions it provides.
          </p>
          <h3 className="text-xl font-bold text-foreground">Why Theme Matters</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cyberpunk:</strong> Focuses on technology, neon, and grit (e.g., Nexus-7, Cybershade).</li>
            <li><strong>Traditional:</strong> Focuses on heritage, samurai, and classic spirits (e.g., Ryuunosuke, Hanzo).</li>
            <li><strong>Fantasy:</strong> Focuses on magic, elemental powers, and grand titles (e.g., Aether-mage, Valerius).</li>
          </ul>
        </div>
      </article>
    </Container>
  );
};

export default AnimeNames;