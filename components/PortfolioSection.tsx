'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Eye, X, CheckCircle2, Activity, Zap } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & WebContainers' | 'Real-Time & Clinical AI' | 'Voice & NLP' | 'Full Stack & Microservices';
  description: string;
  fullDetails: string[];
  tech: string[];
  githubUrl: string;
  metrics: { label: string; value: string }[];
}

const projectsData: Project[] = [
  {
    id: 'medqueue-ai',
    title: 'MedQueue AI',
    subtitle: 'Real-Time Clinical Triage & Priority Queue Platform',
    category: 'Real-Time & Clinical AI',
    description:
      'Architected a real-time clinical intake platform using React 18, Node.js, Express, Socket.io, and MongoDB to automate patient intake and triage queueing with emergency ESI classification.',
    fullDetails: [
      'Integrated Google Gemini API (gemini-2.5-flash) with Zod structured output parsing and a zero-downtime local rule fallback engine to classify Emergency Severity Index (ESI 1–5) tiers and detect life-threatening red flags.',
      'Engineered an Atomic Queue Re-Ordering engine with ACID transaction locks, allowing high-risk ESI 1–2 emergency patients to automatically jump queue ranks in real time.',
      'Streamed live bi-directional WebSockets via Socket.io across concurrent dashboards (Nurse Station, Doctor Workbench, ER Lobby Board), deploying frontend on Vercel and backend on Render.',
    ],
    tech: [
      'React 18',
      'Node.js',
      'Express.js',
      'Socket.io',
      'Gemini API',
      'Zod',
      'MongoDB',
      'ACID Locks',
      'WebSockets',
    ],
    githubUrl: 'https://github.com/Samar-111/MedQueue-AI',
    metrics: [
      { label: 'Triage Tiers', value: 'ESI 1-5' },
      { label: 'Concurrency', value: 'Real-Time WS' },
      { label: 'Safety Engine', value: 'ACID Locks' },
    ],
  },
  {
    id: 'vibecode',
    title: 'VibeCode',
    subtitle: 'AI-Powered Browser-Based Web IDE Sandbox',
    category: 'AI & WebContainers',
    description:
      'Engineered a browser-based AI-integrated IDE using Next.js 15 and WebContainers, enabling sub-second sandbox code compilation & execution in the browser across 6+ frameworks (React, Next.js, Express, Hono, Vue, Angular).',
    fullDetails: [
      'Architected dual-mode AI engine integrating Google Gemini API (gemini-2.5-flash) with local Ollama fallback, reducing inline code completion latency by 45%.',
      'Configured Edge-compatible NextAuth v5 authentication with Google and GitHub OAuth, along with Prisma and MongoDB for persistent workspace and project data.',
      'Unified an interactive xterm.js terminal with WebContainer system shells alongside a custom file explorer, enabling zero-setup workspace scaffolding and full file CRUD operations inside browser runtime sandbox.',
    ],
    tech: [
      'Next.js 15',
      'TypeScript',
      'WebContainers',
      'Monaco Editor',
      'Gemini API',
      'Ollama',
      'Prisma',
      'MongoDB',
      'xterm.js',
    ],
    githubUrl: 'https://github.com/Samar-111/VibeCode',
    metrics: [
      { label: 'Latency Cut', value: '45%' },
      { label: 'Frameworks', value: '6+' },
      { label: 'Compilation', value: 'Sub-Second' },
    ],
  },
  {
    id: 'nexus-cart',
    title: 'Nexus Cart',
    subtitle: 'Voice-Powered Shopping Assistant & NLP Engine',
    category: 'Voice & NLP',
    description:
      'Pioneered a voice-driven E-commerce assistant using React, Node.js, and Web Speech API, achieving low-latency (<250ms) speech-to-text conversion and real-time state synchronization.',
    fullDetails: [
      'Leveraged Google Gemini API for Natural Language Processing (NLP) to parse complex commands, achieving high classification accuracy across item categorization, unit conversion, and localized price estimations.',
      'Optimized MongoDB Atlas data operations using Mongoose upsert logic, improving database query efficiency while preventing duplicate shopping records.',
      'Orchestrated an automated inventory restock scheduling engine covering 35+ products, deploying exponential backoff handlers for 99.9% API integration uptime.',
    ],
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Gemini API',
      'Web Speech API',
      'NLP',
      'Mongoose',
    ],
    githubUrl: 'https://github.com/Samar-111/voice-shopping-assistant',
    metrics: [
      { label: 'Voice Latency', value: '< 250ms' },
      { label: 'NLP Precision', value: '94%' },
      { label: 'API Uptime', value: '99.9%' },
    ],
  },
  {
    id: 'job-portal',
    title: 'Full Stack Job Portal',
    subtitle: 'Remote Job Aggregator & Microservices Search',
    category: 'Full Stack & Microservices',
    description:
      'Established a full-stack job search portal integrating the Remotive API to dynamically ingest and index 1,000+ live remote job listings alongside user-submitted entries.',
    fullDetails: [
      'Programmed secure JWT authentication, password hashing (bcrypt), and schema-level validation protecting user data and profile records.',
      'Conceptualized a responsive glassmorphism client dashboard with debounced search input, reducing API fetch calls by 40% and boosting rendering performance.',
      'Decoupled and deployed microservice components, hosting the React client on Vercel and the Express API server on Render with 99.8% availability.',
    ],
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Remotive API',
      'JWT',
      'bcrypt',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/Samar-111/job-portal',
    metrics: [
      { label: 'Jobs Indexed', value: '1,000+' },
      { label: 'Fetch Saved', value: '40%' },
      { label: 'Availability', value: '99.8%' },
    ],
  },
  {
    id: 'hyperion-ai',
    title: 'Hyperion AI — DB Engine',
    subtitle: 'Natural Language to SQL Database Assistant',
    category: 'Real-Time & Clinical AI',
    description:
      'Intelligent application allowing users to converse with SQL databases using natural language prompts, instantly generating and executing optimized SQL queries.',
    fullDetails: [
      'Built with FastAPI backend and React frontend, automatically detecting database schemas and converting plain text queries to standard SQL.',
      'Supports complex joins, group aggregations, and subqueries with automated schema validation and execution safety guards.',
      'Renders instant interactive data tables and query performance insights.',
    ],
    tech: ['React', 'Python', 'FastAPI', 'SQLite', 'OpenAI API', 'LLM', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Samar-111/AI-database-assistant',
    metrics: [
      { label: 'Query Gen', value: 'Instant' },
      { label: 'Database', value: 'SQLite' },
      { label: 'UI Stack', value: 'React' },
    ],
  },
];

const categories = [
  'All',
  'Real-Time & Clinical AI',
  'AI & WebContainers',
  'Voice & NLP',
  'Full Stack & Microservices',
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight article-title">
            Projects
          </h2>
          <span className="text-[11px] font-mono text-[#9f9f9f] hud-pill px-3 py-1 rounded-full w-fit flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-[#ffdb70]" />
            5 PRODUCTION SYSTEMS DEPLOYED
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 mb-8 font-sans text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#ffdb70] text-[#0c0d10] font-bold shadow-[0_0_15px_rgba(255,219,112,0.4)]'
                  : 'futuristic-outline-btn hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="vcard-item-bg rounded-2xl p-5 flex flex-col justify-between group overflow-hidden relative"
            >
              <div>
                <div className="relative rounded-xl bg-[#222226] border border-[#2e2e32] p-4 mb-4 flex items-center justify-between group-hover:border-[#ffdb70]/40 transition-colors">
                  <div>
                    <span className="text-[10px] font-mono text-[#ffdb70] uppercase tracking-wider block mb-1 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-[#ffdb70]" />
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#ffdb70] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70] hover:scale-110 hover:border-[#ffdb70]/50 transition-all shadow-sm"
                      title="View Architecture Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vcard-icon-box p-2.5 rounded-xl text-white hover:text-[#ffdb70] hover:scale-110 transition-all shadow-sm"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-[#d6d6d6] text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-4 p-2.5 rounded-xl bg-[#222226] border border-[#2e2e32] font-mono text-center">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <span className="text-[9px] text-[#9f9f9f] uppercase">{m.label}</span>
                      <span className="text-xs font-bold text-[#ffdb70]">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#222226] border border-[#2e2e32] text-[#d6d6d6] group-hover:border-[#ffdb70]/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#2e2e32] flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono text-[#ffdb70] hover:underline font-semibold flex items-center gap-1 group/btn"
                >
                  <span>Architecture & Details</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">↗</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#9f9f9f] hover:text-white flex items-center gap-1"
                >
                  <span>Source Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              className="vcard-card p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_20px_70px_rgba(0,0,0,0.8)] border border-[#ffdb70]/30"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-[#222226] text-[#d6d6d6] hover:text-white border border-[#2e2e32] hover:border-[#ffdb70]/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-xs font-mono text-[#ffdb70] uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">{activeModalProject.title}</h3>
                <p className="text-xs font-mono text-[#ffdb70] mt-0.5">{activeModalProject.subtitle}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-[#9f9f9f] mb-3 flex items-center gap-1.5 font-semibold tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#ffdb70]" />
                  System Architecture & Production Highlights
                </h4>
                <ul className="space-y-2.5">
                  {activeModalProject.fullDetails.map((detail, i) => (
                    <li key={i} className="text-xs text-[#d6d6d6] leading-relaxed flex items-start gap-2 bg-[#1c1c20] p-3.5 rounded-xl border border-[#2e2e32]">
                      <span className="text-[#ffdb70] font-bold mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-[#9f9f9f] mb-2 font-semibold tracking-wider">Tech Stack Implemented</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded text-xs font-mono bg-[#222226] border border-[#2e2e32] text-[#ffdb70]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#2e2e32] flex items-center justify-between">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="futuristic-btn px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-mono text-[#9f9f9f] hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
