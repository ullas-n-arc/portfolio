'use client';

import HeroSection from '@/components/ui/HeroSection';
import SkillsSection from '@/components/ui/SkillsSection';
import ProjectsSection from '@/components/ui/ProjectsSection';
import ExperienceSection from '@/components/ui/ExperienceSection';
import ContactSection from '@/components/ui/ContactSection';

export default function Home() {
  return (
    <>
      {/* Magical Forest background layers */}
      <div className="magical-bg" />
      <div className="fireflies">
        <div className="firefly" />
        <div className="firefly" />
        <div className="firefly" />
        <div className="firefly" />
        <div className="firefly" />
        <div className="firefly" />
        <div className="firefly" />
        <div className="firefly" />
        <div className="firefly" />
        <div className="firefly" />
      </div>

      {/* Fixed pixel-art sprite at bottom-left */}
      <div className="pixel-sprite-anchor">
        <svg
          width="32"
          height="32"
          viewBox="0 0 16 16"
          className="pixel-sprite"
          style={{ imageRendering: 'pixelated' } as React.CSSProperties}
        >
          <rect x="6" y="1" width="4" height="4" fill="#A0AEC0" />
          <rect x="6" y="5" width="4" height="4" fill="#00E5FF" />
          <rect x="4" y="5" width="2" height="3" fill="#00E5FF" />
          <rect x="10" y="5" width="2" height="3" fill="#00E5FF" />
          <rect x="12" y="3" width="1" height="5" fill="#FFFFFF" />
          <rect x="11" y="2" width="3" height="1" fill="#FFA116" />
          <rect x="6" y="9" width="2" height="3" fill="#5A6A7A" />
          <rect x="8" y="9" width="2" height="3" fill="#5A6A7A" />
          <rect x="5" y="12" width="3" height="1" fill="#3D2E1E" />
          <rect x="8" y="12" width="3" height="1" fill="#3D2E1E" />
        </svg>
      </div>

      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
