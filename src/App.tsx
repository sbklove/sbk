/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreFeatures } from './components/CoreFeatures';
import { SectorsSection } from './components/SectorsSection';
import { ProductCatalog } from './components/ProductCatalog';
import { ScreenCalculator } from './components/ScreenCalculator';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactAndQuoteModal } from './components/ContactAndQuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefillModel, setPrefillModel] = useState('');
  const [prefillSector, setPrefillSector] = useState('');
  const [prefillNotes, setPrefillNotes] = useState('');

  const handleOpenQuoteModal = (productOrContext?: string) => {
    if (productOrContext) {
      if (productOrContext.startsWith('Sector:') || productOrContext.includes('Healthcare') || productOrContext.includes('Banking') || productOrContext.includes('Retail') || productOrContext.includes('Hospitality') || productOrContext.includes('Transit') || productOrContext.includes('Concerts')) {
        setPrefillSector(productOrContext.replace('Sector: ', ''));
        setPrefillModel('');
        setPrefillNotes('');
      } else if (productOrContext.startsWith('LED Wall Estimate:')) {
        setPrefillNotes(productOrContext);
        setPrefillModel('Custom Sized LED Wall');
        setPrefillSector('');
      } else {
        setPrefillModel(productOrContext);
        setPrefillSector('');
        setPrefillNotes('');
      }
    } else {
      setPrefillModel('');
      setPrefillSector('');
      setPrefillNotes('');
    }
    setIsQuoteModalOpen(true);
  };

  const handleTransferCalculatorToQuote = (configSummary: string) => {
    setPrefillNotes(configSummary);
    setPrefillModel('Custom LED Video Wall Configurator');
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col font-sans selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      
      {/* Sticky Top Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero with Interactive LED Display Simulator */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Core Features Grid */}
        <CoreFeatures onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Product Catalog Showcase with Interactive Filter */}
        <ProductCatalog onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Sectors We Serve */}
        <SectorsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Interactive Screen Calculator / Estimator */}
        <ScreenCalculator onTransferToQuote={handleTransferCalculatorToQuote} />

        {/* Project Showcase / Case Studies */}
        <ProjectsShowcase onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Contact Us Section */}
        <ContactSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Global Interactive Quote Request Modal */}
      <ContactAndQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        prefillModel={prefillModel}
        prefillSector={prefillSector}
        prefillNotes={prefillNotes}
      />

    </div>
  );
}
