'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function BookingFAB() {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = '919360933128'; // Standard Tamil Nadu code + Aaradhya primary phone placeholder
    const text = encodeURIComponent(
      'Hello Aaradhya Scans & Lab, Chidambaram. I would like to book an appointment / enquire about diagnostic services.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.8 }}
      onClick={handleWhatsAppRedirect}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center gap-x-2 px-5 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-cream bg-[#25D366] hover:bg-[#20ba5a] shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 group cursor-pointer"
      title="Chat on WhatsApp"
    >
      <MessageSquare className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out">
        Chat & Book
      </span>
    </motion.button>
  );
}
