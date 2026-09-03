'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

const certs = [
  {
    title: 'AlgoUniversity Programming Camp',
    issuer: 'AlgoUniversity',
    detail: 'Selected as a mentee from 60,000+ applicants; featured in the Hall of Fame.',
    badge: 'Hall of Fame',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-400',
  },
  {
    title: 'Generative AI for All',
    issuer: 'Infosys Springboard',
    detail: 'Core concepts of LLMs, Prompt Engineering, and Generative Model Architectures.',
    badge: 'GenAI Certified',
    color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-400',
  },
  {
    title: 'Artificial Intelligence for All',
    issuer: 'Infosys Springboard',
    detail: 'Foundational AI algorithms, neural network basics, and intelligent systems design.',
    badge: 'AI Certified',
    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-400',
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    detail: 'Cloud concepts, Azure security, architecture, and cloud deployment principles.',
    badge: 'Cloud Certified',
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/40 text-blue-400',
  },
  {
    title: 'MERN Full Stack Development',
    issuer: 'Ethnus',
    detail: 'Comprehensive React, Node.js, Express, MongoDB, and RESTful service engineering.',
    badge: 'Full Stack',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400',
  },
  {
    title: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan',
    detail: 'Supervised & unsupervised learning models, Scikit-learn Pipelines, and model evaluations.',
    badge: 'ML Certified',
    color: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/40 text-yellow-400',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full glass-card border border-cyan-500/30 inline-block mb-3">
            Honors & Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications & Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl border p-6 bg-gradient-to-br ${c.color} glass-card-hover relative flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-900/80 border border-white/10 text-white font-semibold">
                    {c.badge}
                  </span>
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{c.title}</h3>
                <p className="text-xs font-mono text-cyan-300 mb-3">{c.issuer}</p>

                <p className="text-xs text-gray-300 leading-relaxed">{c.detail}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Credential
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
