'use client';

import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    id: 'bms',
    type: 'Education',
    title: 'BMS College of Engineering',
    subtitle: 'B.E. Computer Science & Engineering (Data Science)',
    period: '2023 – Present',
    details: [
      { label: 'Semester', value: '6th (Current)' },
      { label: 'CGPA', value: '9.63 / 10' },
    ],
    description:
      'Pursuing B.E. in Computer Science (Data Science) at BMS College of Engineering, Bangalore. Focused on Machine Learning, Data Science, and Distributed Systems.',
  },
  {
    id: 'csir',
    type: 'Workshop',
    title: 'CSIR-4PI Workshop',
    subtitle: 'Applied Data Science & Generative AI',
    period: 'October 2025',
    details: [
      { label: 'Duration', value: '5 Days' },
      { label: 'Format', value: 'Hands-On' },
    ],
    description:
      '5-day intensive workshop at CSIR–Fourth Paradigm Institute covering Applied Data Science, Generative AI, and Large Language Models with practical sessions on modern AI architectures.',
  },
  {
    id: 'coursera',
    type: 'Certification',
    title: 'Supervised Machine Learning',
    subtitle: 'Coursera – Andrew Ng (DeepLearning.AI)',
    period: '2024',
    details: [
      { label: 'Topics', value: 'Neural Networks, SVM' },
      { label: 'Grade', value: 'Distinction' },
    ],
    description:
      'Completed the Supervised Machine Learning course covering linear/logistic regression, neural networks, decision trees, and model evaluation best practices.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section relative">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-subtitle">The Journey So Far</p>
          <h2 className="section-title">Experience</h2>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, rgba(0,229,255,0.5) 0%, rgba(124,58,237,0.5) 50%, rgba(0,229,255,0.2) 100%)' }} />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-6 w-3 h-3 rounded-full -translate-x-1/2 top-1.5"
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(135deg, #00E5FF, #7C3AED)'
                      : 'linear-gradient(135deg, #7C3AED, #00E5FF)',
                    boxShadow: i % 2 === 0
                      ? '0 0 10px rgba(0,229,255,0.5), 0 0 20px rgba(0,229,255,0.2)'
                      : '0 0 10px rgba(124,58,237,0.5), 0 0 20px rgba(124,58,237,0.2)',
                  }}
                />

                {/* Card */}
                <div className="card p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-mana-blue text-xs font-semibold uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <span className="text-text-muted text-xs">—</span>
                    <span className="text-text-muted text-xs">{exp.period}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-0.5">
                    {exp.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-3">{exp.subtitle}</p>

                  {/* Detail badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.details.map((d) => (
                      <div key={d.label} className="text-xs bg-card-bg border border-card-border rounded-md px-2.5 py-1">
                        <span className="text-text-muted">{d.label}: </span>
                        <span className="text-mana-light font-medium">{d.value}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed">
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
