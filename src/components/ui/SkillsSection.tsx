'use client';

import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    title: 'Programming',
    icon: '⌨️',
    skills: ['Java', 'Python', 'C', 'SQL', 'Kotlin'],
    accentFrom: '#00E5FF',
    accentTo: '#7C3AED',
  },
  {
    title: 'Data Science & AI',
    icon: '🧠',
    skills: ['TensorFlow', 'Scikit-learn', 'LangFlow', 'Pandas', 'NumPy', 'LIME / XAI'],
    accentFrom: '#7C3AED',
    accentTo: '#A78BFA',
  },
  {
    title: 'Big Data & Systems',
    icon: '⚡',
    skills: ['PySpark', 'Apache Kafka', 'PostgreSQL', 'MongoDB', 'Firebase'],
    accentFrom: '#4F46E5',
    accentTo: '#00E5FF',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-subtitle">Abilities Acquired</p>
          <h2 className="section-title">The Ability Tree</h2>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -4 }}
              className="card group relative overflow-hidden"
            >
              {/* Gradient top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-[14px]"
                style={{
                  background: `linear-gradient(90deg, ${cat.accentFrom}, ${cat.accentTo})`,
                }}
              />

              {/* Radial hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${cat.accentFrom}10 0%, transparent 65%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="text-lg">{cat.icon}</span>
                  <h3
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{
                      background: `linear-gradient(90deg, ${cat.accentFrom}, ${cat.accentTo})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
