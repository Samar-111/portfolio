'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle, Code2, Globe, Cloud } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    role: 'MERN Stack Intern',
    company: 'Ethnus',
    location: 'Remote',
    period: 'May 2025 – Jul 2025',
    highlights: [
      'Forged RESTful backend services for 3 major modules handling 50,000+ database records.',
      'Optimized MongoDB schemas and queries, improving data retrieval speed by 25%.',
      'Crafted responsive React interfaces for 12+ pages, reducing page load time by 20%.',
      'Executed authentication and role-based access control for 100+ users.',
    ],
  },
  {
    type: 'work',
    role: 'Virtual Internship Program',
    company: 'ServiceNow (AICTE & SmartBridge)',
    location: 'Remote',
    period: 'May 2026 – Jun 2026',
    highlights: [
      'Mastered ServiceNow administration concepts including user management, platform configuration, workflow automation, and reporting.',
      'Explored Agentic AI capabilities and automated workflows within the ServiceNow platform.',
      'Validated platform custom application logic using ServiceNow Automated Test Framework (ATF) configurations.',
    ],
  },
  {
    type: 'education',
    role: 'B.Tech in Computer Science (AI & ML)',
    company: 'VIT Bhopal University',
    location: 'Bhopal, Madhya Pradesh',
    period: 'Aug 2023 – Aug 2027',
    highlights: [
      'Cumulative Grade Point Average (CGPA): 8.63 / 10.00.',
      'Specialized coursework in Natural Language Processing, Machine Learning, Data Structures & Algorithms, DBMS, and Object-Oriented Programming.',
    ],
  },
];

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'C++', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: [
      { name: 'ReactJS', level: 94 },
      { name: 'Next.js 15', level: 90 },
      { name: 'Node.js & Express.js', level: 88 },
      { name: 'MongoDB & Mongoose', level: 86 },
      { name: 'FastAPI', level: 82 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    title: 'Tools, Cloud & AI',
    icon: Cloud,
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'WebContainers & xterm.js', level: 88 },
      { name: 'Google Gemini API', level: 92 },
      { name: 'Microsoft Azure', level: 80 },
      { name: 'Scikit-learn & NLP', level: 85 },
    ],
  },
];

export default function ResumeSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight article-title mb-8">
          Resume
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Experience</h3>
            </div>

            <div className="relative border-l-2 border-[#383838] ml-3 pl-6 space-y-8">
              {experiences.filter(e => e.type === 'work').map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full timeline-dot" />
                  <div className="vcard-item-bg rounded-2xl p-5">
                    <span className="text-xs font-mono font-semibold text-[#ffdb70]">
                      {item.period}
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">{item.role}</h4>
                    <p className="text-xs font-mono text-[#ffdb70] mb-3">{item.company}</p>
                    <ul className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-[#d6d6d6] flex items-start gap-2 leading-relaxed">
                          <span className="text-[#ffdb70] font-bold">•</span>
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

            <div className="relative border-l-2 border-[#383838] ml-3 pl-6 space-y-8">
              {experiences.filter(e => e.type === 'education').map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full timeline-dot" />
                  <div className="vcard-item-bg rounded-2xl p-5">
                    <span className="text-xs font-mono font-semibold text-[#ffdb70]">
                      {item.period}
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">{item.role}</h4>
                    <p className="text-xs font-mono text-[#ffdb70] mb-3">{item.company}</p>
                    <ul className="space-y-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-[#d6d6d6] flex items-start gap-2 leading-relaxed">
                          <span className="text-[#ffdb70] font-bold">•</span>
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
        <h3 className="text-xl font-bold text-white mb-6">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="vcard-item-bg rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#383838]">
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
                      <div className="w-full h-2 rounded-full bg-[#383838] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-full bg-gold-gradient rounded-full"
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
