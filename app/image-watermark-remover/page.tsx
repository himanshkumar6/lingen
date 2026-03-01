"use client";

import React, { useCallback, useState } from "react";
import { useAICleanupStore } from "@/store/ai-cleanup-store";
import ImageUploader from "@/components/ai-cleanup/ImageUploader";
import CanvasEditor from "@/components/ai-cleanup/CanvasEditor";
import ProgressOverlay from "@/components/ai-cleanup/ProgressOverlay";
import {
  Sparkles,
  Trash2,
  Download,
  AlertCircle,
  CheckCircle2,
  Layers,
  Zap,
  ShieldCheck,
} from "lucide-react";

// --- Helper: Resize Image ---
const resizeToBlob = async (src: string, max = 3072): Promise<Blob> => {
  // ✅ SAFE LOAD
  const response = await fetch(src, {
    mode: "cors",
  });

  const blob = await response.blob();
  const safeUrl = URL.createObjectURL(blob);

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = safeUrl;

  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = rej;
  });

  let { width, height } = img;

  if (width > max || height > max) {
    if (width > height) {
      height = (height / width) * max;
      width = max;
    } else {
      width = (width / height) * max;
      height = max;
    }
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d")!;

  ctx.drawImage(img, 0, 0, width, height);

  const result = await new Promise<Blob>((resolve) =>
    canvas.toBlob((b) => resolve(b!), "image/png", 1),
  );

  URL.revokeObjectURL(safeUrl);

  return result;
};

export default function Page() {
  const {
    image,
    mask,
    isProcessing,
    reset,
    setIsProcessing,
    setModelProgress,
    setImage,
    setMask,
  } = useAICleanupStore();

  const [error, setError] = useState<string | null>(null);

  // NEW: State to track if the image has been processed at least once
  const [hasCleaned, setHasCleaned] = useState(false);

  // --- Logic: Reset Everything ---
  const handleStartOver = useCallback(() => {
    setHasCleaned(false);
    setError(null);
    reset();
  }, [reset]);

  // --- Logic: Run AI ---
  const runAI = useCallback(async () => {
    if (!image) return;

    if (!mask) {
      setError(
        "Please draw over the object or watermark you want to remove."
      );
      return;
    }

    try {
      setError(null);
      setIsProcessing(true);
      setModelProgress(5);

      /* ✅ ORIGINAL IMAGE */
      const imageResponse = await fetch(image);
      const imgBlob = await imageResponse.blob();

      /* ✅ ORIGINAL MASK (NO RESIZE) */
      const maskResponse = await fetch(mask);
      const maskBlob = await maskResponse.blob();

      const fd = new FormData();
      fd.append("image", imgBlob);
      fd.append("mask", maskBlob);

      setModelProgress(25);

      const res = await fetch("/api/remove-watermark", {
        method: "POST",
        body: fd,
      });

      setModelProgress(60);

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.error || "AI failed to process image");

      setImage(data.image);
      setMask(null);
      setHasCleaned(true);

      window.dispatchEvent(new Event("clear-mask-rects"));

      setModelProgress(100);
    } catch (e: any) {
      console.error(e);
      setError(e.message || "AI processing failed.");
    } finally {
      setTimeout(() => {
        setIsProcessing(false);
        setModelProgress(0);
      }, 400);
    }
  }, [image, mask]);

  // --- Logic: Download (FIXED: Force download for external URLs) ---
  const handleDownload = useCallback(async () => {
    if (!image) return;

    try {
      // 1. Fetch the image data behind the scenes
      // This prevents the browser from just opening the URL in a new tab
      const response = await fetch(image);
      const blob = await response.blob();

      // 2. Try using the modern File System Access API (Desktop)
      if ("showSaveFilePicker" in window) {
        const fileHandle = await (window as any).showSaveFilePicker({
          suggestedName: `cleaned-image-${Date.now()}.png`,
          types: [
            {
              description: "PNG Image",
              accept: { "image/png": [".png", ".jpg", ".jpeg", ".webp"] },
            },
          ],
        });

        const writable = await fileHandle.createWritable();
        await writable.write(blob);
        await writable.close();
      } else {
        // 3. Fallback for mobile/older browsers using a local Object URL
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = `cleaned-image-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Clean up memory after download
        setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.error("Download failed:", err);
        // Fallback just in case CORS blocks the fetch
        window.open(image, "_blank");
      }
    }
  }, [image]);

  return (
    <div className="min-h-screen bg-transparent text-foreground relative selection:bg-primary/20">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <main
        className={`relative w-full max-w-7xl mx-auto ${!image ? "px-3" : "px-0"
          } sm:px-5 md:px-8 lg:px-10 py-6 sm:py-10 md:py-14 lg:py-20`}
      >
        {/* === HEADER SECTION === */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 space-y-5 sm:space-y-6 px-4 sm:px-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 backdrop-blur-sm">
            <Sparkles size={14} />
            <span>New Remover Technology</span>
          </div>

          <h1 className="text-2xl
sm:text-3xl
md:text-5xl
lg:text-6xl  font-extrabold tracking-tight text-balance">
            Free Image{" "}
            <span className="text-primary bg-clip-text">Watermark Remover</span>
          </h1>

          <p className="text-sm
sm:text-base
md:text-lg
lg:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Remove watermarks, logos, text, and unwanted objects from your
            images in seconds.
          </p>
        </div>

        {/* === MAIN INTERFACE === */}
        {!image ? (
          // --- LANDING STATE (Split View) ---
          <div className="grid
grid-cols-1
lg:grid-cols-2
gap-6
md:gap-10
lg:gap-12 items-stretch max-w-6xl mx-auto">
            {/* Left: Pixelbin-style Before/After Demo */}
            <div className="order-2 lg:order-1 relative group rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-transparent h-full min-h-[400px] select-none">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1200&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-y-0 left-0 w-1/2 border-r-[1.5px] border-white/80 shadow-[2px_0_15px_rgba(0,0,0,0.1)] overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 w-[200%] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1200&auto=format&fit=crop')",
                  }}
                >
                  <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-6 opacity-50 -rotate-[25deg] scale-[1.5] pointer-events-none">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <span
                        key={i}
                        className="text-xl md:text-2xl font-black text-white drop-shadow-md tracking-widest"
                      >
                        SAMPLE
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center z-10 border border-black/10 transition-transform group-hover:scale-105">
                <div className="flex items-center gap-1">
                  <div className="w-0.5 h-4 bg-neutral-400 rounded-full" />
                  <div className="w-0.5 h-4 bg-neutral-400 rounded-full" />
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-background/60 text-foreground text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-md shadow-sm border border-border/50">
                Original
              </div>
              <div className="absolute top-4 right-4 bg-background/60 text-foreground text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-md shadow-sm border border-border/50">
                Cleaned
              </div>
            </div>

            {/* Right: Upload Card */}
            <div className="order-1 lg:order-2 h-full">
              <div className="bg-background/40 backdrop-blur-xl border border-border/50 shadow-xl rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col h-full">
                <div className="flex-1 flex flex-col justify-center">
                  <ImageUploader />
                </div>
                <div className="mt-8 pt-6 border-t border-border/30 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-green-500" /> Free
                    to use
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-green-500" /> No
                    Signup
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-green-500" /> High
                    Quality
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // --- EDITOR STATE (Full Focus) ---
          <div className="
w-full
lg:max-w-6xl
xl:max-w-7xl
mx-auto
animate-in fade-in zoom-in-95 duration-300
">
            <div className="
relative
w-full
flex
flex-col

/* MOBILE → EDGE MODE */
rounded-none
border-y
border-border/30
p-0
bg-background/40

/* TABLET */
sm:rounded-2xl
sm:border
sm:p-4

/* DESKTOP */
lg:rounded-3xl
lg:p-6

backdrop-blur-xl
shadow-xl
lg:shadow-2xl
">
              {/* Toolbar */}
              <div className="flex
flex-col
sm:flex-row
gap-3
sm:gap-4 justify-between items-center mb-0 sm:mb-6 p-4 sm:p-0 border-b border-border/30 sm:border-0 bg-background/50 sm:bg-transparent">
                {/* Updated to use handleStartOver */}
                <button
                  onClick={handleStartOver}
                  disabled={isProcessing}
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
                >
                  <Trash2 size={16} />
                  Start Over
                </button>

                <div className="
flex
flex-col
sm:flex-row
w-full
sm:w-auto
gap-2
sm:gap-3
">
                  {/* Save Image Button: Disabled until hasCleaned is true */}
                  <button
                    onClick={handleDownload}
                    disabled={isProcessing || !hasCleaned}
                    title={
                      !hasCleaned
                        ? "Remove an object first to save"
                        : "Save cleaned image"
                    }
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium border border-border/50 bg-background hover:bg-muted shadow-sm hover:shadow transition-all disabled:opacity-50 disabled:hover:bg-background disabled:cursor-not-allowed"
                  >
                    <Download size={16} />
                    Save Image
                  </button>

                  <button
                    onClick={runAI}
                    disabled={isProcessing}
                    className="group flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-2.5 rounded-xl bg-gradient-to-r from-primary to-purple-500 text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  >
                    <Sparkles size={18} className="group-hover:animate-pulse" />
                    {isProcessing ? "Processing..." : "Remove Object"}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-destructive/10 text-destructive border border-destructive/20 flex items-start gap-3 backdrop-blur-sm">
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              )}

              {/* Canvas Area */}
              <div className="relative w-full flex items-center justify-center min-h-[55vh] sm:min-h-[60vh] rounded-none sm:rounded-2xl sm:border border-border/50 bg-transparent overflow-hidden sm:ring-4 ring-muted/10">
                <CanvasEditor />

                {isProcessing && (
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-md flex items-center justify-center z-50 transition-all">
                    <ProgressOverlay />
                  </div>
                )}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Tip: Draw over the area you want to remove and click
                &quot;Remove Object&quot;
              </p>
            </div>
          </div>
        )}

        {/* === SEO / CONTENT SECTION (Below Fold) === */}
        <div className="mt-24 md:mt-32 max-w-5xl mx-auto space-y-24 px-4 sm:px-0">
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">
              Why use our Cleanup Tool?
            </h2>
            <div className="grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-5
md:gap-8">
              <div className="p-6 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Our AI processes images in seconds. No waiting in queues, get
                  your clean images instantly.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">High Precision</h3>
                <p className="text-muted-foreground">
                  Smart object detection ensures background stays intact while
                  removing only what you mark.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                <p className="text-muted-foreground">
                  We value your privacy. Images are processed securely and are
                  not stored on our servers.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-background/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-border/50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                How to remove objects from photos?
              </h2>
              <ol className="space-y-6 relative border-l-2 border-primary/20 ml-3 pl-8">
                <li className="relative">
                  <span className="absolute -left-[39px] w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    Upload your image
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Click the upload button or drag and drop your image (JPG,
                    PNG, WEBP) into the box above.
                  </p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[39px] w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    Mark the object
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Use the brush tool to paint over the watermark, text, or
                    person you want to remove.
                  </p>
                </li>
                <li className="relative">
                  <span className="absolute -left-[39px] w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    Download result
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Click &quot;Remove Object&quot; and let AI do the magic.
                    Then download your clean image for free.
                  </p>
                </li>
              </ol>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
