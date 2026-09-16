'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles, Radio } from 'lucide-react';

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
      window.location.href = `mailto:samaranand9798@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
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
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight article-title">
            Contact
          </h2>
          <span className="text-[10px] font-mono text-[#ffdb70] hud-pill px-3 py-1 rounded-full flex items-center gap-1.5">
            <Radio className="w-3 h-3 text-[#ffdb70] animate-pulse" />
            DIRECT SECURE CHANNELS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white mb-4">Direct Communication</h3>

            <div className="vcard-item-bg p-4 rounded-2xl flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70] group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#9f9f9f] uppercase tracking-wider font-semibold">EMAIL</p>
                  <p className="text-xs font-bold text-white font-mono">samaranand9798@gmail.com</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy('email')}
                className="p-1.5 text-[#9f9f9f] hover:text-[#ffdb70] transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="vcard-item-bg p-4 rounded-2xl flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70] group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#9f9f9f] uppercase tracking-wider font-semibold">PHONE</p>
                  <p className="text-xs font-bold text-white font-mono">+91-9798169650</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy('phone')}
                className="p-1.5 text-[#9f9f9f] hover:text-[#ffdb70] transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="vcard-item-bg p-4 rounded-2xl flex items-center gap-3 group">
              <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70] group-hover:scale-110 transition-transform">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#9f9f9f] uppercase tracking-wider font-semibold">LOCATION</p>
                <p className="text-xs font-bold text-white">VIT Bhopal University, India</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="vcard-item-bg rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>Send a Message</span>
                <Sparkles className="w-4 h-4 text-[#ffdb70]" />
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Ready</h4>
                  <p className="text-xs text-[#d6d6d6]">
                    Opening default mail client to dispatch your transmission directly to <strong className="text-white">samaranand9798@gmail.com</strong>.
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
                      className="w-full px-4 py-3 rounded-2xl bg-[#101114] border border-[#2e2e32] text-white focus:outline-none focus:border-[#ffdb70] transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-2xl bg-[#101114] border border-[#2e2e32] text-white focus:outline-none focus:border-[#ffdb70] transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, role, or collaboration..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#101114] border border-[#2e2e32] text-white focus:outline-none focus:border-[#ffdb70] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="futuristic-btn w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message Transmission</span>
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
