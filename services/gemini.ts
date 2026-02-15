import { sanitizeInput } from "../lib/validation";
import Groq from "groq-sdk";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

if (!API_KEY) {
  throw new Error("VITE_GROQ_API_KEY is missing in .env");
}

const groq = new Groq({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

/* ============================= */
/*        GENERATE BIO           */
/* ============================= */

export const generateBio = async (
  niche: string,
  keywords: string,
  tone: string,
): Promise<string[]> => {
  const safeNiche = sanitizeInput(niche);
  const safeKeywords = sanitizeInput(keywords);

  const prompt = `
Generate 3 creative Instagram bios for a ${safeNiche} creator.
Include keywords: ${safeKeywords}.
Tone: ${tone}.
Keep them under 150 characters.
Return ONLY the 3 bios separated by new lines.
`;

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // ✅ VALID GROQ MODEL
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
    });

    const text = completion.choices[0]?.message?.content || "";

    return text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 5);
  } catch (error) {
    console.error("Groq Bio Error:", error);
    throw new Error("AI service unavailable.");
  }
};

/* ============================= */
/*     GENERATE ANIME NAMES     */
/* ============================= */

export const generateAnimeNames = async (
  theme: string,
  type: string,
): Promise<string[]> => {
  const prompt = `
Generate 5 unique anime-style names for a ${type} with a ${theme} theme.
Each name must include a short meaning in brackets.
Return ONLY names, one per line.
`;

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // ✅ VALID GROQ MODEL
      messages: [{ role: "user", content: prompt }],
      temperature: 0.9,
    });

    const text = completion.choices[0]?.message?.content || "";

    return text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  } catch (error) {
    console.error("Groq Anime Error:", error);
    throw new Error("AI service unavailable.");
  }
};
