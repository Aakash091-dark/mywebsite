"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Enterprise LLM Knowledge Assistant",
    shortDesc: "Enterprise-grade AI knowledge assistant that allows natural language queries over company documents using Retrieval-Augmented Generation (RAG).",
    longDesc: "This project provides a complete end-to-end knowledge assistant for enterprise use. It integrates with internal document repositories, creates vector embeddings for fast semantic search, and uses advanced LLMs to synthesize accurate answers based purely on retrieved context.",
    architecture: "FastAPI Backend -> FAISS Vector DB -> LangChain -> OpenAI/OpenSource LLM",
    features: [
      "semantic document search",
      "vector database retrieval",
      "LLM-based question answering",
      "scalable API backend"
    ],
    tech: ['Python', 'FastAPI', 'FAISS', 'LLM', 'RAG', 'Embeddings'],
    link: "https://github.com/Aakash091-dark/enterprise-automation-projects"
  },
  {
    id: 2,
    title: "NeuroParticles",
    shortDesc: "Interactive particle simulation engine controlled by hand gestures using computer vision. The system tracks hand movements and dynamically manipulates thousands of GPU-rendered particles in real time.",
    longDesc: "A creative technology project that bridges physical movement with digital art. By leveraging MediaPipe for hand tracking, it translates real-world coordinates into gravitational and repelling forces affecting a massive OpenGL particle system.",
    architecture: "Webcam -> MediaPipe Pose/Hand Tracking -> Python Logic -> OpenGL Shaders -> Screen",
    features: [
      "Real-time hand gesture recognition",
      "10,000+ GPU-rendered particles",
      "Physics-based particle simulation",
      "Computer vision interaction"
    ],
    tech: ['Python', 'OpenGL', 'MediaPipe', 'OpenCV', 'NumPy', 'GLFW'],
    link: "https://github.com/Aakash091-dark/NeuroParticles"
  },
  {
    id: 3,
    title: "Huntify - AI Job Application Automation",
    shortDesc: "Fully automated job hunting system that discovers jobs, tailors resumes using AI, and automatically applies using browser automation.",
    longDesc: "An end-to-end automated job application system. It scrapes real job listings from platforms like LinkedIn and Naukri, uses AI for smart profile matching, dynamically customizes the applicant's resume for each role, and utilizes Playwright to automatically fill and submit application forms.",
    architecture: "FastAPI -> Web Scrapers -> AI Matching Engine -> Resume Tailor -> Playwright Browser Automation",
    features: [
      "Automated job discovery across multiple boards",
      "AI-powered smart resume matching",
      "Dynamic resume customization",
      "Playwright-based automated form submission"
    ],
    tech: ['Python', 'FastAPI', 'Playwright', 'Web Scraping', 'AI Matching', 'Automation'],
    link: "https://github.com/Aakash091-dark/Huntify"
  },
  {
    id: 4,
    title: "NewsHive - AI-Powered News Intelligence",
    shortDesc: "Enterprise-grade news aggregation system scraping and processing business news using AWS Bedrock AI and vector embeddings.",
    longDesc: "Automates collection and analysis of business news from 20+ sources. Leverages AI for summarization, keyword extraction, and semantic similarity detection, organizing content into a PostgreSQL database with pgvector for intelligent search.",
    architecture: "RSS/Google Search -> Playwright/Tor -> AWS Bedrock AI -> GTE Embeddings -> FAISS -> PostgreSQL pgvector",
    features: [
      "Multi-source automated news collection",
      "AWS Bedrock AI summarization & classification",
      "Semantic deduplication with FAISS",
      "PostgreSQL vector database integration"
    ],
    tech: ['Python', 'AWS Bedrock', 'Playwright', 'PostgreSQL', 'pgvector', 'FAISS'],
    link: "https://github.com/Aakash091-dark/NewsHive"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="ai-engineer" className="relative py-32 bg-transparent text-white overflow-hidden">
      {/* Deep Space Background Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
      
      {/* Subtle Starfield / Nebula Effect */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#050510]/80 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase tracking-wider drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]">
          AAKASH SEHRAWAT AS AI ENGINEER
        </h2>

        <p className="text-center text-indigo-200/80 mb-16 max-w-2xl mx-auto drop-shadow-md">
          Building intelligent systems using machine learning, data pipelines, and scalable backend architectures.
        </p>

        <div className="relative flex items-center group/slider py-10">
          
          {/* Orbital Rings Background in Slider Container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-[2000px] aspect-[4/1] rounded-[100%] border border-indigo-500/10 rotate-[-5deg] pointer-events-none z-0 hidden md:block shadow-[0_0_50px_rgba(99,102,241,0.05)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-[1500px] aspect-[4/1] rounded-[100%] border border-purple-500/10 rotate-[3deg] pointer-events-none z-0 hidden md:block shadow-[0_0_50px_rgba(168,85,247,0.05)]" />

          {/* Left Arrow */}
          <button 
            onClick={() => scroll("left")} 
            className="absolute left-0 z-20 p-3 bg-[#0a0a1a]/80 hover:bg-indigo-950 text-indigo-300 hover:text-white rounded-full backdrop-blur-md border border-indigo-500/30 transform -translate-x-1/2 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-110 hidden md:block"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Slider Container */}
          <div 
            ref={scrollRef} 
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory py-10 px-4 w-full [&::-webkit-scrollbar]:hidden relative z-10" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, idx) => {
              // Alternate planet glowing colors for variety
              const planetColors = [
                "from-blue-500/20 via-indigo-500/10",
                "from-purple-500/20 via-fuchsia-500/10",
                "from-cyan-500/20 via-blue-500/10",
                "from-rose-500/20 via-purple-500/10",
                "from-emerald-500/20 via-teal-500/10"
              ];
              const color = planetColors[idx % planetColors.length];

              return (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="w-[85vw] sm:w-[350px] md:w-[380px] aspect-square snap-center group relative p-6 border border-indigo-900/40 rounded-3xl bg-[#0B0B1A]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:border-purple-500/50 flex flex-col cursor-pointer shrink-0 overflow-hidden"
                >
                  {/* CSS Planet Graphic / Nebula Glow inside the Card */}
                  <div className={`absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br ${color} to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none`} />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 pointer-events-none" />

                  <h3 className="text-xl font-bold mb-3 line-clamp-2 shrink-0 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-10">
                    {project.title}
                  </h3>
                  <p className="text-indigo-200/80 mb-4 text-sm leading-relaxed line-clamp-3 shrink-0 z-10 font-medium">
                    {project.shortDesc}
                  </p>
                  <ul className="text-sm text-gray-400 mb-4 space-y-1 line-clamp-3 shrink-0 z-10">
                    {project.features.slice(0, 3).map(f => <li key={f} className="truncate">• {f}</li>)}
                  </ul>
                  
                  {/* Tech tags */}
                  <div className="flex-grow"></div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-wrap gap-2 mb-4 shrink-0 z-10">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={project.id + tech} className="text-[10px] px-2 py-1 bg-indigo-950/50 border border-indigo-500/20 rounded-full text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="w-full py-2 border border-indigo-500/30 rounded-full bg-black/40 group-hover:bg-indigo-600/20 group-hover:text-white text-indigo-300 transition-all duration-300 font-bold shrink-0 text-center text-sm shadow-[0_0_10px_rgba(99,102,241,0)] group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] z-10">
                    Explore Details
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll("right")} 
            className="absolute right-0 z-20 p-3 bg-[#0a0a1a]/80 hover:bg-indigo-950 text-indigo-300 hover:text-white rounded-full backdrop-blur-md border border-indigo-500/30 transform translate-x-1/2 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-110 hidden md:block"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0B0B1A] border border-indigo-500/30 rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-[0_0_50px_rgba(99,102,241,0.2)] relative custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center transition-colors backdrop-blur-sm border border-white/10"
              >
                ✕
              </button>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-400 pr-8">{selectedProject.title}</h3>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="text-xs md:text-sm px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-5 text-gray-300 text-sm md:text-base">
                <div>
                  <h4 className="text-white font-semibold mb-2 border-b border-gray-800 pb-1">Overview</h4>
                  <p className="leading-relaxed">{selectedProject.longDesc}</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2 border-b border-gray-800 pb-1">Architecture Concept</h4>
                  <div className="bg-black/50 p-3 rounded-lg font-mono text-xs md:text-sm text-green-400 border border-green-500/20">
                    {selectedProject.architecture}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2 border-b border-gray-800 pb-1">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedProject.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>

                <div className="pt-4 pb-2">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-colors shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
