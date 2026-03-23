"use client";

import { motion } from "framer-motion";

const brands = ["TECHCORP", "FUTURE AI", "NEXUS SYSTEMS", "SKYNET LABS", "ZETAVERSE"];

export default function BrandStrip() {
  return (
    <section className="py-24 border-y border-white/10 bg-dark overflow-hidden whitespace-nowrap">
      <div className="flex items-center gap-12 w-full animate-marquee hover:pause-marquee group">
        {[...brands, ...brands].map((brand, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, color: "#ff4d00" }}
            className="text-2xl md:text-3xl font-black text-gray-600 px-8 transition-colors duration-300"
          >
            {brand}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
