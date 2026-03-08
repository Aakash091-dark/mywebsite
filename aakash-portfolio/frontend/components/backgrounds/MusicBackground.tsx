/* eslint-disable react-hooks/purity */
"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function MusicBackground() {
  const count = 64; // Number of bars in the waveform
  
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Store initial random phases for realistic wave motion
  const phases = useMemo(() => {
    return Array.from({ length: count }, () => Math.random() * Math.PI * 2);
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      for (let i = 0; i < count; i++) {
        // Position them in a circle
        const angle = (i / count) * Math.PI * 2;
        const radius = 4; // Smaller radius
        
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        // Complex wave motion using multiple sine waves + unique phase
        const wave = Math.sin(time * 2 + angle * 4) * 0.5 +
                     Math.sin(time * 3 + phases[i]) * 0.3 + 
                     0.8;
                     
        const scaleY = Math.max(0.1, wave * 1.5); // Smaller height
        
        dummy.position.set(x, -2, z); // Lower position
        
        // Look at center to make them face outward
        dummy.lookAt(0, -2, 0);
        
        dummy.scale.set(0.1, scaleY, 0.1); // Thinner bars
        dummy.updateMatrix();
        
        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
      
      // Slowly rotate the entire visualizer
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.2 + 0.2; // slight tilt
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      {/* Pink/Purple neon look for music */}
      <meshBasicMaterial color="#d946ef" transparent opacity={0.6} />
    </instancedMesh>
  );
}
