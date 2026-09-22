import React, { useState } from 'react';
import { 
  Activity, 
  TrendingUp, 
  ShoppingBag, 
  Building2, 
  Plane, 
  Radio, 
  ArrowRight, 
  CheckCircle, 
  Tv, 
  Layers,
  FileText
} from 'lucide-react';
import { SECTORS } from '../data/mockData';
import { SectorItem } from '../types';

interface SectorsSectionProps {
  onOpenQuoteModal: (prefillSector?: string) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedSector, setSelectedSector] = useState<SectorItem>(SECTORS[0]);

  const getSectorIcon = (iconName: string, className: string = 'w-6 h-6') => {
    switch (iconName) {
      case 'Activity': return <Activity className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'ShoppingBag': return <ShoppingBag className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'Plane': return <Plane className={className} />;
      case 'Radio': return <Radio className={className} />;
      default: return <Tv className={className} />;
    }
  };

  return (
    <section id="sectors" className="py-20 lg:py-28 relative bg-[#0B0F19] border-t border-b border-[#1E293B]">
      <div className="absolute inset-0 led-grid-lines opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-[#00FF88]/30 text-xs font-mono text-[#00FF88] mb-3">
            <Layers className="w-3.5 h-3.5" />
            ENTERPRISE SECTOR SOLUTIONS
          </div>
          <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight">
            Tailored Displays for <span className="text-[#00FF88]">Specialized Industries</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            From sterile operating theaters and live forex trading floors to mega-mall atriums, our commercial LED architectures are customized for distinct operational demands.
          </p>
        </div>

        {/* 6 Sector Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
          {SECTORS.map((sec) => {
            const isSelected = selectedSector.id === sec.id;
            return (
              <button
                key={sec.id}
                id={`sector-tab-${sec.id}`}
                onClick={() => setSelectedSector(sec)}
                className={`p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#111827] border-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.25)] -translate-y-1'
                    : 'bg-[#111827]/60 border-[#1E293B] hover:border-slate-700 hover:bg-[#111827]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${
                    isSelected 
                      ? 'bg-[#00FF88] text-[#0B0F19]' 
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    {getSectorIcon(sec.icon, 'w-5 h-5')}
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-ping" />
                  )}
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white font-['Rajdhani'] uppercase tracking-wide">
                    {sec.name}
                  </h3>
                  <div className="text-[10px] font-mono text-slate-400 mt-1">
                    {sec.stats.split(' ')[0]} {sec.statLabel}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Sector Detailed Blueprint Container */}
        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00FF88]/20 border border-[#00FF88]/50 flex items-center justify-center text-[#00FF88]">
                  {getSectorIcon(selectedSector.icon, 'w-5 h-5')}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                    INDUSTRY BLUEPRINT
                  </span>
                  <h3 className="font-['Rajdhani'] text-2xl sm:text-3xl font-bold uppercase text-white">
                    {selectedSector.headline}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedSector.description}
              </p>

              {/* Specific Solutions List */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#00FF88]">
                  Dedicated Architectural Solutions:
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selectedSector.solutions.map((sol, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-[#0B0F19] p-3 rounded-lg border border-slate-800">
                      <CheckCircle className="w-4 h-4 text-[#00FF88] shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal(selectedSector.name)}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00FF88] to-[#00E5FF] text-[#0B0F19] text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_25px_rgba(0,255,136,0.6)] transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Request Proposal for {selectedSector.name.split(' ')[0]}
                </button>
                <span className="text-xs font-mono text-slate-400">
                  Custom engineered to your architectural drawings
                </span>
              </div>
            </div>

            {/* Right Specifications Card */}
            <div className="lg:col-span-5 bg-[#0B0F19] p-6 rounded-xl border border-slate-800 space-y-5 font-mono">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Sector Engineering Specs</span>
                <span className="text-xs text-[#00FF88] font-bold">VERIFIED STANDARD</span>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-500 block mb-1">Recommended Pitch Range:</span>
                  <div className="text-white text-sm font-bold bg-slate-900 p-2.5 rounded border border-slate-800 text-[#00E5FF]">
                    {selectedSector.recommendedPitch}
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 block mb-1">Typical Installation Venues:</span>
                  <div className="text-slate-300 bg-slate-900 p-2.5 rounded border border-slate-800">
                    {selectedSector.typicalInstallation}
                  </div>
                </div>

                <div>
                  <span className="text-slate-500 block mb-1">Sector Benchmark Track Record:</span>
                  <div className="text-[#00FF88] font-bold text-sm bg-slate-900 p-2.5 rounded border border-slate-800 flex items-center justify-between">
                    <span>{selectedSector.stats}</span>
                    <span className="text-[10px] text-slate-400 uppercase">99.98% SLA</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Compliance: CE / FCC / RoHS / ETL</span>
                <span className="text-[#00FF88]">5-Yr Warranty</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
