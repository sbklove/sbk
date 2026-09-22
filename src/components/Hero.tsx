import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Sliders, 
  Activity, 
  Layers, 
  CheckCircle2, 
  FileText,
  Calculator,
  RefreshCw,
  Eye,
  Thermometer,
  Zap,
  TrendingUp,
  Flame
} from 'lucide-react';
import { COMPANY_STATS } from '../data/mockData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

type ScreenChannel = 'broadcast' | 'forex' | 'retail' | 'stadium';
type PixelPitchOption = 'P0.9' | 'P1.5' | 'P2.5' | 'P4.0';

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [channel, setChannel] = useState<ScreenChannel>('broadcast');
  const [pitch, setPitch] = useState<PixelPitchOption>('P0.9');
  const [brightness, setBrightness] = useState<number>(85); // percentage
  const [showDiodeGrid, setShowDiodeGrid] = useState<boolean>(true);
  const [showScanlines, setShowScanlines] = useState<boolean>(false);
  const [forexTick, setForexTick] = useState<number>(0);

  // Periodic simulated forex updates
  useEffect(() => {
    const interval = setInterval(() => {
      setForexTick((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const currencies = [
    { code: 'USD/EUR', buy: (0.9142 + Math.sin(forexTick * 0.4) * 0.0015).toFixed(4), sell: (0.9158 + Math.sin(forexTick * 0.4) * 0.0015).toFixed(4), change: '+0.12%' },
    { code: 'GBP/USD', buy: (1.3024 + Math.cos(forexTick * 0.3) * 0.002).toFixed(4), sell: (1.3040 + Math.cos(forexTick * 0.3) * 0.002).toFixed(4), change: '+0.28%' },
    { code: 'USD/JPY', buy: (152.45 + Math.sin(forexTick * 0.6) * 0.35).toFixed(2), sell: (152.62 + Math.sin(forexTick * 0.6) * 0.35).toFixed(2), change: '-0.08%' },
    { code: 'GOLD/OZ', buy: (2738.50 + Math.sin(forexTick * 0.2) * 4.2).toFixed(1), sell: (2741.00 + Math.sin(forexTick * 0.2) * 4.2).toFixed(1), change: '+0.64%' },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting and grid */}
      <div className="absolute inset-0 led-grid-lines opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#00FF88]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111827] border border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.15)] text-xs font-mono">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF88]"></span>
            </span>
            <span className="text-slate-300">2026 Commercial Architecture Series:</span>
            <span className="text-[#00E5FF] font-semibold">Common Cathode MicroLED Released</span>
          </div>
        </div>

        {/* Hero Headline & Subheadline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-['Rajdhani'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-white leading-none">
            Transforming Spaces with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-white to-[#00FF88] text-glow-blue">
              Next-Gen LED
            </span>{' '}
            Solutions
          </h1>
          
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Pioneering commercial LED video walls, weatherproof outdoor billboards, financial currency rate matrices, and interactive collaboration smart boards. Engineered with <span className="text-[#00FF88] font-medium">Common Cathode 45% energy-saving technology</span> and tool-free front magnetic maintenance.
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <a
              href="#products"
              id="hero-explore-products-btn"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#0B0F19] text-sm font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,229,255,0.5)] hover:shadow-[0_0_35px_rgba(0,229,255,0.8)] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              id="hero-request-consult-btn"
              onClick={onOpenQuoteModal}
              className="px-7 py-3.5 rounded-xl bg-[#111827] border border-[#00E5FF]/40 text-white text-sm font-bold uppercase tracking-wider hover:bg-[#1E293B] hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all flex items-center gap-2 active:scale-95"
            >
              <FileText className="w-4 h-4 text-[#00E5FF]" />
              Request Consultation
            </button>

            <a
              href="#screen-calculator"
              className="px-5 py-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 text-slate-300 text-xs font-mono tracking-wide hover:text-[#00FF88] hover:border-[#00FF88]/40 transition-colors flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#00FF88]" />
              LED Wall Calculator
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE FUTURISTIC LED DISPLAY SIMULATOR / BANNER */}
        {/* ========================================================================= */}
        <div className="mt-12 lg:mt-16 max-w-6xl mx-auto">
          <div className="relative rounded-2xl bg-[#111827] border border-[#1E293B] shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
            
            {/* Top Cabinet Bezel & Status Bar */}
            <div className="bg-[#0D1322] px-4 py-3 border-b border-[#1E293B] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00FF88] shadow-[0_0_8px_#00FF88]" />
                <span className="text-white font-bold tracking-wider">TL-DISPLAY SIMULATOR v4.8</span>
                <span className="hidden md:inline text-slate-500">|</span>
                <span className="hidden md:inline text-slate-400">STATUS: BROADCAST 4K HDR ACTIVE</span>
              </div>

              {/* Real-time Hardware Telemetry HUD */}
              <div className="flex items-center gap-4 text-[11px] text-slate-400">
                <div className="flex items-center gap-1">
                  <Thermometer className="w-3.5 h-3.5 text-[#00FF88]" />
                  <span>34.2°C <span className="text-[#00FF88] hidden sm:inline">(Cold Screen)</span></span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>135 W/m² <span className="text-[#00E5FF] hidden sm:inline">(-42% Draw)</span></span>
                </div>
                <div className="flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-[#00FF88]" />
                  <span>7,680 Hz</span>
                </div>
              </div>
            </div>

            {/* Interactive Mode Switches */}
            <div className="bg-[#0B0F19]/95 px-4 py-2.5 border-b border-[#1E293B] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono hidden sm:inline">Channel:</span>
                <button
                  onClick={() => setChannel('broadcast')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                    channel === 'broadcast'
                      ? 'bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/50 shadow-[0_0_10px_rgba(0,229,255,0.3)]'
                      : 'text-slate-400 hover:text-white bg-slate-800/40'
                  }`}
                >
                  8K HDR Broadcast
                </button>
                <button
                  onClick={() => setChannel('forex')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                    channel === 'forex'
                      ? 'bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/50 shadow-[0_0_10px_rgba(0,255,136,0.3)]'
                      : 'text-slate-400 hover:text-white bg-slate-800/40'
                  }`}
                >
                  Currency / Forex Matrix
                </button>
                <button
                  onClick={() => setChannel('retail')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                    channel === 'retail'
                      ? 'bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/50'
                      : 'text-slate-400 hover:text-white bg-slate-800/40'
                  }`}
                >
                  Commercial Retail
                </button>
                <button
                  onClick={() => setChannel('stadium')}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                    channel === 'stadium'
                      ? 'bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/50'
                      : 'text-slate-400 hover:text-white bg-slate-800/40'
                  }`}
                >
                  Stadium Outdoor
                </button>
              </div>

              {/* Pitch Switcher */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-400 text-[11px] hidden md:inline">Pixel Pitch:</span>
                {(['P0.9', 'P1.5', 'P2.5', 'P4.0'] as PixelPitchOption[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPitch(p)}
                    className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                      pitch === p
                        ? 'bg-white text-[#0B0F19] font-bold'
                        : 'text-slate-400 hover:text-white bg-slate-800/40'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* SCREEN CANVAS AREA */}
            <div 
              className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] bg-black overflow-hidden flex flex-col justify-between p-6 sm:p-10 select-none"
              style={{
                filter: `brightness(${0.7 + (brightness / 100) * 0.6})`,
              }}
            >
              {/* Dynamic Pixel Pitch Overlay Layer */}
              {showDiodeGrid && (
                <div 
                  className={`absolute inset-0 pointer-events-none z-20 ${
                    pitch === 'P0.9' ? 'led-dots-dense opacity-30' :
                    pitch === 'P1.5' ? 'led-dots opacity-45' :
                    pitch === 'P2.5' ? 'led-dots opacity-70' :
                    'led-dots opacity-90'
                  }`} 
                />
              )}

              {/* Scanline Animation Layer */}
              {showScanlines && (
                <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent animate-scanline" />
                </div>
              )}

              {/* Modular Cabinet Seam Lines (simulating 16:9 ultra precision bezels) */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 pointer-events-none z-10">
                <div className="border-r border-b border-white/[0.04]" />
                <div className="border-r border-b border-white/[0.04]" />
                <div className="border-b border-white/[0.04]" />
                <div className="border-r border-white/[0.04]" />
                <div className="border-r border-white/[0.04]" />
                <div />
              </div>

              {/* CHANNEL 1: 8K BROADCAST STUDIO */}
              {channel === 'broadcast' && (
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-[#00E5FF]/20 border border-[#00E5FF]/60 text-[#00E5FF] text-[11px] font-mono tracking-widest uppercase">
                        LIVE STUDIO FEED
                      </span>
                      <span className="text-white/60 text-xs font-mono">REC 2160p 120FPS</span>
                    </div>
                    <div className="text-right text-xs font-mono text-slate-400">
                      <span>DCI-P3 99.8% COLOR GAMUT</span>
                    </div>
                  </div>

                  {/* Main Broadcast Visual Graphic */}
                  <div className="my-auto py-8 text-center sm:text-left grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900/80 border border-slate-700 text-xs font-mono text-[#00FF88]">
                        <Activity className="w-3.5 h-3.5" />
                        <span>MICRO-PITCH SYNCHRONIZED MATRIX</span>
                      </div>
                      <h2 className="font-['Rajdhani'] text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-none">
                        ZERO SEAM <span className="text-[#00E5FF]">COB MICROLED</span> ARCHITECTURE
                      </h2>
                      <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl">
                        Deepest black optical matrix with 10,000:1 contrast ratio. Designed for zero glare under harsh broadcast lighting and continuous 24/7 mission-critical operations.
                      </p>
                    </div>

                    <div className="lg:col-span-5 bg-[#111827]/80 backdrop-blur-md rounded-xl p-5 border border-[#00E5FF]/30 shadow-2xl">
                      <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
                        <span>LIVE CALIBRATION CURVE</span>
                        <span className="text-[#00FF88]">HDR10+ AUTO</span>
                      </div>
                      <div className="h-28 flex items-end gap-1.5 pt-4">
                        {[45, 62, 85, 74, 95, 68, 88, 92, 78, 100, 94, 82, 90, 75, 89].map((val, idx) => (
                          <div 
                            key={idx} 
                            className="flex-1 bg-gradient-to-t from-[#00E5FF]/30 to-[#00E5FF] rounded-t transition-all duration-500"
                            style={{ height: `${val}%` }}
                          />
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400">Peak Luminance:</span>
                        <span className="text-[#00E5FF] font-bold">1,200 Nits Calibrated</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-4 border-t border-white/10">
                    <span className="text-[#00FF88]">SYNC LOCKED: GENLOCK OK</span>
                    <span>16-BIT ULTRA GRAYSCALE ENGINE</span>
                  </div>
                </div>
              )}

              {/* CHANNEL 2: CURRENCY / FOREX MATRIX */}
              {channel === 'forex' && (
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-[#00FF88]/30 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#00FF88] animate-pulse" />
                      <span className="font-['Rajdhani'] text-lg sm:text-2xl font-bold uppercase tracking-wider text-white">
                        GLOBAL FINANCIAL & CURRENCY LED BOARD
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#00FF88] bg-[#00FF88]/10 px-2.5 py-1 rounded border border-[#00FF88]/30">
                      SUB-SECOND API SYNC
                    </span>
                  </div>

                  {/* Financial Ticker Table */}
                  <div className="my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currencies.map((curr) => (
                      <div key={curr.code} className="bg-[#0B0F19]/90 border border-slate-800 rounded-lg p-4 font-mono">
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                          <span className="font-bold text-white text-sm">{curr.code}</span>
                          <span className="text-[#00FF88] flex items-center gap-0.5">
                            <TrendingUp className="w-3 h-3" />
                            {curr.change}
                          </span>
                        </div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span className="text-slate-500">BUY:</span>
                            <span className="text-[#00E5FF] font-bold text-base">{curr.buy}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">SELL:</span>
                            <span className="text-white font-bold text-base">{curr.sell}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Scrolling LED Ticker Ribbon */}
                  <div className="bg-[#111827] border border-[#1E293B] rounded p-2.5 font-mono text-xs overflow-hidden flex items-center gap-4">
                    <span className="bg-[#00FF88] text-[#0B0F19] px-2 py-0.5 rounded font-bold uppercase text-[10px]">
                      LIVE TICKER
                    </span>
                    <div className="whitespace-nowrap flex items-center gap-6 text-slate-300">
                      <span>NASDAQ: 18,518.61 <span className="text-[#00FF88]">+0.84%</span></span>
                      <span>DOW JONES: 42,924.88 <span className="text-[#00FF88]">+0.42%</span></span>
                      <span>BRENT CRUDE: $74.29 <span className="text-rose-400">-0.35%</span></span>
                      <span>GOLD 24K: $2,741.00 <span className="text-[#00FF88]">+0.64%</span></span>
                    </div>
                  </div>
                </div>
              )}

              {/* CHANNEL 3: COMMERCIAL RETAIL */}
              {channel === 'retail' && (
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-[#00E5FF]/20 text-[#00E5FF] text-xs font-mono uppercase">
                      FLAGSHIP STOREFRONT ATRIUM
                    </span>
                    <span className="text-xs font-mono text-slate-400">P1.86 ARCHITECTURAL COLUMN</span>
                  </div>

                  <div className="my-auto text-center max-w-2xl mx-auto space-y-4">
                    <div className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase">
                      AURORA LUXURY JEWELRY & WATCHES
                    </div>
                    <h3 className="font-['Rajdhani'] text-3xl sm:text-5xl font-black uppercase text-white tracking-wider">
                      TIMELESS HOROLOGY IN 4K HIGH DYNAMIC RANGE
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base font-light">
                      Curved and transparent LED displays drive up to +40% retail footfall with vibrant high-noon sunlight readability and architectural minimalism.
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-4 border-t border-white/10">
                    <span>SEAMLESS 360° CURVATURE RADIUS</span>
                    <span className="text-[#00E5FF]">6,500 NITS DAYLIGHT PUNCH</span>
                  </div>
                </div>
              )}

              {/* CHANNEL 4: STADIUM OUTDOOR */}
              {channel === 'stadium' && (
                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-[#00FF88]/20 text-[#00FF88] text-xs font-mono uppercase">
                      OLYMPIC ARENA PERIMETER & SCOREBOARD
                    </span>
                    <span className="text-xs font-mono text-slate-400">IP66 WEATHERPROOF CABINET</span>
                  </div>

                  <div className="my-auto text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 text-xs font-mono">
                      <Flame className="w-3.5 h-3.5" />
                      EXTREME SUNLIGHT DIRECT INCIDENCE
                    </div>
                    <h3 className="font-['Rajdhani'] text-3xl sm:text-5xl font-extrabold uppercase text-white">
                      10,000 NITS ULTRA-HIGH LUMINANCE
                    </h3>
                    <p className="text-slate-300 text-sm max-w-lg mx-auto">
                      Operates continuously from -40°C blizzard frost to +65°C desert sun with hurricane-grade structural anchoring.
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-4 border-t border-white/10">
                    <span className="text-[#00FF88]">DIE-CAST MAGNESIUM ALLOY</span>
                    <span>WIND-LOAD TESTED 150 KM/H</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Interactive Controls Panel */}
            <div className="bg-[#0D1322] px-4 py-3.5 border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              {/* Brightness Control */}
              <div className="flex items-center gap-3">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#00E5FF]" />
                  Luminance:
                </span>
                <input 
                  type="range"
                  min="20"
                  max="100"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-24 sm:w-32 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#00E5FF]"
                />
                <span className="text-[#00E5FF] font-bold w-12">{brightness * 100} nits</span>
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setShowDiodeGrid(!showDiodeGrid)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
                    showDiodeGrid ? 'bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40' : 'text-slate-400 hover:text-white bg-slate-800/60'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Diode Grid: {showDiodeGrid ? 'ON' : 'OFF'}</span>
                </button>

                <button
                  onClick={() => setShowScanlines(!showScanlines)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
                    showScanlines ? 'bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/40' : 'text-slate-400 hover:text-white bg-slate-800/60'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Scanline Sync: {showScanlines ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Enterprise Stats Strip */}
        <div className="mt-14 pt-10 border-t border-[#1E293B] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COMPANY_STATS.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left group">
              <div className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white group-hover:text-[#00E5FF] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
