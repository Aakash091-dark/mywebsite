import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { name: "AZ-900: Microsoft Azure Fundamentals", link: "https://www.credly.com/badges/947f19fd-704d-4fd4-bbf6-cfc19e252d1e/public_url" },
    { name: "AI-900: Microsoft Azure AI Fundamentals", link: "https://www.credly.com/badges/f2c9c49c-db94-496d-be0a-3c7691f670e2/public_url" },
    { name: "DP-900: Microsoft Azure Data Fundamentals", link: "https://www.credly.com/badges/7f98965f-db01-491c-8712-f8b7de81c7d5/public_url" },
    { name: "SC-900: Microsoft Security, Compliance, Identity Fundamentals", link: "https://www.credly.com/badges/a1ada308-6753-48f1-924a-2c3a0ffaec6e/public_url" },
    { name: "AZ-104: Azure Administrator Associate", link: "https://learn.microsoft.com/en-us/users/aakashsehrawat-2952/credentials/726fb597892764da" },
    { name: "Cisco Data Analytics Certification", link: "#" },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-4 animate-fade-in-up">
          <p className="text-muted-foreground text-lg font-light tracking-wide">
            Presenting Aakash Sehrawat as
          </p>
        </div>
        <div className="text-center mb-12 animate-slide-3d">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            Learner
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional credentials validating my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer">
              <Card 
                className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-flip-3d h-full"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: 'perspective(1000px)',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-primary flex-shrink-0">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium">
                    {cert.name}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
