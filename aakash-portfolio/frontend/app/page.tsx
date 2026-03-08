"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import AnimatedSection from "../components/AnimatedSection";

const NeuralBackground = dynamic(() => import("../components/NeuralBackground"), { ssr: false });
const ProjectsSection = dynamic(() => import("../components/ProjectsSection"), { ssr: false });
const DataSection = dynamic(() => import("../components/DataSection"), { ssr: false });
const WriterSection = dynamic(() => import("../components/WriterSection"), { ssr: false });
const MusicSection = dynamic(() => import("../components/MusicSection"), { ssr: false });
const ContactSection = dynamic(() => import("../components/ContactSection"), { ssr: false });

export default function Home() {
  return (
    <>
    <div className="relative min-h-screen flex items-center justify-center bg-transparent text-white overflow-hidden font-sans perspective-1000">
      <div className="fixed inset-0 z-[-1] bg-[#050510]">
        <NeuralBackground />
      </div>

      {/* overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-0 pointer-events-none" />

      <main className="relative z-10 text-center max-w-5xl px-4 w-full flex-col items-center justify-center pt-20 pb-12 sm:px-8 md:px-16">
        
        {/* Top Section with Image and Text Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full animate-float">
          
          {/* Profile Image */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-500 group overflow-hidden cursor-pointer hover:scale-105 shrink-0">
            <div className="absolute inset-0 bg-black rounded-full m-[2px] z-0"></div>
            <img 
              src="/images/aakash.jpeg" 
              alt="Aakash Sehrawat" 
              className="relative z-10 w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text Container */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              AAKASH SEHRAWAT
            </h1>

            <p className="mt-3 text-indigo-400 font-semibold tracking-widest text-xs md:text-sm uppercase drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
              AI SYSTEMS • DATA • CREATIVE TECHNOLOGY
            </p>

            <p className="mt-4 text-gray-200 text-base md:text-lg leading-relaxed max-w-[500px] mx-auto md:mx-0 drop-shadow-lg">
              I build intelligent systems, analyze complex data, and explore
              creativity through writing and music.
            </p>
          </div>
        </div>

        {/* Button - Wide and Visible */}
        <div className="mt-12 flex justify-center animate-float-delayed relative z-50">
          <a 
            href="#ai-engineer" 
            className="w-full max-w-md px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:scale-105 hover:bg-indigo-50 transition-all flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] relative cursor-pointer pointer-events-auto"
          >
            Explore My World
          </a>
        </div>

        {/* Identity Navigation - Upgraded, Floating Pattern, Highly Visible */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl mt-24 pt-12 mx-auto relative">
          
          {/* Subtle connecting line behind */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 hidden md:block"></div>

          {['AI Engineer', 'Data Analyst', 'Writer', 'Musician'].map((role, index) => {
            // Create a staggered floating pattern
            const floatClasses = [
              "animate-float",
              "animate-float-delayed",
              "animate-float-slow",
              "animate-float",
            ];
            
            return (
              <Link 
                key={role}
                href={`#${role.toLowerCase().replace(' ', '-')}`}
                className={`group relative flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] ${floatClasses[index]} hover:-translate-y-2 z-10`}
              >
                <div className="w-2 h-2 rounded-full bg-indigo-500 mb-3 shadow-[0_0_10px_rgba(99,102,241,0.8)] group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,1)] transition-colors duration-300"></div>
                <span className="relative z-10 text-sm md:text-base font-bold tracking-wide text-gray-200 group-hover:text-white transition-colors duration-300 uppercase">
                  {role}
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-indigo-500 transition-all duration-500 group-hover:w-2/3 group-hover:left-1/6 group-hover:shadow-[0_0_15px_rgba(99,102,241,1)]"></span>
              </Link>
            )
          })}
        </div>

      </main>
    </div>
    
    <AnimatedSection id="ai-engineer-sec" glowColor="rgba(59, 130, 246, 0.5)">
      <ProjectsSection />
    </AnimatedSection>
    <AnimatedSection id="data-analyst" glowColor="rgba(168, 85, 247, 0.5)">
      <DataSection />
    </AnimatedSection>
    <AnimatedSection id="writer" glowColor="rgba(245, 158, 11, 0.5)">
      <WriterSection />
    </AnimatedSection>
    <AnimatedSection id="musician" glowColor="rgba(236, 72, 153, 0.5)">
      <MusicSection />
    </AnimatedSection>
    <AnimatedSection id="contact">
      <ContactSection />
    </AnimatedSection>
    </>
  );
}
