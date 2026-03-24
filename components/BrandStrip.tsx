"use client";

import { motion } from "framer-motion";

const skills = [
  "Python", "TypeScript", "JavaScript", "Rust", 
  "React", "Next.js", "Tailwind CSS", "Angular JS",
  "Node.js", "FastAPI", "Django", "Flask", 
  "TensorFlow", "PyTorch", "Scikit-Learn", 
  "Hugging Face", "LangChain", "LlamaIndex", "Ollama", "DeepSeek",
  "Pinecone", "ChromaDB", "PostgreSQL", "MongoDB", 
  "Docker", "AWS", "Edge AI", "Raspberry Pi"
];

export default function BrandStrip() {
  return (
    <section className="py-6 border-y border-white/10 bg-dark overflow-hidden whitespace-nowrap">
      <div className="flex items-center gap-12 w-fit animate-marquee hover:pause-marquee group">
        {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1, color: "#ff4d00" }}
              className="text-lg md:text-xl font-bold tracking-widest uppercase text-gray-500 transition-colors duration-300 cursor-default"
            >
              {skill}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
