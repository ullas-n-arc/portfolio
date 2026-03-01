'use client';

import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    title: 'Programming',
    icon: '⌨️',
    skills: ['Java', 'Python', 'C', 'SQL'],
  },
  {
    title: 'Data Science & AI',
    icon: '🧠',
    skills: ['TensorFlow', 'Scikit-learn', 'LangFlow',  'Pandas'],
  },
  {
    title: 'Big Data & Systems',
    icon: '⚡',
    skills: ['PySpark', 'Apache Kafka',  'PostgreSQL', 'Cisco Packet Tracer'],
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.12, duration: 0.5 }}
              className="card group relative overflow-hidden"
            >
              {/* Blue glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(0,229,255,0.08) 0%, transparent 70%)',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="text-lg">{cat.icon}</span>
                  <h3 className="text-mana-blue text-sm font-semibold uppercase tracking-wider">
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
