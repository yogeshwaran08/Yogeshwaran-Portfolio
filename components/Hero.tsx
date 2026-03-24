"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ParticlePortrait from "./ParticlePortrait";
import RevealText from "./RevealText";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] md:h-[100dvh] pt-28 pb-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#ff4d00] rounded-full blur-[180px] opacity-10" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[150px] opacity-[0.03]" />
      </div>

      <div className="z-10 flex flex-col items-start px-2">
        <h1
          style={{ fontFamily: "var(--font-host)" }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-normal leading-[1.0] mb-6 flex flex-col items-start gap-2"
        >
          <RevealText delay={3.8}>
            <span className="text-white whitespace-nowrap">
              Building AI powered
            </span>
          </RevealText>
          <RevealText delay={4.0}>
            <span className="text-white whitespace-nowrap">
              applications that matter
            </span>
          </RevealText>
        </h1>

        <div className="text-base md:text-lg text-gray-400 mb-8 flex flex-col items-start gap-1">
          <RevealText delay={4.2}>
            <span>
              Experienced in TensorFlow, PyTorch, and modern web technologies
            </span>
          </RevealText>
          <RevealText delay={4.3}>
            <span>
              building end-to-end AI solutions with real-world impact.
            </span>
          </RevealText>
          {/* <RevealText delay={3.4}>
            <span>contracts, and no hourly tracking.</span>
          </RevealText> */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.7, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-6"
        >
          <div className="flex gap-[2px] bg-[#141314]">
            <button className="bg-accent hover:opacity-90 text-black font-semibold text-sm tracking-widest uppercase px-6 py-4 transition-all">
              Contact Me
            </button>
            <button className="bg-accent hover:opacity-90 text-black px-5 py-4 flex items-center justify-center transition-all">
              <span className="font-medium text-lg leading-none">+</span>
            </button>
          </div>

          <a
            href="#"
            className="text-base font-semibold text-white border-b-[1.5px] border-white pb-0.5 hover:border-accent hover:text-accent transition-colors"
          >
            View my work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 2.8 }}
        className="relative aspect-square z-0 flex items-center justify-center -translate-y-8 lg:-translate-y-20"
      >
        <div className="relative w-full h-full">
          <ParticlePortrait imageSrc="/profile.png" delay={2.8} />
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 5.0, ease: "easeOut" }}
        className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 flex flex-col xl:flex-row justify-between lg:justify-start items-start xl:items-end gap-8 z-20 pointer-events-auto"
      >
        <p className="text-gray-400 text-[10px] md:text-xs font-mono tracking-widest uppercase leading-[1.6] text-left shrink-0 whitespace-nowrap">
          Core Expertise Built <br />
          On Modern Frameworks
        </p>
        <div className="flex items-center gap-4 md:gap-8 text-gray-400 font-bold text-sm md:text-lg lg:text-xl tracking-tight overflow-x-auto no-scrollbar w-full xl:w-auto">
          <span className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            TensorFlow
          </span>
          <span className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            PyTorch
          </span>
          <span className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            Scikit-Learn
          </span>
          <span className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            Python
          </span>
          <span className="text-gray-500 text-[10px] md:text-xs font-mono tracking-widest uppercase ml-2 font-normal whitespace-nowrap shrink-0">
            + Many More
          </span>
        </div>
      </motion.div>
    </section>
  );
}
