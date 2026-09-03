'use client';

import { motion } from 'framer-motion';
import { Code2, Globe, Cloud, Cpu, BrainCheck } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    accent: 'text-cyan-400 border-cyan-500/30',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    accent: 'text-purple-400 border-purple-500/30',
    skills: [
      { name: 'ReactJS', level: 94 },
      { name: 'Next.js 15', level: 90 },
      { name: 'Node.js & Express.js', level: 88 },
      { name: 'MongoDB & Mongoose', level: 86 },
      { name: 'FastAPI', level: 82 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Material UI & Bootstrap', level: 85 },
    ],
  },
  {
    title: 'Tools & Cloud',
    icon: Cloud,
    accent: 'text-blue-400 border-blue-500/30',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Microsoft Azure', level: 80 },
      { name: 'Cloudinary', level: 85 },
      { name: 'WebContainers & xterm.js', level: 88 },
    ],
  },
  {
    title: 'Core Computer Science',
    icon: Cpu,
    accent: 'text-emerald-400 border-emerald-500/30',
    skills: [
      { name: 'Data Structures & Algorithms', level: 92 },
      { name: 'Object-Oriented Programming', level: 90 },
      { name: 'DBMS & SQL Optimization', level: 88 },
      { name: 'Auth (JWT, NextAuth v5, OAuth)', level: 90 },
      { name: 'RESTful API Architecture', level: 92 },
    ],
  },
  {
    title: 'Machine Learning & AI',
    icon: BrainCheck,
    accent: 'text-amber-400 border-amber-500/30',
    skills: [
      { name: 'Natural Language Processing (NLP)', level: 86 },
      { name: 'Google Gemini API Integrations', level: 92 },
      { name: 'Scikit-learn & Classification', level: 82 },
      { name: 'TF-IDF & Vector Aggregation', level: 84 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full glass-card border border-cyan-500/30 inline-block mb-3">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl border border-white/10 p-6 glass-card-hover"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className={`p-2.5 rounded-xl bg-slate-900 border ${cat.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-xs font-mono text-gray-300 mb-1.5">
                        <span>{s.name}</span>
                        <span className="text-cyan-400 font-semibold">{s.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
