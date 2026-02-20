"use client";
import { useEffect, useRef } from "react";

const Snowfall = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const snowflakes: any[] = [];

    const createSnowflakes = () => {
      for (let i = 0; i < 75; i++) {
        const isMedium = Math.random() > 0.6;
        snowflakes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: isMedium ? Math.random() * 2 + 1.5 : Math.random() * 1 + 0.5,
          speed: isMedium ? Math.random() * 1 + 0.8 : Math.random() * 0.5 + 0.3,
          drift: Math.random() * 0.4 - 0.2,
          blur: isMedium ? 2 : 0,
          opacity: isMedium ? 0.6 : 0.4,
        });
      }
    };

    const drawSnowflakes = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        if (flake.blur > 0) {
          ctx.shadowBlur = flake.blur;
          ctx.shadowColor = "white";
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      });

      updateSnowflakes();
    };

    const updateSnowflakes = () => {
      snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        flake.x += flake.drift;

        if (flake.y > height) {
          flake.y = 0;
          flake.x = Math.random() * width;
        }
      });
    };

    const animate = () => {
      drawSnowflakes();
      requestAnimationFrame(animate);
    };

    createSnowflakes();
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default Snowfall;