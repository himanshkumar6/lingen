"use client";

import React, { useEffect, useRef, useState, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { useAICleanupStore } from "@/store/ai-cleanup-store";
import { Undo, Eraser, Paintbrush } from "lucide-react";

interface Point {
  x: number;
  y: number;
}

interface Stroke {
  points: Point[];
  size: number;
}

export default function CanvasEditor() {
  const { image, setMask, isProcessing } = useAICleanupStore();

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(30);
  const [size, setSize] = useState({ w: 0, h: 0 });

  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const currentPointsRef = useRef<Point[]>([]);

  // --- 1. Load Image (FIXED FOR 100% ORIGINAL QUALITY) ---
  useEffect(() => {
    if (!image) return;

    const img = new Image();
    img.onload = () => {
      imgRef.current = img;
      
      // Removed the 1024 max limit! 
      // Canvas will now use the exact original resolution of the uploaded image.
      setSize({ w: img.width, h: img.height });
    };
    img.src = image;
  }, [image]);

  // --- 2. Render Canvas (The "Magic Ink") ---
  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !imgRef.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "rgba(168, 85, 247, 0.5)"; 
    ctx.shadowColor = "rgba(168, 85, 247, 0.8)";
    ctx.shadowBlur = 12;

    strokes.forEach((stroke) => {
      if (stroke.points.length === 0) return;
      ctx.lineWidth = stroke.size;
      ctx.beginPath();
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      stroke.points.forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.stroke();
    });
  };

  useEffect(() => {
    redrawCanvas();
  }, [strokes, size]);

  // --- 3. Coordinate Math ---
  const getPos = (e: ReactMouseEvent | ReactTouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    let clientX, clientY;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as ReactMouseEvent).clientX;
      clientY = (e as ReactMouseEvent).clientY;
    }

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  // --- 4. Drawing Logic ---
  const start = (e: ReactMouseEvent | ReactTouchEvent) => {
    if (isProcessing) return;
    const p = getPos(e);
    if (!p) return;

    setIsDrawing(true);
    currentPointsRef.current = [p];

    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "rgba(168, 85, 247, 0.5)";
      ctx.shadowColor = "rgba(168, 85, 247, 0.8)";
      ctx.shadowBlur = 12;
      ctx.lineWidth = brushSize;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
  };

  const move = (e: ReactMouseEvent | ReactTouchEvent) => {
    if (containerRef.current && !("touches" in e)) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e as ReactMouseEvent).clientX - rect.left,
        y: (e as ReactMouseEvent).clientY - rect.top,
      });
    }

    if (!isDrawing) return;
    const p = getPos(e);
    if (!p) return;

    currentPointsRef.current.push(p);

    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
  };

  const end = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (currentPointsRef.current.length > 0) {
      const newStroke = { points: [...currentPointsRef.current], size: brushSize };
      const updatedStrokes = [...strokes, newStroke];
      setStrokes(updatedStrokes);
      buildMask(updatedStrokes);
    }
    currentPointsRef.current = [];
  };

  // --- 5. Build Final Mask ---
  const buildMask = (strokeList: Stroke[]) => {
    if (!canvasRef.current || strokeList.length === 0) {
      setMask(null);
      return;
    }
    const oc = document.createElement("canvas");
    oc.width = size.w;
    oc.height = size.h;
    const ctx = oc.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, oc.width, oc.height);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "white"; 
    ctx.shadowBlur = 0; 

    strokeList.forEach((stroke) => {
      if (stroke.points.length === 0) return;
      ctx.lineWidth = stroke.size;
      ctx.beginPath();
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      stroke.points.forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.stroke();
    });

    setMask(oc.toDataURL("image/png"));
  };

  const undo = () => {
    const updated = strokes.slice(0, -1);
    setStrokes(updated);
    buildMask(updated);
  };

  const clear = () => {
    setStrokes([]);
    setMask(null);
  };

  useEffect(() => {
    const handler = () => { setStrokes([]); setMask(null); };
    window.addEventListener("clear-mask-rects", handler);
    return () => window.removeEventListener("clear-mask-rects", handler);
  }, []);

  const getVisualBrushSize = () => {
    if (!canvasRef.current) return brushSize;
    const rect = canvasRef.current.getBoundingClientRect();
    const scale = rect.width / size.w;
    return brushSize * scale;
  };

  if (!image) return null;

  return (
    <div className="flex flex-col w-full border border-border/50 rounded-2xl shadow-sm bg-background overflow-hidden">
      
      {/* --- Desktop-Style Top Toolbar --- */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 px-5 border-b border-border/50 bg-muted/30">
        
        {/* Left: Tool Settings */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Paintbrush size={16} className="text-primary" />
            <span>Brush Size</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground w-4 text-right">{brushSize}</span>
            <input
              type="range"
              min="10"
              max="150"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-32 md:w-48 h-1.5 bg-muted-foreground/20 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button 
            onClick={undo} 
            disabled={!strokes.length || isProcessing} 
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-all disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
          >
            <Undo size={16} />
            <span className="hidden sm:inline">Undo</span>
          </button>
          
          <div className="w-px h-5 bg-border mx-1 hidden sm:block" />
          
          <button 
            onClick={clear} 
            disabled={!strokes.length || isProcessing} 
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-all disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
          >
            <Eraser size={16} />
            <span className="hidden sm:inline">Clear All</span>
          </button>
        </div>
      </div>

      {/* --- Editor Workspace --- */}
      <div 
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => { setIsHovering(false); end(); }}
        className="relative w-full flex items-center justify-center overflow-hidden bg-muted/30 p-2 md:p-4"
      >
        {/* Custom Brush Cursor */}
        {isHovering && mousePos && !isProcessing && (
          <div
            className="absolute z-50 rounded-full border-[1.5px] border-white shadow-[0_0_4px_rgba(0,0,0,0.5)] pointer-events-none bg-purple-500/20 backdrop-invert backdrop-opacity-10"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              width: `${getVisualBrushSize()}px`,
              height: `${getVisualBrushSize()}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}

        <canvas
          ref={canvasRef}
          width={size.w}
          height={size.h}
          onMouseDown={start}
          onMouseMove={move}
          onMouseUp={end}
          onTouchStart={start}
          onTouchMove={move}
          onTouchEnd={end}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '65vh',
            aspectRatio: size.w && size.h ? `${size.w} / ${size.h}` : 'auto'
          }}
          className={`block touch-none shadow-xl rounded-md ${isHovering ? 'cursor-none' : ''}`}
        />
      </div>
    </div>
  );
}