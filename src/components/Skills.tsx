import { Card } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming & Core",
      skills: ["Python", "SQL"],
    },
    {
      category: "AI & ML",
      skills: ["NLP", "LLMs", "Deep Learning", "Neural Networks", "PyTorch", "TensorFlow", "Model Optimization", "Vector Databases", "RAG"],
    },
    {
      category: "Frameworks & Backend",
      skills: ["FastAPI", "Flask", "Django", "LangChain"],
    },
    {
      category: "Data Engineering & Visualization",
      skills: ["ETL", "Power BI", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    },
    {
      category: "Cloud & Deployment",
      skills: ["Azure", "AWS", "Docker", "Git", "MLflow", "GCP"],
    },
  ];

  const softSkills = [
    {
      category: "Mindset & Traits",
      skills: ["Quiet Confidence", "Deep Thinking", "Intuition-Led Decisions", "Discipline", "Focused Learning"],
    },
    {
      category: "Professional Strengths",
      skills: ["Problem Solving", "Scalable System Design", "Complex → Simple Translation", "Research-Driven Workflow", "End-to-End Ownership"],
    },
    {
      category: "Communication & Collaboration",
      skills: ["Clear Communication", "Team Adaptability", "Architecture Thinking", "Empathy", "Calm Under Pressure"],
    },
    {
      category: "Creative & Strategic Abilities",
      skills: ["Product Vision", "Data Storytelling", "Blending Creativity with Logic", "Poetic Expression", "User-Centered Design"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills Section */}
          <div>
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
                Technical Skills
              </h2>
              <p className="text-muted-foreground text-lg">
                Tools & technologies I use to build intelligent systems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 animate-flip-3d"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: 'perspective(1000px)',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {item.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div>
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
                Soft Skills
              </h2>
              <p className="text-muted-foreground text-lg">
                My approach to collaboration, creation, and problem-solving
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 animate-flip-3d"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: 'perspective(1000px)',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {item.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
