"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RevealText({
  children,
  delay = 0,
  triggerOnScroll = false,
}: {
  children: React.ReactNode;
  delay?: number;
  triggerOnScroll?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const shouldAnimate = triggerOnScroll ? isInView : true;
  const baseDelay = triggerOnScroll ? delay : delay; // Allow combining scroll trigger with a stagger delay

  return (
    <div ref={ref} className="relative inline-block overflow-hidden pb-[0.08em]">
      <motion.div
        initial={{ left: "0%", right: "100%" }}
        animate={shouldAnimate ? { left: ["0%", "0%", "100%"], right: ["100%", "0%", "0%"] } : { left: "0%", right: "100%" }}
        transition={{
          duration: 1.0,
          ease: [0.76, 0, 0.24, 1],
          times: [0, 0.5, 1],
          delay: baseDelay,
        }}
        className="absolute inset-y-0 bg-white/50 z-20 pointer-events-none"
      />
      <motion.div
        initial={{ left: "0%", right: "100%" }}
        animate={shouldAnimate ? { left: ["0%", "0%", "100%"], right: ["100%", "0%", "0%"] } : { left: "0%", right: "100%" }}
        transition={{
          duration: 1.0,
          ease: [0.76, 0, 0.24, 1],
          times: [0, 0.5, 1],
          delay: baseDelay + 0.15,
        }}
        className="absolute inset-y-0 bg-accent z-30 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.01, delay: baseDelay + 0.65 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
