'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useGameStore, { type Section } from '@/hooks/useGameStore';

const NAV_SECTIONS: { id: Section; label: string; icon: string }[] = [
  { id: 'hero', label: 'ORIGIN', icon: '⚔' },
  { id: 'skills', label: 'ARSENAL', icon: '🔮' },
  { id: 'projects', label: 'QUESTS', icon: '📜' },
  { id: 'experience', label: 'LEVEL-UPS', icon: '✨' },
];

const SKILLS_QUICK = [
  'Java', 'Python', 'PySpark', 'TensorFlow',
  'Scikit-learn', 'MongoDB', 'Firebase', 'Android',
];

export default function HUD() {
  const { currentSection, isMenuOpen, scrollProgress, toggleMenu, setMenuOpen } = useGameStore();
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const swordFill = Math.round(scrollProgress * 100);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hud-panel corner-cut px-4 py-1 flex items-center gap-3"
        >
          <span className="text-energy-gold text-lg">⚔</span>
          <span className="font-fantasy text-sword-silver text-sm tracking-wider">SWORDIGO DEV LOG</span>
        </motion.div>

        {/* Section indicator */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="hud-panel corner-cut px-4 py-1 hidden md:flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-xp-green animate-pulse" />
          <span className="font-hud text-magic-glow text-xs tracking-widest">
            {currentSection.toUpperCase()}
          </span>
          <span className="text-sword-silver/40 font-hud text-xs">{'//'}</span>
          <span className="font-hud text-sword-silver/60 text-xs">{time}</span>
        </motion.div>

        {/* Menu toggle */}
        <motion.button
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={toggleMenu}
          className="hud-panel corner-cut px-4 py-2 font-hud text-magic-glow text-sm tracking-widest hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </motion.button>
      </div>

      {/* ── FULL-SCREEN NAV MENU ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="nav-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-cavern/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6"
          >
            {NAV_SECTIONS.map((s, i) => (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(s.id)}
                className="group flex items-center gap-4 hud-panel corner-cut px-10 py-4 w-72"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="font-fantasy text-xl text-sword-silver group-hover:text-magic-glow transition-colors tracking-wider">
                  {s.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BOTTOM LEFT: MINI-MAP ── */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="fixed bottom-6 left-4 z-50 hud-panel corner-cut p-3 w-36"
      >
        <div className="font-hud text-[9px] text-magic-glow/70 tracking-widest mb-2">▸ MINI-MAP</div>
        {/* Radar-style map */}
        <div className="relative w-full aspect-square bg-cavern/80 border border-hud-border/50 rounded-sm overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
              backgroundSize: '20% 20%',
            }}
          />
          {/* Sweep animation */}
          <motion.div
            className="absolute top-1/2 left-1/2 origin-bottom-left"
            style={{ width: '50%', height: '1px', background: 'rgba(59,130,246,0.6)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
          {/* Section blips */}
          {NAV_SECTIONS.map((s, i) => {
            const angle = (i / NAV_SECTIONS.length) * Math.PI * 2;
            const r = 35;
            const cx = 50 + Math.cos(angle) * r;
            const cy = 50 + Math.sin(angle) * r;
            return (
              <div
                key={s.id}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  left: `${cx}%`,
                  top: `${cy}%`,
                  transform: 'translate(-50%, -50%)',
                  background: s.id === currentSection ? '#3b82f6' : '#1e3a5f',
                  boxShadow: s.id === currentSection ? '0 0 6px #3b82f6' : 'none',
                }}
              />
            );
          })}
          {/* Player dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-xp-green -translate-x-1/2 -translate-y-1/2"
            style={{ boxShadow: '0 0 6px #22c55e' }}
          />
        </div>
        <div className="font-hud text-[8px] text-sword-silver/40 mt-1 tracking-widest text-center">
          ULL-4S // DEV
        </div>
      </motion.div>

      {/* ── BOTTOM RIGHT: QUEST LOG (Skills) ── */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="fixed bottom-6 right-4 z-50 hud-panel corner-cut p-3 w-52"
      >
        <div className="font-hud text-[9px] text-energy-gold/80 tracking-widest mb-2">▸ QUEST LOG</div>
        <div className="grid grid-cols-2 gap-1">
          {SKILLS_QUICK.map((skill) => (
            <div
              key={skill}
              className="font-hud text-[9px] text-sword-silver/70 bg-hud-border/30 px-1.5 py-0.5 corner-cut-sm truncate"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="mt-3 pt-2 border-t border-hud-border/40">
          <div className="font-hud text-[8px] text-magic-glow/60 tracking-widest mb-1">XP: SCROLL</div>
          <div className="w-full h-1 bg-hud-border/40 rounded overflow-hidden">
            <motion.div
              className="h-full xp-bar-inner"
              animate={{ width: `${swordFill}%` }}
              transition={{ duration: 0.15 }}
            />
          </div>
        </div>
      </motion.div>

      {/* ── LEFT SIDE: Section progress ── */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
      >
        {NAV_SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center gap-2"
            title={s.label}
          >
            <div
              className="w-1.5 h-6 rounded-full transition-all duration-300"
              style={{
                background: s.id === currentSection
                  ? 'linear-gradient(#3b82f6, #7c3aed)'
                  : 'rgba(59,130,246,0.2)',
                boxShadow: s.id === currentSection ? '0 0 8px rgba(59,130,246,0.7)' : 'none',
                transform: s.id === currentSection ? 'scaleY(1.3)' : 'scaleY(1)',
              }}
            />
            <span className="font-hud text-[9px] text-sword-silver/0 group-hover:text-magic-glow/80 transition-all tracking-widest whitespace-nowrap">
              {s.label}
            </span>
          </button>
        ))}
      </motion.div>

      {/* ── SCAN LINE OVERLAY ── */}
      <div className="scanline-overlay" />
    </>
  );
}
