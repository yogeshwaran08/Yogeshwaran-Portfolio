"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Plus } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-transparent backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tighter"
      >
        <a href="#" className="hover:text-accent transition-colors">
          YOGESHWARAN
        </a>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 group"
      >
        <span className="text-sm font-medium tracking-widest uppercase group-hover:text-accent transition-colors">
          Menu
        </span>
        <div className="relative w-6 h-6 flex items-center justify-center">
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:block"
      >
        <button className="bg-accent hover:bg-white hover:text-black text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-semibold transition-all duration-300 transform hover:scale-105">
          Let's Work Together <Plus className="w-4 h-4" />
        </button>
      </motion.div>
    </nav>
  );
}
