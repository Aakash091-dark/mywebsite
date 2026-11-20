"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Backend Developer / AI Engineer",
    company: "Cognitive Pixel, Ahmedabad",
    period: "May 2026 - Present",
    highlights: [
      "Architected a multi-tenant SaaS platform powering Meta Ads and Google Ads automation alongside AI-driven campaign diagnostics.",
      "Engineered a 7-layer Investigation Engine combining backend-controlled routing with Claude-powered intent classification, pandas-based analysis, and dynamic narrative generation.",
      "Eliminated message loss in a complex WebSocket-Celery-Redis pipeline by resolving a pub-sub race condition via an asyncio queue-backed drain pattern.",
      "Optimized system performance through a 28-point execution roadmap, incorporating prompt caching, response streaming, PgBouncer-ready asyncpg, and KEDA autoscaling."
    ],
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 2,
    role: "Python Developer",
    company: "EPACK PREFAB Technologies Limited",
    period: "July 2025 - Dec 2026",
    highlights: [
      "Spearheaded end-to-end AI project solutions for the marketing division, managing workflows from data ingestion and model integration to automated insights.",
      "Automated repetitive marketing workflows using Python, streamlining reporting processes and accelerating data-driven decision-making.",
      "Partnered with marketing stakeholders to translate complex business needs into highly reliable, production-ready AI services."
    ],
    color: "from-purple-500 to-fuchsia-500"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 bg-transparent text-white overflow-hidden">
      {/* Deep Space Background Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
      
      {/* Subtle Starfield / Nebula Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-[#050510]/80 to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase tracking-wider drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
          PROFESSIONAL EXPERIENCE
        </h2>
        <p className="text-center text-indigo-200/80 mb-20 max-w-2xl mx-auto drop-shadow-md">
          A journey of building scalable backends, robust AI engines, and enterprise solutions.
        </p>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent md:-translate-x-1/2 opacity-40 shadow-[0_0_15px_rgba(139,92,246,0.6)]" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                  
                  {/* Timeline Glowing Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-indigo-400 transform -translate-x-1/2 mt-8 shadow-[0_0_15px_rgba(168,85,247,0.8)] group-hover:bg-purple-400 group-hover:border-purple-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,1)] transition-all duration-500 z-10" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                    <div className="p-8 rounded-3xl bg-[#0B0B1A]/80 backdrop-blur-xl border border-indigo-900/40 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] relative overflow-hidden">
                      
                      {/* CSS Nebula Glow inside the Card */}
                      <div className={`absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br ${exp.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`} />
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 pointer-events-none" />

                      <h3 className="text-2xl font-bold text-white drop-shadow-md mb-2">{exp.role}</h3>
                      <h4 className="text-lg font-medium text-indigo-300 mb-3">{exp.company}</h4>
                      
                      <div className="inline-block px-4 py-1.5 bg-indigo-950/50 border border-indigo-500/30 rounded-full text-xs font-semibold text-indigo-200 mb-6 shadow-inner shadow-indigo-500/10">
                        {exp.period}
                      </div>

                      <ul className="space-y-4">
                        {exp.highlights.map((point, i) => (
                          <li key={i} className="flex items-start text-sm md:text-base text-gray-300 leading-relaxed group/item">
                            <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)] group-hover/item:scale-150 transition-transform duration-300" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}