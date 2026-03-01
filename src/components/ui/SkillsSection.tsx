'use client';

import { motion } from 'framer-motion';

type Skill = { name: string; level: number };

const CATEGORIES: { title: string; subtitle: string; icon: string; color: string; glowColor: string; skills: Skill[] }[] = [
  {
    title: 'PROGRAMMING ARSENAL',
    subtitle: 'Core Weapons',
    icon: '⚔',
    color: 'text-sword-silver',
    glowColor: 'rgba(200,214,229,0.4)',
    skills: [
      { name: 'Java', level: 88 },
      { name: 'Python', level: 92 },
      { name: 'C', level: 75 },
      { name: 'R', level: 70 },
    ],
  },
  {
    title: 'MAGIC SPELLS',
    subtitle: 'ML & Data Science',
    icon: '🔮',
    color: 'text-magic-glow',
    glowColor: 'rgba(59,130,246,0.4)',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 88 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'TensorFlow', level: 78 },
    ],
  },
  {
    title: 'WORLD-BUILDING TOOLS',
    subtitle: 'Dev Environment',
    icon: '🛠',
    color: 'text-energy-gold',
    glowColor: 'rgba(245,158,11,0.4)',
    skills: [
      { name: 'Android Studio', level: 82 },
      { name: 'Git', level: 88 },
      { name: 'VS Code', level: 94 },
      { name: 'IntelliJ IDEA', level: 80 },
      { name: 'Power BI', level: 72 },
    ],
  },
  {
    title: 'THE ARCHIVES',
    subtitle: 'Databases',
    icon: '🗄',
    color: 'text-power-shard',
    glowColor: 'rgba(124,58,237,0.4)',
    skills: [
      { name: 'SQL', level: 86 },
      { name: 'MongoDB', level: 80 },
      { name: 'Firebase Firestore', level: 84 },
    ],
  },
];

const VARIANT = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

export default function SkillsSection() {
  return (
    <section id="skills" className="snap-section relative py-20 px-4">
      {/* Background tint */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(124,58,237,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="font-hud text-[10px] text-magic-glow/60 tracking-widest mb-2">
            ▸ SECTION 02
          </div>
          <h2 className="font-fantasy text-4xl md:text-5xl text-sword-silver tracking-wider">
            TECHNICAL INVENTORY
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-magic-blue to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              custom={ci}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={VARIANT}
              className="hud-panel corner-cut p-5"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <div className={`font-fantasy text-base tracking-wider ${cat.color}`}>
                    {cat.title}
                  </div>
                  <div className="font-hud text-[9px] text-sword-silver/40 tracking-widest">
                    {cat.subtitle}
                  </div>
                </div>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + si * 0.08 + 0.2 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-hud text-sm text-sword-silver">{skill.name}</span>
                      <span className="font-hud text-xs text-sword-silver/50">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-hud-border/40 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: ci * 0.1 + si * 0.08 + 0.3, ease: 'easeOut' }}
                        style={{
                          background: `linear-gradient(90deg, ${cat.glowColor.replace('0.4', '0.8')}, ${cat.glowColor})`,
                          boxShadow: `0 0 8px ${cat.glowColor}`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
