'use client';

import dynamic from 'next/dynamic';
import Viewport from '@/components/Viewport';
import HUD from '@/components/ui/HUD';
import HeroSection from '@/components/ui/HeroSection';
import SkillsSection from '@/components/ui/SkillsSection';
import ProjectsSection from '@/components/ui/ProjectsSection';
import ExperienceSection from '@/components/ui/ExperienceSection';
import ContactSection from '@/components/ui/ContactSection';
import ScrollSword from '@/components/ui/ScrollSword';

// Dynamically import the 3D scene to avoid SSR issues with Three.js
const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  return (
    <Viewport>
      {/* 3D Background Scene */}
      <Scene />

      {/* HUD Overlay (nav, mini-map, quest log) */}
      <HUD />

      {/* Scroll progress sword easter egg */}
      <ScrollSword />

      {/* Main scrollable content */}
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </Viewport>
  );
}
