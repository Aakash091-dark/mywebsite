"use client";

import { useState } from "react";
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
    title: "News Scraper Data Pipeline",
    shortDesc: "Automated news scraping system that collects articles from multiple sources and processes them into structured datasets for analysis and AI pipelines.",
    longDesc: "Designed to build massive datasets for NLP training and sentiment analysis. This robust pipeline handles pagination, dynamic content loading, and rate limiting to continuously harvest structured text data across global news outlets.",
    architecture: "Cron Job -> Scrapy/BS4 Spiders -> Data Cleaning Script -> SQL/NoSQL Database",
    features: [
      "multi-source news extraction",
      "structured data processing",
      "dataset generation for ML models"
    ],
    tech: ['Python', 'BeautifulSoup', 'Requests', 'Data Processing', 'ETL'],
    link: "https://github.com/avneeshrai07/NEWS_Scraper"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="ai-engineer" className="relative py-32 bg-transparent text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase tracking-wider">
          Aakash Sehrawat as AI ENGINEER
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Building intelligent systems using machine learning, data pipelines, and scalable backend architectures.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative p-6 border border-gray-800 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:border-white/30 flex flex-col cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 flex-grow">
                {project.shortDesc}
              </p>
              <ul className="text-sm text-gray-500 mb-6 space-y-1">
                {project.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="w-full py-2 border border-white/20 rounded-lg group-hover:bg-white group-hover:text-black transition-colors font-semibold mt-auto text-center">
                Details
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a16] border border-indigo-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-indigo-500/20 relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              
              <h3 className="text-3xl font-bold mb-4 text-indigo-400">{selectedProject.title}</h3>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="text-sm px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="text-white font-semibold mb-2 border-b border-gray-800 pb-1">Overview</h4>
                  <p className="leading-relaxed">{selectedProject.longDesc}</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2 border-b border-gray-800 pb-1">Architecture Concept</h4>
                  <div className="bg-black/50 p-4 rounded-lg font-mono text-sm text-green-400 border border-green-500/20">
                    {selectedProject.architecture}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2 border-b border-gray-800 pb-1">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedProject.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>

                <div className="pt-4">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-colors"
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
