import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex gap-6 justify-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
      <a 
        href="https://github.com/Aakash091-dark" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Github className="h-6 w-6" />
      </a>
      <a 
        href="https://linkedin.com/in/akashhrsehrawat" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      <a 
        href="mailto:aakashhssehrawat@gmail.com"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Mail className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialLinks;
