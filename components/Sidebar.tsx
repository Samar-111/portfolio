'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Download,
  Github,
  Linkedin,
  Code2,
  Trophy,
  ChevronDown,
  ChevronUp,
  Check,
  Copy,
} from 'lucide-react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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
    <aside className="vcard-card p-6 sm:p-8 relative shadow-2xl transition-all duration-300">
      <div className="flex flex-row lg:flex-col items-center lg:items-center gap-5 text-left lg:text-center">
        <div className="relative shrink-0 group">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-[#2b2b2c] border border-[#383838] p-2 flex items-center justify-center shadow-lg overflow-hidden">
            <img
              src="/avatar.jpg"
              alt="Samar Anand"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="flex-1 lg:w-full">
          <h1 className="text-2xl font-extrabold text-white tracking-tight mb-2">
            Samar Anand
          </h1>

          <div className="inline-block px-3.5 py-1.5 rounded-xl bg-[#2b2b2c] border border-[#383838] text-[#ffdb70] text-xs font-medium mb-3">
            AI & Full Stack Engineer
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden mt-2 px-3 py-1.5 rounded-xl bg-[#2b2b2c] border border-[#383838] text-xs text-[#ffdb70] flex items-center gap-1.5"
          >
            <span>{isExpanded ? 'Hide Contacts' : 'Show Contacts'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      <div className={`space-y-5 pt-6 mt-6 border-t border-[#383838] ${isExpanded ? 'block' : 'hidden lg:block'}`}>
        <div className="space-y-4 text-xs font-sans">
          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[10px] text-[#9f9f9f] uppercase tracking-wider font-semibold">EMAIL</p>
                <p className="text-white font-medium truncate">samaranand9798@gmail.com</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy('email')}
              className="p-1.5 text-[#9f9f9f] hover:text-[#ffdb70] shrink-0"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="flex items-center justify-between group">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[10px] text-[#9f9f9f] uppercase tracking-wider font-semibold">PHONE</p>
                <p className="text-white font-medium truncate">+91-9798169650</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy('phone')}
              className="p-1.5 text-[#9f9f9f] hover:text-[#ffdb70] shrink-0"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70] shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="truncate">
              <p className="text-[10px] text-[#9f9f9f] uppercase tracking-wider font-semibold">EDUCATION</p>
              <p className="text-white font-medium truncate">VIT Bhopal University (8.63)</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="vcard-icon-box p-2.5 rounded-xl text-[#ffdb70] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="truncate">
              <p className="text-[10px] text-[#9f9f9f] uppercase tracking-wider font-semibold">LOCATION</p>
              <p className="text-white font-medium truncate">Madhya Pradesh, India</p>
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-[#383838]">
          <p className="text-[10px] text-[#9f9f9f] uppercase tracking-widest mb-3 text-center font-semibold">
            Social Profiles
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://github.com/Samar-111"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#2b2b2c] border border-[#383838] text-[#d6d6d6] hover:text-[#ffdb70] transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/samar-anand-a87642287/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#2b2b2c] border border-[#383838] text-[#d6d6d6] hover:text-[#ffdb70] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/Sam9798/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#2b2b2c] border border-[#383838] text-[#d6d6d6] hover:text-[#ffdb70] transition-colors"
              title="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href="https://codeforces.com/profile/Samar__009"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#2b2b2c] border border-[#383838] text-[#d6d6d6] hover:text-[#ffdb70] transition-colors"
              title="Codeforces"
            >
              <Trophy className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-3">
          <a
            href="/resume.pdf"
            download="Samar_Anand_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-2xl font-bold text-xs text-[#121212] bg-[#ffdb70] hover:bg-[#ffc93e] transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
