/* eslint-disable react-hooks/purity */
"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function WriterBackground() {
  const count = 40;
  
  const pages = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 30,
      y: (Math.random() - 0.5) * 30,
      z: (Math.random() - 0.5) * 20 - 5,
      rotX: Math.random() * Math.PI,
      rotY: Math.random() * Math.PI,
      rotZ: Math.random() * Math.PI,
      speedX: (Math.random() - 0.5) * 0.01,
      speedY: (Math.random() - 0.5) * 0.01 + 0.01,
      speedZ: (Math.random() - 0.5) * 0.01,
      rotSpeedX: (Math.random() - 0.5) * 0.02,
      rotSpeedY: (Math.random() - 0.5) * 0.02,
    }));
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const meshRef = useRef<THREE.InstancedMesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      pages.forEach((page, i) => {
        page.x += page.speedX;
        page.y += page.speedY;
        page.z += page.speedZ;
        
        page.rotX += page.rotSpeedX;
        page.rotY += page.rotSpeedY;

        if (page.y > 15) page.y = -15;
        if (page.x > 15) page.x = -15;
        if (page.x < -15) page.x = 15;

        dummy.position.set(page.x, page.y, page.z);
        dummy.rotation.set(page.rotX, page.rotY, page.rotZ);
        dummy.updateMatrix();
        
        meshRef.current!.setMatrixAt(i, dummy.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {/* Aspect ratio of a typical page, e.g., A4 */}
      <planeGeometry args={[1, 1.414]} />
      <meshBasicMaterial 
        color="#ffffff" 
        transparent 
        opacity={0.15} 
        side={THREE.DoubleSide}
      />
    </instancedMesh>
  );
}
