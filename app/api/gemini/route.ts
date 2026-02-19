import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const API_KEY = process.env.GROQ_API_KEY;

export async function POST(req: Request) {
  if (!API_KEY) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  try {
    const { action, params } = await req.json();
    const groq = new Groq({ apiKey: API_KEY });

    let prompt = "";
    if (action === "generateBio") {
      prompt = `Generate 3 creative Instagram bios for a ${params.niche} creator. Include keywords: ${params.keywords}. Tone: ${params.tone}. Keep them under 150 characters. Return ONLY the 3 bios separated by new lines.`;
    } else if (action === "generateAnimeNames") {
      prompt = `Generate 5 unique anime-style names for a ${params.type} with a ${params.theme} theme. Each name must include a short meaning in brackets. Return ONLY names, one per line.`;
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
    });

    const text = completion.choices[0]?.message?.content || "";
    const data = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "AI service failed" }, { status: 500 });
  }
}
