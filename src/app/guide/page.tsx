'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Droplet, 
  Clock, 
  Activity, 
  HelpCircle, 
  AlertCircle,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import SEO from '@/components/SEO';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function GuidePage() {
  const [activePrepTab, setActivePrepTab] = useState<'blood' | 'ct' | 'ecg' | 'urine'>('blood');
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      category: 'fasting',
      question: 'How many hours do I need to fast before a blood glucose or lipid test?',
      answer: 'A standard fasting window is 10 to 12 hours. During this period, you must not consume any food or beverages (such as tea, coffee, or juice). However, drinking plain water is highly encouraged to keep you hydrated.'
    },
    {
      category: 'fasting',
      question: 'Can I take my regular prescription medications while fasting?',
      answer: 'Yes, in most cases you can take your daily chronic medications with plain water. However, if you are diabetic and taking insulin or oral glucose-lowering drugs, consult your physician as these may need to be timed post-blood draw.'
    },
    {
      category: 'imaging',
      question: 'What should I wear for a digital X-Ray or CT scan?',
      answer: 'Wear loose, comfortable clothing without metallic buttons, zippers, or hooks. You will be asked to remove jewelry, hairpins, and glasses in the target scanning zone. If needed, we will provide a sterile clinical gown.'
    },
    {
      category: 'imaging',
      question: 'Is the contrast material used in CT scans safe?',
      answer: 'Contrast dyes are safe and are processed out of the body by the kidneys. Our technologists will review your kidney function (creatinine levels) and allergy history before administering contrast. Drinking plenty of water after the scan helps flush the dye.'
    },
    {
      category: 'cardiac',
      question: 'Do I need to fast or prepare differently for an Echocardiogram?',
      answer: 'No fasting is required for a standard transthoracic echocardiogram. You can eat and take medications normally. Wear a shirt that can be unbuttoned or slipped off easily to allow gel and transducer contact.'
    },
    {
      category: 'reports',
      question: 'How quickly will I receive my diagnostic results?',
      answer: 'Standard blood chemistry and urinalysis reports are compiled and verified within 4 to 6 hours. Specialized scans or hormone assays may take 12 to 24 hours. Digital reports are uploaded to your patient profile immediately.'
    }
  ];

  // Filter FAQs based on search input
  const filteredFaqs = faqs.filter(
    (faq) => 
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.category.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <>
      <SEO />
      <div className="bg-brand-cream min-h-screen py-12 lg:py-20 font-sans">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          
          {/* Header Block */}
          <div className="max-w-3xl text-left space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Patient Resources</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-brand-charcoal">
              Patient Preparation Center
            </h1>
            <p className="font-sans text-sm sm:text-base text-brand-charcoal/70 leading-relaxed">
              Correct preparation is key to test accuracy. Review our checklist guidelines or search our database of frequently asked patient questions.
            </p>
          </div>

          {/* SECTION 1: INTERACTIVE PREPARATION CHECKLISTS */}
          <section className="bg-brand-white rounded-3xl border border-brand-charcoal/5 p-8 lg:p-12 shadow-sm space-y-8">
            <div className="border-b border-brand-charcoal/5 pb-4 text-left">
              <h2 className="font-serif text-2xl font-medium text-brand-charcoal">
                Preparation Guidelines by Test Category
              </h2>
            </div>

            {/* Preparation Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'blood', label: 'Blood Pathology Tests' },
                { id: 'ct', label: 'CT Scan Imaging' },
                { id: 'ecg', label: 'ECG / Echo Cardiac' },
                { id: 'urine', label: 'Urinalysis Sample' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePrepTab(tab.id as any)}
                  className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                    activePrepTab === tab.id
                      ? 'bg-brand-emerald text-brand-cream border-transparent'
                      : 'bg-brand-cream text-brand-charcoal/70 border-brand-charcoal/5 hover:border-brand-emerald/20 hover:text-brand-charcoal'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Preparation Content Panel */}
            <div className="min-h-[250px] pt-4">
              <AnimatePresence mode="wait">
                {activePrepTab === 'blood' && (
                  <motion.div
                    key="blood-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left"
                  >
                    <div className="md:col-span-8 space-y-6">
                      <h3 className="font-serif text-xl font-medium text-brand-charcoal">Pathology Blood Draw Instructions</h3>
                      <div className="space-y-4">
                        {[
                          { title: 'Fasting Timing', desc: 'Maintain strict fast for 10 to 12 hours. Empty stomach values are required for Glucose and Lipid profile panels.' },
                          { title: 'Hydration', desc: 'Drink plenty of plain water leading up to the draw. Hydration increases venous volume and facilitates blood collection.' },
                          { title: 'Avoid Stimulants', desc: 'Do not smoke, consume alcohol, or drink black coffee/tea during the fasting window as they throw off liver and glucose metrics.' },
                          { title: 'Medications', desc: 'Take chronic blood pressure or heart medications as normal with water. Pause insulin or diabetes meds until after drawing.' }
                        ].map((step, idx) => (
                          <div key={idx} className="flex gap-x-3 text-xs leading-relaxed text-brand-charcoal/75">
                            <CheckCircle2 className="h-5 w-5 text-brand-emerald shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-brand-charcoal font-semibold">{step.title}:</strong> {step.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-4 bg-brand-cream p-6 rounded-2xl border border-brand-charcoal/5 space-y-3">
                      <AlertCircle className="h-6 w-6 text-brand-gold" />
                      <h4 className="font-serif text-sm font-semibold text-brand-charcoal">Crucial reminder</h4>
                      <p className="font-sans text-[11px] text-brand-charcoal/60 leading-relaxed">
                        Arrive at our Chidambaram center between 07:00 AM and 09:30 AM for fasting blood draws to ensure optimal diagnostic integrity and prompt return times.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activePrepTab === 'ct' && (
                  <motion.div
                    key="ct-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left"
                  >
                    <div className="md:col-span-8 space-y-6">
                      <h3 className="font-serif text-xl font-medium text-brand-charcoal">CT Scan (Computed Tomography) Staging</h3>
                      <div className="space-y-4">
                        {[
                          { title: 'Metal Removal', desc: 'Remove jewelry, watches, keys, glasses, hairpins, and clothes containing metal hooks/zippers around the scan target area.' },
                          { title: 'Contrast Preparation', desc: 'If contrast dye is scheduled, fast for 4 to 6 hours before the appointment. Plain water is allowed.' },
                          { title: 'Kidney Function Log', desc: 'Provide a recent serum creatinine log. Contrast is filtered by the kidneys, and we verify filtration capability first.' },
                          { title: 'Notify Pregnancy', desc: 'Inform our radiologists if you are pregnant. We utilize lead aprons and dose-minimizing shields, or schedule alternatives.' }
                        ].map((step, idx) => (
                          <div key={idx} className="flex gap-x-3 text-xs leading-relaxed text-brand-charcoal/75">
                            <CheckCircle2 className="h-5 w-5 text-brand-emerald shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-brand-charcoal font-semibold">{step.title}:</strong> {step.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-4 bg-brand-cream p-6 rounded-2xl border border-brand-charcoal/5 space-y-3">
                      <AlertCircle className="h-6 w-6 text-brand-gold" />
                      <h4 className="font-serif text-sm font-semibold text-brand-charcoal">Contrast Flushing</h4>
                      <p className="font-sans text-[11px] text-brand-charcoal/60 leading-relaxed">
                        If contrast is administered during your CT scan, ensure you drink 1.5 to 2 liters of water during the rest of the day to wash the contrast material out.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activePrepTab === 'ecg' && (
                  <motion.div
                    key="ecg-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left"
                  >
                    <div className="md:col-span-8 space-y-6">
                      <h3 className="font-serif text-xl font-medium text-brand-charcoal">ECG & Echocardiogram Tracing</h3>
                      <div className="space-y-4">
                        {[
                          { title: 'Clothing Choices', desc: 'Wear a comfortable button-down shirt. Electrodes must make direct contact with your chest area.' },
                          { title: 'Skin Creams', desc: 'Do not apply greasy skin lotions, oils, or moisturizers on your chest the morning of the scan as they block electrode adhesives.' },
                          { title: 'Caffeine Restrictions', desc: 'Avoid coffee, tea, energetic sodas, or nicotine for 4 hours before the test to ensure baseline heart rate readings.' }
                        ].map((step, idx) => (
                          <div key={idx} className="flex gap-x-3 text-xs leading-relaxed text-brand-charcoal/75">
                            <CheckCircle2 className="h-5 w-5 text-brand-emerald shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-brand-charcoal font-semibold">{step.title}:</strong> {step.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-4 bg-brand-cream p-6 rounded-2xl border border-brand-charcoal/5 space-y-3">
                      <AlertCircle className="h-6 w-6 text-brand-gold" />
                      <h4 className="font-serif text-sm font-semibold text-brand-charcoal">Baseline Checks</h4>
                      <p className="font-sans text-[11px] text-brand-charcoal/60 leading-relaxed">
                        Rest quietly for 5 to 10 minutes in our waiting lounge before entering the cardiac suite to settle your pulse.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activePrepTab === 'urine' && (
                  <motion.div
                    key="urine-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left"
                  >
                    <div className="md:col-span-8 space-y-6">
                      <h3 className="font-serif text-xl font-medium text-brand-charcoal">Urinalysis Sample Collection</h3>
                      <div className="space-y-4">
                        {[
                          { title: 'Midstream Technique', desc: 'Always collect a midstream sample. Begin voiding into the toilet, block the flow, collect the middle portion in the container, and finish voiding.' },
                          { title: 'Hygienic Clean', desc: 'Wash hands and wipe genital tissues clean before starting to draw sample to prevent skin bacterial contamination.' },
                          { title: 'Container Seals', desc: 'Lids must be screwed on tightly and sealed immediately. Hand the container back at the collection desk within 15 minutes of drawing.' }
                        ].map((step, idx) => (
                          <div key={idx} className="flex gap-x-3 text-xs leading-relaxed text-brand-charcoal/75">
                            <CheckCircle2 className="h-5 w-5 text-brand-emerald shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-brand-charcoal font-semibold">{step.title}:</strong> {step.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-4 bg-brand-cream p-6 rounded-2xl border border-brand-charcoal/5 space-y-3">
                      <AlertCircle className="h-6 w-6 text-brand-gold" />
                      <h4 className="font-serif text-sm font-semibold text-brand-charcoal">Contamination Risk</h4>
                      <p className="font-sans text-[11px] text-brand-charcoal/60 leading-relaxed">
                        Urinalysis tests are highly sensitive. Following the midstream technique prevents false bacterial counts and ensures clean chemical metrics.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* SECTION 2: FAQ KNOWLEDGE CENTER ACCORDIONS */}
          <section className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-brand-charcoal/5">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-brand-charcoal text-left">
                Patient Frequently Asked Questions
              </h2>

              {/* FAQ Search */}
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-charcoal/40" />
                <input
                  type="text"
                  placeholder="Search FAQ answers..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-brand-white border border-brand-charcoal/5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-emerald/30 focus:ring-1 focus:ring-brand-emerald/30 transition-all shadow-xs"
                />
              </div>
            </div>

            {/* Accordion List */}
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-brand-white rounded-2xl border border-brand-charcoal/5 overflow-hidden transition-all duration-300 hover:shadow-xs"
                    >
                      <button
                        onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                        className="w-full px-6 py-5 flex items-center justify-between gap-x-4 text-left cursor-pointer"
                      >
                        <span className="font-serif text-sm sm:text-base font-semibold text-brand-charcoal flex items-center gap-x-3">
                          <HelpCircle className="h-4.5 w-4.5 text-brand-emerald shrink-0" />
                          {faq.question}
                        </span>
                        <ChevronDown className={`h-4 w-4 text-brand-charcoal/40 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-brand-emerald' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-2 font-sans text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed border-t border-brand-charcoal/5">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              ) : (
                <div className="bg-brand-white p-12 rounded-2xl border border-brand-charcoal/5 text-center text-brand-charcoal/45 text-xs font-sans">
                  No frequently asked questions found. Reach our registry desk directly.
                </div>
              )}
            </div>
          </section>

          {/* SECTION 3: CALL TO REGISTRY ACTION */}
          <section className="bg-brand-emerald text-brand-cream rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-emerald-dark/30" />
            <div className="space-y-2 relative z-10">
              <h3 className="font-serif text-2xl lg:text-3xl font-medium">Still Have Questions?</h3>
              <p className="font-sans text-xs text-brand-cream/80 max-w-lg mx-auto leading-relaxed">
                Connect directly with our registry office at Chidambaram. Our support team can assist you with test descriptions, custom panel pricing, and requirements.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 relative z-10 pt-2">
              <a
                href="tel:+919360933128"
                className="px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-emerald bg-brand-cream hover:bg-brand-ivory transition-colors"
              >
                Call Support Desk
              </a>
              <button
                onClick={() => {
                  const phoneNumber = '919360933128';
                  const text = encodeURIComponent('Hello Aradhiya support, I have a question regarding diagnostic test preparation.');
                  window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
                }}
                className="px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-charcoal bg-brand-gold hover:bg-brand-gold-light transition-colors cursor-pointer"
              >
                Inquire on WhatsApp
              </button>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
