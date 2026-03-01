'use client';

import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    id: 'bms',
    type: 'EDUCATION',
    icon: '🎓',
    title: 'BMS College of Engineering',
    subtitle: 'B.E. Computer Science & Engineering',
    period: '2022 – Present',
    color: 'text-xp-green',
    borderColor: 'border-xp-green/40',
    glowColor: 'rgba(34,197,94,0.3)',
    details: [
      { label: 'SEMESTER', value: '6th (Current)' },
      { label: 'CGPA', value: '9.63 / 10' },
      { label: 'STATUS', value: 'Active Student' },
    ],
    description:
      'Pursuing B.E. in Computer Science at BMS College of Engineering, Bangalore. Maintaining a 9.63 CGPA across all semesters. Focused on Machine Learning, Data Science, Android Development, and Distributed Systems.',
  },
  {
    id: 'csir',
    type: 'WORKSHOP',
    icon: '⚗',
    title: 'CSIR-4PI Workshop',
    subtitle: 'Applied Data Science & Generative AI',
    period: 'October 2025',
    color: 'text-magic-glow',
    borderColor: 'border-magic-blue/40',
    glowColor: 'rgba(59,130,246,0.3)',
    details: [
      { label: 'DURATION', value: '5 Days' },
      { label: 'FORMAT', value: 'Hands-On' },
      { label: 'LOCATION', value: 'CSIR-4PI, Bangalore' },
    ],
    description:
      '5-day intensive hands-on workshop at CSIR–Fourth Paradigm Institute covering Applied Data Science, Generative AI, and Large Language Models. Engaged in practical sessions on modern AI architectures and real-world deployment pipelines.',
  },
  {
    id: 'coursera',
    type: 'CERTIFICATION',
    icon: '📜',
    title: 'Supervised Machine Learning',
    subtitle: 'Coursera – Andrew Ng',
    period: '2024',
    color: 'text-energy-gold',
    borderColor: 'border-energy-gold/40',
    glowColor: 'rgba(245,158,11,0.3)',
    details: [
      { label: 'PROVIDER', value: 'Coursera / DeepLearning.AI' },
      { label: 'TOPICS', value: 'Neural Networks, SVM' },
      { label: 'GRADE', value: 'Distinction' },
    ],
    description:
      'Completed the Supervised Machine Learning course from DeepLearning.AI on Coursera, covering linear regression, logistic regression, neural networks, decision trees, and model evaluation best practices.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="snap-section relative py-20 px-4">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(245,158,11,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="font-hud text-[10px] text-magic-glow/60 tracking-widest mb-2">
            ▸ SECTION 04
          </div>
          <h2 className="font-fantasy text-4xl md:text-5xl text-sword-silver tracking-wider">
            EXPERIENCE & LEVEL-UPS
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-magic-blue to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-magic-blue/60 via-power-shard/40 to-transparent -translate-x-1/2" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'}`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 -translate-x-1/2 top-5"
                  style={{
                    borderColor: exp.glowColor.replace('0.3', '0.8'),
                    background: '#0a0f1a',
                    boxShadow: `0 0 12px ${exp.glowColor}`,
                  }}
                />

                {/* Card */}
                <div
                  className={`hud-panel corner-cut p-5 border ${exp.borderColor}`}
                  style={{
                    boxShadow: `0 0 20px ${exp.glowColor.replace('0.3', '0.15')}`,
                  }}
                >
                  {/* Type badge */}
                  <div className={`font-hud text-[9px] tracking-widest mb-1 ${exp.color}`}>
                    {exp.icon} {exp.type} — {exp.period}
                  </div>

                  {/* Title */}
                  <h3 className="font-fantasy text-xl text-sword-silver tracking-wider mb-0.5">
                    {exp.title}
                  </h3>
                  <div className="font-hud text-xs text-sword-silver/50 mb-4">{exp.subtitle}</div>

                  {/* Detail badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.details.map((d) => (
                      <div key={d.label} className="hud-panel corner-cut-sm px-2 py-1">
                        <span className="font-hud text-[8px] text-sword-silver/40 tracking-widest">
                          {d.label}:{' '}
                        </span>
                        <span className={`font-hud text-[9px] font-semibold ${exp.color}`}>
                          {d.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="font-body text-sword-silver/65 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
