"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import About from "@/components/About";
import TechnicalSkills from "@/components/TechnicalSkills";
import ProjectsPreview from "@/components/ProjectsPreview";
import ConstructionPopup from "@/components/ConstructionPopup";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverImage = (e: Event) =>
      setIsHoveringImage((e as CustomEvent).detail);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("cursorImageHover", handleHoverImage);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("cursorImageHover", handleHoverImage);
    };
  }, []);

  if (!mounted) return null;

  return (
    <main className="noise relative">
      <motion.div
        initial={{ "--clock-angle": "360deg" } as any}
        animate={
          {
            "--clock-angle": "0deg",
            transitionEnd: { display: "none" },
          } as any
        }
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 2.5 }}
        style={{
          maskImage:
            "conic-gradient(from 0deg at 50% 50%, black var(--clock-angle), transparent 0deg)",
          WebkitMaskImage:
            "conic-gradient(from 0deg at 50% 50%, black var(--clock-angle), transparent 0deg)",
        }}
        className="fixed inset-0 z-[99999] bg-accent pointer-events-none flex flex-col items-center justify-center p-4"
      >
        <div className="flex gap-2">
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            className="w-6 h-6 bg-[#141314]"
          />
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            className="w-6 h-6 bg-[#141314]"
          />
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            className="w-6 h-6 bg-[#141314]"
          />
        </div>
        <span className="text-[#141314] tracking-[0.3em] text-sm font-semibold mt-4">
          LOADING
        </span>
      </motion.div>

      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden md:block transition-colors duration-200 ${
          isHoveringImage
            ? "border-2 border-accent bg-transparent"
            : "bg-accent mix-blend-difference"
        }`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 border border-accent rounded-full pointer-events-none z-[9999] hidden md:block opacity-20"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <Navbar />
      <Hero />
      {/* <BrandStrip /> */}
      <About />
      <TechnicalSkills />
      <ProjectsPreview />

      {/* Footer / Copyright */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm bg-dark">
        <p>© 2024 YOGESH.AI ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-accent transition-colors">
            LINKEDIN
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            TWITTER
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            GITHUB
          </a>
        </div>
      </footer>

      <ConstructionPopup />
    </main>
  );
}
