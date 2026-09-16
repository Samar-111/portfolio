'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Activity, Brain, Code2, Trophy, Award, GraduationCap, Zap, Sparkles, Server, Network } from 'lucide-react';

const services = [
  {
    title: 'Clinical Triage & Real-Time AI',
    description: 'Architecting high-concurrency healthcare triage platforms (MedQueue AI) using WebSockets, ESI 1–5 classification, Zod parsing & ACID transaction re-ordering.',
    icon: Activity,
  },
  {
    title: 'Browser AI WebIDEs & Sandboxes',
    description: 'Engineering WebContainer sandboxes (VibeCode) compiling 6+ frameworks (React, Next.js, Express) with sub-second execution & Gemini API code intelligence.',
    icon: Terminal,
  },
  {
    title: 'Voice-Driven NLP Platforms',
    description: 'Pioneering speech-to-text assistants (Nexus Cart) with <250ms latency using Web Speech API, Gemini NLP command parsing and automated inventory sync.',
    icon: Zap,
  },
  {
    title: 'Agentic Workflows & Microservices',
    description: 'Specializing in ServiceNow Agentic AI workflows, LangChain, RAG architectures, distributed MongoDB Atlas caching, and scalable cloud deployments.',
    icon: Brain,
  },
];

const nodes = [
  {
    id: 'medqueue',
    title: 'MedQueue AI',
    tag: 'Clinical Triage • ESI 1-5',
    icon: Activity,
    color: 'from-rose-500/20 to-amber-500/20 border-rose-500/40 text-rose-400',
  },
  {
    id: 'vibecode',
    title: 'VibeCode',
    tag: 'WebContainers • Sub-Second',
    icon: Terminal,
    color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-400',
  },
  {
    id: 'nexus',
    title: 'Nexus Cart',
    tag: 'Voice Assistant • <250ms',
    icon: Zap,
    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-400',
  },
  {
    id: 'agentic',
    title: 'Agentic AI & RAG',
    tag: 'LangChain • Microservices',
    icon: Brain,
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400',
  },
];

const cpStats = [
  {
    title: 'LeetCode',
    handle: 'Sam9798',
    url: 'https://leetcode.com/u/Sam9798/',
    icon: Code2,
    badge: 'DSA & Algorithms',
  },
  {
    title: 'Codeforces',
    handle: 'Samar__009',
    url: 'https://codeforces.com/profile/Samar__009',
    icon: Trophy,
    badge: 'Competitive Coder',
  },
  {
    title: 'AlgoUniversity',
    handle: 'Mentee Hall of Fame',
    url: 'https://github.com/Samar-111',
    icon: Award,
    badge: 'Top Mentee / 60k+ applicants',
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
  const [activeNode, setActiveNode] = useState(0);

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight article-title">
            About Me
          </h2>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
            <span className="w-1 h-1 rounded-full bg-emerald-400/30" />
          </div>
        </div>

        <div className="space-y-4 text-[#d6d6d6] text-sm leading-relaxed font-sans">
          <p>
            I am a Computer Science undergraduate at <strong className="text-white">VIT Bhopal University</strong> (CGPA: 8.63 / 10.00) specializing in <span className="text-[#ffdb70] font-semibold">Artificial Intelligence & Machine Learning</span>.
          </p>
          <p>
            My engineering focus centers on architecting real-time distributed platforms: from emergency healthcare intake engines (<strong className="text-white">MedQueue AI</strong> with ESI 1–5 triage, ACID transaction locks & WebSocket synchronization) to browser-native developer environments (<strong className="text-white">VibeCode</strong> with WebContainers sandbox compilation) and voice-driven assistant systems (<strong className="text-white">Nexus Cart</strong>).
          </p>
          <p>
            I was selected into the prestigious <strong className="text-white">AlgoUniversity Programming Camp</strong> from among 60,000+ applicants and inducted into their Hall of Fame.
          </p>
        </div>
      </div>

      <div className="vcard-item-bg rounded-2xl p-5 border border-[#2e2e32] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#ffdb70]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2e2e32]">
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-[#ffdb70]" />
            <span className="text-xs font-mono font-semibold text-white tracking-wide">
              Engineering Focus & Architecture Mesh
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ffdb70] animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = activeNode === idx;
            return (
              <motion.div
                key={node.id}
                onClick={() => setActiveNode(idx)}
                whileHover={{ y: -3, scale: 1.02 }}
                className={`p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#222226] border-[#ffdb70] shadow-[0_0_20px_rgba(255,219,112,0.15)]'
                    : 'bg-[#18181b]/80 border-[#2e2e32] hover:border-[#ffdb70]/50'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffdb70] to-transparent" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${node.color} border`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#ffdb70] shadow-[0_0_6px_#ffdb70]' : 'bg-gray-600'}`} />
                </div>
                <h4 className="text-xs font-bold text-white mb-0.5">{node.title}</h4>
                <p className="text-[10px] font-mono text-[#9f9f9f]">{node.tag}</p>
              </motion.div>
            );
          })}
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
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="vcard-item-bg rounded-2xl p-6 flex items-start gap-4 shadow-sm group"
              >
                <div className="vcard-icon-box p-3 rounded-2xl text-[#ffdb70] shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-[#ffdb70] transition-colors">{s.title}</h4>
                  <p className="text-xs text-[#d6d6d6] leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-6">Competitive Programming & Distinctions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cpStats.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="vcard-item-bg rounded-2xl p-4 flex flex-col justify-between hover:border-[#ffdb70]/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="vcard-icon-box p-2 rounded-xl text-[#ffdb70] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#222226] text-[#ffdb70] border border-[#2e2e32]">
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
