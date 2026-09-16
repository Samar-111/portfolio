'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
import PortfolioSection from './PortfolioSection';
import CertificationsSection from './CertificationsSection';
import ContactSection from './ContactSection';

type Tab = 'about' | 'resume' | 'projects' | 'certifications' | 'contact';

const tabs: { id: Tab; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function MainContent() {
  const [activeTab, setActiveTab] = useState<Tab>('about');

  return (
    <article className="vcard-card p-6 sm:p-10 relative shadow-2xl overflow-hidden min-h-[640px]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-4 border-b border-[#2e2e32]">
        <div className="flex items-center gap-2 text-xs font-mono text-[#9f9f9f]">
          <span className="w-2 h-2 rounded-full bg-[#ffdb70] animate-pulse" />
          <span className="uppercase tracking-widest text-[#ffdb70]">SYS_CORE // 2026.v2</span>
        </div>

        <nav className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#222226] border border-[#2e2e32] font-sans text-xs sm:text-sm font-semibold shadow-lg overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl transition-all duration-300 relative font-mono text-xs ${
                activeTab === tab.id
                  ? 'text-[#ffdb70] font-bold'
                  : 'text-[#d6d6d6] hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeVcardTab"
                  className="absolute inset-0 rounded-xl bg-[#1c1c20] border border-[#ffdb70]/40 -z-10 shadow-[0_0_15px_rgba(255,219,112,0.15)]"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
        >
          {activeTab === 'about' && <AboutSection />}
          {activeTab === 'resume' && <ResumeSection />}
          {activeTab === 'projects' && <PortfolioSection />}
          {activeTab === 'certifications' && <CertificationsSection />}
          {activeTab === 'contact' && <ContactSection />}
        </motion.div>
      </AnimatePresence>
    </article>
  );
}
