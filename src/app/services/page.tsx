import React from 'react';
import { Metadata } from 'next';
import { Sparkles } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import ServicesCatalogClient from '@/components/ServicesCatalogClient';
import SEO from '@/components/SEO';

export const metadata: Metadata = {
  title: "Diagnostic Services & Scan Center | Aradhiya Scans",
  description: "Browse diagnostic scan categories, MRI/CT scanners, low-dose digital X-Ray procedures, pathology lab parameters, and patient instruction guidelines in Chidambaram.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesPage() {
  return (
    <>
      <SEO />
      <div className="bg-brand-cream min-h-screen py-12 lg:py-20 font-sans text-brand-charcoal relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute left-[-10%] top-[5%] w-[45%] h-[45%] rounded-full bg-brand-emerald/5 blur-3xl pointer-events-none" />
        <div className="absolute right-[-10%] top-[25%] w-[40%] h-[40%] rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Header Block */}
          <div className="max-w-3xl text-left mb-12 lg:mb-16 space-y-4">
            <div className="inline-flex items-center gap-x-2 px-3 py-1.5 rounded-full border border-brand-emerald/10 bg-brand-emerald/5 text-[10px] font-bold tracking-widest text-brand-emerald uppercase shadow-xs">
              <Sparkles className="h-3 w-3 text-brand-gold" />
              Clinical Guidance
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-brand-charcoal leading-none">
              Diagnostic <span className="bg-gradient-to-r from-brand-emerald to-brand-emerald-dark bg-clip-text text-transparent font-normal">Services</span> <br />
              & Pre-test <span className="font-serif italic font-normal text-brand-gold-dark">Guidelines.</span>
            </h1>
            <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed max-w-xl font-medium">
              Browse core scanning procedures, cardiac monitoring tracings, and pathology lab requirements at Aradhiya Scans & Lab.
            </p>
          </div>

          <ServicesCatalogClient services={servicesData} />

        </div>
      </div>
    </>
  );
}
