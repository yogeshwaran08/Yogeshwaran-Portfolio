import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./Text.css";

const varients = {
  hidden: { opacity: 0, y: -10 },
  visible: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0 + index },
    };
  },
};

const HeroText = () => {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStartTyping(true);
    }, 500);

    return () => clearTimeout(delayTimeout);
  }, []);
  return (
    <div className="Text-container">
      <motion.span
        className="small-fnt"
        variants={varients}
        initial="hidden"
        animate="visible"
        custom={0.3}
      >
        Hello, I am Yogeshwaran
      </motion.span>
      <motion.span
        className="typewriter"
        variants={varients}
        initial="hidden"
        animate="visible"
        custom={0.4}
      >
        <Typewriter
          options={{
            strings: ["App developer", "Web developer", "Ethical Hacker"],
            autoStart: startTyping,
            loop: true,
            deleteSpeed: 110,
            // delay: 500,
          }}
        />
      </motion.span>
      <motion.span
        className="small-fnt"
        variants={varients}
        initial="hidden"
        animate="visible"
        custom={0.5}
      >
        Let's create something extraordinary together
      </motion.span>
    </div>
  );
};

export default HeroText;
