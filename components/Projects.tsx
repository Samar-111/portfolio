'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  X,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & WebContainers' | 'Voice & NLP' | 'Full Stack & Microservices';
  description: string;
  fullDetails: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
  featured: boolean;
  accent: string;
}

const projectsData: Project[] = [
  {
    id: 'vibecode',
    title: 'VibeCode',
    subtitle: 'AI-Powered Browser-Based Web IDE',
    category: 'AI & WebContainers',
    description:
      'Engineered a browser-based AI-integrated IDE using Next.js 15 and WebContainers, enabling sub-second sandbox code compilation & execution in the browser across 6+ frameworks (React, Next.js, Express, Hono, Vue, Angular).',
    fullDetails: [
      'Architected dual-mode AI engine integrating Google Gemini API (gemini-2.5-flash) with local Ollama fallback, reducing inline code completion latency by 45%.',
      'Configured Edge-compatible NextAuth v5 session controllers (Google & GitHub OAuth) and MongoDB + Prisma ORM data layer to persist playground workspaces.',
      'Unified an interactive xterm.js terminal with WebContainer system shells alongside a custom file explorer, allowing zero-setup workspace scaffolding and full file CRUD operations inside browser runtime sandbox.',
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
      { label: 'Latency Reduction', value: '45%' },
      { label: 'Supported Frameworks', value: '6+' },
      { label: 'Execution Mode', value: 'Sub-Second' },
    ],
    featured: true,
    accent: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
  },
  {
    id: 'nexus-cart',
    title: 'Nexus Cart',
    subtitle: 'Voice-Powered Shopping Assistant',
    category: 'Voice & NLP',
    description:
      'Pioneered a voice-driven E-commerce assistant using React, Node.js, and Web Speech API, achieving low-latency (<250ms) speech-to-text conversion and real-time state synchronization.',
    fullDetails: [
      'Leveraged Google Gemini API for Natural Language Processing (NLP) to parse complex commands, achieving 94% classification accuracy in item categorization, unit conversion, and localized price estimations.',
      'Streamlined database queries using high-performance MongoDB Atlas upsert logic with Mongoose, reducing database query overhead by 30%.',
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
      { label: 'Speech Latency', value: '< 250ms' },
      { label: 'NLP Accuracy', value: '94%' },
      { label: 'API Uptime', value: '99.9%' },
    ],
    featured: true,
    accent: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
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
      'Glassmorphic UI',
    ],
    githubUrl: 'https://github.com/Samar-111/job-portal',
    metrics: [
      { label: 'Jobs Indexed', value: '1,000+' },
      { label: 'Fetch Overhead Saved', value: '40%' },
      { label: 'Availability', value: '99.8%' },
    ],
    featured: true,
    accent: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
  },
  {
    id: 'hyperion-ai',
    title: 'Hyperion AI — DB Engine',
    subtitle: 'Natural Language to SQL Database Assistant',
    category: 'AI & WebContainers',
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
      { label: 'Query Generation', value: 'Instant' },
      { label: 'Supported DB', value: 'SQLite / SQL' },
      { label: 'UI Framework', value: 'React' },
    ],
    featured: false,
    accent: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
  },
];

const categories = ['All', 'AI & WebContainers', 'Voice & NLP', 'Full Stack & Microservices'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full glass-card border border-cyan-500/30 inline-block mb-3">
            Featured Engineering Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Highlighted Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            From browser-based AI WebContainers to Voice-Driven E-Commerce engines and Microservice Portals.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'glass-card text-gray-300 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl border border-white/10 p-6 glass-card-hover relative flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded border inline-block mb-2 ${project.accent}`}>
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-400">{project.subtitle}</p>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl glass-card border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                    title="View GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-xl bg-slate-950/60 border border-white/5 font-mono text-center">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <span className="text-[10px] text-gray-400 uppercase">{m.label}</span>
                      <span className="text-sm font-bold text-cyan-300">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  <span>Architecture & Details</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-gray-400 hover:text-white flex items-center gap-1"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card rounded-2xl border border-white/20 p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl glass-card text-gray-400 hover:text-white border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className={`text-xs font-mono px-3 py-1 rounded border inline-block mb-2 ${activeModalProject.accent}`}>
                  {activeModalProject.category}
                </span>
                <h3 className="text-3xl font-extrabold text-white">{activeModalProject.title}</h3>
                <p className="text-sm font-mono text-cyan-400 mt-1">{activeModalProject.subtitle}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Engineering Highlights & Architectural Accomplishments
                </h4>
                <ul className="space-y-3">
                  {activeModalProject.fullDetails.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-300 leading-relaxed flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                      <span className="text-cyan-400 font-mono text-xs mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-mono text-gray-400 hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
