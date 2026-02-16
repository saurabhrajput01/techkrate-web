"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NeuralFace() {
  const pointsRef = useRef();

  // Create particle sphere geometry (will look like digital head core)
  const particles = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const count = 8000;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 1.6 + Math.random() * 0.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() - 0.5) * 2);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    return geometry;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y =
        Math.sin(clock.getElapsedTime() * 0.2) * 0.4;
    }
  });

  return (
    <points ref={pointsRef} geometry={particles}>
      <pointsMaterial
        size={0.012}
        color="#2563EB"
        transparent
        opacity={0.9}
      />
    </points>
  );
}

export default function AIFace() {
  return (
    <div className="relative w-full h-[500px]">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[#2563EB]/10 blur-[120px] rounded-full"></div>

      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 2]} intensity={1.5} color="#2563EB" />
        <NeuralFace />
      </Canvas>
    </div>
  );
}
