import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise LLM-Powered Knowledge Assistant",
      tagline: "Transform your enterprise data into actionable insights with AI-powered natural language queries.",
      description: "A sophisticated full-stack application that leverages Large Language Models and Retrieval-Augmented Generation (RAG) to help enterprises unlock the value of their internal documents. Say goodbye to endless searching through PDFs and hello to intelligent, context-aware answers.",
      features: [
        "Semantic document search using FAISS + LangChain",
        "Context-aware Q&A with FastAPI + React",
        "Supports PDF, DOCX, TXT uploads",
        "Dockerized, scalable, and production-ready",
      ],
      tech: ["FastAPI", "LangChain", "FAISS", "Docker", "Azure"],
      github: "https://github.com/Aakash091-dark/Enterprise-LLM-Powered-Knowledge-Assistant",
    },
    {
      title: "SwastyaSewa – Rural Telemedicine App",
      tagline: "AI-driven telemedicine solution for rural healthcare accessibility.",
      description: "An AI-powered mobile app that enables remote consultations, AI-based symptom analysis, appointment booking, and digital health records — built to serve rural communities in multiple Indian languages.",
      features: [
        "Real-time doctor consultation (video/audio/chat)",
        "AI symptom checker",
        "EHR integration",
        "Offline support for low-connectivity regions",
        "Multilingual & voice-assisted interface",
      ],
      tech: ["React Native", "Node.js", "MongoDB", "Twilio", "Azure"],
      github: "https://github.com/Aakash091-dark/SwastyaSewa",
    },
    {
      title: "AarogyaCraft",
      tagline: "Intelligent, full-stack healthcare management and analytics platform.",
      description: "A powerful AI-enabled healthcare management system that integrates analytics, appointment scheduling, medical data visualization, and AI-powered diagnostics into one platform.",
      features: [
        "React-based UI with real-time analytics",
        "FastAPI/Node.js hybrid backend",
        "PostgreSQL + AI module for report insights",
        "Scalable monorepo with authentication and admin dashboard",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "FastAPI", "Azure","Machine learning"],
      github: "https://github.com/Aakash091-dark/AarogyaCraft",
    },
    {
      title: "VerseCraft – Creative Song Lyrics Generator",
      tagline: "AI meets creativity in music.",
      description: "A deep learning model that generates creative and genre-specific song lyrics using LSTM architecture and PyTorch. It understands prompts, adapts to tone, and generates human-like lyrics in seconds.",
      features: [
        "LSTM model with multi-genre training",
        "Adjustable creativity (temperature control)",
        "Web UI with real-time lyric generation",
        "Built using Flask + PyTorch",
      ],
      tech: ["PyTorch", "Flask", "LSTM", "HTML/CSS"],
      github: "https://github.com/Aakash091-dark/VerseCraft",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-4 animate-fade-in-up">
          <p className="text-muted-foreground text-lg font-light tracking-wide">
            Presenting Aakash Sehrawat as
          </p>
        </div>
        <div className="text-center mb-12 animate-slide-3d">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            Developer
          </h2>
          <p className="text-muted-foreground text-lg">
            Building the future with AI, one project at a time
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-flip-3d"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: 'perspective(1000px)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {project.team && (
                  <p className="text-sm text-muted-foreground">
                    {project.team}
                  </p>
                )}

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-primary rounded-full text-sm text-primary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
