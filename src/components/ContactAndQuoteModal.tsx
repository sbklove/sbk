import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Tv, 
  FileText,
  Building,
  User,
  MessageSquare
} from 'lucide-react';
import { QuoteFormData } from '../types';

interface ContactAndQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillModel?: string;
  prefillSector?: string;
  prefillNotes?: string;
}

export const ContactAndQuoteModal: React.FC<ContactAndQuoteModalProps> = ({
  isOpen,
  onClose,
  prefillModel = '',
  prefillSector = '',
  prefillNotes = ''
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    sector: prefillSector || 'Retail & Shopping Malls',
    productCategory: 'Indoor & Outdoor Advertising LED Video Walls',
    pixelPitch: 'P1.25 MicroLED',
    dimensions: '4.8m × 2.7m (16:9 4K)',
    mountingType: 'Wall-Mounted Flush (Front Maintenance)',
    timeline: 'Within 1-3 Months',
    notes: prefillNotes || (prefillModel ? `Inquiring specifically for model: ${prefillModel}` : '')
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Update prefill if props change
  useEffect(() => {
    if (prefillModel) {
      setFormData(prev => ({
        ...prev,
        notes: `Inquiring specifically for model: ${prefillModel}. ${prev.notes}`
      }));
    }
    if (prefillSector) {
      setFormData(prev => ({
        ...prev,
        sector: prefillSector
      }));
    }
    if (prefillNotes) {
      setFormData(prev => ({
        ...prev,
        notes: prefillNotes
      }));
    }
  }, [prefillModel, prefillSector, prefillNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `TL-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      id="quote-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="bg-[#111827] border border-[#00E5FF]/40 rounded-2xl max-w-2xl w-full my-8 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,229,255,0.2)] relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-quote-modal-btn"
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] mb-2">
                <FileText className="w-3.5 h-3.5" />
                OFFICIAL PROPOSAL & TECHNICAL QUOTE
              </div>
              <h3 className="font-['Rajdhani'] text-2xl sm:text-3xl font-bold uppercase text-white">
                Request Engineering Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Receive structural load calculations, cabinet schematics, and an itemized price estimate within 4 business hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              
              {/* Row 1: Name & Company */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="text-slate-300 block mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Media Group"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="text-slate-300 block mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>
              </div>

              {/* Row 3: Industry & Category */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Target Sector</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white focus:outline-none focus:border-[#00E5FF]"
                  >
                    <option value="Healthcare & Hospitals">Healthcare & Hospitals</option>
                    <option value="Banking & Finance">Banking & Finance (Forex)</option>
                    <option value="Retail & Shopping Malls">Retail & Shopping Malls</option>
                    <option value="Hospitality & Hotels">Hospitality & Hotels</option>
                    <option value="Airports & Transit Hubs">Airports & Transit Hubs</option>
                    <option value="Events & Concert Staging">Events & Concert Staging</option>
                    <option value="Government & Defense">Government & Defense</option>
                    <option value="Other Commercial Project">Other Commercial Project</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 block mb-1">Product Category</label>
                  <select
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white focus:outline-none focus:border-[#00E5FF]"
                  >
                    <option value="Indoor & Outdoor Advertising LED Video Walls">Indoor & Outdoor Video Walls</option>
                    <option value="Interactive Smart Boards & Signage">Interactive Smart Boards & Totems</option>
                    <option value="Currency & Token Display Boards">Currency & Token Display Boards</option>
                    <option value="Transparent & Flexible Displays">Transparent & Flexible Curved Displays</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Pitch & Mounting */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Pixel Pitch Preference</label>
                  <select
                    value={formData.pixelPitch}
                    onChange={(e) => setFormData({ ...formData, pixelPitch: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white focus:outline-none focus:border-[#00E5FF]"
                  >
                    <option value="P0.9 MicroLED (Ultra Premium)">P0.9 MicroLED (Ultra Premium)</option>
                    <option value="P1.25 MicroLED">P1.25 MicroLED (Command Centers)</option>
                    <option value="P1.5 - P1.8mm Fine Pitch">P1.5 - P1.8mm Fine Pitch</option>
                    <option value="P2.5mm Commercial Indoor">P2.5mm Commercial Indoor</option>
                    <option value="P3.91mm Transparent / Rental">P3.91mm Transparent / Rental</option>
                    <option value="P4.0 - P6.0mm Outdoor IP66">P4.0 - P6.0mm Outdoor IP66</option>
                    <option value="Consultant Recommendation Needed">Consultant Recommendation Needed</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 block mb-1">Mounting Structure</label>
                  <select
                    value={formData.mountingType}
                    onChange={(e) => setFormData({ ...formData, mountingType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white focus:outline-none focus:border-[#00E5FF]"
                  >
                    <option value="Wall-Mounted Flush (Front Maintenance)">Wall-Mounted Flush (Front Maintenance)</option>
                    <option value="Freestanding Ground Base Support">Freestanding Ground Base Support</option>
                    <option value="Curved Architectural Facade / Cylinder">Curved Architectural Facade / Cylinder</option>
                    <option value="Overhead Ceiling Truss Rigging (Rental)">Overhead Ceiling Truss Rigging (Rental)</option>
                    <option value="Glass Window Mullion Attachment">Glass Window Mullion Attachment</option>
                  </select>
                </div>
              </div>

              {/* Scope & Dimensions */}
              <div>
                <label className="text-slate-300 block mb-1">Estimated Screen Size / Scope</label>
                <input
                  type="text"
                  placeholder="e.g. 4.8m × 2.7m (approx 13 m²) or 16:9 4K Wall"
                  value={formData.dimensions}
                  onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="text-slate-300 block mb-1">Project Details & Custom Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Mention site location, viewing distance, special API feeds (for currency boards), or existing CAD drawings..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#0B0F19] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              {/* Form Actions */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00FF88]" />
                  NDA & Confidentiality Protected
                </span>

                <button
                  type="submit"
                  id="submit-quote-btn"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00E5FF] to-[#00B4D8] hover:from-[#00E5FF] hover:to-[#0096C7] text-[#0B0F19] font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
                >
                  <Send className="w-4 h-4" />
                  Transmit RFQ Request
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#00FF88]/20 border-2 border-[#00FF88] text-[#00FF88] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,255,136,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-['Rajdhani'] text-3xl font-bold uppercase text-white">
              Quote Request Logged Successfully
            </h3>

            <div className="inline-block bg-[#0B0F19] px-4 py-2 rounded-lg border border-slate-800 text-xs font-mono">
              <span className="text-slate-400">Tracking Reference: </span>
              <span className="text-[#00E5FF] font-bold">{ticketId}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-bold">{formData.fullName}</span>. A senior Technolite Display field systems engineer has been assigned to your project for <span className="text-[#00FF88]">{formData.company}</span>.
            </p>

            <div className="bg-[#0B0F19] p-4 rounded-xl border border-slate-800 max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-slate-400">
              <div>• Detailed proposal & CAD mounting schematics in prep</div>
              <div>• Typical response time: Under 4 business hours</div>
              <div>• Direct hotline: <a href="tel:+18005333477" className="text-[#00E5FF]">+1 (800) 533-3477</a></div>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 px-8 py-3 rounded-lg bg-[#00E5FF] text-[#0B0F19] font-bold uppercase text-xs tracking-wider"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
