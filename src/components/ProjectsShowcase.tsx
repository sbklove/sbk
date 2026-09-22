import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Tv, 
  Sparkles, 
  CheckCircle, 
  TrendingUp, 
  ExternalLink,
  Shield,
  Layers
} from 'lucide-react';
import { PROJECTS } from '../data/mockData';
import { ProjectItem } from '../types';

interface ProjectsShowcaseProps {
  onOpenQuoteModal: (projectContext?: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenQuoteModal }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(PROJECTS[0]);

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#0B0F19] border-t border-[#1E293B]">
      <div className="absolute inset-0 led-dots-green opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-[#00FF88]/30 text-xs font-mono text-[#00FF88] mb-3">
            <Building className="w-3.5 h-3.5" />
            FIELD-PROVEN COMMERCIAL INSTALLATIONS
          </div>
          <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight">
            Case Studies & <span className="text-[#00FF88]">Flagship Projects</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Verified performance metrics across high-traffic airports, luxury retail store chains, financial trading floors, and stadiums worldwide.
          </p>
        </div>

        {/* Featured Showcase Project Hero Card */}
        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-10 shadow-2xl mb-12 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left project description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#00FF88]/15 border border-[#00FF88]/40 text-[#00FF88] text-xs font-mono font-bold uppercase">
                  {selectedProject.clientSector}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#00E5FF]" />
                  {selectedProject.location}
                </span>
              </div>

              <h3 className="font-['Rajdhani'] text-2xl sm:text-4xl font-extrabold uppercase text-white leading-tight">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedProject.summary}
              </p>

              {/* Hardware Deployment Specs */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="bg-[#0B0F19] p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-500 block">Total Screen Surface:</span>
                  <span className="text-white font-bold text-sm">{selectedProject.displaySize}</span>
                </div>
                <div className="bg-[#0B0F19] p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-500 block">Pixel Pitch Deployed:</span>
                  <span className="text-[#00E5FF] font-bold text-sm">{selectedProject.pixelPitch}</span>
                </div>
              </div>

              {/* Verified Features */}
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.features.map((feat, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Metric Counter Block */}
            <div className="lg:col-span-5 bg-[#0B0F19] p-8 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center font-mono relative overflow-hidden">
              <div className="absolute inset-0 led-dots opacity-30 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-xs uppercase text-slate-400 tracking-widest mb-2">
                  VERIFIED IMPACT STATISTIC
                </div>
                
                <div className="font-['Rajdhani'] text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00E5FF] leading-none mb-3">
                  {selectedProject.statMetric}
                </div>

                <div className="text-base font-bold text-white uppercase tracking-wide">
                  {selectedProject.statLabel}
                </div>

                <p className="text-xs text-slate-400 mt-2 max-w-xs">
                  Continuous performance monitored with zero unscheduled downtime.
                </p>

                <button
                  onClick={() => onOpenQuoteModal(`Case Study: ${selectedProject.title}`)}
                  className="mt-6 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#00FF88] to-[#00E5FF] text-[#0B0F19] text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:scale-105 transition-all"
                >
                  Request Blueprint for this Scope
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Project Selector Thumbnail Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROJECTS.map((proj) => {
            const isCurrent = selectedProject.id === proj.id;
            return (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                  isCurrent
                    ? 'bg-[#111827] border-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.2)] -translate-y-1'
                    : 'bg-[#111827]/60 border-[#1E293B] hover:border-slate-700 hover:bg-[#111827]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#00E5FF] truncate max-w-[120px]">
                    {proj.clientSector.split(' ')[0]}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#00FF88]">
                    {proj.statMetric}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white font-['Rajdhani'] uppercase line-clamp-2 leading-tight">
                  {proj.title}
                </h4>
                <div className="text-[10px] text-slate-400 font-mono mt-2">
                  {proj.statLabel}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
