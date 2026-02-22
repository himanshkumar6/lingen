import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_RETRIES = 3;
const RETRY_DELAY_BASE = 500;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = 0,
): Promise<Response> {
  const startTime = Date.now();
  try {
    const response = await fetch(url, options);

    if (
      !response.ok &&
      (response.status === 429 || response.status >= 500) &&
      retries < MAX_RETRIES
    ) {
      const waitTime = RETRY_DELAY_BASE * Math.pow(2, retries);
      console.warn(
        `Upstream error ${response.status} for ${url}. Retrying in ${waitTime}ms... (Attempt ${retries + 1}/${MAX_RETRIES})`,
      );
      await delay(waitTime);
      return fetchWithRetry(url, options, retries + 1);
    }

    return response;
  } catch (error) {
    if (retries < MAX_RETRIES) {
      const waitTime = RETRY_DELAY_BASE * Math.pow(2, retries);
      console.warn(
        `Fetch network error: ${error}. Retrying in ${waitTime}ms... (Attempt ${retries + 1}/${MAX_RETRIES})`,
      );
      await delay(waitTime);
      return fetchWithRetry(url, options, retries + 1);
    }
    throw error;
  }
}

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt required" }, { status: 400 });
    }

    const encodedPrompt = encodeURIComponent(prompt);
    // Standard size 512x512 for stability
    const pollinationsUrl = `https://gen.pollinations.ai/image/${encodedPrompt}?model=flux&width=512&height=512&key=${process.env.POLLINATIONS_API_KEY}`;

    if (!process.env.POLLINATIONS_API_KEY) {
      console.error("Missing POLLINATIONS_API_KEY");
    }

    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      Accept:
        "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      "Cache-Control": "no-store",
      Connection: "keep-alive",
    };

    const response = await fetchWithRetry(pollinationsUrl, { headers });
    const duration = Date.now() - startTime;

    if (!response.ok) {
      let errorDetail = "";
      try {
        errorDetail = await response.text();
      } catch (e) {
        errorDetail = "Could not parse error body";
      }

      console.error(
        `Upstream Failure [${response.status}] after ${duration}ms:`,
        {
          status: response.status,
          statusText: response.statusText,
          detail: errorDetail.substring(0, 200), // Cap error log
          prompt: prompt.substring(0, 100),
        },
      );

      return NextResponse.json(
        {
          error: "Image generation failed",
          upstreamStatus: response.status,
          duration: `${duration}ms`,
        },
        { status: 502 }, // Bad Gateway for upstream failure
      );
    }

    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Generation-Time": `${duration}ms`,
        "X-Retries": response.ok ? "true" : "false", // Simple flag
      },
    });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
