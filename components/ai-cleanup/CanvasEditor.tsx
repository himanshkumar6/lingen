"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useAICleanupStore } from "@/store/ai-cleanup-store";
import { Undo, Eraser } from "lucide-react";

/* ================= TYPES ================= */

interface RectMask {
  x: number;
  y: number;
  w: number;
  h: number;
}

/* ================= SAFE IMAGE LOADER ================= */

const loadSafeImage = async (
  src: string,
): Promise<{ img: HTMLImageElement; url: string }> => {
  const res = await fetch(src, { mode: "cors" });
  const blob = await res.blob();
  const objectUrl = URL.createObjectURL(blob);

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => resolve({ img, url: objectUrl });
    img.onerror = reject;
    img.src = objectUrl;
  });
};

/* ================= COMPONENT ================= */

export default function CanvasEditor() {
  const { image, setMask, isProcessing } = useAICleanupStore();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  const startPointRef = useRef<{ x: number; y: number } | null>(null);
  const previewRectRef = useRef<RectMask | null>(null);
  const isSelectingRef = useRef(false);

  const [rects, setRects] = useState<RectMask[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  /* ================= LOAD IMAGE ================= */

  useEffect(() => {
    if (!image) return;

    let cancelled = false;
    setRects([]);
    previewRectRef.current = null;
    isSelectingRef.current = false;
    setMask(null);

    loadSafeImage(image).then(({ img, url }) => {
      if (cancelled) return;

      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);

      objectUrlRef.current = url;
      imgRef.current = img;

      setSize({
        w: img.naturalWidth,
        h: img.naturalHeight,
      });
    });

    return () => {
      cancelled = true;
    };
  }, [image, setMask]);

  /* ================= CLEANUP ================= */

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  /* ================= DRAW ================= */

  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;

    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fix: Disable image smoothing to prevent anti-aliasing artifacts
    ctx.imageSmoothingEnabled = false;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    rects.forEach((r) => {
      ctx.fillStyle = "rgba(168,85,247,0.25)";
      ctx.fillRect(r.x, r.y, r.w, r.h);

      ctx.strokeStyle = "#a855f7";
      ctx.lineWidth = 2;
      ctx.strokeRect(r.x, r.y, r.w, r.h);
    });

    const previewRect = previewRectRef.current;
    if (previewRect) {
      ctx.setLineDash([6]);
      ctx.strokeStyle = "#a855f7";
      ctx.lineWidth = 2;
      ctx.strokeRect(
        previewRect.x,
        previewRect.y,
        previewRect.w,
        previewRect.h,
      );
      ctx.setLineDash([]);
    }
  }, [rects]);

  // Initial draw and draw on size change
  useEffect(() => {
    requestAnimationFrame(redrawCanvas);
  }, [redrawCanvas, size]);

  /* ================= POSITION ================= */

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    // Fix: Round coordinates to avoid sub-pixel blurring issues on canvas
    return {
      x: Math.round((clientX - rect.left) * scaleX),
      y: Math.round((clientY - rect.top) * scaleY),
    };
  };

  /* ================= MASK ================= */

  const buildMask = useCallback(
    (list: RectMask[]) => {
      if (!list.length) {
        setMask(null);
        return;
      }

      const oc = document.createElement("canvas");
      oc.width = size.w;
      oc.height = size.h;

      const ctx = oc.getContext("2d");
      if (!ctx) return;

      // Ensure offscreen mask generation has no smoothing to preserve pixel fidelity
      ctx.imageSmoothingEnabled = false;

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, oc.width, oc.height);

      ctx.fillStyle = "white";

      // Fix: MASK_PADDING completely removed to prevent blur over healthy background
      list.forEach((r) => ctx.fillRect(r.x, r.y, r.w, r.h));

      setMask(oc.toDataURL("image/png"));
    },
    [size, setMask],
  );

  /* ================= EVENTS ================= */

  const start = (e: any) => {
    if (isProcessing) return;
    const p = getPos(e);
    if (!p) return;

    startPointRef.current = p;
    isSelectingRef.current = true;
  };

  const move = (e: any) => {
    if (!isSelectingRef.current || !startPointRef.current) return;
    const p = getPos(e);
    if (!p) return;

    const sx = startPointRef.current.x;
    const sy = startPointRef.current.y;

    previewRectRef.current = {
      x: Math.min(sx, p.x),
      y: Math.min(sy, p.y),
      w: Math.abs(p.x - sx),
      h: Math.abs(p.y - sy),
    };

    // Trigger imperative redraw immediately
    requestAnimationFrame(redrawCanvas);
  };

  const end = () => {
    if (!isSelectingRef.current) return;
    isSelectingRef.current = false;

    const previewRect = previewRectRef.current;
    if (!previewRect || previewRect.w < 5 || previewRect.h < 5) {
      previewRectRef.current = null;
      requestAnimationFrame(redrawCanvas);
      return;
    }

    const updated = [...rects, previewRect];
    setRects(updated);
    buildMask(updated);

    previewRectRef.current = null;
    requestAnimationFrame(redrawCanvas);
  };

  /* ================= ACTIONS ================= */

  const undo = () => {
    if (isProcessing || rects.length === 0) return;
    const updated = rects.slice(0, -1);
    setRects(updated);
    buildMask(updated);
  };

  const clear = () => {
    if (isProcessing || rects.length === 0) return;
    setRects([]);
    setMask(null);
  };

  if (!image) return null;

  return (
    <div className="flex flex-col w-full h-full sm:rounded-2xl overflow-hidden">
      {/* Canvas Tool Actions (Undo, Eraser) */}
      <div className="flex justify-end gap-3 p-3 sm:p-0 sm:mb-3 border-b border-border/30 sm:border-none bg-background/30 sm:bg-transparent">
        <button
          onClick={undo}
          disabled={isProcessing || rects.length === 0}
          className="p-1.5 text-gray-600 hover:text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Undo"
        >
          <Undo size={18} />
        </button>

        <button
          onClick={clear}
          disabled={isProcessing || rects.length === 0}
          className="p-1.5 text-gray-600 hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Clear"
        >
          <Eraser size={18} />
        </button>
      </div>

      {/* Canvas */}
      <div className="w-full flex-1 flex items-center justify-center sm:px-4 pb-4 sm:pb-0 min-h-0">
        <div className="relative w-full h-full flex justify-center items-center">
          <canvas
            ref={canvasRef}
            width={size.w}
            height={size.h}
            onMouseDown={start}
            onMouseMove={move}
            onMouseUp={end}
            onMouseLeave={end}
            onTouchStart={start}
            onTouchMove={move}
            onTouchEnd={end}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              aspectRatio: `${size.w} / ${size.h}`,
              touchAction: "none",
            }}
            className={`mt-0 sm:mt-3
rounded-none sm:rounded-xl
shadow-none sm:shadow-xl
select-none object-contain ${isProcessing ? "cursor-wait opacity-75" : "cursor-crosshair"}`}
          />
        </div>
      </div>
    </div>
  );
}
