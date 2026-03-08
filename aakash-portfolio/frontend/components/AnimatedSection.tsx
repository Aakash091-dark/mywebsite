"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  glowColor?: string;
}

export default function AnimatedSection({ children, id, glowColor }: AnimatedSectionProps) {
  return (
    <section id={id} className="relative w-full">
      {/* Dynamic Theme Glow */}
      {glowColor && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 z-0"
          style={{
            background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 60%)`,
          }}
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
