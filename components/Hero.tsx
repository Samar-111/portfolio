'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Terminal as TerminalIcon,
  Play,
  Copy,
  Check,
  ExternalLink,
  Trophy,
  Zap,
} from 'lucide-react';

const roles = [
  'AI & Full Stack Engineer',
  'WebContainers & LLM Builder',
  'Competitive Programmer',
  'MERN & Next.js 15 Specialist',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<'json' | 'js' | 'sh'>('json');
  const [copied, setCopied] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleCopyCode = () => {
    let content = '';
    if (activeTab === 'json') {
      content = JSON.stringify(
        {
          name: 'Samar Anand',
          university: 'VIT Bhopal University',
          cgpa: '8.63 / 10.00',
          focus: 'Artificial Intelligence & Machine Learning',
          keyProjects: ['VibeCode AI IDE', 'Nexus Cart Voice Assistant', 'Job Portal Microservices'],
          email: 'samaranand9798@gmail.com',
        },
        null,
        2
      );
    } else if (activeTab === 'js') {
      content = `const samar = {\n  status: "Building Next-Gen AI Applications",\n  stack: ["Next.js 15", "TypeScript", "WebContainers", "Gemini 2.5", "MongoDB"],\n  executeCode: () => "Sub-second compilation active"\n};`;
    } else {
      content = `./vibecode-scaffold.sh --target=webcontainer --ai=gemini-2.5-flash`;
    }
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunTerminal = () => {
    setIsRunning(true);
    setTerminalLogs(['$ node samar-engine.js --init']);
    setTimeout(() => {
      setTerminalLogs((prev) => [...prev, '✔ Mounting WebContainer sandbox environment...']);
    }, 400);
    setTimeout(() => {
      setTerminalLogs((prev) => [...prev, '✔ Loaded Google Gemini API (gemini-2.5-flash)']);
    }, 800);
    setTimeout(() => {
      setTerminalLogs((prev) => [
        ...prev,
        '✔ Samar Anand profile loaded (CGPA: 8.63/10 | Hall of Fame Mentee)',
      ]);
      setIsRunning(false);
    }, 1200);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-cyan-300 tracking-wide font-medium">
                Available for Roles & Internships
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none mb-4">
              Hi, I'm <span className="gradient-text-cyan">Samar Anand</span>
            </h1>

            <div className="h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl font-mono text-gray-300">
                I build{' '}
                <span className="text-cyan-400 font-semibold border-b-2 border-cyan-400/50 pb-0.5">
                  {displayText}
                </span>
                <span className="animate-pulse text-cyan-400">|</span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
              Computer Science undergrad at <strong className="text-white">VIT Bhopal University</strong> (CGPA: 8.63/10.00) specializing in <span className="text-cyan-300">AI & Full Stack Development</span>. Architect of browser-based WebContainer IDEs, voice-driven NLP platforms, and microservice backends. Selected in AlgoUniversity Hall of Fame (Top mentee out of 60,000+ applicants).
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-slate-950 fill-slate-950" />
                <span>Explore Projects</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-white glass-card border border-white/15 hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mr-2">
                Connect:
              </span>

              <a
                href="https://github.com/Samar-111"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg glass-card border border-white/10 text-xs font-mono text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 flex items-center gap-1.5 transition-all"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://www.linkedin.com/in/samar-anand-a87642287/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg glass-card border border-white/10 text-xs font-mono text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 flex items-center gap-1.5 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://leetcode.com/u/Sam9798/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg glass-card border border-white/10 text-xs font-mono text-gray-300 hover:text-amber-400 hover:border-amber-400/40 flex items-center gap-1.5 transition-all"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://codeforces.com/profile/Samar__009"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg glass-card border border-white/10 text-xs font-mono text-gray-300 hover:text-red-400 hover:border-red-400/40 flex items-center gap-1.5 transition-all"
              >
                <Trophy className="w-3.5 h-3.5 text-red-400" />
                <span>Codeforces</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-2xl border border-white/15 overflow-hidden shadow-2xl relative group">
              <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-gray-400 flex items-center gap-1">
                    <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                    samar-workspace — zsh
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 text-gray-400 hover:text-cyan-400 rounded hover:bg-white/5 transition-colors"
                    title="Copy Code"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={handleRunTerminal}
                    disabled={isRunning}
                    className="px-2.5 py-1 text-xs font-mono text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded flex items-center gap-1 transition-all"
                  >
                    <Play className="w-3 h-3 fill-cyan-400" />
                    <span>Run</span>
                  </button>
                </div>
              </div>

              <div className="bg-slate-950/80 px-4 pt-2 border-b border-white/10 flex gap-2 font-mono text-xs">
                <button
                  onClick={() => setActiveTab('json')}
                  className={`px-3 py-1.5 rounded-t-lg border-t border-x transition-colors ${
                    activeTab === 'json'
                      ? 'bg-slate-900 text-cyan-400 border-cyan-500/40 font-semibold'
                      : 'text-gray-400 border-transparent hover:text-gray-200'
                  }`}
                >
                  developer.json
                </button>
                <button
                  onClick={() => setActiveTab('js')}
                  className={`px-3 py-1.5 rounded-t-lg border-t border-x transition-colors ${
                    activeTab === 'js'
                      ? 'bg-slate-900 text-cyan-400 border-cyan-500/40 font-semibold'
                      : 'text-gray-400 border-transparent hover:text-gray-200'
                  }`}
                >
                  stack.config.ts
                </button>
                <button
                  onClick={() => setActiveTab('sh')}
                  className={`px-3 py-1.5 rounded-t-lg border-t border-x transition-colors ${
                    activeTab === 'sh'
                      ? 'bg-slate-900 text-cyan-400 border-cyan-500/40 font-semibold'
                      : 'text-gray-400 border-transparent hover:text-gray-200'
                  }`}
                >
                  vibecode.sh
                </button>
              </div>

              <div className="p-5 font-mono text-xs leading-relaxed bg-slate-950/90 text-gray-300 min-h-[260px] max-h-[340px] overflow-y-auto">
                {activeTab === 'json' && (
                  <pre className="text-gray-300">
                    <code>
                      {`{\n`}
                      {`  `}
                      <span className="text-purple-400">"engineer"</span>: <span className="text-emerald-400">"Samar Anand"</span>,
                      {`\n  `}
                      <span className="text-purple-400">"degree"</span>: <span className="text-emerald-400">"B.Tech CS (AI & ML)"</span>,
                      {`\n  `}
                      <span className="text-purple-400">"institution"</span>: <span className="text-emerald-400">"VIT Bhopal University"</span>,
                      {`\n  `}
                      <span className="text-purple-400">"cgpa"</span>: <span className="text-amber-400">8.63</span>,
                      {`\n  `}
                      <span className="text-purple-400">"topProjects"</span>: [
                      {`\n    `}
                      <span className="text-cyan-300">"VibeCode (Browser AI Web IDE)"</span>,
                      {`\n    `}
                      <span className="text-cyan-300">"Nexus Cart (Voice E-commerce NLP)"</span>,
                      {`\n    `}
                      <span className="text-cyan-300">"Full Stack Remote Job Search Portal"</span>
                      {`\n  `],
                      {`\n  `}
                      <span className="text-purple-400">"hallOfFame"</span>: <span className="text-emerald-400">"AlgoUniversity (Top Mentee / 60k)"</span>
                      {`\n}`}
                    </code>
                  </pre>
                )}

                {activeTab === 'js' && (
                  <pre className="text-gray-300">
                    <code>
                      <span className="text-purple-400">export const</span> <span className="text-yellow-300">samarCapabilities</span> = {'{\n'}
                      {'  '}coreStack: [<span className="text-emerald-300">'Next.js 15'</span>, <span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'TypeScript'</span>, <span className="text-emerald-300">'FastAPI'</span>],\n
                      {'  '}aiModels: [<span className="text-emerald-300">'Google Gemini API'</span>, <span className="text-emerald-300">'Ollama'</span>, <span className="text-emerald-300">'Web Speech API'</span>],\n
                      {'  '}sandboxing: <span className="text-emerald-300">'WebContainers + xterm.js'</span>,\n
                      {'  '}databases: [<span className="text-emerald-300">'MongoDB Atlas'</span>, <span className="text-emerald-300">'Prisma ORM'</span>, <span className="text-emerald-300">'SQLite'</span>],\n
                      {'  '}compileLatency: <span className="text-amber-400">"&lt; 250ms"</span>\n
                      {'}'};
                    </code>
                  </pre>
                )}

                {activeTab === 'sh' && (
                  <pre className="text-cyan-400">
                    <code>
                      npx create-vibecode-app --template=next-express{'\n'}
                      [INFO] Connecting to Google Gemini API (gemini-2.5-flash)...{'\n'}
                      [SUCCESS] WebContainer runtime initialized with zero backend load.{'\n'}
                      [LIVE] Listening at http://localhost:3000
                    </code>
                  </pre>
                )}

                {terminalLogs.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-white/10 text-emerald-400 flex flex-col gap-1 font-mono text-[11px]">
                    {terminalLogs.map((log, idx) => (
                      <div key={idx}>{log}</div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-slate-900/80 px-4 py-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Status: Ready to Execute
                </span>
                <span>Node.js v22.16.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
