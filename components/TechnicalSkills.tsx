"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Terminal,
  Database,
  Layout,
  Layers,
  Cpu,
  Globe,
  Settings,
  Framer,
  Combine,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "React",
    icon: <Globe size={32} strokeWidth={1.5} />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <Layers size={32} strokeWidth={1.5} />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <Code2 size={32} strokeWidth={1.5} />,
    category: "Languages",
  },
  {
    name: "Tailwind CSS",
    icon: <Layout size={32} strokeWidth={1.5} />,
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: <Terminal size={32} strokeWidth={1.5} />,
    category: "Backend",
  },
  {
    name: "Python",
    icon: <Cpu size={32} strokeWidth={1.5} />,
    category: "Languages",
  },
  {
    name: "PostgreSQL",
    icon: <Database size={32} strokeWidth={1.5} />,
    category: "Database",
  },
  {
    name: "GSAP",
    icon: <Combine size={32} strokeWidth={1.5} />,
    category: "Animation",
  },
  {
    name: "Framer Motion",
    icon: <Framer size={32} strokeWidth={1.5} />,
    category: "Animation",
  },
  {
    name: "REST APIs",
    icon: <Settings size={32} strokeWidth={1.5} />,
    category: "Backend",
  },
];

export default function TechnicalSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      // Hover floating effect setup
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.05,
            borderColor: "var(--color-accent)",
            boxShadow: "0 10px 30px -10px rgba(255, 77, 0, 0.3)",
            duration: 0.4,
            ease: "power2.out",
          });

          const icon = card.querySelector(".skill-icon");
          if (icon) {
            gsap.to(icon, {
              color: "var(--color-accent)",
              rotate: 5,
              duration: 0.3,
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            borderColor: "rgba(255,255,255,0.1)",
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out",
          });

          const icon = card.querySelector(".skill-icon");
          if (icon) {
            gsap.to(icon, {
              color: "#a1a1aa", // text-gray-400
              rotate: 0,
              duration: 0.3,
            });
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 md:px-12 bg-dark relative overflow-hidden"
    >
      <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div ref={headingRef} className="mb-16">
          <span className="text-accent font-bold tracking-[0.2em] text-sm uppercase mb-6 block">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-title font-medium leading-[1.1] tracking-tight text-white max-w-4xl">
            I build robust and scalable digital experiences with a carefully
            curated stack of modern technologies.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group bg-[#1a191a] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors duration-300"
            >
              <div className="skill-icon text-gray-400 transition-colors duration-300">
                {skill.icon}
              </div>
              <div className="text-center">
                <h3 className="text-white font-medium text-lg tracking-wide">
                  {skill.name}
                </h3>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">
                  {skill.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
