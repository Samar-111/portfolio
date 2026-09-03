'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

const certs = [
  {
    title: 'AlgoUniversity Programming Camp',
    issuer: 'AlgoUniversity',
    detail: 'Selected as a mentee from 60,000+ applicants; featured in the Hall of Fame.',
    badge: 'Hall of Fame',
  },
  {
    title: 'Generative AI for All',
    issuer: 'Infosys Springboard',
    detail: 'Core concepts of LLMs, Prompt Engineering, and Generative Model Architectures.',
    badge: 'GenAI Certified',
  },
  {
    title: 'Artificial Intelligence for All',
    issuer: 'Infosys Springboard',
    detail: 'Foundational AI algorithms, neural network basics, and intelligent systems design.',
    badge: 'AI Certified',
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    detail: 'Cloud concepts, Azure security, architecture, and cloud deployment principles.',
    badge: 'Cloud Certified',
  },
  {
    title: 'MERN Full Stack Development',
    issuer: 'Ethnus',
    detail: 'Comprehensive React, Node.js, Express, MongoDB, and RESTful service engineering.',
    badge: 'Full Stack',
  },
  {
    title: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan',
    detail: 'Supervised & unsupervised learning models, Scikit-learn Pipelines, and model evaluations.',
    badge: 'ML Certified',
  },
];

export default function CertificationsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight article-title mb-6">
          Certifications & Honors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="vcard-item-bg rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2b2b2c] border border-[#383838] text-[#ffdb70] font-semibold">
                    {c.badge}
                  </span>
                  <Award className="w-4 h-4 text-[#ffdb70]" />
                </div>

                <h3 className="text-base font-bold text-white mb-1">{c.title}</h3>
                <p className="text-xs font-mono text-[#ffdb70] mb-2">{c.issuer}</p>

                <p className="text-xs text-[#d6d6d6] leading-relaxed">{c.detail}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#383838] flex items-center justify-between text-[10px] font-mono text-[#9f9f9f]">
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
