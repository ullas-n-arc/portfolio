'use client';

import { motion } from 'framer-motion';
import useGameStore from '@/hooks/useGameStore';

export default function ScrollSword() {
  const scrollProgress = useGameStore((s) => s.scrollProgress);
  const fillPct = Math.round(scrollProgress * 100);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1 select-none"
      title={`Scroll Progress: ${fillPct}%`}
    >
      {/* Pommel */}
      <div
        className="w-3 h-3 rounded-full border border-energy-gold/60"
        style={{
          background: fillPct >= 95 ? '#f59e0b' : '#0a0f1a',
          boxShadow: fillPct >= 95 ? '0 0 10px rgba(245,158,11,0.8)' : 'none',
          transition: 'all 0.3s',
        }}
      />

      {/* Handle */}
      <div className="w-1.5 h-8 bg-hud-border/40 rounded-sm overflow-hidden relative border border-hud-border/30">
        <motion.div
          className="absolute bottom-0 left-0 right-0 rounded-sm"
          animate={{ height: `${fillPct}%` }}
          transition={{ duration: 0.2 }}
          style={{ background: 'linear-gradient(to top, #92400e, #b45309)' }}
        />
      </div>

      {/* Guard */}
      <div className="w-5 h-1.5 rounded-sm"
        style={{
          background: fillPct >= 10 ? 'linear-gradient(90deg, #f59e0b, #fbbf24)' : '#1e3a5f',
          boxShadow: fillPct >= 10 ? '0 0 6px rgba(245,158,11,0.5)' : 'none',
          transition: 'all 0.5s',
        }}
      />

      {/* Blade — energy fills from bottom to top */}
      <div
        className="w-1 h-28 bg-hud-border/30 rounded-t-full overflow-hidden border border-hud-border/20 relative"
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          animate={{ height: `${fillPct}%` }}
          transition={{ duration: 0.2 }}
          style={{
            background: 'linear-gradient(to top, #3b82f6, #7c3aed, #60a5fa)',
            boxShadow: fillPct > 0 ? '0 0 8px rgba(59,130,246,0.7)' : 'none',
          }}
        />
      </div>

      {/* Tip */}
      <div
        className="w-0 h-0"
        style={{
          borderLeft: '4px solid transparent',
          borderRight: '4px solid transparent',
          borderBottom: `8px solid ${fillPct >= 90 ? '#60a5fa' : '#1e3a5f'}`,
          filter: fillPct >= 90 ? 'drop-shadow(0 0 4px rgba(59,130,246,0.8))' : 'none',
          transition: 'all 0.5s',
        }}
      />

      {/* % label */}
      <div className="font-hud text-[8px] text-magic-glow/50 mt-1 tracking-widest">
        {fillPct}%
      </div>
    </div>
  );
}
