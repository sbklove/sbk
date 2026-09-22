import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sliders, 
  Tv, 
  Zap, 
  Eye, 
  Weight, 
  ArrowRight, 
  Check,
  FileText
} from 'lucide-react';

interface ScreenCalculatorProps {
  onTransferToQuote: (configSummary: string) => void;
}

export const ScreenCalculator: React.FC<ScreenCalculatorProps> = ({ onTransferToQuote }) => {
  const [unit, setUnit] = useState<'meters' | 'feet'>('meters');
  const [width, setWidth] = useState<number>(4.8); // in meters
  const [height, setHeight] = useState<number>(2.7); // in meters (native 16:9)
  const [pitch, setPitch] = useState<number>(1.25); // in mm
  const [environment, setEnvironment] = useState<'indoor' | 'outdoor'>('indoor');

  // Convert inputs to meters for uniform math
  const widthM = unit === 'meters' ? width : width * 0.3048;
  const heightM = unit === 'meters' ? height : height * 0.3048;

  const calculations = useMemo(() => {
    const areaM2 = widthM * heightM;
    const horizontalPixels = Math.round((widthM * 1000) / pitch);
    const verticalPixels = Math.round((heightM * 1000) / pitch);
    const totalPixels = horizontalPixels * verticalPixels;
    
    // Standard cabinet size: 600 x 337.5mm for fine pitch 16:9, or 500 x 500mm
    const cabinetWidthM = pitch < 2.0 ? 0.6 : 0.5;
    const cabinetHeightM = pitch < 2.0 ? 0.3375 : 0.5;
    const cabinetsWide = Math.ceil(widthM / cabinetWidthM);
    const cabinetsHigh = Math.ceil(heightM / cabinetHeightM);
    const totalCabinets = cabinetsWide * cabinetsHigh;

    // Minimum viewing distance (Rule of thumb: pitch in mm = min distance in meters)
    const minDistanceM = (pitch * 0.8).toFixed(1);
    const optimalDistanceM = (pitch * 1.5).toFixed(1);

    // Power draw (Common cathode): Indoor avg 140W/m2, max 380W/m2; Outdoor avg 220W/m2, max 600W/m2
    const avgPowerRate = environment === 'indoor' ? 140 : 220;
    const maxPowerRate = environment === 'indoor' ? 380 : 650;
    const avgPowerKW = ((areaM2 * avgPowerRate) / 1000).toFixed(1);
    const maxPowerKW = ((areaM2 * maxPowerRate) / 1000).toFixed(1);

    // Weight estimate: ~26kg/m2 indoor, ~38kg/m2 outdoor die-cast
    const weightKg = Math.round(areaM2 * (environment === 'indoor' ? 24 : 36));

    // Resolution classification
    let resBadge = 'Custom Display';
    if (horizontalPixels >= 3840 && verticalPixels >= 2160) resBadge = 'True 4K UHD+';
    else if (horizontalPixels >= 1920 && verticalPixels >= 1080) resBadge = 'Full HD 1080p+';
    else if (horizontalPixels >= 1280) resBadge = 'HD 720p';

    return {
      areaM2: areaM2.toFixed(2),
      horizontalPixels,
      verticalPixels,
      totalPixels: (totalPixels / 1000000).toFixed(2),
      cabinetsWide,
      cabinetsHigh,
      totalCabinets,
      minDistanceM,
      optimalDistanceM,
      avgPowerKW,
      maxPowerKW,
      weightKg,
      resBadge,
      aspectRatio: (widthM / heightM).toFixed(2)
    };
  }, [widthM, heightM, pitch, environment]);

  const handleTransfer = () => {
    const summary = `LED Wall Estimate: ${widthM.toFixed(1)}m × ${heightM.toFixed(1)}m (${calculations.areaM2} m²), P${pitch}mm, ${environment.toUpperCase()}, Res: ${calculations.horizontalPixels}×${calculations.verticalPixels} (${calculations.resBadge}), ${calculations.totalCabinets} Cabinets, Est. Power: ${calculations.avgPowerKW} kW`;
    onTransferToQuote(summary);
  };

  return (
    <section id="screen-calculator" className="py-20 lg:py-28 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            ENGINEERING SPECIFICATION TOOL
          </div>
          <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight">
            Interactive <span className="text-[#00E5FF]">LED Video Wall</span> Calculator
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Configure your custom display dimensions and instantly calculate exact resolution, required modular cabinets, power consumption, and optimal audience viewing distance.
          </p>
        </div>

        {/* Calculator Main Layout */}
        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Inputs Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Unit Toggle and Environment */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">Environment:</span>
                  <div className="inline-flex rounded-lg bg-slate-900 p-1 border border-slate-800">
                    <button
                      onClick={() => setEnvironment('indoor')}
                      className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                        environment === 'indoor' ? 'bg-[#00E5FF] text-[#0B0F19] font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Indoor (1200 nits)
                    </button>
                    <button
                      onClick={() => setEnvironment('outdoor')}
                      className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                        environment === 'outdoor' ? 'bg-[#00FF88] text-[#0B0F19] font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Outdoor IP66 (7500 nits)
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">Unit:</span>
                  <div className="inline-flex rounded-lg bg-slate-900 p-1 border border-slate-800 text-xs font-mono">
                    <button
                      onClick={() => setUnit('meters')}
                      className={`px-2.5 py-1 rounded ${unit === 'meters' ? 'bg-white text-black font-bold' : 'text-slate-400'}`}
                    >
                      Meters (m)
                    </button>
                    <button
                      onClick={() => setUnit('feet')}
                      className={`px-2.5 py-1 rounded ${unit === 'feet' ? 'bg-white text-black font-bold' : 'text-slate-400'}`}
                    >
                      Feet (ft)
                    </button>
                  </div>
                </div>
              </div>

              {/* Sliders: Width */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-300">Screen Width:</span>
                  <span className="text-[#00E5FF] font-bold text-sm">
                    {width} {unit === 'meters' ? 'm' : 'ft'}
                  </span>
                </div>
                <input
                  type="range"
                  min={unit === 'meters' ? 1.2 : 4}
                  max={unit === 'meters' ? 24 : 80}
                  step={unit === 'meters' ? 0.3 : 1}
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00E5FF]"
                />
              </div>

              {/* Sliders: Height */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-300">Screen Height:</span>
                  <span className="text-[#00E5FF] font-bold text-sm">
                    {height} {unit === 'meters' ? 'm' : 'ft'}
                  </span>
                </div>
                <input
                  type="range"
                  min={unit === 'meters' ? 0.9 : 3}
                  max={unit === 'meters' ? 14 : 45}
                  step={unit === 'meters' ? 0.3 : 1}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00E5FF]"
                />
              </div>

              {/* Pixel Pitch Preset Selector */}
              <div>
                <span className="text-xs font-mono text-slate-300 block mb-2">
                  Select Pixel Pitch (Resolution Density):
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-xs font-mono">
                  {[0.9, 1.25, 1.5, 1.86, 2.5, 3.91].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPitch(p)}
                      className={`py-2 px-1 rounded-lg border text-center transition-all ${
                        pitch === p
                          ? 'bg-[#00E5FF]/20 border-[#00E5FF] text-[#00E5FF] font-bold shadow-[0_0_10px_rgba(0,229,255,0.3)]'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      P{p} mm
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Aspect Ratio Presets */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs font-mono text-slate-500">Quick Ratio:</span>
                <button
                  onClick={() => {
                    setWidth(4.8);
                    setHeight(2.7);
                    setUnit('meters');
                  }}
                  className="px-2.5 py-1 rounded bg-slate-800 text-[11px] font-mono text-slate-300 hover:text-white"
                >
                  Standard 16:9 (4.8m × 2.7m)
                </button>
                <button
                  onClick={() => {
                    setWidth(6.0);
                    setHeight(2.5);
                    setUnit('meters');
                  }}
                  className="px-2.5 py-1 rounded bg-slate-800 text-[11px] font-mono text-slate-300 hover:text-white"
                >
                  Ultrawide 21:9 (6.0m × 2.5m)
                </button>
              </div>

            </div>

            {/* Right Live Results Output Dashboard */}
            <div className="lg:col-span-6 bg-[#0B0F19] rounded-xl p-6 sm:p-8 border border-slate-800 space-y-6 font-mono">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs text-slate-500 uppercase">Calculated Resolution:</span>
                  <div className="text-2xl sm:text-3xl font-bold font-['Rajdhani'] text-[#00E5FF] flex items-center gap-2">
                    <span>{calculations.horizontalPixels} × {calculations.verticalPixels}</span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-[#00FF88]/15 border border-[#00FF88]/40 text-[#00FF88] font-bold uppercase">
                  {calculations.resBadge}
                </span>
              </div>

              {/* Primary Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-500 text-[11px]">Total Surface Area</div>
                  <div className="text-lg font-bold text-white mt-1">{calculations.areaM2} m²</div>
                  <div className="text-[10px] text-slate-400">Ratio ~{calculations.aspectRatio}:1</div>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-500 text-[11px]">Modular Cabinets</div>
                  <div className="text-lg font-bold text-white mt-1">{calculations.totalCabinets} Panels</div>
                  <div className="text-[10px] text-slate-400">{calculations.cabinetsWide}W × {calculations.cabinetsHigh}H Grid</div>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-500 text-[11px]">Min Viewing Distance</div>
                  <div className="text-lg font-bold text-[#00FF88] mt-1">{calculations.minDistanceM} m</div>
                  <div className="text-[10px] text-slate-400">Optimum: {calculations.optimalDistanceM} m</div>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-500 text-[11px]">Average Power Draw</div>
                  <div className="text-lg font-bold text-[#00E5FF] mt-1">{calculations.avgPowerKW} kW</div>
                  <div className="text-[10px] text-slate-400">Peak: {calculations.maxPowerKW} kW</div>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-500 text-[11px]">Estimated Weight</div>
                  <div className="text-lg font-bold text-white mt-1">~{calculations.weightKg} kg</div>
                  <div className="text-[10px] text-slate-400">Magnesium frames</div>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-500 text-[11px]">Total Active Pixels</div>
                  <div className="text-lg font-bold text-white mt-1">{calculations.totalPixels}M</div>
                  <div className="text-[10px] text-[#00FF88]">100% Calibrated</div>
                </div>

              </div>

              {/* Transfer Specs CTA */}
              <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400">
                  Ready to transform this estimate into a formal proposal?
                </span>
                <button
                  onClick={handleTransfer}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#0B0F19] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.7)] transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Apply Specs to Quote Request
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
