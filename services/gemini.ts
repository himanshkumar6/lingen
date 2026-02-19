/* ============================= */
/*        GENERATE BIO           */
/* ============================= */

export const generateBio = async (
  niche: string,
  keywords: string,
  tone: string,
): Promise<string[]> => {
  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "generateBio",
        params: { niche, keywords, tone }
      })
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error);
    return result.data;
  } catch (error) {
    console.error("Gemini Bio Error:", error);
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
  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "generateAnimeNames",
        params: { theme, type }
      })
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error);
    return result.data;
  } catch (error) {
    console.error("Gemini Anime Error:", error);
    throw new Error("AI service unavailable.");
  }
};
