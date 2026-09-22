import React, { useState } from 'react';
import { 
  Sparkles, 
  Zap, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ThermometerSnowflake, 
  Activity, 
  Maximize2,
  Lock,
  ArrowRight
} from 'lucide-react';
import { CORE_FEATURES } from '../data/mockData';

interface CoreFeaturesProps {
  onOpenQuoteModal: () => void;
}

export const CoreFeatures: React.FC<CoreFeaturesProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<string>('common-cathode');

  return (
    <section id="tech-features" className="py-20 lg:py-28 relative bg-[#0B0F19]">
      <div className="absolute inset-0 led-dots opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            ENGINEERED FOR ENTERPRISE DEPLOYMENT
          </div>
          <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight">
            Proprietary <span className="text-[#00E5FF]">LED Engineering</span> Architecture
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Every Technolite display is engineered from the silicon substrate up to deliver peak luminance, cold-screen energy conservation, and effortless front-maintenance servicing.
          </p>
        </div>

        {/* 4 Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORE_FEATURES.map((feat) => {
            const isSelected = activeTab === feat.id;
            return (
              <div
                key={feat.id}
                onClick={() => setActiveTab(feat.id)}
                className={`relative rounded-xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-[#111827] border-2 border-[#00E5FF] shadow-[0_0_30px_rgba(0,229,255,0.2)] -translate-y-1' 
                    : 'bg-[#111827]/70 border border-[#1E293B] hover:border-slate-700 hover:bg-[#111827]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isSelected 
                        ? 'bg-[#00E5FF] text-[#0B0F19]' 
                        : 'bg-slate-800/80 text-[#00E5FF] border border-slate-700'
                    }`}>
                      {feat.id === 'pixel-pitch' && <Sparkles className="w-6 h-6" />}
                      {feat.id === 'common-cathode' && <Zap className="w-6 h-6" />}
                      {feat.id === 'front-maintenance' && <Wrench className="w-6 h-6" />}
                      {feat.id === 'weatherproof-durability' && <ShieldCheck className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-[#00FF88] border border-slate-700">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-['Rajdhani'] text-xl font-bold uppercase text-white leading-snug mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 mb-4">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Benchmark:</span>
                    <span className="text-[#00E5FF] font-bold">{feat.stats}</span>
                  </div>
                  <div className="mt-2 text-[11px] text-[#00FF88] flex items-center gap-1 font-mono">
                    <span>Inspect Technology</span>
                    <ArrowRight className={`w-3 h-3 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Interactive Tech Deep-Dive Container */}
        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />

          {/* TAB 1: FINE PIXEL PITCH */}
          {activeTab === 'pixel-pitch' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF]">
                  <Sparkles className="w-3.5 h-3.5" />
                  MICRO-PITCH OPTICAL FIDELITY
                </div>
                <h3 className="font-['Rajdhani'] text-2xl sm:text-4xl font-bold uppercase text-white">
                  Ultra HD MicroLED & Chip-On-Board (COB)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Technolite fine-pitch video walls utilize next-generation Chip-on-Board (COB) packaging. The microscopic LED chips are directly mounted onto the PCB substrate and encapsulated with optical epoxy resin, creating an ultra-flat, non-reflective black surface with 10× higher physical impact resistance than legacy SMD lamps.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#0B0F19] p-3.5 rounded-lg border border-slate-800">
                    <div className="text-xs font-mono text-slate-400">Refresh Frequency</div>
                    <div className="text-xl font-bold font-['Rajdhani'] text-[#00E5FF]">7,680 Hz Cinema-Rate</div>
                    <div className="text-[11px] text-slate-400 mt-1">Zero scanlines on broadcast 4K high-speed cameras</div>
                  </div>
                  <div className="bg-[#0B0F19] p-3.5 rounded-lg border border-slate-800">
                    <div className="text-xs font-mono text-slate-400">Contrast Ratio</div>
                    <div className="text-xl font-bold font-['Rajdhani'] text-[#00FF88]">10,000:1 Deep Black</div>
                    <div className="text-[11px] text-slate-400 mt-1">Ultra-black light absorbing nano-coating mask</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                    Full 16:9 native aspect ratio cabinet sizing for perfect 2K/4K/8K pixel mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                    Anti-collision, waterproof face coating wipes clean with standard microfiber
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-5 bg-[#0B0F19] p-6 rounded-xl border border-slate-800 text-center font-mono">
                <div className="text-xs text-slate-400 mb-4 uppercase tracking-wider">COB vs Conventional SMD Diode Matrix</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-700">
                    <div className="text-[11px] text-slate-400 mb-2">Old SMD Diodes</div>
                    <div className="w-full h-24 bg-slate-950 rounded flex items-center justify-center p-2">
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-4 h-4 rounded-sm bg-slate-700 border border-slate-600" />
                        ))}
                      </div>
                    </div>
                    <div className="text-[10px] text-rose-400 mt-2">Fragile lamps, light leaks</div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/40">
                    <div className="text-[11px] text-[#00E5FF] font-bold mb-2">Technolite COB</div>
                    <div className="w-full h-24 bg-black rounded flex items-center justify-center p-2 relative overflow-hidden">
                      <div className="absolute inset-0 led-dots-dense opacity-80" />
                      <span className="relative z-10 text-[10px] text-[#00FF88] font-bold bg-black/80 px-2 py-0.5 rounded border border-[#00FF88]/40">
                        SOLID RESIN SEAL
                      </span>
                    </div>
                    <div className="text-[10px] text-[#00FF88] mt-2">Zero gaps, 10,000:1 black</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COMMON CATHODE TECH */}
          {activeTab === 'common-cathode' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/30 text-xs font-mono text-[#00FF88]">
                  <Zap className="w-3.5 h-3.5" />
                  THERMAL EFFICIENCY BENCHMARK
                </div>
                <h3 className="font-['Rajdhani'] text-2xl sm:text-4xl font-bold uppercase text-white">
                  Energy-Saving Common Cathode Technology
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Traditional LED displays use a Common Anode design that feeds an identical 5.0V to Red, Green, and Blue chips—even though the Red diode only requires 2.8V. The excess voltage is converted into heat, raising cabinet temperatures and degrading diode life. Technolite's Common Cathode system supplies separated independent voltages: 2.8V to Red, 3.8V to Green and Blue.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#0B0F19] p-3.5 rounded-lg border border-slate-800">
                    <div className="text-xs font-mono text-slate-400">Operational Temperature</div>
                    <div className="text-xl font-bold font-['Rajdhani'] text-[#00FF88]">&lt; 38°C Cold Screen</div>
                    <div className="text-[11px] text-slate-400 mt-1">20°C to 25°C cooler than conventional screens</div>
                  </div>
                  <div className="bg-[#0B0F19] p-3.5 rounded-lg border border-slate-800">
                    <div className="text-xs font-mono text-slate-400">Annual Energy Savings</div>
                    <div className="text-xl font-bold font-['Rajdhani'] text-[#00E5FF]">Up to 45% Reduction</div>
                    <div className="text-[11px] text-slate-400 mt-1">Saves thousands in commercial electricity per billboard</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                    Eliminates the requirement for noisy cabinet rear air-conditioners
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                    Drastically reduces diode color-decay rate, ensuring 100,000+ hour lifespan
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-5 bg-[#0B0F19] p-6 rounded-xl border border-slate-800 text-center font-mono">
                <div className="text-xs text-slate-400 mb-4 uppercase tracking-wider">Thermal Heatmap Comparison</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-700">
                    <div className="text-[11px] text-rose-400 mb-2">Common Anode (Old)</div>
                    <div className="h-28 rounded bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 flex items-center justify-center text-black font-bold text-lg">
                      62.4°C
                    </div>
                    <div className="text-[10px] text-slate-400 mt-2">Wasted heat & fan noise</div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/40">
                    <div className="text-[11px] text-[#00FF88] font-bold mb-2">Technolite Cathode</div>
                    <div className="h-28 rounded bg-gradient-to-t from-emerald-950 via-[#00FF88]/40 to-[#00E5FF] flex items-center justify-center text-[#0B0F19] font-bold text-lg">
                      34.8°C
                    </div>
                    <div className="text-[10px] text-[#00FF88] mt-2">Cold touch & zero fans</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FRONT MAINTENANCE */}
          {activeTab === 'front-maintenance' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF]">
                  <Wrench className="w-3.5 h-3.5" />
                  RAPID SERVICE ENGINEERING
                </div>
                <h3 className="font-['Rajdhani'] text-2xl sm:text-4xl font-bold uppercase text-white">
                  Front Maintenance & Modular Magnetic Design
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Forget about leaving costly 80cm service corridors behind your video wall. Technolite displays feature specialized vacuum tool front extraction. A single technician can attach the electric vacuum tool to any module face, release the magnetic lock, and swap a module in under 3 seconds.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#0B0F19] p-3.5 rounded-lg border border-slate-800">
                    <div className="text-xs font-mono text-slate-400">Extraction Speed</div>
                    <div className="text-xl font-bold font-['Rajdhani'] text-[#00E5FF]">&lt; 3 Seconds / Module</div>
                    <div className="text-[11px] text-slate-400 mt-1">Zero tools or screwdrivers needed on panel face</div>
                  </div>
                  <div className="bg-[#0B0F19] p-3.5 rounded-lg border border-slate-800">
                    <div className="text-xs font-mono text-slate-400">Service Access Required</div>
                    <div className="text-xl font-bold font-['Rajdhani'] text-[#00FF88]">0 mm Rear Clearance</div>
                    <div className="text-[11px] text-slate-400 mt-1">Mount completely flush against architectural walls</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                    Receiving cards, power supplies, and hub boards all serviceable from the front
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                    Hot-swappable: replace a module without turning off the rest of the display
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-5 bg-[#0B0F19] p-6 rounded-xl border border-slate-800 font-mono text-center">
                <div className="text-xs text-slate-400 mb-3 uppercase">Modular Vacuum Extraction Sequence</div>
                <div className="space-y-3">
                  <div className="p-3 rounded bg-slate-900 border border-slate-800 flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <div className="text-xs text-white font-bold">Attach Vacuum Head</div>
                      <div className="text-[10px] text-slate-400">Pneumatic suction seals to module face</div>
                    </div>
                  </div>

                  <div className="p-3 rounded bg-slate-900 border border-slate-800 flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-full bg-[#00FF88]/20 text-[#00FF88] flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <div className="text-xs text-white font-bold">Press Release Trigger</div>
                      <div className="text-[10px] text-slate-400">Neodymium magnetic hold disengages smoothly</div>
                    </div>
                  </div>

                  <div className="p-3 rounded bg-[#00E5FF]/15 border border-[#00E5FF]/40 flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-full bg-[#00E5FF] text-[#0B0F19] flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <div className="text-xs text-[#00E5FF] font-bold">Slide In Replacement</div>
                      <div className="text-[10px] text-slate-300">Self-aligning pin connectors auto-calibrate instantly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: WEATHERPROOF & DURABILITY */}
          {activeTab === 'weatherproof-durability' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/30 text-xs font-mono text-[#00FF88]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  INGRESS PROTECTION IP66
                </div>
                <h3 className="font-['Rajdhani'] text-2xl sm:text-4xl font-bold uppercase text-white">
                  Weatherproof & High-Durability Magnesium Cabinets
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Engineered to endure severe atmospheric conditions. Tested against heavy torrential monsoon downpours, coastal saline sea breezes, sandstorms, and extreme thermal cycling. CNC die-cast magnesium alloy enclosures provide rigid structural integrity at less than half the weight of traditional iron cabinets.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#0B0F19] p-3.5 rounded-lg border border-slate-800">
                    <div className="text-xs font-mono text-slate-400">Operating Temperature</div>
                    <div className="text-xl font-bold font-['Rajdhani'] text-[#00FF88]">-40°C to +65°C</div>
                    <div className="text-[11px] text-slate-400 mt-1">Arctic sub-zero cold to tropical desert sun</div>
                  </div>
                  <div className="bg-[#0B0F19] p-3.5 rounded-lg border border-slate-800">
                    <div className="text-xs font-mono text-slate-400">Cabinet Structure</div>
                    <div className="text-xl font-bold font-['Rajdhani'] text-[#00E5FF]">Die-Cast Magnesium</div>
                    <div className="text-[11px] text-slate-400 mt-1">High precision &lt;0.05mm seamless alignment</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                    Dual silicone waterproof gasket seal on both front and rear module junctions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                    Anti-corrosion conformal coating protects PCB circuitry from humidity and smog
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-5 bg-[#0B0F19] p-6 rounded-xl border border-slate-800 font-mono text-center">
                <div className="text-xs text-slate-400 mb-4 uppercase">Environmental Torture Certifications</div>
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 bg-slate-900 rounded border border-slate-800">
                    <div className="text-[#00E5FF] font-bold text-sm">IP66 / IP65</div>
                    <div className="text-[10px] text-slate-400">High pressure water jet and dust-tight seal</div>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-800">
                    <div className="text-[#00FF88] font-bold text-sm">Salt Spray 72H</div>
                    <div className="text-[10px] text-slate-400">ASTM B117 coastal corrosion proof</div>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-800">
                    <div className="text-white font-bold text-sm">Wind Load 120km/h</div>
                    <div className="text-[10px] text-slate-400">Class 12 hurricane bracket rating</div>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-800">
                    <div className="text-amber-400 font-bold text-sm">Flame Retardant</div>
                    <div className="text-[10px] text-slate-400">UL94-V0 self-extinguishing grade</div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
