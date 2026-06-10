'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Minus, 
  Search, 
  HelpCircle,
  Sparkles,
  Info,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { healthPackages, comparisonCategories } from '@/data/packagesData';
import SEO from '@/components/SEO';

export default function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHighlight, setSelectedHighlight] = useState<string>('family-health'); // Highlight Family Health by default

  // Filter comparison matrix based on search query
  const filteredCategories = comparisonCategories.map((category) => {
    const matchingTests = category.tests.filter(
      (test) => 
        test.testName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...category,
      tests: matchingTests
    };
  }).filter((category) => category.tests.length > 0);

  const handleWhatsAppRedirect = (packageName: string) => {
    const phoneNumber = '919360933128';
    const text = encodeURIComponent(
      `Hello Aaradhya Scans. I want to book the "${packageName}" health package. Please coordinate the schedule.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      <SEO />
      <div className="bg-brand-cream min-h-screen py-12 lg:py-20 font-sans">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          
          {/* Header Block */}
          <div className="max-w-3xl text-left space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Preventive Medicine</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-brand-charcoal">
              Comprehensive Health Screenings
            </h1>
            <p className="font-sans text-sm sm:text-base text-brand-charcoal/70 leading-relaxed">
              We design our health packages to support proactive wellness. Review details, compare tests across checkups, and select the diagnostic screen matching your profile.
            </p>
          </div>

          {/* SECTION 1: OVERVIEW CARD GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {healthPackages.map((pkg) => {
              const isHighlighted = selectedHighlight === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedHighlight(pkg.id)}
                  className={`p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between h-[450px] relative cursor-pointer group ${
                    isHighlighted
                      ? 'bg-brand-emerald text-brand-cream border-transparent shadow-xl shadow-brand-emerald/10 scale-[1.02]'
                      : 'bg-brand-white text-brand-charcoal border-brand-charcoal/5 hover:border-brand-emerald/20 hover:shadow-md'
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-x-1 px-2.5 py-1 rounded-full bg-brand-gold text-[9px] font-bold uppercase tracking-wider text-brand-charcoal">
                      <Sparkles className="h-2.5 w-2.5 text-brand-charcoal animate-pulse" />
                      Recommended
                    </span>
                  )}
                  
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${isHighlighted ? 'text-brand-gold' : 'text-brand-gold-dark'}`}>
                        {pkg.testCount} Markers Analyzed
                      </span>
                      <h3 className="font-serif text-2xl font-medium tracking-tight leading-snug">
                        {pkg.name}
                      </h3>
                    </div>

                    {/* Meta info */}
                    <div className="space-y-3 text-xs leading-relaxed">
                      <p className={isHighlighted ? 'text-brand-cream/80' : 'text-brand-charcoal/70'}>
                        {pkg.tagline}
                      </p>
                      <div className="flex items-start gap-x-2 pt-2 border-t border-brand-charcoal/5 group-hover:border-brand-emerald/5 transition-colors">
                        <Info className={`h-4 w-4 shrink-0 mt-0.5 ${isHighlighted ? 'text-brand-gold' : 'text-brand-gold-dark'}`} />
                        <div>
                          <strong className="block text-[10px] uppercase tracking-wider">Demographic:</strong>
                          <span className={isHighlighted ? 'text-brand-cream/70' : 'text-brand-charcoal/50'}>{pkg.recommendedAge}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="space-y-4 pt-6 border-t border-brand-charcoal/5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppRedirect(pkg.name);
                      }}
                      className={`w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-x-2 cursor-pointer ${
                        isHighlighted
                          ? 'bg-brand-gold text-brand-charcoal hover:bg-brand-gold-light'
                          : 'bg-brand-emerald text-brand-cream hover:bg-brand-emerald-dark'
                      }`}
                    >
                      Book Screening
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SECTION 2: COMPARISON TABLE MATRIX */}
          <div className="bg-brand-white rounded-3xl border border-brand-charcoal/5 p-8 lg:p-12 shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-brand-charcoal/5">
              <div className="space-y-1 text-left">
                <h2 className="font-serif text-2xl font-medium text-brand-charcoal">
                  Detail Test Comparison Matrix
                </h2>
                <p className="font-sans text-xs text-brand-charcoal/50">
                  Search or review inclusions across all packages. Click any package card above to highlight its column.
                </p>
              </div>

              {/* Search Matrix */}
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-charcoal/40" />
                <input
                  type="text"
                  placeholder="Search test names..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-brand-cream border border-brand-charcoal/5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-emerald/30 focus:ring-1 focus:ring-brand-emerald/30 transition-all shadow-xs"
                />
              </div>
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-brand-charcoal/5">
                    <th className="py-4 font-serif text-sm font-semibold text-brand-charcoal w-[35%]">Test Name</th>
                    {healthPackages.map((pkg) => (
                      <th
                        key={pkg.id}
                        className={`py-4 px-4 font-serif text-xs font-semibold text-center w-[16.25%] transition-all duration-300 ${
                          selectedHighlight === pkg.id ? 'bg-brand-emerald/5 text-brand-emerald font-bold' : 'text-brand-charcoal/60'
                        }`}
                      >
                        {pkg.name.replace(' Screening', '').replace(' Safeguard', '').replace(' Assessment', '').replace(' Checkup', '')}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-charcoal/5">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((cat, catIdx) => (
                      <React.Fragment key={catIdx}>
                        {/* Category Row */}
                        <tr className="bg-brand-cream/30">
                          <td colSpan={5} className="py-3 font-serif text-xs font-bold uppercase tracking-wider text-brand-gold-dark pl-2">
                            {cat.categoryName}
                          </td>
                        </tr>
                        {cat.tests.map((test, testIdx) => (
                          <tr key={testIdx} className="hover:bg-brand-cream/10 transition-colors">
                            <td className="py-4 pl-2 space-y-1 pr-4">
                              <span className="font-sans text-xs font-medium text-brand-charcoal block">
                                {test.testName}
                              </span>
                              <span className="font-sans text-[10px] text-brand-charcoal/40 leading-normal block max-w-sm">
                                {test.description}
                              </span>
                            </td>
                            {healthPackages.map((pkg) => {
                              const inclusion = test.includedIn[pkg.id];
                              const isHighlighted = selectedHighlight === pkg.id;
                              return (
                                <td
                                  key={pkg.id}
                                  className={`py-4 px-4 text-center text-xs font-semibold transition-all duration-300 ${
                                    isHighlighted ? 'bg-brand-emerald/5' : ''
                                  }`}
                                >
                                  {typeof inclusion === 'boolean' ? (
                                    inclusion ? (
                                      <Check className="h-4 w-4 text-brand-emerald mx-auto" />
                                    ) : (
                                      <Minus className="h-3.5 w-3.5 text-brand-charcoal/20 mx-auto" />
                                    )
                                  ) : (
                                    <span className="text-[10px] font-bold text-brand-gold bg-brand-gold/15 px-2 py-0.5 rounded-full inline-block">
                                      {inclusion}
                                    </span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </React.Fragment>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-brand-charcoal/40 text-xs font-sans">
                        No screening tests found matching your query.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="pt-6 border-t border-brand-charcoal/5 flex flex-col md:flex-row items-center justify-between gap-y-4">
              <div className="flex items-center gap-x-2 text-[10px] text-brand-charcoal/50">
                <Info className="h-4 w-4 text-brand-gold shrink-0" />
                <span>All blood draws must be scheduled following a strict 10 to 12 hour fasting window.</span>
              </div>
              <button
                onClick={() => handleWhatsAppRedirect('Selected Health Package')}
                className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-cream bg-brand-emerald hover:bg-brand-emerald-dark transition-colors cursor-pointer"
              >
                Inquire About Custom Panels
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
