'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="snap-section relative py-20 px-4 flex flex-col items-center justify-center min-h-screen">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="font-hud text-[10px] text-magic-glow/60 tracking-widest mb-2">
            ▸ SECTION 05
          </div>
          <h2 className="font-fantasy text-4xl md:text-5xl text-sword-silver tracking-wider">
            SEND A RAVEN
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-magic-blue to-transparent mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hud-panel corner-cut p-6 mb-6"
        >
          <div className="text-5xl mb-4">🦅</div>
          <p className="font-body text-sword-silver/70 text-sm leading-relaxed mb-6">
            Available for internships, collaborations, and quests of all kinds.
            Send a message and I'll respond before the next full moon.
          </p>

          <div className="space-y-3">
            <a
              href="mailto:ullas.n@example.com"
              className="btn-magic w-full flex items-center justify-center gap-3 py-3 text-sm"
            >
              <span>📧</span>
              SEND SCROLL (EMAIL)
            </a>
            <a
              href="https://linkedin.com/in/ullas-n"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magic w-full flex items-center justify-center gap-3 py-3 text-sm"
              style={{ borderColor: 'rgba(10,102,194,0.6)', color: '#60a5fa' }}
            >
              <span>💼</span>
              LINKEDIN GUILD
            </a>
            <a
              href="https://github.com/ullas-n"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magic w-full flex items-center justify-center gap-3 py-3 text-sm"
              style={{ borderColor: 'rgba(200,214,229,0.3)', color: '#c8d6e5' }}
            >
              <span>⚙</span>
              GITHUB FORGE
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-hud text-[9px] text-sword-silver/25 tracking-widest"
        >
          SWORDIGO DEV LOG // CRAFTED BY ULLAS N // BMSCE 2025
          <br />
          Built with Next.js · Three.js · Framer Motion · Zustand
        </motion.div>
      </div>
    </section>
  );
}
