"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  imageSrc: string;
}

class Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
  currentColor: string;
  size: number;
  vx: number;
  vy: number;
  friction: number;
  ease: number;
  scatter: number;

  constructor(x: number, y: number, color: string, size: number) {
    this.x = x + (Math.random() - 0.5) * 20;
    this.y = y + (Math.random() - 0.5) * 20;
    this.originX = x;
    this.originY = y;
    this.color = color;
    this.currentColor = color;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.friction = 0.94;
    this.ease = 0.08;
    this.scatter = (Math.random() - 0.5) * 25; // Random spread for imperfect circle
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.currentColor;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update(mouse: { x: number; y: number; radius: number }) {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Color hover effect instead of displacement
    if (distance < mouse.radius + this.scatter) {
      // Glow bright yellow on hover
      this.currentColor = "rgba(255, 235, 59, 1)";
    } else {
      this.currentColor = this.color;
    }

    this.x += (this.originX - this.x) * this.ease + (this.vx *= this.friction);
    this.y += (this.originY - this.y) * this.ease + (this.vy *= this.friction);
  }
}

export default function ParticlePortrait({ imageSrc }: ParticleProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0, radius: 16 });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = "anonymous";

    let particles: Particle[] = [];
    let animationFrame: number;

    const init = () => {
      const container = containerRef.current!;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;

      const displayWidth = canvas.width;
      const displayHeight = canvas.height;

      const imgRatio = img.width / img.height;
      const canvasRatio = displayWidth / displayHeight;
      let drawW, drawH, drawX, drawY;

      if (imgRatio > canvasRatio) {
        drawH = displayHeight;
        drawW = displayHeight * imgRatio;
        drawX = (displayWidth - drawW) / 2;
        drawY = 0;
      } else {
        drawW = displayWidth;
        drawH = displayWidth / imgRatio;
        drawX = 0;
        drawY = (displayHeight - drawH) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = [];
      const step = 5; // Tighter grid for "ASCII-like" density

      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const index = (y * canvas.width + x) * 4;
          const alpha = pixels[index + 3];

          if (alpha > 128) {
            const r = pixels[index];
            const g = pixels[index + 1];
            const b = pixels[index + 2];
            const brightness = (r + g + b) / 3;

            // Light threshold (only render pixels with content)
            if (brightness > 30) {
              // Map brightness to dot size (linear and punchy)
              const pSize = (brightness / 255) * 2.8;

              // Color mapping: highlight pixels are brighter orange
              const color = `rgba(255, ${77 + brightness * 0.4}, 0, ${
                0.4 + brightness / 255
              })`;

              particles.push(new Particle(x, y, color, pSize));
            }
          }
        }
      }
      setIsLoaded(true);
    };

    img.onload = () => {
      init();
      animate();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Strong cinematic glow
      ctx.shadowColor = "#ff4d00";
      ctx.shadowBlur = 10;

      particles.forEach((p) => {
        p.update(mouse.current);
        p.draw(ctx);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [imageSrc]);

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => window.dispatchEvent(new CustomEvent("cursorImageHover", { detail: true }))}
      onMouseLeave={() => window.dispatchEvent(new CustomEvent("cursorImageHover", { detail: false }))}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full relative cursor-none"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
}
