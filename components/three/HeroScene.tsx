"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  Lightformer,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * 0.35;
    const y = state.pointer.y * 0.25;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x,
      0.05
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y,
      0.05
    );
  });
  return <group ref={group}>{children}</group>;
}

function Core() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.15;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.35, 6]} />
        <MeshDistortMaterial
          color="#2563EB"
          emissive="#0b1e4d"
          roughness={0.15}
          metalness={0.35}
          distort={0.34}
          speed={1.6}
          clearcoat={1}
          clearcoatRoughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function GlassTorus() {
  return (
    <Float speed={1.1} rotationIntensity={1} floatIntensity={1.4}>
      <mesh position={[2.4, 1.1, -0.5]} rotation={[0.7, 0.3, 0]}>
        <torusGeometry args={[0.55, 0.18, 32, 96]} />
        <MeshTransmissionMaterial
          thickness={0.6}
          roughness={0.08}
          transmission={1}
          ior={1.35}
          chromaticAberration={0.06}
          backside
          color="#06B6D4"
        />
      </mesh>
    </Float>
  );
}

function FloatingCube() {
  return (
    <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.6}>
      <mesh position={[-2.5, -1.1, -0.4]} rotation={[0.5, 0.4, 0.2]}>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial
          color="#14B8A6"
          roughness={0.1}
          metalness={0.6}
          emissive="#0d4d47"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function Sphere() {
  return (
    <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.3}>
      <mesh position={[2.2, -1.3, 0.2]}>
        <sphereGeometry args={[0.4, 48, 48]} />
        <meshStandardMaterial
          color="#22D3EE"
          roughness={0.05}
          metalness={0.9}
          emissive="#0e7490"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

function SmallOrb() {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={2}>
      <mesh position={[-2.1, 1.4, 0.3]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color="#60A5FA"
          roughness={0.2}
          metalness={0.7}
          emissive="#1e3a8a"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={isDark ? 0.4 : 0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} color="#ffffff" />
        <pointLight position={[-5, -3, 2]} intensity={2} color="#06B6D4" />
        <pointLight position={[5, 3, -2]} intensity={1.5} color="#14B8A6" />
        <Rig>
          <Core />
          <GlassTorus />
          <FloatingCube />
          <Sphere />
          <SmallOrb />
        </Rig>
        {/* Self-contained environment (no external HDR fetch) */}
        <Environment resolution={256} background={false}>
          <Lightformer
            intensity={isDark ? 1.4 : 2.2}
            position={[0, 3, 2]}
            scale={[6, 6, 1]}
            color="#ffffff"
          />
          <Lightformer
            intensity={2}
            position={[-4, 1, 2]}
            scale={[3, 3, 1]}
            color="#06B6D4"
          />
          <Lightformer
            intensity={1.8}
            position={[4, -2, 1]}
            scale={[3, 3, 1]}
            color="#2563EB"
          />
          <Lightformer
            intensity={1.4}
            position={[0, -3, 2]}
            scale={[4, 2, 1]}
            color="#14B8A6"
          />
        </Environment>
      </Suspense>
    </Canvas>
  );
}
