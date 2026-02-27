"use client";

import React, { useState, useEffect } from "react";

type ParticleStyle = {
  width: string;
  height: string;
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
};

type SnowfallPhase = {
  backSnow: ParticleStyle[];
  midSnow: ParticleStyle[];
  frontSnow: ParticleStyle[];
};

const SnowfallBackground = React.memo(() => {
  const [mounted, setMounted] = useState(false);
  const [snowflakes, setSnowflakes] = useState<SnowfallPhase>({
    backSnow: [],
    midSnow: [],
    frontSnow: [],
  });

  useEffect(() => {
    // Generate particles ONLY after hydration on the client to ensure server HTML matches initial client HTML exactly.
    const back = [...Array(30)].map(() => ({
      width: `${1.5 + Math.random() * 1.5}px`,
      height: `${1.5 + Math.random() * 1.5}px`,
      left: `${Math.random() * 100}%`,
      top: `-${Math.random() * 20}%`,
      animationDuration: `${40 + Math.random() * 30}s`,
      animationDelay: `-${Math.random() * 40}s`,
      opacity: 0.3 + Math.random() * 0.2,
    }));

    const mid = [...Array(20)].map(() => ({
      width: `${2.5 + Math.random() * 2}px`,
      height: `${2.5 + Math.random() * 2}px`,
      left: `${Math.random() * 100}%`,
      top: `-${Math.random() * 20}%`,
      animationDuration: `${25 + Math.random() * 20}s`,
      animationDelay: `-${Math.random() * 25}s`,
      opacity: 0.5 + Math.random() * 0.3,
    }));

    const front = [...Array(10)].map(() => ({
      width: `${4 + Math.random() * 3}px`,
      height: `${4 + Math.random() * 3}px`,
      left: `${Math.random() * 100}%`,
      top: `-${Math.random() * 20}%`,
      animationDuration: `${15 + Math.random() * 10}s`,
      animationDelay: `-${Math.random() * 20}s`,
      opacity: 0.7 + Math.random() * 0.3,
    }));

    setSnowflakes({ backSnow: back, midSnow: mid, frontSnow: front });
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 z-[-3] pointer-events-none overflow-hidden bg-[hsl(var(--cmd-bg))]">
      {/* Cinematic Edge Vignette */}
      <div className="absolute inset-0 z-[-1] shadow-[inset_0_0_150px_hsl(var(--cmd-vignette)/0.8)] pointer-events-none" />

      {/* Optimized Snow Layers */}
      <div className="absolute inset-0 z-1 pointer-events-none motion-reduce:hidden">
        {mounted && snowflakes.backSnow.map((style, i) => (
          <div
            key={`back-${i}`}
            className={`absolute bg-white dark:bg-foreground rounded-full animate-snow-far will-change-transform ${i >= 15 ? "hidden md:block" : ""
              }`}
            style={style}
          />
        ))}

        {mounted && snowflakes.midSnow.map((style, i) => (
          <div
            key={`mid-${i}`}
            className={`absolute bg-white dark:bg-foreground rounded-full animate-snow-mid will-change-transform ${i >= 10 ? "hidden md:block" : ""
              }`}
            style={style}
          />
        ))}

        {mounted && snowflakes.frontSnow.map((style, i) => (
          <div
            key={`front-${i}`}
            className={`absolute bg-white dark:bg-white rounded-full animate-snow-front will-change-transform ${i >= 5 ? "hidden md:block" : ""
              }`}
            style={style}
          />
        ))}
      </div>
    </div>
  );
});

SnowfallBackground.displayName = "SnowfallBackground";

export default SnowfallBackground;
