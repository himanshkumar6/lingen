import { NextResponse } from "next/server";

const API_KEY = process.env.VITE_YT_API_KEY; // Using existing env var name for now but server-side
const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const videoId = searchParams.get("v");

  if (!videoId) {
    return NextResponse.json({ error: "Video ID required" }, { status: 400 });
  }

  if (!API_KEY) {
    // Fallback for demo if key is missing (matching original service logic)
    return NextResponse.json({
      title: "Understanding SaaS Architecture",
      description: `Simulated data for ${videoId}.`,
      tags: ['SaaS', 'Software', 'Architecture'],
      thumbnails: {}
    });
  }

  try {
    const response = await fetch(
      `${YOUTUBE_API_BASE}/videos?part=snippet&id=${videoId}&key=${API_KEY}`
    );
    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    const snippet = data.items[0].snippet;
    return NextResponse.json({
      title: snippet.title,
      description: snippet.description,
      tags: snippet.tags || [],
      thumbnails: snippet.thumbnails
    });
  } catch (error) {
    return NextResponse.json({ error: "YouTube API failed" }, { status: 500 });
  }
}
