'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Eye, X, CheckCircle2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & WebContainers' | 'Voice & NLP' | 'Full Stack & Microservices';
  description: string;
  fullDetails: string[];
  tech: string[];
  githubUrl: string;
  metrics: { label: string; value: string }[];
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
      { label: 'Frameworks', value: '6+' },
      { label: 'Execution', value: 'Sub-Second' },
    ],
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
      { label: 'Fetch Saved', value: '40%' },
      { label: 'Availability', value: '99.8%' },
    ],
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
      { label: 'Query Gen', value: 'Instant' },
      { label: 'Database', value: 'SQLite' },
      { label: 'UI Stack', value: 'React' },
    ],
  },
];

const categories = ['All', 'AI & WebContainers', 'Voice & NLP', 'Full Stack & Microservices'];

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
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight article-title mb-6">
          Portfolio
        </h2>

        <div className="flex flex-wrap items-center gap-4 mb-8 font-sans text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`transition-colors font-medium ${
                selectedCategory === cat
                  ? 'text-[#ffdb70] font-bold'
                  : 'text-[#d6d6d6] hover:text-white'
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
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="vcard-item-bg rounded-2xl p-5 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="relative rounded-xl bg-[#2b2b2c] border border-[#383838] p-4 mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#ffdb70] uppercase tracking-wider block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#ffdb70] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70] hover:scale-105 transition-transform"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vcard-icon-box p-2.5 rounded-xl text-white hover:text-[#ffdb70] transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-[#d6d6d6] text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-4 p-2.5 rounded-xl bg-[#2b2b2c] border border-[#383838] font-mono text-center">
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
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#2b2b2c] border border-[#383838] text-[#d6d6d6]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#383838] flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono text-[#ffdb70] hover:underline font-semibold"
                >
                  Architecture & Details ↗
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="vcard-card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-[#2b2b2c] text-white border border-[#383838]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-xs font-mono text-[#ffdb70] uppercase">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">{activeModalProject.title}</h3>
                <p className="text-xs font-mono text-[#ffdb70]">{activeModalProject.subtitle}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-[#9f9f9f] mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ffdb70]" />
                  Engineering Highlights
                </h4>
                <ul className="space-y-2.5">
                  {activeModalProject.fullDetails.map((detail, i) => (
                    <li key={i} className="text-xs text-[#d6d6d6] leading-relaxed flex items-start gap-2 bg-[#202021] p-3 rounded-xl border border-[#383838]">
                      <span className="text-[#ffdb70] font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-[#9f9f9f] mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded text-xs font-mono bg-[#2b2b2c] border border-[#383838] text-[#ffdb70]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#383838] flex items-center justify-between">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl font-bold text-xs text-[#121212] bg-[#ffdb70] hover:bg-[#ffc93e] flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl text-xs text-[#9f9f9f] hover:text-white"
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
