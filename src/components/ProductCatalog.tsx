import React, { useState, useMemo } from 'react';
import { 
  Tv, 
  Search, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Maximize2, 
  ArrowRight, 
  FileText, 
  Check, 
  SlidersHorizontal,
  X,
  Layers,
  Cpu
} from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { ProductItem, ProductCategory } from '../types';

interface ProductCatalogProps {
  onOpenQuoteModal: (productModel?: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectingProduct, setInspectingProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: 'All LED Solutions' },
    { id: 'indoor-outdoor', label: 'Indoor & Outdoor Advertising' },
    { id: 'smart-signage', label: 'Interactive Smart Boards & Signage' },
    { id: 'currency-token', label: 'Currency & Token Display Boards' },
    { id: 'transparent-flexible', label: 'Transparent & Flexible Displays' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.pixelPitch.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.modelCode.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-20 lg:py-28 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <Tv className="w-3.5 h-3.5" />
            COMMERCIAL PRODUCT MATRIX
          </div>
          <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight">
            Next-Gen <span className="text-[#00E5FF]">LED Display</span> Catalog
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Engineered for high-duty continuous operation. Choose from ultra-fine MicroLED video walls, daylight-bright outdoor billboards, financial currency rate boards, and transparent glass facades.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#0B0F19] font-bold shadow-[0_0_20px_rgba(0,229,255,0.35)]'
                      : 'bg-[#111827] text-slate-300 border border-[#1E293B] hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search input bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by model, pitch (e.g. P1.2, P4), or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111827] border border-[#1E293B] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] font-mono transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              id={`product-card-${prod.id}`}
              className="bg-[#111827] border border-[#1E293B] hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-[#00E5FF] bg-[#00E5FF]/10 px-2.5 py-1 rounded border border-[#00E5FF]/30 font-semibold">
                    {prod.modelCode}
                  </span>
                  {prod.isPopular && (
                    <span className="text-[10px] font-mono text-[#00FF88] bg-[#00FF88]/10 px-2 py-0.5 rounded border border-[#00FF88]/30 uppercase font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Popular
                    </span>
                  )}
                </div>

                {/* Name and Tagline */}
                <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-white group-hover:text-[#00E5FF] transition-colors leading-tight mb-2">
                  {prod.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-5">
                  {prod.tagline}
                </p>

                {/* Key Technical Specs Matrix */}
                <div className="bg-[#0B0F19] rounded-xl p-3.5 border border-slate-800 space-y-2.5 font-mono text-xs mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Pixel Pitch:</span>
                    <span className="text-white font-bold">{prod.pixelPitch}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Luminance:</span>
                    <span className="text-[#00FF88]">{prod.brightness}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Refresh Rate:</span>
                    <span className="text-[#00E5FF]">{prod.refreshRate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Service Access:</span>
                    <span className="text-slate-300">{prod.serviceType}</span>
                  </div>
                </div>

                {/* Key Bullet Features */}
                <div className="space-y-1.5 mb-6">
                  {prod.keyFeatures.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#00FF88] shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <button
                  onClick={() => setInspectingProduct(prod)}
                  className="flex-1 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Quick Specs
                </button>

                <button
                  onClick={() => onOpenQuoteModal(prod.name)}
                  className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] hover:from-[#00E5FF] hover:to-[#0096C7] text-[#0B0F19] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#111827] rounded-2xl border border-slate-800 max-w-lg mx-auto">
            <Tv className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">No matching LED models found</h4>
            <p className="text-xs text-slate-400 mb-4">Try clearing your search query or selecting a different category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#00E5FF] text-[#0B0F19] text-xs font-bold uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* QUICK SPECS / TECHNICAL BLUEPRINT MODAL */}
      {/* ========================================================================= */}
      {inspectingProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111827] border border-[#1E293B] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setInspectingProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] mb-2">
              <span>{inspectingProduct.modelCode}</span>
              <span>•</span>
              <span className="uppercase">{inspectingProduct.category.replace('-', ' ')}</span>
            </div>

            <h3 className="font-['Rajdhani'] text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
              {inspectingProduct.name}
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              {inspectingProduct.description}
            </p>

            {/* Complete Engineering Spec Sheet Table */}
            <div className="bg-[#0B0F19] rounded-xl p-4 border border-slate-800 mb-6 font-mono text-xs space-y-2.5">
              <div className="grid grid-cols-2 py-1.5 border-b border-slate-800">
                <span className="text-slate-500">Pixel Pitch:</span>
                <span className="text-white font-bold">{inspectingProduct.pixelPitch}</span>
              </div>
              <div className="grid grid-cols-2 py-1.5 border-b border-slate-800">
                <span className="text-slate-500">Peak Brightness:</span>
                <span className="text-[#00FF88] font-bold">{inspectingProduct.brightness}</span>
              </div>
              <div className="grid grid-cols-2 py-1.5 border-b border-slate-800">
                <span className="text-slate-500">Refresh Frequency:</span>
                <span className="text-[#00E5FF]">{inspectingProduct.refreshRate}</span>
              </div>
              <div className="grid grid-cols-2 py-1.5 border-b border-slate-800">
                <span className="text-slate-500">Contrast Ratio:</span>
                <span className="text-white">{inspectingProduct.contrastRatio}</span>
              </div>
              <div className="grid grid-cols-2 py-1.5 border-b border-slate-800">
                <span className="text-slate-500">Viewing Angle:</span>
                <span className="text-slate-300">{inspectingProduct.viewingAngle}</span>
              </div>
              <div className="grid grid-cols-2 py-1.5 border-b border-slate-800">
                <span className="text-slate-500">Ingress Protection:</span>
                <span className="text-white">{inspectingProduct.ipRating}</span>
              </div>
              <div className="grid grid-cols-2 py-1.5 border-b border-slate-800">
                <span className="text-slate-500">Maintenance Method:</span>
                <span className="text-[#00FF88]">{inspectingProduct.serviceType}</span>
              </div>
              <div className="grid grid-cols-2 py-1.5 border-b border-slate-800">
                <span className="text-slate-500">Cabinet Sizing:</span>
                <span className="text-slate-300">{inspectingProduct.cabinetSize}</span>
              </div>
              <div className="grid grid-cols-2 py-1.5 border-b border-slate-800">
                <span className="text-slate-500">Cabinet Weight:</span>
                <span className="text-slate-300">{inspectingProduct.cabinetWeight}</span>
              </div>
              <div className="grid grid-cols-2 py-1.5">
                <span className="text-slate-500">Power Consumption:</span>
                <span className="text-[#00E5FF]">{inspectingProduct.powerConsumption}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <div className="text-xs font-mono uppercase text-[#00FF88] mb-2 font-bold">
                Key Engineering Highlights:
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {inspectingProduct.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded border border-slate-800">
                    <Check className="w-4 h-4 text-[#00FF88] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setInspectingProduct(null)}
                className="px-4 py-2.5 rounded-lg bg-slate-800 text-xs font-mono text-slate-300 hover:text-white"
              >
                Close Specs
              </button>
              <button
                onClick={() => {
                  const prod = inspectingProduct;
                  setInspectingProduct(null);
                  onOpenQuoteModal(prod.name);
                }}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] text-[#0B0F19] text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Inquire About {inspectingProduct.modelCode}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
