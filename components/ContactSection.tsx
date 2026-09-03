'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';

export default function ContactSection() {
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

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight article-title mb-6">
          Contact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Direct Contact</h3>

            <div className="vcard-item-bg p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#9f9f9f] uppercase">EMAIL</p>
                  <p className="text-xs font-bold text-white font-mono">samaranand9798@gmail.com</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy('email')}
                className="p-1.5 text-[#9f9f9f] hover:text-[#ffdb70]"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="vcard-item-bg p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#9f9f9f] uppercase">PHONE</p>
                  <p className="text-xs font-bold text-white font-mono">+91-9798169650</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy('phone')}
                className="p-1.5 text-[#9f9f9f] hover:text-[#ffdb70]"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="vcard-item-bg p-4 rounded-2xl flex items-center gap-3">
              <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#9f9f9f] uppercase">LOCATION</p>
                <p className="text-xs font-bold text-white">VIT Bhopal University, India</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="vcard-item-bg rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Contact Form</h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Ready</h4>
                  <p className="text-xs text-[#d6d6d6]">
                    Opening your mail client to send the email directly to <strong className="text-white">samaranand9798@gmail.com</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-2xl bg-[#2b2b2c] border border-[#383838] text-white focus:outline-none focus:border-[#ffdb70] transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-2xl bg-[#2b2b2c] border border-[#383838] text-white focus:outline-none focus:border-[#ffdb70] transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your Message..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#2b2b2c] border border-[#383838] text-white focus:outline-none focus:border-[#ffdb70] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-6 rounded-2xl font-bold text-xs text-[#121212] bg-[#ffdb70] hover:bg-[#ffc93e] transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
