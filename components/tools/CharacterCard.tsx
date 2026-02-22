"use client";

import React from "react";
import { AnimeCharacter } from "@/data/animeCharacters";

interface CharacterCardProps {
  character: AnimeCharacter;
  onClick?: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col rounded-[1.5rem] border border-border glass-card text-card-foreground shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer p-6 hover:-translate-y-2 hover:neon-border"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-black text-primary uppercase tracking-widest">
          {character.role}
        </span>

        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/80">
          {character.anime}
        </span>
      </div>

      {/* Name */}
      <h4 className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-1">
        {character.name}
      </h4>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
        <span className="text-[10px] font-bold text-muted-foreground uppercase">
          Stability: 100%
        </span>

        <div className="h-1 w-16 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary w-full" />
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;