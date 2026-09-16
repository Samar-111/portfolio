'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Activity, Layers, Brain, Code2, Trophy, Award, GraduationCap, Play, Copy, Check, Zap } from 'lucide-react';

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

const terminalLogs = [
  'samar@quantum-core:~$ sys-init --target medqueue-ai --ai gemini-2.5-flash',
  '[*] Spawning WebContainer Sandbox Runtime... OK [0.18s]',
  '[*] Initializing Socket.io Bi-Directional WebSocket Bridge... CONNECTED [port: 3000]',
  '[*] Loading Clinical Triage Parser (Zod Schema Validation)... READY',
  '[*] ACID Transaction Lock Enabled: High-risk ESI 1-2 Emergency Jump Logic ACTIVE',
  '[✓] STATUS 200: VibeCode IDE & MedQueue AI Triage Engines LIVE and Operational.',
];

export default function AboutSection() {
  const [copiedLog, setCopiedLog] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [activeLogs, setActiveLogs] = useState(terminalLogs);

  const handleRun = () => {
    setIsRunning(true);
    setActiveLogs([
      'samar@quantum-core:~$ executing live system health diagnostics...',
      '[*] Testing VibeCode WebContainers inline execution... OK',
      '[*] Verifying MedQueue AI live WebSocket telemetry across 3 dashboards... OK',
      '[*] Evaluating Nexus Cart NLP accuracy score... 94% CONFIRMED',
      '[✓] SYSTEM HEALTH 100% — All distributed microservices operational.',
    ]);
    setTimeout(() => setIsRunning(false), 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeLogs.join('\n'));
    setCopiedLog(true);
    setTimeout(() => setCopiedLog(false), 2000);
  };

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight article-title">
            About Me
          </h2>
          <span className="text-[10px] font-mono text-[#ffdb70] hud-pill px-3 py-1 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ONLINE // VIT BHOPAL (AI & ML)
          </span>
        </div>

        <div className="space-y-4 text-[#d6d6d6] text-sm leading-relaxed font-sans">
          <p>
            I am a Computer Science undergraduate at <strong className="text-white">VIT Bhopal University</strong> (CGPA: 8.63 / 10.00) specializing in <span className="text-[#ffdb70] font-semibold">Artificial Intelligence & Machine Learning</span>.
          </p>
          <p>
            My engineering expertise centers on architecting mission-critical, real-time distributed platforms: from emergency healthcare intake engines (<strong className="text-white">MedQueue AI</strong> with ESI 1–5 triage, ACID transaction locks & WebSocket synchronization) to browser-native developer environments (<strong className="text-white">VibeCode</strong> with WebContainers sandbox compilation) and voice-driven assistant systems (<strong className="text-white">Nexus Cart</strong>).
          </p>
          <p>
            I was selected into the prestigious <strong className="text-white">AlgoUniversity Programming Camp</strong> from among 60,000+ applicants and inducted into their Hall of Fame.
          </p>
        </div>
      </div>

      <div className="vcard-item-bg rounded-2xl p-4 sm:p-5 border border-[#2e2e32] shadow-xl">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#2e2e32]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] font-mono text-[#9f9f9f] ml-2 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-[#ffdb70]" />
              samar-telemetry-sandbox // live
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRun}
              className="px-2.5 py-1 rounded-lg bg-[#222226] border border-[#2e2e32] text-[#ffdb70] text-[10px] font-mono hover:border-[#ffdb70]/60 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Play className="w-3 h-3 text-emerald-400" />
              <span>{isRunning ? 'Running...' : 'Run Diagnostics'}</span>
            </button>
            <button
              onClick={handleCopy}
              className="p-1 rounded-lg bg-[#222226] border border-[#2e2e32] text-[#9f9f9f] hover:text-[#ffdb70] transition-colors"
              title="Copy Output"
            >
              {copiedLog ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </div>

        <div className="font-mono text-xs text-[#d6d6d6] space-y-1 bg-[#101114] p-3.5 rounded-xl border border-[#2e2e32]/60 overflow-x-auto">
          {activeLogs.map((line, idx) => (
            <div
              key={idx}
              className={`${
                line.startsWith('[✓]')
                  ? 'text-emerald-400 font-semibold'
                  : line.startsWith('samar@')
                  ? 'text-[#ffdb70] font-semibold'
                  : 'text-[#a0a0a5]'
              }`}
            >
              {line}
            </div>
          ))}
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
