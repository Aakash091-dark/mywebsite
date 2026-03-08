/* eslint-disable react-hooks/purity */
"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DataBackground() {
  const groupRef = useRef<THREE.Group>(null);
  const particleCount = 200;
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 20 - 10;
      const z = (Math.random() - 0.5) * 10 - 5;
      const speed = Math.random() * 0.05 + 0.01;
      temp.push({ x, y, z, speed });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const meshRef = useRef<THREE.InstancedMesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      particles.forEach((particle, i) => {
        // Move particle up
        particle.y += particle.speed;
        
        // Reset if it goes too high
        if (particle.y > 10) {
          particle.y = -10;
          particle.x = (Math.random() - 0.5) * 30;
        }

        dummy.position.set(particle.x, particle.y, particle.z);
        
        // Scale pulse effect
        const scale = (Math.sin(particle.y * 2) + 1.5) * 0.5;
        dummy.scale.set(scale, scale, scale);
        
        dummy.updateMatrix();
        meshRef.current!.setMatrixAt(i, dummy.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
    
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(Date.now() * 0.0005) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
      </instancedMesh>
      
      {/* Grid lines for data feel */}
      <gridHelper args={[40, 40, "#38bdf8", "#38bdf8"]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -5]} material-opacity={0.1} material-transparent={true} />
    </group>
  );
}
