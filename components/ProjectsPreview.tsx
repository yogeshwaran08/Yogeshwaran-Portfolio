"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neural Flux",
    category: "AI INFRASTRUCTURE",
    year: "2024",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Quantum Core",
    category: "SYSTEM DESIGN",
    year: "2023",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Aether Link",
    category: "LLM PIPELINE",
    year: "2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-32 px-6 md:px-12 bg-dark">
      <div className="flex justify-between items-end mb-20">
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">Selected Works</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Featured Projects</h3>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-lg font-semibold hover:text-accent transition-colors pb-2 border-b border-white/20">
          All Projects <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900 mb-6">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <p className="text-xs font-bold tracking-widest text-accent mb-1">{project.category}</p>
                 <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="flex justify-between items-start">
              <h4 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h4>
              <span className="text-gray-500 font-mono italic">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
