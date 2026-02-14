
import { extractYoutubeId } from '../lib/validation';

/**
 * PRODUCTION NOTE: 
 * These calls should ideally happen via your own backend proxy to hide your API_KEY.
 * For this implementation, we assume process.env.YOUTUBE_API_KEY is available.
 */

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

export const fetchVideoMetadata = async (url: string) => {
  const videoId = extractYoutubeId(url);
  if (!videoId) throw new Error("Invalid YouTube URL");

  // In production, fetch from your /api/youtube proxy
  const apiKey = process.env.YOUTUBE_API_KEY; 
  if (!apiKey) {
    console.warn("YouTube API Key missing. Falling back to simulated extraction for demo.");
    return simulateExtraction(videoId);
  }

  try {
    const response = await fetch(
      `${YOUTUBE_API_BASE}/videos?part=snippet&id=${videoId}&key=${apiKey}`
    );
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      throw new Error("Video not found or is private.");
    }

    const snippet = data.items[0].snippet;
    return {
      title: snippet.title,
      description: snippet.description,
      tags: snippet.tags || [],
      thumbnails: snippet.thumbnails
    };
  } catch (error) {
    console.error("YouTube API Error:", error);
    throw error;
  }
};

// Fallback for demo environments where keys aren't set
const simulateExtraction = async (id: string) => {
  await new Promise(r => setTimeout(r, 1000));
  return {
    title: "Understanding SaaS Architecture",
    description: `This is a simulated description for video ID: ${id}.\n\nIn a real production environment, this data would be fetched from the YouTube Data API v3.\n\nVisit https://linkgen.in for more tools!`,
    tags: ['SaaS', 'Software', 'Architecture', 'API', 'WebDev'],
    thumbnails: {}
  };
};
