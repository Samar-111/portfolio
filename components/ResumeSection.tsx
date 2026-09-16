'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Globe, Cloud, Brain, Database, Cpu } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    role: 'MERN Stack Intern',
    company: 'Ethnus',
    location: 'Remote',
    period: 'May 2025 – Jul 2025',
    highlights: [
      'Developed RESTful backend services for core platform modules.',
      'Optimized MongoDB schemas and queries, improving data retrieval speed and database efficiency.',
      'Developed responsive React interfaces across key application pages, enhancing user experience and rendering performance.',
      'Implemented authentication and role-based access control (RBAC) to secure application endpoints and user roles.',
    ],
  },
  {
    type: 'work',
    role: 'Virtual Internship Program',
    company: 'ServiceNow (ServiceNow University, AICTE & SmartBridge)',
    location: 'Remote',
    period: 'May 2026 – Jun 2026',
    highlights: [
      'Worked with ServiceNow administration concepts including user management, platform configuration, workflow automation, reporting, and dashboard creation.',
      'Explored Agentic AI capabilities and automated workflow development within the ServiceNow platform.',
      'Tested custom application logic using ServiceNow Automated Test Framework (ATF) configurations.',
    ],
  },
  {
    type: 'education',
    role: 'B.Tech in Computer Science (Artificial Intelligence & Machine Learning)',
    company: 'VIT Bhopal University',
    location: 'Bhopal, Madhya Pradesh',
    period: 'Aug 2023 – Aug 2027',
    highlights: [
      'Cumulative Grade Point Average (CGPA): 8.63 / 10.00.',
      'Advanced specialized focus in Natural Language Processing, Deep Learning, Distributed Systems, Data Structures & Algorithms, and DBMS.',
    ],
  },
];

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'C++', level: 92 },
      { name: 'TypeScript / JavaScript', level: 94 },
      { name: 'Python', level: 88 },
      { name: 'Java', level: 82 },
      { name: 'SQL', level: 86 },
    ],
  },
  {
    title: 'Web & Real-Time Technologies',
    icon: Globe,
    skills: [
      { name: 'ReactJS & Next.js 15', level: 95 },
      { name: 'Node.js & Express.js', level: 90 },
      { name: 'Socket.io & WebSockets', level: 88 },
      { name: 'FastAPI & REST APIs', level: 85 },
      { name: 'Tailwind CSS & Material UI', level: 94 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      { name: 'Google Gemini API & LLMs', level: 94 },
      { name: 'RAG, LangChain & LangGraph', level: 86 },
      { name: 'NLP & TF-IDF', level: 88 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Hugging Face Ecosystem', level: 82 },
    ],
  },
  {
    title: 'Databases & Cloud DevOps',
    icon: Cloud,
    skills: [
      { name: 'MongoDB & PostgreSQL', level: 90 },
      { name: 'MySQL & Prisma ORM', level: 88 },
      { name: 'Docker & Microservices', level: 82 },
      { name: 'Microsoft Azure DP-900', level: 85 },
      { name: 'Git, GitHub, Vercel & Render', level: 95 },
    ],
  },
];

export default function ResumeSection() {
  return (
    <div className="space-y-12">
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight article-title">
            Resume
          </h2>
          <span className="text-[10px] font-mono text-[#ffdb70] hud-pill px-3 py-1 rounded-full flex items-center gap-1.5">
            <Cpu className="w-3 h-3 text-[#ffdb70]" />
            EXPERIENCE & CORE ARCHITECTURE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Experience</h3>
            </div>

            <div className="relative border-l-2 border-[#2e2e32] ml-3 pl-6 space-y-8">
              {experiences.filter(e => e.type === 'work').map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full timeline-dot" />
                  <div className="vcard-item-bg rounded-2xl p-5 group">
                    <span className="text-xs font-mono font-semibold text-[#ffdb70]">
                      {item.period}
                    </span>
                    <h4 className="text-base font-bold text-white mt-1 group-hover:text-[#ffdb70] transition-colors">{item.role}</h4>
                    <p className="text-xs font-mono text-[#ffdb70] mb-3">{item.company}</p>
                    <ul className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-[#d6d6d6] flex items-start gap-2 leading-relaxed">
                          <span className="text-[#ffdb70] font-bold mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <div className="relative border-l-2 border-[#2e2e32] ml-3 pl-6 space-y-8">
              {experiences.filter(e => e.type === 'education').map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full timeline-dot" />
                  <div className="vcard-item-bg rounded-2xl p-5 group">
                    <span className="text-xs font-mono font-semibold text-[#ffdb70]">
                      {item.period}
                    </span>
                    <h4 className="text-base font-bold text-white mt-1 group-hover:text-[#ffdb70] transition-colors">{item.role}</h4>
                    <p className="text-xs font-mono text-[#ffdb70] mb-3">{item.company}</p>
                    <ul className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-[#d6d6d6] flex items-start gap-2 leading-relaxed">
                          <span className="text-[#ffdb70] font-bold mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Technical Proficiency Matrix</h3>
          <span className="text-[10px] font-mono text-[#9f9f9f] hud-pill px-2.5 py-0.5 rounded-full">
            REAL-TIME & AGENTIC AI
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="vcard-item-bg rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#2e2e32]">
                  <Icon className="w-4 h-4 text-[#ffdb70]" />
                  <h4 className="text-sm font-bold text-white">{cat.title}</h4>
                </div>
                <div className="space-y-3.5">
                  {cat.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-xs font-mono text-[#d6d6d6] mb-1.5">
                        <span>{s.name}</span>
                        <span className="text-[#ffdb70] font-bold">{s.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#222226] border border-[#2e2e32] overflow-hidden p-[1px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                          className="h-full bg-gold-gradient rounded-full shadow-[0_0_10px_rgba(255,219,112,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
