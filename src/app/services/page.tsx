'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Cpu, 
  Activity, 
  FlaskConical, 
  HeartHandshake, 
  Clock, 
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { servicesData, ServiceDetail } from '@/data/servicesData';

const serviceImages: Record<string, string> = {
  'ct-scan': '/images/ct_scan.png',
  'digital-x-ray': '/images/xray.png',
  'sonomammography': '/images/ultrasound.png',
  'ecg': '/images/ecg.png',
  'echocardiography': '/images/echo.png',
  'blood-tests': '/images/lab.png',
  'urine-analysis': '/images/lab.png',
  'hormone-testing': '/images/lab.png',
  'cholesterol-screening': '/images/lab.png',
  'executive-health-packages': '/images/preventive.png',
  'annual-health-checkups': '/images/preventive.png',
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'imaging' | 'cardiac' | 'laboratory' | 'preventive'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceDetail>(servicesData[0]);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Filtered list based on search and category
  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Automatically select the first item of a filtered list if current selection is excluded
  useEffect(() => {
    if (filteredServices.length > 0 && !filteredServices.find(s => s.id === selectedService.id)) {
      setSelectedService(filteredServices[0]);
    }
  }, [activeCategory, searchQuery, filteredServices, selectedService]);

  const scrollToDetails = (service: ServiceDetail) => {
    setSelectedService(service);
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const categories = [
    { id: 'all', label: 'All Diagnostics', icon: null },
    { id: 'imaging', label: 'Imaging', icon: Cpu },
    { id: 'cardiac', label: 'Cardiac', icon: Activity },
    { id: 'laboratory', label: 'Pathology Lab', icon: FlaskConical },
    { id: 'preventive', label: 'Preventive Care', icon: HeartHandshake }
  ];

  return (
    <div className="bg-brand-cream min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Diagnostic Catalog</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-brand-charcoal">
            Clinical Capabilities & Guidance
          </h1>
          <p className="font-sans text-sm sm:text-base text-brand-charcoal/70 leading-relaxed">
            Detailed information on preparations, procedures, and timelines for our complete testing directory in Chidambaram.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          {/* Categories Tab Grid */}
          <div className="lg:col-span-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-x-2 border cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-brand-emerald text-brand-cream border-transparent shadow-sm'
                    : 'bg-brand-white text-brand-charcoal/70 border-brand-charcoal/5 hover:border-brand-emerald/20 hover:text-brand-charcoal'
                }`}
              >
                {cat.icon && <cat.icon className="h-3.5 w-3.5" />}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="lg:col-span-4 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-charcoal/40" />
            <input
              type="text"
              placeholder="Search tests or codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-brand-white border border-brand-charcoal/5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-emerald/30 focus:ring-1 focus:ring-brand-emerald/30 transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Two-Column Explorer Layout (iPad settings style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: List of Services */}
          <div className="lg:col-span-5 space-y-3 max-h-[70vh] overflow-y-auto pr-2">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => {
                const isSelected = selectedService.id === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => scrollToDetails(service)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-brand-emerald text-brand-cream border-transparent shadow-lg shadow-brand-emerald/10'
                        : 'bg-brand-white text-brand-charcoal border-brand-charcoal/5 hover:border-brand-gold/20 hover:shadow-md'
                    }`}
                  >
                    <div className="space-y-1 max-w-[85%]">
                      <span className={`text-[9px] uppercase tracking-wider font-bold ${isSelected ? 'text-brand-gold' : 'text-brand-gold-dark'}`}>
                        {service.category === 'imaging' ? 'Imaging Scan' :
                         service.category === 'cardiac' ? 'Cardiac Trace' :
                         service.category === 'laboratory' ? 'Pathology Lab' : 'Wellness Check'}
                      </span>
                      <h3 className="font-serif text-lg font-medium tracking-tight truncate">
                        {service.name}
                      </h3>
                      <p className={`text-[11px] line-clamp-1 leading-normal ${isSelected ? 'text-brand-cream/80' : 'text-brand-charcoal/60'}`}>
                        {service.shortDescription}
                      </p>
                    </div>
                    <ArrowRight className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                      isSelected ? 'text-brand-gold translate-x-1' : 'text-brand-charcoal/40 group-hover:translate-x-1 group-hover:text-brand-charcoal'
                    }`} />
                  </button>
                );
              })
            ) : (
              <div className="bg-brand-white p-8 rounded-2xl border border-brand-charcoal/5 text-center text-brand-charcoal/50 text-xs font-sans">
                No diagnostic service found matching your query.
              </div>
            )}
          </div>

          {/* Right Column: Immersive Detail View */}
          <div ref={detailsRef} className="lg:col-span-7 bg-brand-white rounded-3xl border border-brand-charcoal/5 p-8 lg:p-12 shadow-sm space-y-10 min-h-[50vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Premium Image Banner */}
                {serviceImages[selectedService.id] && (
                  <div className="relative w-full h-48 sm:h-[240px] rounded-2xl overflow-hidden border border-brand-charcoal/5 bg-brand-cream shadow-xs">
                    <Image
                      src={serviceImages[selectedService.id]}
                      alt={selectedService.name}
                      fill
                      sizes="(max-w-7xl) 50vw, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                )}

                {/* Header */}
                <div className="border-b border-brand-charcoal/5 pb-6 space-y-2">
                  <div className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                    {selectedService.category} diagnostics
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-brand-charcoal">
                    {selectedService.name}
                  </h2>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed pt-1">
                    {selectedService.overview}
                  </p>
                </div>

                {/* Split grid: Who needs it & Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="font-serif text-base font-semibold text-brand-charcoal flex items-center gap-x-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-emerald" />
                      Who Requires This
                    </h4>
                    <ul className="space-y-2 text-xs text-brand-charcoal/70 leading-relaxed list-disc pl-4">
                      {selectedService.whoNeedsIt.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif text-base font-semibold text-brand-charcoal flex items-center gap-x-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-emerald" />
                      Clinical Benefits
                    </h4>
                    <ul className="space-y-2 text-xs text-brand-charcoal/70 leading-relaxed list-disc pl-4">
                      {selectedService.benefits.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Guidelines Section */}
                <div className="p-6 rounded-2xl bg-brand-cream border border-brand-charcoal/5 space-y-4">
                  <h4 className="font-serif text-base font-semibold text-brand-charcoal flex items-center gap-x-2">
                    <AlertCircle className="h-4 w-4 text-brand-gold" />
                    Preparation Guidelines
                  </h4>
                  <ul className="space-y-2.5 text-xs text-brand-charcoal/80 leading-relaxed pl-4 list-decimal">
                    {selectedService.prepGuidelines.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Procedure Section */}
                <div className="space-y-4">
                  <h4 className="font-serif text-base font-semibold text-brand-charcoal flex items-center gap-x-2">
                    <Clock className="h-4 w-4 text-brand-emerald" />
                    Procedure Walkthrough
                  </h4>
                  <div className="space-y-3 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-brand-emerald/10">
                    {selectedService.procedure.map((step, idx) => (
                      <div key={idx} className="flex gap-x-3 text-xs text-brand-charcoal/70 leading-relaxed pl-6 relative before:absolute before:left-1.5 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-emerald">
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                {selectedService.faqs && selectedService.faqs.length > 0 && (
                  <div className="border-t border-brand-charcoal/5 pt-6 space-y-4">
                    <h4 className="font-serif text-base font-semibold text-brand-charcoal flex items-center gap-x-2">
                      <HelpCircle className="h-4 w-4 text-brand-gold" />
                      Common Questions
                    </h4>
                    <div className="space-y-4">
                      {selectedService.faqs.map((faq, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <h5 className="font-serif text-xs font-semibold text-brand-charcoal">
                            {faq.question}
                          </h5>
                          <p className="font-sans text-[11px] text-brand-charcoal/60 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct Action */}
                <div className="pt-4 flex items-center justify-between border-t border-brand-charcoal/5">
                  <p className="text-[10px] text-brand-charcoal/50 font-medium">
                    Need immediate appointment coordination?
                  </p>
                  <button
                    onClick={() => {
                      const phoneNumber = '919360933128';
                      const text = encodeURIComponent(`Hello Aaradhya Scans. I want to book an appointment for the "${selectedService.name}" test.`);
                      window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
                    }}
                    className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-cream bg-brand-emerald hover:bg-brand-emerald-dark transition-colors cursor-pointer"
                  >
                    Schedule Test
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
