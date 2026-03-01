'use client';

import { Suspense, useEffect, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls, Stars } from '@react-three/drei';
import FloatingIsland from './FloatingIsland';
import useGameStore from '@/hooks/useGameStore';

function SceneLights() {
  return (
    <>
      {/* Ambient */}
      <ambientLight intensity={0.3} color="#1a2a4a" />

      {/* Key light - magic blue */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        color="#6bb3ff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Fill light - warm gold */}
      <pointLight position={[-4, 3, -4]} intensity={0.8} color="#f59e0b" />

      {/* Rim light - purple */}
      <pointLight position={[0, -2, 6]} intensity={0.6} color="#7c3aed" />

      {/* Ground bounce */}
      <hemisphereLight args={['#1a2a4a', '#0b1a10', 0.4]} />
    </>
  );
}

function SceneContents() {
  return (
    <>
      <SceneLights />
      <Stars radius={80} depth={50} count={3000} factor={3} fade speed={0.5} />
      <Environment preset="city" />
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.4}
        scale={8}
        blur={2.5}
        far={4}
        color="#3b82f6"
      />
      <FloatingIsland />
    </>
  );
}

export default function Scene() {
  const setMousePosition = useGameStore((s) => s.setMousePosition);
  const setLoaded = useGameStore((s) => s.setLoaded);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
        normalizedY: -((e.clientY / window.innerHeight) * 2 - 1),
      });
    },
    [setMousePosition]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 45, near: 0.1, far: 200 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
        onCreated={() => setLoaded(true)}
      >
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
        {/* Subtle orbit for mobile - disabled on desktop */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Atmospheric gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, transparent 30%, rgba(10,15,26,0.7) 100%)',
        }}
      />
    </div>
  );
}
