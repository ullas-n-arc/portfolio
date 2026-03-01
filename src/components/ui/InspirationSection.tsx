'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const INSPIRATIONS = [
  {
    title: 'Swordigo',
    platform: 'Mobile',
    accent: '#00E5FF',
    image: '/images/swordigo.jpg',
    description:
      'The classic adventure that sparked my initial curiosity for exploration, logic, and building interactive digital worlds.',
  },
  {
    title: 'Detroit: Become Human',
    platform: 'PC',
    accent: '#00BFFF',
    image: '/images/detroit.jpg',
    description:
      'A cinematic masterpiece that deeply influenced my perspective on Artificial Intelligence, ethics, and the architecture of complex decision trees.',
  },
];

export default function InspirationSection() {
  return (
    <section id="inspiration" className="section relative pb-32">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-subtitle">What Drives Me</p>
          <h2 className="section-title">Worlds That Shaped Me</h2>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {INSPIRATIONS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl"
              style={{
                background: 'rgba(17, 24, 39, 0.5)',
                border: `1px solid ${item.accent}15`,
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Cover image */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)',
                  }}
                />
                {/* Platform badge */}
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-widest"
                  style={{
                    background: `${item.accent}20`,
                    color: item.accent,
                    border: `1px solid ${item.accent}30`,
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  {item.platform}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 px-6 pb-6 -mt-16">
                <h3
                  className="font-bold text-xl mb-2 drop-shadow-lg"
                  style={{ color: item.accent }}
                >
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px z-20"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.accent}40, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
