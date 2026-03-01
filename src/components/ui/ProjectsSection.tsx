'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    id: 'intrusion',
    title: 'Real-Time Intrusion Detection',
    subtitle: 'ML Pipeline with Spark & Kafka',
    description:
      'An end-to-end ML pipeline for network intrusion detection using Spark Structured Streaming and Apache Kafka. Ingests live network traffic, applies feature engineering, and classifies attacks in real-time with Random Forest and GBT models.',
    highlights: [
      { label: 'Training Data', value: '2.7M+ Records' },
      { label: 'AUC-ROC', value: '98.5%' },
      { label: 'Dataset', value: 'CIC-IDS' },
    ],
    stack: ['Python', 'PySpark', 'Apache Kafka', 'Random Forest', 'GBT', 'MongoDB'],
    link: 'https://github.com/ullas-n-arc/real-time-network-intrusion-detection-spark-kafka',
    featured: true,
  },
  {
    id: 'civic',
    title: 'Geo-Spatial Civic App',
    subtitle: 'Android · Firebase · OpenStreetMap',
    description:
      'Android application with Firebase authentication, Firestore database, and OpenStreetMap integration for geo-spatial civic issue reporting and community engagement.',
    highlights: [
      { label: 'Platform', value: 'Android' },
      { label: 'Auth', value: 'Firebase' },
      { label: 'Maps', value: 'OpenStreetMap' },
    ],
    stack: ['Android', 'Firebase', 'Firestore', 'OpenStreetMap', 'Java'],
    link: 'https://github.com/Sushanth-25/Local_Connect',
    featured: false,
  },
  {
    id: 'traffic',
    title: 'Explainable AI Traffic Agent',
    subtitle: 'IBM SkillsBuild & Edunet Hackathon — Built in 3 days',
    description:
      'RAG-based explainable AI agent for transparent traffic congestion analysis. Built with LangFlow and IBM Granite on watsonx.ai. The system provides human-readable explanations for AI predictions, making black-box decisions interpretable for traffic operators.',
    highlights: [
      { label: 'Technique', value: 'RAG Pipeline' },
      { label: 'Platform', value: 'IBM Cloud' },
      { label: 'Framework', value: 'LangFlow' },
    ],
    stack: ['LangFlow', 'IBM Granite', 'RAG', 'Python', 'watsonx.ai'],
    link: 'https://github.com/Sushanth-25/Traffic_Congestion_Agent',
    featured: false,
  },
  {
    id: 'fakenews',
    title: 'Fake News Detection',
    subtitle: 'BiLSTM with LIME Explainability',
    description:
      'A deep learning approach to fake news detection using Bidirectional LSTM networks. Integrated LIME (Local Interpretable Model-agnostic Explanations) for model interpretability, providing transparent reasoning behind classification decisions.',
    highlights: [
      { label: 'Model', value: 'BiLSTM' },
      { label: 'Explainability', value: 'LIME' },
      { label: 'Task', value: 'NLP Classification' },
    ],
    stack: ['Python', 'TensorFlow', 'LIME', 'NLP', 'Jupyter'],
    link: 'https://github.com/ullas-n-arc/fake-news-detection-lstm',
    featured: false,
  },
  {
    id: 'life-expectancy',
    title: 'Life Expectancy Analysis',
    subtitle: 'Statistical Data Analysis',
    description:
      'Comprehensive statistical analysis of global life expectancy data, exploring correlations between socioeconomic factors, healthcare expenditure, and mortality rates across countries using data visualization and regression modeling.',
    highlights: [
      { label: 'Domain', value: 'Public Health' },
      { label: 'Approach', value: 'Statistical Modeling' },
      { label: 'Tooling', value: 'Pandas & Visualization' },
    ],
    stack: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Jupyter'],
    link: 'https://github.com/ullas-n-arc/Life-Expectancy-Analysis',
    featured: false,
  },
];

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="section relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <p className="section-subtitle">Quests Completed</p>
          <h2 className="section-title">Completed Quests</h2>
          <div className="section-divider mt-4" />
        </motion.div>

        {/* Project cards */}
        <div className="space-y-4">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`card cursor-pointer ${
                proj.featured ? 'border-mana-blue/30' : ''
              }`}
              onClick={() => setExpanded(expanded === proj.id ? null : proj.id)}
            >
              <div className="p-5 md:p-6">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {proj.featured && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-mana-blue bg-mana-blue/10 px-2 py-0.5 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {proj.title}
                    </h3>
                    <p className="text-text-muted text-sm mt-0.5">{proj.subtitle}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === proj.id ? 180 : 0 }}
                    className="text-text-muted text-sm mt-1 flex-shrink-0"
                  >
                    ▾
                  </motion.div>
                </div>

                {/* Highlight stats — always visible */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="text-xs bg-card-bg border border-card-border rounded-md px-2.5 py-1"
                    >
                      <span className="text-text-muted">{h.label}: </span>
                      <span className="text-mana-light font-medium">{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {expanded === proj.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-card-border pt-4">
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {proj.stack.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        View on GitHub
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
