'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import useGameStore from '@/hooks/useGameStore';

export default function FloatingIsland() {
  const groupRef = useRef<THREE.Group>(null);
  const crystalRef = useRef<THREE.Mesh>(null);
  const { mousePosition } = useGameStore();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Slow rotation
    groupRef.current.rotation.y += delta * 0.18;

    // Parallax tilt based on mouse
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mousePosition.normalizedY * 0.15,
      0.05
    );

    // Crystal pulse
    if (crystalRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.04;
      crystalRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={groupRef}>
        {/* Island base - rocky platform */}
        <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.8, 1.2, 0.5, 8]} />
          <meshStandardMaterial color="#2d4a1e" roughness={0.9} metalness={0.1} />
        </mesh>

        {/* Island top - grassy surface */}
        <mesh position={[0, -0.25, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.9, 1.8, 0.2, 8]} />
          <meshStandardMaterial color="#1a5c1a" roughness={0.8} metalness={0.05} />
        </mesh>

        {/* Rock bottom drip */}
        <mesh position={[0, -1.05, 0]}>
          <coneGeometry args={[0.8, 1.0, 7]} />
          <meshStandardMaterial color="#1e3314" roughness={0.95} />
        </mesh>

        {/* Central Sword / Obelisk */}
        <group position={[0, 0.2, 0]}>
          {/* Blade */}
          <mesh castShadow>
            <boxGeometry args={[0.08, 1.0, 0.04]} />
            <meshStandardMaterial
              color="#c8d6e5"
              metalness={0.95}
              roughness={0.05}
              emissive="#3b82f6"
              emissiveIntensity={0.3}
            />
          </mesh>
          {/* Guard */}
          <mesh position={[0, -0.3, 0]}>
            <boxGeometry args={[0.45, 0.06, 0.06]} />
            <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Handle */}
          <mesh position={[0, -0.52, 0]}>
            <cylinderGeometry args={[0.03, 0.04, 0.35, 6]} />
            <meshStandardMaterial color="#92400e" roughness={0.7} metalness={0.2} />
          </mesh>
          {/* Pommel */}
          <mesh position={[0, -0.72, 0]}>
            <sphereGeometry args={[0.07, 8, 8]} />
            <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.1} emissive="#f59e0b" emissiveIntensity={0.4} />
          </mesh>
        </group>

        {/* Power Crystal */}
        <mesh ref={crystalRef} position={[0.7, 0.3, 0.4]} castShadow>
          <octahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial
            color="#7c3aed"
            metalness={0.3}
            roughness={0.1}
            emissive="#7c3aed"
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Blue Crystal */}
        <mesh position={[-0.6, 0.25, 0.5]} castShadow>
          <octahedronGeometry args={[0.13, 0]} />
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.3}
            roughness={0.1}
            emissive="#3b82f6"
            emissiveIntensity={0.9}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Gold Crystal */}
        <mesh position={[0.2, 0.35, -0.7]} castShadow>
          <octahedronGeometry args={[0.1, 0]} />
          <meshStandardMaterial
            color="#f59e0b"
            metalness={0.5}
            roughness={0.1}
            emissive="#f59e0b"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Small trees */}
        {[[-1.0, 0, 0.3], [0.8, 0, -0.6], [-0.4, 0, -1.0]].map(([x, y, z], i) => (
          <group key={i} position={[x as number, y as number, z as number]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.03, 0.05, 0.3, 5]} />
              <meshStandardMaterial color="#5c3d11" roughness={0.9} />
            </mesh>
            <mesh position={[0, 0.28, 0]} castShadow>
              <coneGeometry args={[0.15, 0.4, 6]} />
              <meshStandardMaterial color="#166534" roughness={0.8} />
            </mesh>
          </group>
        ))}

        {/* Orbiting particles */}
        {[0, 1, 2, 3].map((i) => (
          <OrbitingParticle key={i} index={i} />
        ))}
      </group>
    </Float>
  );
}

function OrbitingParticle({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const angle = (index / 4) * Math.PI * 2;
  const radius = 1.5 + index * 0.15;

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * 0.5 + angle;
    meshRef.current.position.x = Math.cos(t) * radius * 0.5;
    meshRef.current.position.z = Math.sin(t) * radius * 0.5;
    meshRef.current.position.y = 0.2 + Math.sin(state.clock.elapsedTime + index) * 0.15;
  });

  const colors = ['#3b82f6', '#7c3aed', '#f59e0b', '#22c55e'];

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.03, 6, 6]} />
      <meshStandardMaterial
        color={colors[index]}
        emissive={colors[index]}
        emissiveIntensity={1.5}
      />
    </mesh>
  );
}
