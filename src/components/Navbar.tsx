import React, { useState, useEffect } from 'react';
import { 
  Tv, 
  Menu, 
  X, 
  PhoneCall, 
  FileText, 
  ChevronRight,
  ShieldCheck,
  Cpu,
  Code2,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (productModel?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'products', 'sectors', 'tech-features', 'screen-calculator', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Sectors', href: '#sectors', id: 'sectors' },
    { name: 'Tech Features', href: '#tech-features', id: 'tech-features' },
    { name: 'Screen Calculator', href: '#screen-calculator', id: 'screen-calculator' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-[#1E293B] shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            id="brand-logo"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-lg bg-[#111827] border border-[#00E5FF]/40 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(0,229,255,0.25)] group-hover:border-[#00E5FF] transition-colors">
              {/* Animated LED Diode matrix inside logo */}
              <div className="absolute inset-0 led-dots opacity-40 group-hover:opacity-70 transition-opacity" />
              <Tv className="w-5 h-5 text-[#00E5FF] relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#00FF88] rounded-full animate-ping opacity-75" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-['Rajdhani'] text-2xl font-bold tracking-wider text-white uppercase group-hover:text-[#00E5FF] transition-colors">
                  Technolite
                </span>
                <span className="font-['Rajdhani'] text-2xl font-bold tracking-wider text-[#00E5FF]">
                  Display
                </span>
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400 font-mono -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                Next-Gen LED Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111827]/80 px-3 py-1.5 rounded-full border border-[#1E293B]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/40 shadow-[0_0_10px_rgba(0,229,255,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="/technolite-display.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827] border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] hover:bg-[#00E5FF]/10 transition-colors"
              title="Open pure standalone HTML/CSS/JS version in new tab"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Standalone HTML</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a 
              href="tel:+18005333477" 
              className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-[#00FF88] transition-colors px-2 py-1"
              title="Sales Hotline: +1 (800) 533-3477"
            >
              <div className="w-6 h-6 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/30 flex items-center justify-center text-[#00FF88]">
                <PhoneCall className="w-3 h-3" />
              </div>
              <span className="hidden xl:inline">+1 (800) LED-DISP</span>
            </a>

            <button
              id="nav-quote-cta"
              onClick={() => onOpenQuoteModal()}
              className="relative group px-5 py-2 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#0B0F19] text-xs font-bold uppercase tracking-wider overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.7)] transition-all duration-200 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                Get a Quote
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden px-3 py-1.5 rounded bg-[#00E5FF] text-[#0B0F19] text-xs font-bold uppercase tracking-wider"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#111827] border border-[#1E293B] text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0B0F19] border-b border-[#1E293B] px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1E293B] flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
              <span className="flex items-center gap-1.5 text-[#00FF88]">
                <ShieldCheck className="w-4 h-4" /> ISO9001 & IP66 Certified
              </span>
              <span className="flex items-center gap-1.5 text-[#00E5FF]">
                <Cpu className="w-4 h-4" /> Common Cathode Tech
              </span>
            </div>

            <a
              href="/technolite-display.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-[#111827] border border-[#00E5FF]/40 text-[#00E5FF] text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Code2 className="w-4 h-4" />
              <span>Open Pure HTML/CSS/JS Version</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#0B0F19] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            >
              <FileText className="w-4 h-4" />
              Get a Fast Project Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
