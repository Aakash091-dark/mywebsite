"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { SectionCanvas } from "./backgrounds/SectionCanvas";

export default function MusicSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const tracks = [
    {
      id: "lost",
      title: "Lost",
      description: "A reflective track exploring silence, identity, and emotional depth.",
      videoSrc: "/audio/lost.mp4", 
      color: "from-blue-600/20 to-purple-600/20",
      glow: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]",
    },
    {
      id: "void",
      title: "Void",
      description: "A dark and atmospheric piece capturing introspection and creative expression.",
      videoSrc: "/audio/void.mp4",
      color: "from-purple-600/20 to-pink-600/20",
      glow: "group-hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]",
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="musician" 
      className="relative min-h-screen py-32 bg-transparent text-white overflow-hidden perspective-1000"
    >
      {/* Background is handled globally in page.tsx */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <SectionCanvas type="music" />
      </div>

      {/* Abstract Background Glows */}
      <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ y: y1, rotate: rotate1 }} 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen"
        />
        <motion.div 
          style={{ y: y2, rotate: rotate2 }} 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen"
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-6 uppercase tracking-wider">
            Aakash Sehrawat as MUSICIAN
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Music is another language through which I express emotions,
            thoughts, and stories beyond technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50, rotateY: index === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, rotateY: index === 0 ? 5 : -5, z: 50 }}
              className={`group relative p-1 rounded-3xl bg-gradient-to-br ${track.color} backdrop-blur-xl border border-white/10 ${track.glow} transition-all duration-500 transform-gpu cursor-pointer`}
              onClick={() => setActiveVideo(track.id)}
            >
              <div className="absolute inset-0 bg-black/40 rounded-3xl -z-10" />
              
              <div className="p-6 md:p-8 h-full flex flex-col">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-black/50 border border-white/5 shadow-inner">
                  {/* Video Preview / Placeholder */}
                  <video 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    loop
                    muted
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  >
                    <source src={track.videoSrc} type="video/mp4" />
                  </video>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-3 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {track.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed flex-grow">
                  {track.description}
                </p>
                
                <div className="mt-6 flex items-center text-sm font-semibold text-indigo-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="mr-2">Play Full Track</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-xl"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-white/10 text-white transition-colors"
                onClick={() => setActiveVideo(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <video 
                className="w-full h-full"
                controls
                autoPlay
              >
                <source 
                  src={tracks.find(t => t.id === activeVideo)?.videoSrc} 
                  type="video/mp4" 
                />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
