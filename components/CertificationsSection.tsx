'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users, Sparkles, CheckCircle2 } from 'lucide-react';

const achievements = [
  {
    title: 'AlgoUniversity Programming Camp',
    issuer: 'AlgoUniversity',
    detail: 'Selected as a mentee from 60,000+ applicants; featured in the Mentee Hall of Fame.',
    badge: 'Hall of Fame',
    type: 'honors',
  },
  {
    title: 'GirlScript Summer of Code (GSSoC)',
    issuer: 'GirlScript Foundation',
    detail: 'Selected as Open Source Contributor & appointed as Campus Ambassador for GSSoC and Internshala student program.',
    badge: 'Open Source Leader',
    type: 'leadership',
  },
  {
    title: 'Microsoft Azure Fundamentals DP-900',
    issuer: 'Microsoft',
    detail: 'Cloud architecture, security postures, Azure governance, and scalable workload deployment.',
    badge: 'Cloud Certified',
    type: 'cert',
  },
  {
    title: 'MERN Full Stack Development',
    issuer: 'Ethnus',
    detail: 'Comprehensive React, Node.js, Express, MongoDB, and RESTful service engineering.',
    badge: 'Full Stack',
    type: 'cert',
  },
  {
    title: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan',
    detail: 'Supervised & unsupervised learning models, Scikit-learn pipelines, and evaluation metrics.',
    badge: 'ML Certified',
    type: 'cert',
  },
  {
    title: 'Generative AI & Artificial Intelligence',
    issuer: 'Infosys Springboard',
    detail: 'Core LLM concepts, Prompt Engineering, foundational AI algorithms, and intelligent systems design.',
    badge: 'GenAI & AI',
    type: 'cert',
  },
];

export default function CertificationsSection() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight article-title">
            Certifications & Leadership
          </h2>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
            <span className="w-1 h-1 rounded-full bg-emerald-400/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="vcard-item-bg rounded-2xl p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#222226] border border-[#2e2e32] text-[#ffdb70] font-semibold">
                    {c.badge}
                  </span>
                  {c.type === 'leadership' ? (
                    <Users className="w-4 h-4 text-[#ffdb70] group-hover:scale-110 transition-transform" />
                  ) : (
                    <Award className="w-4 h-4 text-[#ffdb70] group-hover:scale-110 transition-transform" />
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#ffdb70] transition-colors">{c.title}</h3>
                <p className="text-xs font-mono text-[#ffdb70] mb-2">{c.issuer}</p>

                <p className="text-xs text-[#d6d6d6] leading-relaxed">{c.detail}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#2e2e32] flex items-center justify-between text-[10px] font-mono text-[#9f9f9f]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Credential
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
