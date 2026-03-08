/* eslint-disable react-hooks/purity */
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere, Trail } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Starfield Background
function Particles() {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(8000 * 3);

    for (let i = 0; i < 8000; i++) {
      const radius = 15 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    const { mouse } = state;
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 35;
      ref.current.rotation.x += mouse.y * 0.002;
      ref.current.rotation.y += mouse.x * 0.002;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#818cf8"
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Shooting Stars / Meteors
function Meteor({ startPos, speed, delay }: { startPos: [number, number, number], speed: number, delay: number }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      // Time based movement with delay offset
      const t = (state.clock.elapsedTime - delay) * speed;
      
      // Loop the meteor
      if (t > 0) {
        const loopT = t % 20; // reset every 20 seconds
        
        // Move diagonally across
        ref.current.position.x = startPos[0] - loopT * 2;
        ref.current.position.y = startPos[1] - loopT * 2;
        ref.current.position.z = startPos[2] - loopT;
        
        // Hide if out of bounds to simulate fading
        ref.current.visible = loopT < 10;
      } else {
        ref.current.visible = false;
      }
    }
  });

  return (
    <Trail
      width={1}
      length={10}
      color={new THREE.Color(0.8, 0.9, 1)}
      attenuation={(t) => t * t}
    >
      <Sphere ref={ref} args={[0.02, 8, 8]} position={startPos}>
        <meshBasicMaterial color={[2, 2, 3]} toneMapped={false} />
      </Sphere>
    </Trail>
  );
}

// Floating Planets
function Planet({ 
  radius, 
  position, 
  color, 
  speed, 
  orbitRadius 
}: { 
  radius: number, 
  position: [number, number, number], 
  color: string, 
  speed: number,
  orbitRadius: number 
}) {
  const ref = useRef<THREE.Mesh>(null);
  const startAngle = Math.random() * Math.PI * 2;

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + startAngle;
      
      // Orbit motion around the initial position
      ref.current.position.x = position[0] + Math.cos(t) * orbitRadius;
      ref.current.position.z = position[2] + Math.sin(t) * orbitRadius;
      
      // Spin
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={ref} args={[radius, 64, 64]} position={position}>
      <meshStandardMaterial 
        color={color} 
        roughness={0.8}
        metalness={0.2}
      />
    </Sphere>
  );
}

export default function NeuralBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none bg-[#050510]">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }} 
        dpr={[1, 2]}
        style={{ width: "100%", height: "100vh" }}
      >
        <ambientLight intensity={0.1} />
        {/* Directional light to give planets a sunlit shadow edge */}
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#4f46e5" />

        <Particles />
        
        {/* Meteors */}
        <Meteor startPos={[15, 15, -5]} speed={1} delay={0} />
        <Meteor startPos={[10, 20, -10]} speed={1.5} delay={3} />
        <Meteor startPos={[25, 10, -8]} speed={0.8} delay={7} />

        {/* Planets */}
        {/* Large dark purple planet far in back */}
        <Planet radius={1.5} position={[-6, 3, -10]} color="#2e1065" speed={0.1} orbitRadius={0.5} />
        {/* Medium indigo planet */}
        <Planet radius={0.8} position={[7, -2, -8]} color="#3730a3" speed={0.2} orbitRadius={1} />
        {/* Small cyan moon */}
        <Planet radius={0.3} position={[6.5, -1, -6]} color="#06b6d4" speed={0.5} orbitRadius={2} />

      </Canvas>
    </div>
  );
}
