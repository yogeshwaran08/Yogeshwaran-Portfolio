"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function Navbar() {

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

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:flex items-center gap-8"
      >
        {["Home", "Projects", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </motion.div>

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
