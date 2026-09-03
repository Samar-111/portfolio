'use client';

import { motion } from 'framer-motion';
import { Terminal, Mic, Layers, Brain, Code2, Trophy, Award, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'Browser AI WebIDEs',
    description: 'Engineering WebContainer sandboxes compiling 6+ frameworks (React, Next.js, Express) with sub-second execution & Gemini API LLM code completion.',
    icon: Terminal,
  },
  {
    title: 'Voice-Driven NLP Platforms',
    description: 'Pioneering speech-to-text assistants (<250ms latency) using Web Speech API & Gemini NLP for complex command parsing and real-time state sync.',
    icon: Mic,
  },
  {
    title: 'Microservices & Full Stack',
    description: 'Designing RESTful services, JWT auth, MongoDB Atlas query aggregations (30% overhead reduction), and high-availability deployments.',
    icon: Layers,
  },
  {
    title: 'Machine Learning & AI',
    description: 'Specializing in NLP, Scikit-learn classification models, TF-IDF vectorization, and ServiceNow Agentic AI workflow automation.',
    icon: Brain,
  },
];

const cpStats = [
  {
    title: 'LeetCode',
    handle: 'Sam9798',
    url: 'https://leetcode.com/u/Sam9798/',
    icon: Code2,
    badge: 'Active Problem Solver',
  },
  {
    title: 'Codeforces',
    handle: 'Samar__009',
    url: 'https://codeforces.com/profile/Samar__009',
    icon: Trophy,
    badge: 'Competitive Programmer',
  },
  {
    title: 'AlgoUniversity',
    handle: 'Hall of Fame Mentee',
    url: 'https://github.com/Samar-111',
    icon: Award,
    badge: 'Selected from 60,000+ applicants',
  },
  {
    title: 'VIT Bhopal CGPA',
    handle: '8.63 / 10.00',
    url: '#resume',
    icon: GraduationCap,
    badge: 'B.Tech CS (AI & ML)',
  },
];

export default function AboutSection() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight article-title mb-6">
          About Me
        </h2>
        <div className="space-y-4 text-[#d6d6d6] text-sm leading-relaxed font-sans">
          <p>
            I am a Computer Science undergraduate at <strong className="text-white">VIT Bhopal University</strong> (CGPA: 8.63 / 10.00) specializing in <span className="text-[#ffdb70] font-semibold">Artificial Intelligence & Machine Learning</span>.
          </p>
          <p>
            My core engineering focus revolves around building browser-native developer environments, voice-driven natural language platforms, and microservices backends. As creator of <strong className="text-white">VibeCode</strong>, I engineered WebContainer sandboxes enabling inline code execution across 6+ frameworks with dual Google Gemini API and local Ollama fallback.
          </p>
          <p>
            I was selected as a mentee in the prestigious <strong className="text-white">AlgoUniversity Programming Camp</strong> out of 60,000+ students and featured in their Hall of Fame.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="vcard-item-bg rounded-2xl p-6 flex items-start gap-4 shadow-sm"
              >
                <div className="vcard-icon-box p-3 rounded-2xl text-[#ffdb70] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5">{s.title}</h4>
                  <p className="text-xs text-[#d6d6d6] leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-6">Competitive Programming & Distinction</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cpStats.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="vcard-item-bg rounded-2xl p-4 flex flex-col justify-between hover:border-[#ffdb70]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="vcard-icon-box p-2 rounded-xl text-[#ffdb70]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2b2b2c] text-[#ffdb70]">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs font-mono font-semibold text-[#ffdb70] mt-1">
                  {item.handle}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
