'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  User, 
  FileText, 
  Calendar, 
  MessageSquare, 
  AlertCircle, 
  CheckCircle2 
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    testType: 'routine-blood',
    date: '',
    time: 'morning',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    date: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: '', phone: '', date: '' };

    if (!formData.name.trim()) {
      errors.name = 'Patient name is required.';
      valid = false;
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Contact phone number is required.';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-+]/g, '').slice(-10))) {
      errors.phone = 'Please enter a valid 10-digit number.';
      valid = false;
    }
    if (!formData.date) {
      errors.date = 'Preferred appointment date is required.';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Compile prefilled WhatsApp text parameters
    const testLabels: { [key: string]: string } = {
      'routine-blood': 'Routine Blood / Pathology Test',
      'ct-scan': 'Computed Tomography (CT Scan)',
      'digital-xray': 'Digital Radiography (X-Ray)',
      'echocardiography': 'Echocardiography (Eco)',
      'sonomammography': 'Sonomammography Breast Scan',
      'health-package': 'Preventive Health Package',
      'custom-panel': 'Other / Custom Panel'
    };

    const selectedTest = testLabels[formData.testType] || formData.testType;
    const timeLabel = formData.time === 'morning' ? 'Morning (07:30 AM - 12:00 PM)' : 'Afternoon/Evening (12:00 PM - 08:00 PM)';

    const text = encodeURIComponent(
      `Hello Aradhiya Scans & Lab, Chidambaram.\n\n` +
      `I would like to book a diagnostic appointment:\n` +
      `• *Patient Name:* ${formData.name}\n` +
      `• *Contact Phone:* ${formData.phone}\n` +
      `• *Diagnostic Test:* ${selectedTest}\n` +
      `• *Preferred Date:* ${formData.date}\n` +
      `• *Preferred Time:* ${timeLabel}\n` +
      `• *Additional Notes:* ${formData.message || 'None'}\n\n` +
      `Please coordinate the slot confirmation.`
    );

    const phoneNumber = '919360933128'; // Primary Aradhiya Scans Chidambaram contact line
    
    // Trigger successful animation state
    setIsSuccess(true);
    
    // Open WhatsApp prefill route in a new tab
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
      setIsSuccess(false);
    }, 1200);
  };

  return (
    <div className="lg:col-span-7 bg-brand-white rounded-3xl border border-brand-charcoal/5 p-8 lg:p-10 shadow-sm text-left flex flex-col justify-between">
      <div className="space-y-6">
        <div className="space-y-1">
          <h3 className="font-serif text-2xl font-medium text-brand-charcoal">Request Booking</h3>
          <p className="font-sans text-xs text-brand-charcoal/50">
            Submit the details below to open a pre-filled booking verification text direct on WhatsApp.
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-5">
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">
                Patient Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-charcoal/30" />
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="e.g., Sundaram Balaji"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 text-xs bg-brand-cream rounded-xl border focus:outline-none transition-all ${
                    formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-brand-charcoal/5 focus:border-brand-emerald/30'
                  }`}
                />
              </div>
              {formErrors.name && (
                <p className="text-[10px] text-red-500 flex items-center gap-x-1 mt-0.5">
                  <AlertCircle className="h-3 w-3" /> {formErrors.name}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">
                Mobile Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-charcoal/30" />
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="e.g., 9876543210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 text-xs bg-brand-cream rounded-xl border focus:outline-none transition-all ${
                    formErrors.phone ? 'border-red-500 focus:border-red-500' : 'border-brand-charcoal/5 focus:border-brand-emerald/30'
                  }`}
                />
              </div>
              {formErrors.phone && (
                <p className="text-[10px] text-red-500 flex items-center gap-x-1 mt-0.5">
                  <AlertCircle className="h-3 w-3" /> {formErrors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Diagnostic Category */}
          <div className="space-y-1">
            <label htmlFor="testType" className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">
              Required Diagnostics Category
            </label>
            <select
              id="testType"
              name="testType"
              value={formData.testType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 text-xs bg-brand-cream rounded-xl border border-brand-charcoal/5 focus:outline-none focus:border-brand-emerald/30 text-brand-charcoal cursor-pointer"
            >
              <option value="routine-blood">Routine Blood / Pathology Test</option>
              <option value="ct-scan">Computed Tomography (CT Scan)</option>
              <option value="digital-xray">Digital Radiography (X-Ray)</option>
              <option value="echocardiography">Echocardiography (Eco)</option>
              <option value="sonomammography">Sonomammography Breast Scan</option>
              <option value="health-package">Preventive Health Package</option>
              <option value="custom-panel">Other / Custom Panel</option>
            </select>
          </div>

          {/* Row 3: Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="date" className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">
                Preferred Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-charcoal/30 pointer-events-none" />
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 text-xs bg-brand-cream rounded-xl border focus:outline-none transition-all cursor-pointer ${
                    formErrors.date ? 'border-red-500 focus:border-red-500' : 'border-brand-charcoal/5 focus:border-brand-emerald/30'
                  }`}
                />
              </div>
              {formErrors.date && (
                <p className="text-[10px] text-red-500 flex items-center gap-x-1 mt-0.5">
                  <AlertCircle className="h-3 w-3" /> {formErrors.date}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="time" className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">
                Time Slot Preferences
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-xs bg-brand-cream rounded-xl border border-brand-charcoal/5 focus:outline-none focus:border-brand-emerald/30 text-brand-charcoal cursor-pointer"
              >
                <option value="morning">Morning (07:30 AM - 12:00 PM)</option>
                <option value="afternoon">Afternoon/Evening (12:00 PM - 08:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Row 4: Custom Message */}
          <div className="space-y-1">
            <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">
              Additional Notes or Inquiries
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-4 h-4 w-4 text-brand-charcoal/30" />
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="List symptoms, previous scans, or custom test parameters here..."
                value={formData.message}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 text-xs bg-brand-cream rounded-xl border border-brand-charcoal/5 focus:outline-none focus:border-brand-emerald/30 transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-cream bg-[#25D366] hover:bg-[#20ba5a] shadow-md hover:shadow-lg transition-all duration-350 flex items-center justify-center gap-x-2 cursor-pointer mt-4 border-none"
          >
            <MessageSquare className="h-4 w-4 shrink-0" />
            Open & Book on WhatsApp
          </button>
        </form>
      </div>

      {/* Status messages */}
      {isSuccess && (
        <div className="mt-4 p-4 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/10 text-brand-emerald text-xs flex items-center gap-x-2 animate-pulse justify-center">
          <CheckCircle2 className="h-4 w-4" />
          <span>Redirecting to WhatsApp to send prefilled parameters...</span>
        </div>
      )}
    </div>
  );
}
