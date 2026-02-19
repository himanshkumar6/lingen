import { extractYoutubeId } from '../lib/validation';

export const fetchVideoMetadata = async (url: string) => {
  const videoId = extractYoutubeId(url);
  if (!videoId) throw new Error("Invalid YouTube URL");

  try {
    const response = await fetch(`/api/youtube?v=${videoId}`);
    const data = await response.json();
    
    if (data.error) throw new Error(data.error);
    
    return data;
  } catch (error) {
    console.error("YouTube API Error:", error);
    throw error;
  }
};
