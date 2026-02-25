import React, { useCallback, useState } from "react";
import { useAICleanupStore } from "@/store/ai-cleanup-store";
import { UploadCloud, ImagePlus } from "lucide-react";

export default function ImageUploader() {
  const { setImage, setOriginalImageDimensions } = useAICleanupStore();
  const [isHovering, setIsHovering] = useState(false);

  const processFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;

        const img = new Image();
        img.onload = () => {
          setOriginalImageDimensions({ width: img.width, height: img.height });
          setImage(result);
        };
        img.src = result;
      };
      reader.readAsDataURL(file);
    },
    [setImage, setOriginalImageDimensions]
  );

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsHovering(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processFile(e.dataTransfer.files[0]);
      }
    },
    [processFile]
  );

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovering(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovering(false);
  }, []);

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onClick={() => document.getElementById("image-upload-input")?.click()}
      className={`group relative flex flex-col items-center justify-center w-full min-h-[350px] md:min-h-[400px] p-8 md:p-12 rounded-3xl border-2 border-dashed transition-all duration-300 ease-out cursor-pointer overflow-hidden
        ${
          isHovering
            ? "border-primary bg-primary/5 scale-[1.02] shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)]"
            : "border-border/60 bg-background/20 hover:bg-muted/30 hover:border-primary/50"
        }
      `}
    >
      {/* Hidden File Input */}
      <input
        id="image-upload-input"
        type="file"
        accept="image/png, image/jpeg, image/webp"
        className="hidden"
        onChange={onFileSelect}
      />

      {/* Background Decor (Subtle glow when active) */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 ${
          isHovering ? "opacity-100" : "group-hover:opacity-50"
        }`}
      />

      {/* Icon Container with Floating Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div
          className={`relative flex items-center justify-center w-20 h-20 mb-6 rounded-full transition-all duration-500 ease-out
          ${
            isHovering
              ? "bg-primary/20 text-primary scale-110 -translate-y-2"
              : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:-translate-y-1 group-hover:shadow-lg"
          }`}
        >
          {/* Ping animation ring when dragging */}
          {isHovering && (
            <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping opacity-75" />
          )}
          
          <UploadCloud
            className={`w-10 h-10 transition-transform duration-300 ${
              isHovering ? "scale-110" : "group-hover:scale-110"
            }`}
          />
          
          {/* Small badge icon */}
          <div className={`absolute -bottom-1 -right-1 bg-background rounded-full p-1.5 shadow-sm border border-border transition-transform duration-300 ${isHovering ? "scale-0" : "scale-100"}`}>
             <ImagePlus className="w-4 h-4 text-foreground" />
          </div>
        </div>

        {/* Typography */}
        <h3
          className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
            isHovering ? "text-primary" : "text-foreground"
          }`}
        >
          {isHovering ? "Drop it like it's hot!" : "Upload Image"}
        </h3>
        
        <p className="text-muted-foreground text-center max-w-xs mb-8 text-sm md:text-base leading-relaxed transition-opacity">
          Drag & drop an image here or click to browse. Supported formats: JPG, PNG, WebP.
        </p>

        {/* Faux Button (Visual Only) */}
        <div
          className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm
          ${
            isHovering
              ? "bg-primary text-primary-foreground shadow-primary/25 translate-y-1"
              : "bg-background text-foreground border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-transparent group-hover:shadow-md"
          }`}
        >
          Browse Files
        </div>
      </div>
    </div>
  );
}