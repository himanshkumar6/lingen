"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimeCharacter } from "@/data/animeCharacters";

interface CharacterCardProps {
  character: AnimeCharacter;
  image?: string; // image comes from aiImages state
  onClick?: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  image,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col rounded-[1.5rem] border border-border glass-card text-card-foreground shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2 hover:neon-border"
    >
      {/* Image Section */}
      <div className="relative aspect-4/5 overflow-hidden bg-muted/20">

        {/* Skeleton Loader */}
        {!image && (
          <div className="absolute inset-0 animate-pulse bg-muted/30" />
        )}

        {image && (
          <Image
            src={image}
            alt={`${character.name} from ${character.anime}`}
            fill
            unoptimized
            priority={false}
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   33vw"
            className={`object-cover transition-all duration-700 
              ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
              group-hover:scale-110`}
            onLoad={() => setIsLoaded(true)}
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 relative">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-black text-primary uppercase tracking-widest">
            {character.role}
          </span>

          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/80">
            {character.anime}
          </span>
        </div>

        <h4 className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {character.name}
        </h4>

        <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
          <span className="text-[10px] font-bold text-muted-foreground uppercase">
            Stability: 98.2%
          </span>

          <div className="h-1 w-16 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[98%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;