"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  imageSrc: string;
  delay?: number; // Added to sync with entrance loader animations
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
  targetSize: number;
  triggerTime: number;

  constructor(x: number, y: number, color: string, size: number) {
    // Start scattered widely and progressively draw inwards
    const scatterAng = Math.random() * Math.PI * 2;
    const scatterDist = 100 + Math.random() * 300;
    this.x = x + Math.cos(scatterAng) * scatterDist;
    this.y = y + Math.sin(scatterAng) * scatterDist;
    this.originX = x;
    this.originY = y;
    this.color = color;
    this.currentColor = color;
    this.size = 0; // Starts at size 0
    this.targetSize = size;
    this.vx = 0;
    this.vy = 0;
    this.friction = 0.92;
    this.ease = 0.06 + Math.random() * 0.08; // Faster progressive snap formation
    this.scatter = (Math.random() - 0.5) * 25; 
    
    // Diagonal top-left to bottom-right staggered timeline entrance (accelerated)
    this.triggerTime = ((x + y) / 1200) * 0.7 + Math.random() * 0.2;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.size <= 0.1) return; // Prevent rendering specs
    ctx.fillStyle = this.currentColor;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update(mouse: { x: number; y: number; radius: number }, elapsed: number, globalDelay: number): boolean {
    if (elapsed < globalDelay + this.triggerTime) {
      return false;
    }

    // Progressively grow to target size much faster
    if (this.size < this.targetSize) {
      this.size += (this.targetSize - this.size) * 0.25;
    }
    // Mouse dispersion mechanics
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    let isHovered = false;
    if (distance < mouse.radius + this.scatter) {
      this.currentColor = "rgba(255, 235, 59, 1)";
      isHovered = true;
    } else {
      this.currentColor = this.color;
    }

    this.x += (this.originX - this.x) * this.ease + (this.vx *= this.friction);
    this.y += (this.originY - this.y) * this.ease + (this.vy *= this.friction);
    
    return isHovered;
  }
}

export default function ParticlePortrait({ imageSrc, delay = 0 }: ParticleProps) {
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
        // Image is wider than canvas
        drawW = displayWidth;
        drawH = displayWidth / imgRatio;
        drawX = 0;
        drawY = (displayHeight - drawH) / 2;
      } else {
        // Image is taller than canvas
        drawH = displayHeight;
        drawW = displayHeight * imgRatio;
        drawX = (displayWidth - drawW) / 2;
        drawY = 0;
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
      animationFrame = requestAnimationFrame(animate);
    };

    let isHoveringAnyParticle = false;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Strong cinematic glow
      ctx.shadowColor = "#ff4d00";
      ctx.shadowBlur = 10;

      let currentlyHovering = false;
      particles.forEach((p) => {
        const hovered = p.update(mouse.current, elapsed, delay);
        if (hovered) currentlyHovering = true;
        p.draw(ctx);
      });

      if (currentlyHovering !== isHoveringAnyParticle) {
        isHoveringAnyParticle = currentlyHovering;
        window.dispatchEvent(new CustomEvent("cursorImageHover", { detail: currentlyHovering }));
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.radius = 16;
    };

    const handleMouseLeave = () => {
      mouse.current.radius = 0;
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener("mousemove", handleMouseMove);
    containerRef.current.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      if (containerRef.current) {
        containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [imageSrc]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full relative cursor-none"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
}
