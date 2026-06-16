import React from 'react';
import { Metadata } from 'next';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock 
} from 'lucide-react';
import SEO from '@/components/SEO';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Book an Appointment / Contact Us | Aradhiya Scans & Lab",
  description: "Contact Aradhiya Scans & Lab in Chidambaram. Book appointments, find clinic timings, explore map locations, or consult for home collection services.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <SEO />
      <div className="bg-brand-cream min-h-screen py-12 lg:py-20 font-sans">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          
          {/* Header Block */}
          <div className="max-w-3xl text-left space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Appointment Desk</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-brand-charcoal">
              Coordinate Your Visit
            </h1>
            <p className="font-sans text-sm sm:text-base text-brand-charcoal/70 leading-relaxed">
              Use our quick interactive booking form to send an enquiry directly to our WhatsApp registry line, or visit our central clinical facility in Chidambaram.
            </p>
          </div>

          {/* SPLIT SCREEN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT COLUMN: INFO & MAP */}
            <div className="lg:col-span-5 bg-brand-white rounded-3xl border border-brand-charcoal/5 p-8 lg:p-10 shadow-sm flex flex-col justify-between space-y-8 text-left">
              
              {/* Contact Info blocks */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-medium text-brand-charcoal">Registry Details</h3>
                <ul className="space-y-4 text-xs sm:text-sm text-brand-charcoal/70">
                  <li className="flex items-start gap-x-3">
                    <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                    <span>
                      <strong>Aradhiya Scans & Lab</strong>
                      <br />
                      39B, Theradi Kovil Street,
                      <br />
                      (Opp.) Venus Matriculation School,
                      <br />
                      Chidambaram - 608001, Tamil Nadu, India
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <Phone className="h-5 w-5 text-brand-emerald shrink-0" />
                    <a href="tel:+919360933128" className="hover:text-brand-emerald-dark font-medium transition-colors">
                      +91 93609 33128
                    </a>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <Mail className="h-5 w-5 text-brand-emerald shrink-0" />
                    <a href="mailto:info@aradhiyascans.com" className="hover:text-brand-emerald-dark font-medium transition-colors">
                      info@aradhiyascans.com
                    </a>
                  </li>
                  <li className="flex items-start gap-x-3">
                    <Clock className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                    <span>
                      <strong>Clinical Schedule:</strong>
                      <br />
                      Mon - Sat: 07:30 AM - 08:00 PM
                      <br />
                      Sunday: 07:30 AM - 02:00 PM
                    </span>
                  </li>
                </ul>
              </div>

              {/* Styled Maps Embed */}
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-brand-charcoal/5 relative shadow-inner">
                {/* Embed pointer to Aradhiya Scans Google Maps Coordinate */}
                <iframe
                  title="Aradhiya Scans & Lab location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.893874312151!2d79.69248467479705!3d11.397395087711202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54c25f4625b597%3A0xe54d9f67a6d8881e!2sAaradhya%20Scans%20%26%20Lab!5e0!3m2!1sen!2sin!4v1717900000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-750"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href="https://maps.app.goo.gl/R6cBXenQDGwkfo1R6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-brand-cream border border-brand-charcoal/5 hover:border-brand-emerald/20 text-[10px] font-bold uppercase tracking-wider text-brand-charcoal transition-colors flex items-center gap-x-2"
                >
                  <MapPin className="h-3.5 w-3.5 text-brand-emerald" />
                  Get Directions in Google Maps
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: WHATSAPP APPOINTMENT FORM */}
            <ContactForm />

          </div>

        </div>
      </div>
    </>
  );
}
