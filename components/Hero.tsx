"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ParticlePortrait from "./ParticlePortrait";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
  };

  return (
    <section className="relative min-h-screen pt-40 pb-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#ff4d00] rounded-full blur-[180px] opacity-10" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[150px] opacity-[0.03]" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10"
      >
        <motion.p variants={item} className="text-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-6 flex items-center gap-2">
          <span className="w-12 h-[1px] bg-accent" /> Available for new projects
        </motion.p>
        
        <motion.h1 variants={item} className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8">
          Your AI <br />
          <span className="text-gray-400">Engineer.</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-gray-400 max-w-md leading-relaxed mb-12">
          Building intelligent systems and high-performing digital experiences for the next generation of tech.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-6">
          <button className="bg-accent hover:bg-white text-white hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(255,77,0,0.3)] hover:shadow-[0_0_60px_rgba(255,77,0,0.5)]">
            See My Work
          </button>
          <a href="#" className="group flex items-center gap-2 text-lg font-semibold hover:text-accent transition-colors">
            View Projects <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="relative aspect-square z-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full">
           <ParticlePortrait imageSrc="/profile.png" />
          {/* Animated Glow Rings */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 border border-accent/20 rounded-full pointer-events-none"
          />
           <motion.div 
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-[-20%] border border-white/10 rounded-full pointer-events-none"
          />
        </div>
      </motion.div>
    </section>
  );
}
