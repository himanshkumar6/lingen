import React from "react";
import dynamic from "next/dynamic";
import HeroContent from "./Hero/HeroContent";

const HeroParticles = dynamic(() => import("./Hero/HeroParticles"), {
  ssr: false,
});

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 md:py-40 
                       bg-indigo-500/5 dark:bg-indigo-500/5 transition-colors duration-700">

      {/* ===== BACKGROUND GRADIENT OVERLAYS ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/5" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/5" />
      </div>

      <HeroParticles />
      <HeroContent />

    </section>
  );
};

export default Hero;
