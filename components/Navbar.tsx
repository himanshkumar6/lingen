import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, ChevronDown, LayoutGrid, BookOpen, Sun, Moon, Instagram, Youtube, FileText, Menu, X } from 'lucide-react';
import { useTheme } from '../lib/theme';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Layout/Container';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [toolsOpen, setToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`sticky top-0 z-[100] w-full transition-all duration-500 ${scrolled
      ? "border-b border-border/40 bg-background/60 py-3 backdrop-blur-xl"
      : "bg-transparent py-5"
      }`}>
      <Container className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
            <Zap className="h-6 w-6 fill-current" />
          </div>
          <span className="text-xl font-extrabold tracking-tighter">
            LinkGen<span className="text-primary">.in</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-semibold transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>Home</Link>

          <div
            className="relative"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
              Tools <ChevronDown className={`h-4 w-4 transition-transform ${toolsOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {toolsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full -left-4 w-72 pt-4"
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-primary/5">
                    <div className="grid gap-1">
                      {[
                        { to: "/instagram-bio-generator", icon: <Instagram className="text-pink-500" />, title: "Bio Generator", sub: "AI Content" },
                        { to: "/youtube-thumbnail-downloader", icon: <Youtube className="text-red-500" />, title: "Thumbnail Pro", sub: "HQ Downloads" },
                        { to: "/youtube-description-extractor", icon: <FileText className="text-blue-500" />, title: "SEO Extract", sub: "Metadata analysis" },
                      ].map((item) => (
                        <Link key={item.to} to={item.to} className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-secondary">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background border border-border">
                            {/* Fix: Added explicit props type to React.ReactElement for cloneElement */}
                            {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5" })}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-foreground">{item.title}</p>
                            <p className="text-[10px] font-medium text-muted-foreground">{item.sub}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-border p-2">
                      <Link to="/" className="flex items-center justify-center gap-2 rounded-lg bg-secondary py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white">
                        <LayoutGrid className="h-3.5 w-3.5" /> View All Tools
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/blog" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Blog</Link>
          <Link to="/contact" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Support</Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:bg-secondary hover:text-primary"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          <Link to="/" className="hidden sm:flex h-10 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105 active:scale-95">
            Get Pro
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-card md:hidden overflow-hidden"
          >
            <div className="container mx-auto px-6 py-10 space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Main Menu</p>
                <Link to="/" className="block text-2xl font-black text-foreground hover:text-primary transition-colors">Home</Link>
                <Link to="/blog" className="block text-2xl font-black text-foreground hover:text-primary transition-colors">Blog</Link>
                <Link to="/contact" className="block text-2xl font-black text-foreground hover:text-primary transition-colors">Support</Link>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Tools</p>
                <div className="grid gap-4">
                  <Link to="/instagram-bio-generator" className="flex items-center gap-4 text-lg font-bold text-foreground hover:text-primary transition-all active:scale-95">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background border border-border">
                      <Instagram className="w-5 h-5 text-pink-500" />
                    </div>
                    Bio Generator
                  </Link>
                  <Link to="/youtube-thumbnail-downloader" className="flex items-center gap-4 text-lg font-bold text-foreground hover:text-primary transition-all active:scale-95">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background border border-border">
                      <Youtube className="w-5 h-5 text-red-500" />
                    </div>
                    Thumbnail Pro
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;