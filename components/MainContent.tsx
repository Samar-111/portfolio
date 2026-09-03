'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
import PortfolioSection from './PortfolioSection';
import CertificationsSection from './CertificationsSection';
import ContactSection from './ContactSection';

type Tab = 'about' | 'resume' | 'portfolio' | 'certifications' | 'contact';

const tabs: { id: Tab; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function MainContent() {
  const [activeTab, setActiveTab] = useState<Tab>('about');

  return (
    <article className="vcard-card p-6 sm:p-10 relative shadow-2xl overflow-hidden min-h-[640px]">
      <div className="flex items-center justify-end mb-8 overflow-x-auto pb-2 scrollbar-none">
        <nav className="inline-flex items-center gap-2 p-2 rounded-2xl bg-[#2b2b2c] border border-[#383838] font-sans text-xs sm:text-sm font-semibold shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 relative ${
                activeTab === tab.id
                  ? 'text-[#ffdb70] font-bold'
                  : 'text-[#d6d6d6] hover:text-white'
              }`}
            >
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeVcardTab"
                  className="absolute inset-0 rounded-xl bg-[#202021] border border-[#383838] -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
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
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'about' && <AboutSection />}
          {activeTab === 'resume' && <ResumeSection />}
          {activeTab === 'portfolio' && <PortfolioSection />}
          {activeTab === 'certifications' && <CertificationsSection />}
          {activeTab === 'contact' && <ContactSection />}
        </motion.div>
      </AnimatePresence>
    </article>
  );
}
