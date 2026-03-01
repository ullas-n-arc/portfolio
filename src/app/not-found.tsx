'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFlicker((v) => !v);
    }, 80 + Math.random() * 120);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-corrupt flex flex-col items-center justify-center px-4 overflow-hidden relative">
      {/* Red fog */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(127,29,29,0.4) 0%, rgba(10,5,5,0.95) 80%)',
        }}
      />

      {/* Dripping effect lines */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-px bg-corrupt-red/30"
          style={{ left: `${8 + i * 8}%` }}
          animate={{ height: ['0%', `${30 + Math.random() * 40}%`] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, repeatType: 'reverse', delay: i * 0.3 }}
        />
      ))}

      {/* Scanlines for corrupt feel */}
      <div className="scanline-overlay" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-lg"
      >
        {/* Corrupted sprite placeholder */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-8xl mb-6 inline-block"
          style={{ filter: 'hue-rotate(300deg) saturate(2)' }}
        >
          👾
        </motion.div>

        {/* Error code */}
        <div
          className="font-fantasy text-8xl md:text-9xl font-black mb-2"
          style={{
            color: flicker ? '#7f1d1d' : '#dc2626',
            textShadow: '0 0 30px rgba(220,38,38,0.8), 0 0 60px rgba(220,38,38,0.4)',
            animation: 'corruptFlicker 0.1s infinite',
          }}
        >
          404
        </div>

        {/* Title */}
        <motion.h1
          className="font-fantasy text-2xl md:text-3xl text-corrupt-red/90 tracking-wider mb-4"
          animate={{ opacity: flicker ? 0.7 : 1 }}
          transition={{ duration: 0.05 }}
        >
          YOU FELL INTO THE CORRUPT GROVE
        </motion.h1>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-corrupt-red/60 to-transparent mb-6" />

        {/* Flavour text */}
        <div className="hud-panel corner-cut p-4 border border-corrupt-red/30 mb-8">
          <div className="font-hud text-[10px] text-corrupt-red/60 tracking-widest mb-2">
            ▸ SYSTEM ALERT
          </div>
          <p className="font-body text-sword-silver/60 text-sm leading-relaxed">
            The path you sought has been consumed by corruption.
            The Dark Sorcerer's magic has erased this scroll from existence.
            Return to safety before the corruption spreads to your system.
          </p>
        </div>

        {/* Error details */}
        <div className="hud-panel corner-cut p-3 border border-corrupt-red/20 mb-8 text-left">
          <code className="font-hud text-xs text-corrupt-red/70 block space-y-1">
            <span className="block text-sword-silver/40">$ locate /{'{requested_path}'}</span>
            <span className="block">ERROR: Path corrupted or never existed</span>
            <span className="block">SECTOR: Corrupt Grove — Zone 0x404</span>
            <span className="block text-sword-silver/40">$ suggest_route --safe</span>
            <span className="block text-xp-green">→ /hero (Safe Zone detected)</span>
          </code>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-magic text-sm px-8 py-3"
            style={{ borderColor: 'rgba(220,38,38,0.5)', color: '#fca5a5' }}>
            ⚔ ESCAPE THE GROVE
          </Link>
          <Link href="/#projects" className="btn-magic text-sm px-8 py-3">
            📜 VIEW QUESTS
          </Link>
        </div>

        {/* Footer flavour */}
        <div className="font-hud text-[9px] text-sword-silver/20 tracking-widest mt-10">
          SWORDIGO DEV LOG // CORRUPT_ZONE_ERROR_404 // ULL-4S
        </div>
      </motion.div>
    </div>
  );
}
