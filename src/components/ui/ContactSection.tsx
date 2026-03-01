'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('ullas.np47@gmail.com');
    } catch {
      const el = document.createElement('textarea');
      el.value = 'ullas.np47@gmail.com';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="btn-primary justify-center py-3 w-full relative">
      <MailIcon />
      <span className="transition-opacity duration-200">
        {copied ? 'Copied!' : 'ullas.np47@gmail.com'}
      </span>
    </button>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="section relative flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Get in Touch
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-text-secondary text-sm leading-relaxed">
            Available for internships, collaborations, and interesting projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col gap-3 max-w-xs mx-auto"
        >
          <CopyEmailButton />
          <a
            href="https://www.linkedin.com/in/ullas-n-1191a3294"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center py-3"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href="https://github.com/ullas-n-arc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center py-3"
          >
            <GitHubIcon />
            GitHub
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 space-y-2"
        >
          <p className="text-text-muted text-xs tracking-wide">Ullas N — BMSCE 2026</p>
          <p className="text-text-muted/40 text-[11px]">Built with Next.js · Framer Motion · Tailwind CSS</p>

          {/* Sword easter egg */}
          <div className="pt-4 flex justify-center">
            <div className="group relative cursor-default">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-muted/10 group-hover:text-mana-blue/40 transition-colors duration-700"
              >
                <line x1="12" y1="2" x2="12" y2="18" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="10" y1="20" x2="14" y2="20" />
                <line x1="12" y1="18" x2="12" y2="22" />
              </svg>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg text-xs text-mana-light whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'rgba(17,24,39,0.95)', border: '1px solid rgba(30,41,59,0.6)' }}>
                Dedicating this journey to the magic of Swordigo.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
