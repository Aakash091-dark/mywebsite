"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import AIBackground from "./AIBackground";
import DataBackground from "./DataBackground";
import WriterBackground from "./WriterBackground";
import MusicBackground from "./MusicBackground";
import ContactBackground from "./ContactBackground";

export function SectionCanvas({ 
  type 
}: { 
  type: 'ai' | 'data' | 'writer' | 'music' | 'contact' 
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "200px 0px 200px 0px" });

  const renderBackground = () => {
    switch(type) {
      case 'ai': return <AIBackground />;
      case 'data': return <DataBackground />;
      case 'writer': return <WriterBackground />;
      case 'music': return <MusicBackground />;
      case 'contact': return <ContactBackground />;
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
      {isInView && (
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          {renderBackground()}
        </Canvas>
      )}
    </div>
  );
}
