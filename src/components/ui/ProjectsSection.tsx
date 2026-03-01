'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useGameStore from '@/hooks/useGameStore';

const PROJECTS = [
  {
    id: 'intrusion',
    type: 'MAIN QUEST',
    typeColor: 'text-xp-green',
    typeBorder: 'border-xp-green/40',
    title: 'Real-Time Intrusion Detection',
    subtitle: 'ML Pipeline with Spark & Kafka',
    description:
      'An end-to-end ML pipeline for network intrusion detection using Spark Structured Streaming and Apache Kafka. Ingests live network traffic, applies feature engineering, and classifies attacks in real-time.',
    stats: [
      { label: 'TRAINING DATA', value: '2.7M+ Records' },
      { label: 'AUC-ROC', value: '98.5%' },
      { label: 'DATASET', value: 'CIC-IDS' },
    ],
    stack: ['Python', 'PySpark', 'Apache Kafka', 'Random Forest', 'GBT', 'MongoDB'],
    icon: '🛡',
  },
  {
    id: 'geospatial',
    type: 'SIDE QUEST',
    typeColor: 'text-magic-glow',
    typeBorder: 'border-magic-blue/40',
    title: 'Geo-Spatial Civic App',
    subtitle: 'Android Municipal Issue Reporter',
    description:
      'Android application enabling citizens to report municipal issues with GPS-tagged photos. Features secure Firebase Authentication, real-time Firestore data management, and OpenStreetMap integration for spatial visualization.',
    stats: [
      { label: 'AUTH', value: 'Firebase Secure' },
      { label: 'MAPS', value: 'OpenStreetMap' },
      { label: 'DB', value: 'Firestore RT' },
    ],
    stack: ['Android (Java)', 'Firebase Auth', 'Firestore', 'OpenStreetMap'],
    icon: '🗺',
  },
  {
    id: 'capstone',
    type: 'EXPANSION QUEST',
    typeColor: 'text-energy-gold',
    typeBorder: 'border-energy-gold/40',
    title: 'Deep Learning Quality Inspection',
    subtitle: 'Capstone Project – CV for F&B Industry',
    description:
      'Computer Vision–based automated quality control system for the Food and Beverage industry. Leverages deep learning models for defect detection and classification on production lines.',
    stats: [
      { label: 'DOMAIN', value: 'Food & Beverages' },
      { label: 'APPROACH', value: 'Computer Vision' },
      { label: 'TYPE', value: 'Capstone' },
    ],
    stack: ['TensorFlow', 'OpenCV', 'Python', 'CNN Architectures'],
    icon: '🔬',
  },
  {
    id: 'traffic',
    type: 'HIDDEN QUEST',
    typeColor: 'text-power-shard',
    typeBorder: 'border-power-shard/40',
    title: 'Explainable AI Traffic Agent',
    subtitle: 'RAG-based Congestion Analysis',
    description:
      'RAG-based explainable AI agent for transparent traffic congestion analysis. Built with Langflow and IBM Cloud, the system provides human-readable explanations for AI predictions — making black-box decisions interpretable.',
    stats: [
      { label: 'TECHNIQUE', value: 'RAG Pipeline' },
      { label: 'PLATFORM', value: 'IBM Cloud' },
      { label: 'FRAMEWORK', value: 'Langflow' },
    ],
    stack: ['Langflow', 'IBM Cloud', 'RAG', 'LLMs', 'Python'],
    icon: '🚦',
  },
];

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { setActiveProject } = useGameStore();

  const handleExpand = (id: string) => {
    const next = expanded === id ? null : id;
    setExpanded(next);
    setActiveProject(next);
  };

  return (
    <section id="projects" className="snap-section relative py-20 px-4">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)' }}
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
            ▸ SECTION 03
          </div>
          <h2 className="font-fantasy text-4xl md:text-5xl text-sword-silver tracking-wider">
            THE QUEST LOG
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-magic-blue to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Quest cards */}
        <div className="space-y-4">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`hud-panel corner-cut border power-shard-hover cursor-pointer ${proj.typeBorder}`}
              onClick={() => handleExpand(proj.id)}
              style={{
                boxShadow:
                  expanded === proj.id
                    ? '0 0 30px rgba(124,58,237,0.4), inset 0 0 20px rgba(124,58,237,0.05)'
                    : undefined,
              }}
            >
              <div className="p-5">
                {/* Quest header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{proj.icon}</span>
                    <div>
                      <div className={`font-hud text-[9px] tracking-widest mb-0.5 ${proj.typeColor}`}>
                        ▸ {proj.type}
                      </div>
                      <h3 className="font-fantasy text-lg text-sword-silver tracking-wider">
                        {proj.title}
                      </h3>
                      <div className="font-hud text-xs text-sword-silver/50">{proj.subtitle}</div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === proj.id ? 180 : 0 }}
                    className="font-hud text-magic-glow/60 text-sm mt-1"
                  >
                    ▾
                  </motion.div>
                </div>

                {/* Stats always visible */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="hud-panel corner-cut-sm px-2 py-1 flex items-center gap-1.5"
                    >
                      <span className="font-hud text-[8px] text-sword-silver/40 uppercase tracking-widest">
                        {stat.label}:
                      </span>
                      <span className={`font-hud text-[9px] font-semibold ${proj.typeColor}`}>
                        {stat.value}
                      </span>
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
                    <div className="px-5 pb-5 border-t border-hud-border/40 pt-4">
                      <p className="font-body text-sword-silver/70 text-sm leading-relaxed mb-4">
                        {proj.description}
                      </p>
                      <div>
                        <div className="font-hud text-[9px] text-magic-glow/60 tracking-widest mb-2">
                          TECH STACK
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {proj.stack.map((tech) => (
                            <span
                              key={tech}
                              className="font-hud text-xs bg-hud-border/30 border border-hud-border/50 px-2 py-0.5 corner-cut-sm text-sword-silver/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
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
