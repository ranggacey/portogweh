"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function FloatingOrb() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.x = state.clock.elapsedTime * 0.25;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial
        color="#4F8CFF"
        roughness={0.2}
        metalness={0.8}
        distort={0.25}
        speed={2}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

export function ThreeOrb() {
  return (
    <div className="h-48 w-48 opacity-60 md:h-64 md:w-64">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[1, 2, 3]} intensity={1} />
        <FloatingOrb />
      </Canvas>
    </div>
  );
}
