import React, { useState } from 'react';
import { 
  Tv, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send, 
  Check, 
  ArrowUp,
  Cpu
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: (productModel?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#080B12] border-t border-[#1E293B] text-slate-400 font-mono text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#111827] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
                <Tv className="w-5 h-5" />
              </div>
              <div className="font-['Rajdhani'] text-2xl font-bold uppercase tracking-wider text-white">
                Technolite <span className="text-[#00E5FF]">Display</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Global manufacturer of commercial-grade LED video walls, daylight-readable outdoor billboards, financial currency rate boards, and interactive smart displays.
            </p>

            {/* Certifications row */}
            <div className="pt-2 flex flex-wrap gap-2 text-[10px] text-slate-300">
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">ISO 9001:2015</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">IP66 Waterproof</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">CE / FCC / RoHS</span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">ETL Listed</span>
            </div>

            {/* Newsletter form */}
            <div className="pt-3">
              <span className="text-white text-xs font-bold block mb-1 font-['Rajdhani'] uppercase">
                Technical Whitepapers & Firmware Updates
              </span>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    placeholder="architect@company.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg bg-[#111827] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] text-xs"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg bg-[#00E5FF] text-[#0B0F19] font-bold text-xs uppercase"
                  >
                    Join
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-1.5 text-[#00FF88] text-xs">
                  <Check className="w-4 h-4" />
                  <span>Subscribed to LED engineering bulletins!</span>
                </div>
              )}
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-3">
            <h4 className="text-white font-['Rajdhani'] text-sm font-bold uppercase tracking-wider">
              LED Display Catalog
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-[#00E5FF] transition-colors">Fine-Pitch MicroLED (P0.9 - P1.2)</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#00E5FF] transition-colors">AegisShield Outdoor IP66 Billboards</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#00E5FF] transition-colors">OmniTouch 4K Smart Boards</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#00E5FF] transition-colors">FxMatrix Financial Currency Boards</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#00E5FF] transition-colors">Chronos Patient & Token Queues</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#00E5FF] transition-colors">CrystalClear Transparent Glass LED</a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#00E5FF] transition-colors">FlexForm 360° Cylinder Panels</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Sectors & Tools */}
          <div className="space-y-3">
            <h4 className="text-white font-['Rajdhani'] text-sm font-bold uppercase tracking-wider">
              Sectors & Utilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sectors" className="hover:text-[#00FF88] transition-colors">Healthcare & Surgical Rooms</a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-[#00FF88] transition-colors">Banking & Trading Floors</a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-[#00FF88] transition-colors">Retail & Flagship Showrooms</a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-[#00FF88] transition-colors">Airports & Public Transit FIDS</a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-[#00FF88] transition-colors">Touring Concert Stages</a>
              </li>
              <li>
                <a href="#screen-calculator" className="text-[#00E5FF] font-bold hover:underline">Screen Size & Power Estimator</a>
              </li>
              <li>
                <a href="/technolite-display.html" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] hover:underline flex items-center gap-1">
                  <span>Standalone HTML/CSS/JS Page</span> &rarr;
                </a>
              </li>
              <li>
                <button onClick={() => onOpenQuoteModal()} className="text-[#00FF88] font-bold hover:underline text-left">
                  Request Fast Quotation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hotline */}
          <div className="space-y-3">
            <h4 className="text-white font-['Rajdhani'] text-sm font-bold uppercase tracking-wider">
              Global Support
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#00FF88]" />
                <a href="tel:+18005333477" className="hover:text-[#00FF88]">+1 (800) 533-3477</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00E5FF]" />
                <a href="mailto:sales@technolitedisplay.com" className="hover:text-[#00E5FF]">sales@technolitedisplay.com</a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>Silicon Horizon Blvd, CA 94025, USA</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full py-2 rounded bg-slate-900 border border-[#00E5FF]/40 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black font-bold uppercase text-[11px] transition-colors"
                >
                  Schedule Consultation
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Technolite Display Inc. All rights reserved. Ultra LED Commercial Display Systems.
          </div>

          {/* Social Icons / Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#00E5FF] transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#00E5FF] transition-colors">
              YouTube Demo
            </a>
            <span>•</span>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#00E5FF] transition-colors">
              X / Twitter
            </a>
            <span>•</span>
            <button 
              onClick={scrollToTop} 
              className="flex items-center gap-1 text-slate-300 hover:text-[#00FF88] transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
