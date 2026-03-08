"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dataProjects = [
  {
    id: 1,
    title: "AI Data Quality & Anomaly Detection Platform",
    shortDesc: "Enterprise data observability platform that detects anomalies in datasets using machine learning and provides explainable insights for debugging data pipelines.",
    longDesc: "Enterprise data observability platform that detects anomalies in datasets using machine learning and provides explainable insights for debugging data pipelines. This platform automates data quality validation and uses ML-based anomaly detection with SHAP for explainable AI. It also features MLflow lifecycle tracking and production FastAPI APIs.",
    architecture: "Data Source -> FastAPI -> ML Models (Isolation Forest) -> SHAP -> MLflow -> Dashboard",
    features: [
      "Automated data quality validation",
      "ML-based anomaly detection",
      "Explainable AI using SHAP",
      "MLflow lifecycle tracking",
      "Production FastAPI APIs"
    ],
    tech: ['Python', 'FastAPI', 'Isolation Forest', 'SHAP', 'MLflow', 'Docker'],
    link: "https://github.com/Aakash091-dark/data-quality-anomaly-platform"
  },
  {
    id: 2,
    title: "E-commerce Analysis",
    shortDesc: "Exploratory data analysis of e-commerce datasets to uncover sales trends, customer behavior patterns, and business insights.",
    longDesc: "A comprehensive exploratory data analysis of e-commerce datasets to uncover hidden sales trends, customer behavior patterns, and actionable business insights. The project focuses on data visualization and deep dives into product performance and customer segmentation.",
    architecture: "Raw Data -> Pandas (Cleaning/Processing) -> Matplotlib/Seaborn (Visualization) -> Insights",
    features: [
      "sales trends",
      "product performance",
      "customer segmentation",
      "data visualization"
    ],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA'],
    link: "https://github.com/Aakash091-dark/E-commerce-analysis-"
  },
  {
    id: 3,
    title: "Employee Turnover Analysis",
    shortDesc: "Machine learning project that predicts employee attrition and identifies key factors influencing workforce retention.",
    longDesc: "A machine learning project designed to predict employee attrition and identify the key factors influencing workforce retention. It includes comprehensive EDA on HR datasets, handles class imbalance with SMOTE, and performs employee clustering analysis to segment retention risks.",
    architecture: "HR Dataset -> Pandas -> SMOTE -> Scikit-learn Models -> Evaluation",
    features: [
      "turnover prediction model",
      "EDA on HR dataset",
      "class imbalance handling with SMOTE",
      "employee clustering analysis"
    ],
    tech: ['Python', 'Scikit-learn', 'SMOTE', 'Pandas', 'Seaborn', 'Clustering'],
    link: "https://github.com/Aakash091-dark/Employee-Turnover-Analysis"
  }
];

export default function DataSection() {
  const [selectedProject, setSelectedProject] = useState<typeof dataProjects[0] | null>(null);

  return (
    <section id="data-analyst" className="relative py-32 bg-transparent text-white overflow-hidden">
      {/* Background is handled globally in page.tsx */}
      
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase tracking-wider">
          Aakash Sehrawat as DATA ANALYST
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Analyzing complex datasets to uncover patterns, predict outcomes, and drive better decisions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {dataProjects.map((project) => (
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
