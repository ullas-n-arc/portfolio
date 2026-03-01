'use client';

import { motion } from 'framer-motion';
import useGameStore from '@/hooks/useGameStore';

const STATS = [
  { label: 'CGPA', value: '9.63 / 10', icon: '📊', color: 'text-xp-green' },
  { label: 'LOCATION', value: 'Bangalore, IN', icon: '📍', color: 'text-magic-glow' },
  { label: 'STATUS', value: '6th Semester', icon: '🎓', color: 'text-energy-gold' },
  { label: 'CLASS', value: 'Data Sorcerer', icon: '🔮', color: 'text-power-shard' },
];

export default function HeroSection() {
  const { mousePosition } = useGameStore();

  const parallaxX = mousePosition.normalizedX * 8;
  const parallaxY = mousePosition.normalizedY * -5;

  return (
    <section
      id="hero"
      className="snap-section relative flex flex-col items-center justify-center min-h-screen px-4"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }}
      />

      <motion.div
        animate={{ x: parallaxX, y: parallaxY }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
        className="relative z-10 w-full max-w-2xl"
      >
        {/* Character Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="hud-panel corner-cut p-6 md:p-8"
          style={{ boxShadow: '0 0 40px rgba(59,130,246,0.15)' }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="font-hud text-[10px] text-magic-glow/60 tracking-widest mb-1">
                ▸ CHARACTER PROFILE
              </div>
              <h1 className="font-fantasy text-4xl md:text-5xl text-sword-silver tracking-wider">
                ULLAS N
              </h1>
              <div className="font-hud text-magic-glow text-sm tracking-widest mt-1">
                ML ENGINEER &amp; ANDROID DEV
              </div>
            </div>

            {/* Level badge */}
            <div className="hud-panel corner-cut-sm px-3 py-2 text-center">
              <div className="font-hud text-[9px] text-sword-silver/50 tracking-widest">LVL</div>
              <div className="font-fantasy text-2xl text-energy-gold">21</div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-magic-blue/50 to-transparent mb-6" />

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + i * 0.1 }}
                className="hud-panel corner-cut-sm px-3 py-2"
              >
                <div className="font-hud text-[9px] text-sword-silver/50 tracking-widest">
                  {stat.icon} {stat.label}
                </div>
                <div className={`font-hud text-sm font-semibold ${stat.color} mt-0.5`}>
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bio */}
          <p className="font-body text-sword-silver/70 text-sm leading-relaxed mb-6">
            A data sorcerer at BMS College of Engineering, wielding ML pipelines and Android spells.
            Specializes in end-to-end AI systems—from streaming intrusion detection to computer vision
            quality control. Turning raw data into enchanted insights since 2022.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/ullas-n"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magic flex items-center gap-2 text-sm"
            >
              <GitHubIcon />
              GITHUB
            </a>
            <a
              href="https://leetcode.com/ullas-n"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magic flex items-center gap-2 text-sm"
              style={{ borderColor: 'rgba(245,158,11,0.5)', color: '#fbbf24' }}
            >
              <span className="text-base">⚡</span>
              LEETCODE
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magic flex items-center gap-2 text-sm"
              style={{ borderColor: 'rgba(34,197,94,0.5)', color: '#4ade80' }}
            >
              <span className="text-base">📄</span>
              RESUME
            </a>
          </div>

          {/* XP bar */}
          <div className="mt-5">
            <div className="flex justify-between font-hud text-[9px] text-sword-silver/40 mb-1">
              <span>PROGRESS TO GRADUATION</span>
              <span>963 / 1000 XP</span>
            </div>
            <div className="w-full h-2 bg-hud-border/40 rounded-full overflow-hidden">
              <motion.div
                className="h-full xp-bar-inner rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '96.3%' }}
                transition={{ duration: 1.5, delay: 2.2, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-center mt-6"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="font-hud text-[10px] text-magic-glow/50 tracking-widest"
          >
            ▾ CONTINUE QUEST ▾
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
