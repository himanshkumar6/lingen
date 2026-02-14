import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InstagramBio from './pages/InstagramBio';
import YouTubeThumbnail from './pages/YouTubeThumbnail';
import YouTubeTags from './pages/YouTubeTags';
import YouTubeDescription from './pages/YouTubeDescription';
import StylishFonts from './pages/StylishFonts';
import BioCounter from './pages/BioCounter';
import AnimeNames from './pages/AnimeNames';
import Legal from './pages/Legal';
import { ThemeProvider } from './lib/theme';
import PageLayout from './components/Layout/PageLayout';
import { Suspense } from 'react';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <PageLayout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/instagram-bio-generator" element={<InstagramBio />} />
              <Route path="/youtube-thumbnail-downloader" element={<YouTubeThumbnail />} />
              <Route path="/youtube-tag-extractor" element={<YouTubeTags />} />
              <Route path="/youtube-description-extractor" element={<YouTubeDescription />} />
              <Route path="/font-converter" element={<StylishFonts />} />
              <Route path="/character-counter" element={<BioCounter />} />
              <Route path="/anime-name-generator" element={<AnimeNames />} />
              <Route path="/privacy-policy" element={<Legal type="privacy" />} />
              <Route path="/terms" element={<Legal type="terms" />} />
              <Route path="/disclaimer" element={<Legal type="disclaimer" />} />
              <Route path="/contact" element={<Legal type="contact" />} />
              <Route path="/about" element={<Legal type="about" />} />
            </Routes>
          </Suspense>
        </PageLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
