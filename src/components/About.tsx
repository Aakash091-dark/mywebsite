import { Card } from "@/components/ui/card";
import { Brain, Cloud, Code, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      text: "Expert in LLMs, RAG, and Deep Learning",
    },
    {
      icon: Cloud,
      text: "Experience with Azure, AWS, and CI/CD pipelines",
    },
    {
      icon: Code,
      text: "Creator of AI-driven enterprise automation systems",
    },
    {
      icon: TrendingUp,
      text: "Passionate about AI innovation and human-centered design",
    },
  ];

  return (
    <section id="about" className="py-28 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            Me being like my Poetry always new & refreshing.
          </h2>
        </div>

        <Card className="p-10 md:p-16 bg-card/50 backdrop-blur border-border/50 animate-slide-3d" style={{ transform: 'perspective(1000px)', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)' }}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            I'm an ambitious AI Engineer and Software Developer with a focus on creating automation systems and intelligent applications.
            My expertise includes FastAPI, LangChain, Azure, AWS, Python, and MLOps.
            I believe in designing solutions that not only perform but adapt, leveraging the power of AI to improve decision-making, scalability, and human efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 animate-flip-3d"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  transform: 'perspective(1000px)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <highlight.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-foreground flex-1">{highlight.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
