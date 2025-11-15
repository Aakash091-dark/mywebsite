import SlideshowBackground from "./SlideshowBackground";
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";
import profilePhoto from '../assets/1.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white bg-[#0c0c0c]">
      <SlideshowBackground />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-fade-in-up">
            <img
              src={profilePhoto}
              alt="Aakash Sehrawat"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/20 shadow-lg"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              Aakash Sehrawat
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mt-2" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}>
              A soul learning, building, and rising in divine timing.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-4" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}>
              I’m Aakash — a mind shaped by logic, a heart guided by signs.
              I move in cycles, grow in silence, and trust the rhythm of my journey.
              Everything I create carries a piece of who I’m becoming.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white/60 hover:bg-white/10 text-white transition-all duration-300">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white/60 hover:bg-white/10 text-white transition-all duration-300">
                <a href="#developer-intro">Explore My World</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white/60 hover:bg-white/10 text-white transition-all duration-300">
                <a href="mailto:aakashsehrawat.work@gmail.com">Contact Me</a>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6 mt-8">
              <a href="https://github.com/Aakash091-dark" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-opacity duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/akashhrsehrawat/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-opacity duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
