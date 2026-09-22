import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Tv, 
  MessageSquare,
  Globe
} from 'lucide-react';

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('Commercial Video Wall Consultation');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#0B0F19] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <Mail className="w-3.5 h-3.5" />
            DIRECT ENGINEERING CONSULTATION
          </div>
          <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight">
            Connect with our <span className="text-[#00E5FF]">Display Specialists</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Visit our 10,000 sq.ft. Experience Center, request onsite architectural surveying, or speak directly with our systems engineering team.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Locations */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Cards */}
            <div className="bg-[#111827] p-6 rounded-2xl border border-[#1E293B] space-y-4 font-mono text-xs">
              <div className="text-white font-['Rajdhani'] text-lg font-bold uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
                <Tv className="w-4 h-4 text-[#00E5FF]" />
                Technolite Display Headquarters
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold">Global Engineering & Showroom</div>
                  <div>4800 Silicon Horizon Boulevard, Suite 500</div>
                  <div>Tech Park District, CA 94025, United States</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <PhoneCall className="w-4 h-4 text-[#00FF88] shrink-0" />
                <div>
                  <div className="text-slate-400">Direct Sales & Project Inquiries:</div>
                  <a href="tel:+18005333477" className="text-white font-bold hover:text-[#00E5FF] transition-colors">
                    +1 (800) 533-3477 / +1 (415) 890-5330
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <div>
                  <div className="text-slate-400">Engineering Proposals (RFQ):</div>
                  <a href="mailto:solutions@technolitedisplay.com" className="text-white font-bold hover:text-[#00E5FF] transition-colors">
                    solutions@technolitedisplay.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-[#00FF88] shrink-0" />
                <div>
                  <div className="text-slate-400">Hours of Operation:</div>
                  <div className="text-white">Mon – Fri: 08:00 – 19:00 PST (24/7 SLA Support)</div>
                </div>
              </div>
            </div>

            {/* Experience Center Demo Invitation */}
            <div className="bg-[#111827] p-6 rounded-2xl border border-[#1E293B] font-mono text-xs">
              <div className="text-white font-['Rajdhani'] text-base font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#00FF88]" />
                Interactive Experience Centers
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Experience our P0.9 MicroLED, transparent retail glass, and currency exchange display walls in person at our regional demonstration labs in Los Angeles, New York, London, and Singapore.
              </p>
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono font-bold transition-colors"
              >
                Schedule Private Showroom Tour
              </button>
            </div>

          </div>

          {/* Right: Quick Direct Contact Form */}
          <div className="lg:col-span-7 bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-8 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-xs font-mono text-[#00E5FF] block mb-1 uppercase">QUICK MESSAGE DISPATCH</span>
                  <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-white">
                    Send Direct Project Inquiry
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-300 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="m.vance@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-300 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 012-3456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 block mb-1">Inquiry Subject</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white focus:outline-none focus:border-[#00E5FF]"
                    >
                      <option value="Commercial Video Wall Consultation">Commercial Video Wall Consultation</option>
                      <option value="Outdoor Billboard & High Nits IP66">Outdoor Billboard & High Nits IP66</option>
                      <option value="Currency & Token LED Matrix Boards">Currency & Token LED Matrix Boards</option>
                      <option value="Transparent Storefront Glass Display">Transparent Storefront Glass Display</option>
                      <option value="Architectural Custom Curved Video Wall">Architectural Custom Curved Video Wall</option>
                      <option value="Distributor / Reseller Partnership">Distributor / Reseller Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 block mb-1">Project Requirements / Site Notes</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the installation environment (Indoor/Outdoor), approximate dimensions or venue type, and your target completion timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#00FF88]" />
                    Guaranteed response within 4 hours
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] hover:from-[#00E5FF] hover:to-[#0096C7] text-[#0B0F19] font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Dispatch Message
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4 font-mono">
                <div className="w-14 h-14 rounded-full bg-[#00FF88]/20 border-2 border-[#00FF88] text-[#00FF88] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase text-white">
                  Message Dispatched to Systems Team
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, <span className="text-white font-bold">{name}</span>. We will review your inquiry regarding <span className="text-[#00E5FF]">{subject}</span> and reply to <span className="text-[#00FF88]">{email}</span> promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
