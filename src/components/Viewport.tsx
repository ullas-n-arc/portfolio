'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useGameStore from '@/hooks/useGameStore';

interface ViewportProps {
  children: React.ReactNode;
}

export default function Viewport({ children }: ViewportProps) {
  const setScrollProgress = useGameStore((s) => s.setScrollProgress);
  const setCurrentSection = useGameStore((s) => s.setCurrentSection);
  const isLoaded = useGameStore((s) => s.isLoaded);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current || document.documentElement;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));

      // Section detection by scroll position
      const sections = ['hero', 'skills', 'projects', 'experience', 'contact'] as const;
      const sectionEls = sections.map((id) => document.getElementById(id));
      let current: typeof sections[number] = 'hero';
      sectionEls.forEach((el, i) => {
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= window.innerHeight * 0.5) current = sections[i];
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollProgress, setCurrentSection]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-screen"
      >
        {/* Loading screen */}
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="fixed inset-0 z-[9999] bg-cavern flex flex-col items-center justify-center"
            >
              <div className="font-fantasy text-3xl text-magic-glow animate-pulse-magic tracking-widest mb-6">
                SWORDIGO DEV LOG
              </div>
              <div className="w-64 h-1 bg-hud-border rounded overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-magic-blue to-power-shard"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
              </div>
              <div className="font-hud text-sword-silver/50 text-sm mt-3 tracking-widest">
                LOADING WORLD...
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
