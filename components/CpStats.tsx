'use client';

import { motion } from 'framer-motion';
import { Trophy, Code2, Award, ExternalLink, GraduationCap } from 'lucide-react';

const stats = [
  {
    title: 'LeetCode',
    handle: 'Sam9798',
    url: 'https://leetcode.com/u/Sam9798/',
    icon: Code2,
    badge: 'Active Problem Solver',
    metric: 'Data Structures & Algorithmic Logic',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    hoverGlow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]',
    accentColor: 'text-amber-400',
  },
  {
    title: 'Codeforces',
    handle: 'Samar__009',
    url: 'https://codeforces.com/profile/Samar__009',
    icon: Trophy,
    badge: 'Competitive Programmer',
    metric: 'Timed Algorithmic Contests & Optimization',
    color: 'from-red-500/20 to-pink-500/20',
    borderColor: 'border-red-500/30',
    hoverGlow: 'group-hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]',
    accentColor: 'text-red-400',
  },
  {
    title: 'AlgoUniversity',
    handle: 'Hall of Fame Mentee',
    url: 'https://github.com/Samar-111',
    icon: Award,
    badge: 'Selected from 60,000+ Students',
    metric: 'Featured in Prestigious Mentorship Hall of Fame',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30',
    hoverGlow: 'group-hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]',
    accentColor: 'text-cyan-400',
  },
  {
    title: 'VIT Bhopal University',
    handle: 'CGPA: 8.63 / 10.00',
    url: '#experience',
    icon: GraduationCap,
    badge: 'B.Tech CS (AI & ML)',
    metric: 'Consistent Academic Excellence & Research Focus',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    hoverGlow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]',
    accentColor: 'text-emerald-400',
  },
];

export default function CpStats() {
  return (
    <section id="stats" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full glass-card border border-cyan-500/30 inline-block mb-3">
            Proof of Work & Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Competitive Programming & Metrics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card p-6 rounded-2xl border ${item.borderColor} bg-gradient-to-br ${item.color} glass-card-hover group relative overflow-hidden flex flex-col justify-between ${item.hoverGlow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-slate-900/80 border ${item.borderColor} ${item.accentColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {item.url.startsWith('http') && (
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    )}
                  </div>

                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-white/10 text-white/90 inline-block mb-3">
                    {item.badge}
                  </span>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className={`text-base font-mono font-semibold ${item.accentColor} mt-1`}>
                    {item.handle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-gray-300">
                  {item.metric}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
