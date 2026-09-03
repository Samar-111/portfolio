'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Github,
  Linkedin,
  Code2,
  Trophy,
  Sparkles,
  ArrowUp,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:samaranand9798@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    }, 1000);
  };

  const handleCopy = (type: 'email' | 'phone') => {
    if (type === 'email') {
      navigator.clipboard.writeText('samaranand9798@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      navigator.clipboard.writeText('+919798169650');
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full glass-card border border-cyan-500/30 inline-block mb-3">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Have a project, internship opportunity, or technical inquiry? Send a message or connect directly across platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>

              <div className="space-y-4 mb-8">
                <div className="glass-card p-4 rounded-xl border border-white/10 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-gray-400 uppercase">Email Address</p>
                      <p className="text-sm font-bold text-white font-mono">samaranand9798@gmail.com</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy('email')}
                    className="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="glass-card p-4 rounded-xl border border-white/10 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-gray-400 uppercase">Phone Number</p>
                      <p className="text-sm font-bold text-white font-mono">+91-9798169650</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy('phone')}
                    className="p-2 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-white/5 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="glass-card p-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-gray-400 uppercase">Location</p>
                    <p className="text-sm font-bold text-white">VIT Bhopal University, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-gray-400 uppercase mb-3">All Platform Profiles</p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/Samar-111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card border border-white/10 text-xs font-mono text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/samar-anand-a87642287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card border border-white/10 text-xs font-mono text-gray-300 hover:text-blue-400 hover:border-blue-400/40 flex items-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/u/Sam9798/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card border border-white/10 text-xs font-mono text-gray-300 hover:text-amber-400 hover:border-amber-400/40 flex items-center gap-2 transition-all"
                >
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>LeetCode</span>
                </a>
                <a
                  href="https://codeforces.com/profile/Samar__009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card border border-white/10 text-xs font-mono text-gray-300 hover:text-red-400 hover:border-red-400/40 flex items-center gap-2 transition-all"
                >
                  <Trophy className="w-4 h-4 text-red-400" />
                  <span>Codeforces</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl border border-white/10 p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Send a Message</span>
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </h3>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <Check className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Message Prepared!</h4>
                  <p className="text-sm text-gray-300">
                    Opening your mail client to send the email directly to <strong className="text-white">samaranand9798@gmail.com</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss a project, role, or technical collaboration..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <p>© {new Date().getFullYear()} Samar Anand. Built with Next.js 15, Tailwind & Framer Motion.</p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl glass-card border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-all flex items-center gap-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
