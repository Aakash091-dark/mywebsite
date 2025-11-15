import { Button } from "@/components/ui/button";

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
      <Button 
        size="lg" 
        className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
        asChild
      >
        <a href="#projects">
          Explore My World
        </a>
      </Button>
      <Button 
        size="lg" 
        variant="outline"
        className="border-primary text-primary hover:bg-primary/10"
        asChild
      >
        <a href="#contact">
          Reach Out
        </a>
      </Button>
      <Button 
        size="lg" 
        variant="secondary"
        asChild
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          My Story
        </a>
      </Button>
    </div>
  );
};

export default ActionButtons;
