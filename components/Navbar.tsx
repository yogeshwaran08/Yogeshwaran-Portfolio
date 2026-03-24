"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="pointer-events-auto flex items-center justify-between gap-10 px-6 py-3 bg-[#141314]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-xl"
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
