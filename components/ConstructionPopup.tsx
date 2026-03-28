"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HardHat, X } from "lucide-react";

export default function ConstructionPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Slight delay before showing the popup
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 md:left-auto md:right-6 z-[9999] max-w-[320px] bg-[#1a191a]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl flex items-start gap-4"
        >
          {/* <div className="bg-accent/10 border border-accent/20 p-2 rounded-full text-accent shrink-0">
            <HardHat size={20} strokeWidth={1.5} />
          </div> */}
          <div className="flex-1 mt-0.5">
            <h4 className="text-white text-sm font-semibold tracking-wide mb-1">
              Under Construction
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Pardon the digital dust! This portfolio is still actively being
              built and refined.
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-white transition-colors shrink-0 p-1 rounded-full hover:bg-white/5"
            aria-label="Close popup"
          >
            <X size={16} strokeWidth={2} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
