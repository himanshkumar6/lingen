import { NextResponse } from "next/server";
import { Client } from "@gradio/client";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const imageFile = form.get("image") as File;
    const maskFile = form.get("mask") as File;

    if (!imageFile || !maskFile) {
      return NextResponse.json({ error: "Missing files" }, { status: 400 });
    }

    console.log("Connecting to HF Space...");

    const client = await Client.connect(
      "https://eddiebroke-watermark-remover.hf.space/"
    );

    console.log("Predicting...");

    const result = await client.predict(0, [
      {
        background: imageFile,
        layers: [maskFile],
      },
    ]);

    const output = (result.data as any[])[0];

    /**
     * HF returns FileData object:
     * {
     *   url: "...",
     *   path: "...",
     *   mime_type: ...
     * }
     */

    const imageUrl =
      typeof output === "string"
        ? output
        : output?.url;

    return NextResponse.json({
      image: imageUrl,
    });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    return NextResponse.json({ error: "AI failed" }, { status: 500 });
  }
}