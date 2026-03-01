import React, { useEffect, useState } from "react";
import { useAICleanupStore } from "@/store/ai-cleanup-store";
import { Sparkles } from "lucide-react";

export default function ProgressOverlay() {
  const { modelProgress, isProcessing } = useAICleanupStore();
  const [loadingText, setLoadingText] = useState("Analyzing image...");

  // Cycle through "smart" loading phrases to make the wait feel active
  useEffect(() => {
    if (!isProcessing) return;

    const texts = [
      "Analyzing image...",
      "Detecting subject boundaries...",
      "Applying AI magic...",
      "Reconstructing background...",
      "Polishing pixels...",
      "Almost done..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % texts.length;
      setLoadingText(texts[i]);
    }, 2500);

    return () => clearInterval(interval);
  }, [isProcessing]);

  if (!isProcessing) return null;

  // Use a fallback progress for visual feedback if the API doesn't send exact numbers immediately
  const displayProgress = modelProgress > 0 ? modelProgress : 15;

  return (
    <div className="
absolute inset-0 z-50
flex flex-col
items-center justify-center
px-4 sm:px-6 md:px-8
overflow-hidden
rounded-2xl
bg-background/70
backdrop-blur-xl
animate-in fade-in duration-300
">

      {/* Ambient Glow */}
      <div className="
absolute
top-1/2 left-1/2
-translate-x-1/2 -translate-y-1/2
w-40 h-40
sm:w-56 sm:h-56
md:w-72 md:h-72
bg-primary/20
blur-[80px]
md:blur-[100px]
rounded-full
animate-pulse
pointer-events-none
"/>

      <div className="
relative z-10
flex flex-col
items-center
w-full
max-w-xs
sm:max-w-sm
text-center
">

        {/* Loader Core */}
        <div className="
relative flex items-center justify-center
w-16 h-16
sm:w-20 sm:h-20
md:w-24 md:h-24
mb-6 sm:mb-8
">

          <div
            className="
absolute inset-0
rounded-full
bg-gradient-to-tr
from-primary via-purple-500 to-blue-500
animate-spin blur-lg opacity-60
"
            style={{ animationDuration: "3s" }}
          />

          <div
            className="
absolute inset-1
rounded-full
bg-gradient-to-tr
from-primary via-purple-500 to-blue-500
animate-spin
"
            style={{
              animationDuration: "2s",
              animationDirection: "reverse"
            }}
          />

          <div className="
absolute inset-1.5
rounded-full
bg-background
flex items-center justify-center
shadow-inner
">
            <Sparkles className="
w-5 h-5
sm:w-6 sm:h-6
md:w-8 md:h-8
text-primary animate-pulse
"/>
          </div>

        </div>

        {/* Dynamic Text */}
        <h3 className="
font-extrabold
bg-clip-text text-transparent
bg-gradient-to-r
from-foreground via-muted-foreground to-foreground
text-lg
sm:text-xl
md:text-2xl
tracking-tight
mb-2
min-h-[28px]
">
          {loadingText}
        </h3>

        <p className="
text-xs
sm:text-sm
text-muted-foreground
mb-6 sm:mb-8
px-2
">
          Processing securely on high-performance servers
        </p>

        {/* Progress Bar */}
        <div className="
w-full
max-w-[200px]
sm:max-w-[240px]
h-1.5
bg-muted/50
rounded-full
overflow-hidden
shadow-inner
border border-border/50
">

          <div
            className="
h-full
bg-gradient-to-r
from-primary via-purple-500 to-blue-500
transition-all duration-500 ease-out
relative
"
            style={{ width: `${displayProgress}%` }}
          >

            <div className="
absolute inset-0
bg-gradient-to-r
from-transparent via-white/30 to-transparent
animate-[shimmer_2s_infinite]
"/>

          </div>
        </div>

        {/* Percentage */}
        <div className="
mt-3 sm:mt-4
flex items-center justify-between
w-full
max-w-[200px]
sm:max-w-[240px]
px-1
">
          <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
            Progress
          </span>

          <span className="
text-xs
font-mono
font-bold
text-primary
">
            {displayProgress}%
          </span>
        </div>

      </div>
    </div>
  );
}