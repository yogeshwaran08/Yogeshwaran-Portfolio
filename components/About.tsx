"use client";

import { motion } from "framer-motion";
import RevealText from "./RevealText";
import { useState, useEffect } from "react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "AI Models Deployed" },
  { value: "5+", label: "Open Source Contributions" },
];

const traits = [
  "AI & ML Engineering",
  "Full-Stack Development",
  "LLM Pipelines",
  "Edge AI & IoT",
  "Data Engineering",
  "System Design",
];

const ASCII_CHARS = "!<>-_\\/[]{}—=+*^?#________";

const AsciiText = ({
  text,
  isHovered,
}: {
  text: string;
  isHovered: boolean;
}) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered) {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) return text[index];
              return ASCII_CHARS[
                Math.floor(Math.random() * ASCII_CHARS.length)
              ];
            })
            .join(""),
        );
        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 0.7;
      }, 15);
    } else {
      setDisplayText(text);
    }
    return () => clearInterval(interval);
  }, [isHovered, text]);

  return <>{displayText}</>;
};

const StatCard = ({
  stat,
  index,
}: {
  stat: { value: string; label: string };
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark p-8 flex flex-col justify-between group hover:bg-white/[0.03] transition-colors duration-150 cursor-crosshair"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className="text-5xl md:text-6xl font-normal text-white mb-4 group-hover:text-accent transition-colors duration-150 font-mono"
        style={{ fontFamily: "var(--font-host)" }}
      >
        <AsciiText text={stat.value} isHovered={isHovered} />
      </span>
      <span className="text-xs font-bold tracking-widest text-gray-500 uppercase font-mono">
        <AsciiText text={stat.label} isHovered={isHovered} />
      </span>
    </motion.div>
  );
};

const TraitTag = ({ trait }: { trait: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className="text-xs font-semibold tracking-widest uppercase px-4 py-2 border border-white/10 text-gray-400 hover:border-accent/40 hover:text-white transition-colors duration-150 cursor-crosshair font-mono"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AsciiText text={trait} isHovered={hovered} />
    </span>
  );
};

export default function About() {
  return (
    <section className="relative min-h-[100dvh] flex items-center px-6 md:px-12 bg-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent rounded-full blur-[220px] opacity-[0.04] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-bold tracking-widest uppercase mb-4"
          >
            About Me
          </motion.p>

          <h2
            className="text-4xl md:text-5xl font-normal leading-[1.15] mb-8 flex flex-col"
            style={{ fontFamily: "var(--font-host)" }}
          >
            <RevealText triggerOnScroll>I build intelligent</RevealText>
            <RevealText triggerOnScroll delay={0.15}>
              systems that learn,
            </RevealText>
            <RevealText triggerOnScroll delay={0.3}>
              adapt, and scale.
            </RevealText>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4 text-gray-400 text-base leading-relaxed"
          >
            <p>
              I'm Yogeshwaran, an AI developer focused on building intelligent,
              scalable systems. I specialize in combining machine learning with
              modern web technologies to create real-world applications that
              deliver impact. Currently building an AI-powered sales analysis
              system that generates actionable insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-2 mt-8"
          >
            {traits.map((trait) => (
              <TraitTag key={trait} trait={trait} />
            ))}
          </motion.div>
        </div>

        {/* Right — Stats grid with ASCII hover effect */}
        <div className="grid grid-cols-2 gap-px bg-white/10">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
