import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const name = searchParams.get("name");
    const anime = searchParams.get("anime");

    if (!name || !anime) {
      return NextResponse.json(
        { error: "Missing name or anime parameter" },
        { status: 400 },
      );
    }

    // High accuracy prompt
    const prompt = `
${name} from ${anime},
official anime art style,
accurate character design,
true to original manga appearance,
correct hairstyle, correct outfit,
cinematic lighting,
high detail anime illustration,
dynamic background,
not plain background,
professional key visual
`;

    const encodedPrompt = encodeURIComponent(prompt);

    const imageUrl = `https://gen.pollinations.ai/image/${encodedPrompt}?model=flux&width=512&height=640`;

    return NextResponse.json({ image: imageUrl });
  } catch (error) {
    console.error("Auto image fetch failed:", error);

    return NextResponse.json(
      { error: "Image generation failed" },
      { status: 500 },
    );
  }
}
