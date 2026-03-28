"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          // Island styles when scrolled
          width: scrolled ? "calc(100% - 3rem)" : "100%",
          marginTop: scrolled ? "1.25rem" : "0rem",
          borderRadius: scrolled ? "0.75rem" : "0rem",
          backgroundColor: scrolled ? "rgba(20,19,20,0.85)" : "rgba(20,19,20,0)",
          borderColor: scrolled ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.5)" : "none",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          paddingTop: scrolled ? "0.75rem" : "1.75rem",
          paddingBottom: scrolled ? "0.75rem" : "1.75rem",
          paddingLeft: scrolled ? "1.5rem" : "3rem",
          paddingRight: scrolled ? "1.5rem" : "3rem",
        }}
        transition={{
          opacity: { type: "tween", duration: 0.8, delay: 0.2, ease: "easeInOut" },
          y: { type: "tween", duration: 0.8, delay: 0.2, ease: "easeInOut" },
          width: { type: "tween", duration: 0.35, ease: "easeInOut" },
          marginTop: { type: "tween", duration: 0.35, ease: "easeInOut" },
          borderRadius: { type: "tween", duration: 0.35, ease: "easeInOut" },
          backgroundColor: { type: "tween", duration: 0.35, ease: "easeInOut" },
          borderColor: { type: "tween", duration: 0.35, ease: "easeInOut" },
          boxShadow: { type: "tween", duration: 0.35, ease: "easeInOut" },
          backdropFilter: { type: "tween", duration: 0.35, ease: "easeInOut" },
          paddingTop: { type: "tween", duration: 0.35, ease: "easeInOut" },
          paddingBottom: { type: "tween", duration: 0.35, ease: "easeInOut" },
          paddingLeft: { type: "tween", duration: 0.35, ease: "easeInOut" },
          paddingRight: { type: "tween", duration: 0.35, ease: "easeInOut" },
        }}
        className="pointer-events-auto flex items-center justify-between gap-10 border"
      >
        {/* Logo */}
        <a href="#" className="text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors whitespace-nowrap">
          Yogeshwaran
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-accent hover:opacity-90 text-black text-xs font-bold tracking-widest uppercase px-5 py-2.5 transition-all duration-300 whitespace-nowrap">
          Let&apos;s Talk
        </button>
      </motion.div>
    </nav>
  );
}
