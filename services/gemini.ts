
import { GoogleGenAI } from "@google/genai";
import { sanitizeInput } from "../lib/validation";

/**
 * ARCHITECT NOTE: 
 * In a real-world SaaS, you would call your Node.js/Next.js backend proxy here.
 * Exposing process.env.API_KEY in the frontend is a security risk.
 */

export const generateBio = async (niche: string, keywords: string, tone: string): Promise<string[]> => {
  const safeNiche = sanitizeInput(niche);
  const safeKeywords = sanitizeInput(keywords);
  
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Generate 3 creative Instagram bios for a ${safeNiche} creator. 
  Include keywords: ${safeKeywords}. 
  Tone: ${tone}. 
  Keep them short, use emojis, and make them engaging. 
  Format: Return ONLY the 3 bios separated by new lines, no numbers or bullets.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash-latest',
      contents: prompt,
    });
    
    const text = response.text || "";
    return text.split('\n').filter(line => line.trim().length > 5);
  } catch (error: any) {
    console.error("Gemini Generation Error:", error);
    if (error.status === 429) throw new Error("Rate limit reached. Please try again in a minute.");
    throw new Error("The AI service is temporarily unavailable.");
  }
};

export const generateAnimeNames = async (theme: string, type: string): Promise<string[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Generate 5 unique and cool anime-style names for a ${type} with a ${theme} theme. 
  Provide original Japanese-sounding names (with meaning) or cool English translations. 
  Format: Return ONLY the names, one per line.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash-latest',
      contents: prompt,
    });
    
    const text = response.text || "";
    return text.split('\n').filter(line => line.trim().length > 0).map(line => line.replace(/^[-*•]\s*\d*[.)]?\s*/, '').trim());
  } catch (error) {
    console.error("Gemini Anime Name Error:", error);
    throw new Error("Failed to generate names. Please try again.");
  }
};
