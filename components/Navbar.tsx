'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Terminal, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#hero' },
  { name: 'Stats', href: '#stats' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    setDownloading(true);
    setTimeout(() => {
      window.open('mailto:samaranand9798@gmail.com?subject=Requesting%20Samar%20Anand%20Resume%20PDF', '_blank');
      setDownloading(false);
    }, 800);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300">
            <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold font-mono tracking-tight text-white flex items-center gap-1">
              Samar<span className="text-cyan-400">.anand()</span>
            </span>
            <span className="text-[10px] text-gray-400 tracking-wider uppercase font-mono">
              AI & Full Stack Engineer
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleDownloadResume}
            disabled={downloading}
            className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2"
          >
            <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : 'group-hover:translate-y-0.5'} transition-transform`} />
            <span>{downloading ? 'Downloading...' : 'Resume PDF'}</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg glass-card border border-white/10 text-gray-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-b border-white/10 px-6 py-6 mt-2 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleDownloadResume();
                  }}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume PDF</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
