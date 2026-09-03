'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    role: 'MERN Stack Intern',
    company: 'Ethnus',
    location: 'Remote',
    period: 'May 2025 – Jul 2025',
    icon: Briefcase,
    highlights: [
      'Forged RESTful backend services for 3 major modules handling 50,000+ database records.',
      'Optimized MongoDB schemas and queries, improving data retrieval speed by 25%.',
      'Crafted responsive React interfaces for 12+ pages, reducing page load time by 20%.',
      'Executed authentication and role-based access control for 100+ users.',
    ],
    accent: 'border-cyan-500/40 text-cyan-400',
  },
  {
    type: 'work',
    role: 'Virtual Internship Program',
    company: 'ServiceNow (AICTE & SmartBridge)',
    location: 'Remote',
    period: 'May 2026 – Jun 2026',
    icon: Briefcase,
    highlights: [
      'Mastered ServiceNow administration concepts including user management, platform configuration, workflow automation, and reporting.',
      'Explored Agentic AI capabilities and automated workflows within the ServiceNow platform.',
      'Validated platform custom application logic using ServiceNow Automated Test Framework (ATF) configurations.',
    ],
    accent: 'border-purple-500/40 text-purple-400',
  },
  {
    type: 'education',
    role: 'B.Tech in Computer Science (AI & ML)',
    company: 'VIT Bhopal University',
    location: 'Bhopal, Madhya Pradesh',
    period: 'Aug 2023 – Aug 2027',
    icon: GraduationCap,
    highlights: [
      'Cumulative Grade Point Average (CGPA): 8.63 / 10.00.',
      'Specialized coursework in Natural Language Processing, Machine Learning, Data Structures & Algorithms, DBMS, and Object-Oriented Programming.',
    ],
    accent: 'border-emerald-500/40 text-emerald-400',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full glass-card border border-cyan-500/30 inline-block mb-3">
            Career Journey & Academic Record
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & Education
          </h2>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.6)] group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                <div className="glass-card rounded-2xl border border-white/10 p-6 sm:p-8 glass-card-hover relative">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/10 text-cyan-300 font-semibold inline-block mb-1">
                        {item.type === 'work' ? 'Professional Experience' : 'Higher Education'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm font-mono text-cyan-400">{item.company}</p>
                    </div>

                    <div className="flex flex-col items-start sm:items-end text-xs font-mono text-gray-400 gap-1">
                      <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-lg border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
