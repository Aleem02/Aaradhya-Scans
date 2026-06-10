'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  Activity,
  Heart,
  CheckCircle2,
  Calendar,
  Sparkles,
  Users
} from 'lucide-react';
import AbstractVisualizer from '@/components/AbstractVisualizer';
import SEO from '@/components/SEO';

// Animation configs
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
  }
};

export default function Home() {
  return (
    <>
      <SEO />
      
      <section className="relative min-h-[60vh] lg:min-h-[550px] flex items-center overflow-hidden bg-brand-cream pt-4 pb-16 lg:pt-8 lg:pb-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-ivory/40 clip-path-hero hidden lg:block z-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="inline-flex items-center gap-x-2 px-3 py-1 rounded-full border border-brand-emerald/10 bg-brand-emerald/5 text-xs font-semibold tracking-wider text-brand-emerald uppercase">
                <Sparkles className="h-3 w-3 text-brand-gold animate-pulse" />
                Precision Diagnostics
              </div>
              <div className="space-y-4">
                <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-light tracking-tight text-brand-charcoal leading-[1.05]">
                  Precision <br className="hidden sm:inline" />
                  Behind Every <br />
                  <span className="font-serif italic font-normal text-brand-emerald">Diagnosis</span>
                </h1>
                <p className="font-sans text-base sm:text-lg text-brand-charcoal/70 max-w-xl leading-relaxed">
                  Advanced imaging, pathology, and preventive healthcare services trusted by families and physicians in Chidambaram.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-cream bg-brand-emerald hover:bg-brand-emerald-dark hover:shadow-lg transition-all duration-300 flex items-center gap-x-2"
                >
                  Explore Services
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-charcoal border border-brand-charcoal/10 hover:border-brand-charcoal bg-transparent transition-all duration-300"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>

            {/* Hero Interactive Visual */}
            <div className="lg:col-span-6 flex justify-center">
              <AbstractVisualizer />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY AARADHYA - FEATURE GRID */}
      <section className="py-24 bg-brand-white border-t border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl text-left mb-16 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-brand-charcoal">
              Where precision diagnostics meet patient-centered care.
            </h2>
            <div className="w-12 h-1 bg-brand-gold rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left side: Premium Image Banner */}
            <div className="lg:col-span-5 relative min-h-[320px] rounded-3xl overflow-hidden border border-brand-charcoal/5 shadow-sm bg-brand-cream">
              <Image
                src="/images/clinic_interior.png"
                alt="Aaradhya Scans Advanced Clinical Scanning Room"
                fill
                sizes="(max-w-7xl) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Right side: 2x2 grid of Features */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: ShieldCheck,
                  title: 'Accurate Diagnostics',
                  description: 'Double-checked analysis protocols and strict calibration standards ensuring high-precision results.'
                },
                {
                  icon: Clock,
                  title: 'Fast Turnaround',
                  description: 'Streamlined clinical testing lines deliver reliable analytical reports back to your provider quickly.'
                },
                {
                  icon: Cpu,
                  title: 'Advanced Technology',
                  description: 'State-of-the-art multi-slice CT scanning and automated biochemical diagnostic tracks.'
                },
                {
                  icon: Heart,
                  title: 'Patient-Focused Care',
                  description: 'Designed to offer comfort, detailed procedural clarity, and transparent guidelines.'
                }
              ].map((feat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-brand-cream border border-brand-charcoal/5 hover:border-brand-gold/30 hover:shadow-xl hover:shadow-brand-charcoal/5 transition-all duration-300 flex flex-col justify-between h-72 group cursor-default text-left"
                >
                  <div className="p-3.5 rounded-full bg-brand-white w-fit border border-brand-charcoal/5 group-hover:border-brand-emerald/10 group-hover:bg-brand-emerald/5 transition-all duration-300">
                    <feat.icon className="h-6 w-6 text-brand-emerald" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-brand-charcoal">{feat.title}</h3>
                    <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">{feat.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. DIAGNOSTIC JOURNEY - INTERACTIVE TIMELINE */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">The Diagnostic Journey</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-brand-charcoal">
              Transparency at Every Step
            </h2>
            <p className="font-sans text-sm text-brand-charcoal/60">
              We guide patients through an orderly, high-accuracy workflow to eliminate anxiety and ensure total verification.
            </p>
          </div>

          {/* Interactive Step Timeline */}
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-brand-emerald/10 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6">
              {[
                { step: '01', name: 'Consultation', desc: 'Detailed guidance on required preparations, test parameters, and schedules.' },
                { step: '02', name: 'Testing', desc: 'Secure barcoded sample collections or advanced high-definition scanning.' },
                { step: '03', name: 'Analysis', desc: 'Fully automated processing inside clean, regulated diagnostic environments.' },
                { step: '04', name: 'Verification', desc: 'Multi-stage double verification by certified lab specialists.' },
                { step: '05', name: 'Results', desc: 'Secure, digital results delivered instantly to your device and physician.' }
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  {/* Step Bubble */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-brand-white border-2 border-brand-emerald text-brand-emerald font-serif text-xl font-bold flex items-center justify-center shadow-md z-10 relative group-hover:bg-brand-emerald group-hover:text-brand-cream transition-colors duration-300"
                  >
                    {item.step}
                  </motion.div>
                  <div className="mt-6 space-y-2 px-4">
                    <h4 className="font-serif text-lg font-medium text-brand-charcoal">{item.name}</h4>
                    <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed max-w-[200px] mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES - MODERN VISUAL CARDS */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-y-4">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Specialized Capabilities</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-brand-charcoal">
                Core Diagnostic Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-semibold uppercase tracking-wider text-brand-emerald hover:text-brand-emerald-dark transition-colors flex items-center gap-x-2 group shrink-0"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 'ct-scan', title: 'CT Scan', desc: 'High-speed multi-slice scanning yielding precise skeletal and vascular views.', image: '/images/ct_scan.png' },
              { id: 'digital-x-ray', title: 'Digital X-Ray', desc: 'Low-dose immediate radiography providing bone structural detail.', image: '/images/xray.png' },
              { id: 'ecg', title: 'ECG (Electrocardiogram)', desc: '12-lead electrical tracing evaluating rhythm, pulse, and ischemic details.', image: '/images/ecg.png' },
              { id: 'echocardiography', title: 'Echocardiography', desc: 'High-fidelity ultrasound mapping active cardiovascular structural integrity.', image: '/images/echo.png' },
              { id: 'blood-tests', title: 'Laboratory Diagnostics', desc: 'Pathology testing covering endocrine, hematology, and metabolic screening.', image: '/images/lab.png' },
              { id: 'executive-health-packages', title: 'Preventive Health Packages', desc: 'Multi-system wellness screenings designed for proactive care.', image: '/images/preventive.png' }
            ].map((srv, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl bg-brand-white border border-brand-charcoal/5 p-8 flex flex-col justify-between h-[460px] group overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Decorative mesh vector in card background */}
                <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-brand-emerald/5 blur-2xl group-hover:bg-brand-emerald/10 transition-colors duration-500" />
                
                <div className="space-y-4 relative z-10 text-left">
                  <div className="w-1.5 h-10 bg-brand-gold rounded-full transition-transform duration-500 group-hover:scale-y-125" />
                  <h3 className="font-serif text-2xl font-medium text-brand-charcoal leading-tight">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed max-w-xs h-12 overflow-hidden">
                    {srv.desc}
                  </p>
                </div>

                {/* Premium Abstract Image Frame */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-brand-charcoal/5 bg-brand-cream mt-4">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="relative z-10 pt-4 flex items-center justify-between">
                  <Link
                    href={`/services#${srv.id}`}
                    className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-brand-emerald hover:text-brand-emerald-dark transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRUST METRICS - ELEGANT NUMBER SHOWCASE */}
      <section className="py-24 bg-brand-emerald text-brand-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-emerald-dark/40 z-0" />
        <div className="absolute inset-0 grid-dots-gold opacity-10 z-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center">
            {[
              { value: '50,000+', label: 'Patients Served' },
              { value: '200,000+', label: 'Diagnostic Tests Performed' },
              { value: '4+', label: 'Years of Service' },
              { value: '150+', label: 'Healthcare Professionals Served' }
            ].map((metric, idx) => (
              <div key={idx} className="space-y-2">
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-brand-gold tracking-tight">
                  {metric.value}
                </div>
                <div className="font-sans text-xs sm:text-sm uppercase tracking-wider text-brand-cream/75">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PATIENT EXPERIENCE - STORYTELLING */}
      <section className="py-24 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Visual Grid */}
            <div className="lg:col-span-5 space-y-8 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
              <div className="p-8 rounded-3xl bg-brand-white border border-brand-charcoal/5 shadow-sm relative z-10 space-y-6 max-w-sm mx-auto">
                <div className="flex items-center gap-x-3 text-brand-emerald font-serif font-medium">
                  <Activity className="h-5 w-5 text-brand-gold" />
                  Quality Calibration Check
                </div>
                <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                  Daily standard solutions run on clinical chemistry equipment to maintain tight calibration coefficients.
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand-emerald animate-ping" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-emerald">
                    System Standardized
                  </span>
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-brand-emerald-dark text-brand-cream shadow-xl border border-white/5 relative z-10 space-y-4 max-w-sm mx-auto mt-2 ml-4 sm:ml-12">
                <div className="text-xs uppercase tracking-widest text-brand-gold font-bold">Patient Protocol</div>
                <h4 className="font-serif text-lg font-medium">Secure Barcoded Tracking</h4>
                <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">
                  Samples are cataloged at the point of extraction with uniquely mapped identifier barcodes, preventing routing discrepancies.
                </p>
              </div>
            </div>

            {/* Story Copy */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 text-left">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Our Philosophy</span>
                <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-brand-charcoal">
                  Designed for Trust, Executed with Care
                </h2>
                <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed">
                  Diagnostics shouldn\'t feel clinical and cold. At Aaradhya, we\'ve restructured the testing journey to build complete confidence. We maintain a warm, welcoming environment while deploying automated testing platforms that ensure clinical reports are returned with the utmost integrity.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: 'Zero Compromise on Controls', desc: 'Every run is cataloged alongside calibrated reference solutions to check parameters before reports release.' },
                  { title: 'Empathetic Environment', desc: 'Comfortable waiting lounges, clear instructions, and gentle sample extraction processes.' },
                  { title: 'Direct Access', desc: 'Secure, immediate download links and transparent report logs accessible by your physician.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-x-4">
                    <CheckCircle2 className="h-5 w-5 text-brand-emerald shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-base font-semibold text-brand-charcoal">{item.title}</h4>
                      <p className="font-sans text-xs text-brand-charcoal/60 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EDITORIAL TESTIMONIALS */}
      <section className="py-24 bg-brand-white border-t border-b border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Patient Stories</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-brand-charcoal">
              Trusted by Local Families & Physicians
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Aaradhya sets the standard for laboratory precision. As a practicing clinician, I need reports that I can trust immediately. Their documentation is clear, accurate, and consistent.",
                author: "Dr. K. Balasubramanian",
                title: "Consultant Physician, Chidambaram"
              },
              {
                quote: "The environment is calm and welcoming, completely unlike typical clinical spaces. The staff explained the fasting instructions clearly and made my sample collection quick and painless.",
                author: "S. Meenakshi",
                title: "Patient"
              },
              {
                quote: "We brought our father for an echo scan and chest radiography. The technologists were extremely patient, gentle, and coordinated. We received the digital report on our phone before we got back home.",
                author: "A. Rajesh",
                title: "Son of Patient"
              }
            ].map((tst, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-brand-cream border border-brand-charcoal/5 flex flex-col justify-between h-[300px] relative hover:shadow-lg transition-all duration-300"
              >
                <div className="font-serif text-base italic text-brand-charcoal/80 leading-relaxed">
                  &ldquo;{tst.quote}&rdquo;
                </div>
                <div className="pt-6 border-t border-brand-charcoal/5">
                  <div className="font-serif text-sm font-semibold text-brand-charcoal">{tst.author}</div>
                  <div className="font-sans text-[10px] uppercase tracking-wider text-brand-gold font-semibold mt-1">
                    {tst.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CONVERSION CTA */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10 space-y-10">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-brand-charcoal">
              Empowering Your <br className="sm:hidden" />
              Health with <span className="italic">Clarity</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-charcoal/60 max-w-xl mx-auto leading-relaxed">
              Plan your checkup today. Fill out our simple online form to coordinate scheduling, or call our clinical desk directly.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-cream bg-brand-emerald hover:bg-brand-emerald-dark hover:shadow-lg transition-all duration-300 flex items-center gap-x-2"
            >
              Book an Appointment
              <Calendar className="h-3.5 w-3.5" />
            </Link>
            <a
              href="tel:+919360933128"
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-charcoal border border-brand-charcoal/10 hover:border-brand-charcoal bg-transparent transition-all duration-300 flex items-center gap-x-2"
            >
              <Users className="h-3.5 w-3.5" />
              Call Registry Desk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
