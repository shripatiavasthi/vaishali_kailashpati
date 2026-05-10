import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919999958813';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    productRequirement: '',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = [
      'Hello Kailashpati Enterprises, I would like to request an RFQ.',
      '',
      `Full Name: ${formData.fullName || '-'}`,
      `Company Name: ${formData.companyName || '-'}`,
      `Phone: ${formData.phone || '-'}`,
      `Email: ${formData.email || '-'}`,
      `Product Requirement: ${formData.productRequirement || '-'}`,
      `Requirements / Message: ${formData.message || '-'}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 bg-industrial-blue rounded-3xl overflow-hidden shadow-2xl">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 p-12 bg-industrial-accent text-white flex flex-col justify-between relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
             
             <div className="relative z-10">
               <h2 className="text-3xl font-display font-bold mb-8">Kailashpati <br /> Enterprises</h2>
               <p className="text-white/80 mb-12">
                 Visit our experience center or warehouse to discuss bulk supply requirements and see our ready inventory.
               </p>
               
               <div className="space-y-8">
                 <div className="flex items-start gap-4">
                   <div className="bg-white/20 p-2.5 rounded-lg">
                     <MapPin size={22} />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-white/60">HQ Address</h4>
                     <p className="text-lg font-medium leading-snug">
                       172, GT Road, Opposite Delhi Gate, <br />
                       Ghaziabad, UP – 201002
                     </p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-white/20 p-2.5 rounded-lg">
                     <Phone size={22} />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-white/60">Phone</h4>
                     <p className="text-lg font-medium">+91-9873739966</p>
                     <p className="text-lg font-medium">+91-9999958813</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-white/20 p-2.5 rounded-lg">
                     <Mail size={22} />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-white/60">Email</h4>
                     <p className="text-lg font-medium">sales@kailashpati.com</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="mt-12 pt-12 border-t border-white/20">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white text-industrial-accent w-full py-4 rounded-xl justify-center font-bold shadow-lg transition-transform active:scale-95"
                >
                  <MessageCircle size={24} />
                  WHATSAPP INQUIRY
                </a>
             </div>
          </div>

          {/* Form Section */}
          <div id="enquiry" className="lg:col-span-3 p-12 bg-white">
            <h3 className="text-3xl font-display font-bold text-industrial-blue mb-2">Request an RFQ</h3>
            <p className="text-gray-500 mb-10">Fill the form below and our technical sales team will assist you within 2 business hours.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-industrial-blue uppercase tracking-wider">FullName</label>
                  <input 
                    name="fullName"
                    type="text" 
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-industrial-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-industrial-blue uppercase tracking-wider">Company Name</label>
                  <input 
                    name="companyName"
                    type="text" 
                    placeholder="Enter Company"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-industrial-accent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-industrial-blue uppercase tracking-wider">Phone</label>
                  <input 
                    name="phone"
                    type="tel" 
                    placeholder="+91-98xxx-xxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-industrial-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-industrial-blue uppercase tracking-wider">Email</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-industrial-accent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-industrial-blue uppercase tracking-wider">Product Requirement</label>
                <select
                  name="productRequirement"
                  value={formData.productRequirement}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-industrial-accent transition-all"
                >
                  <option value="">Select Category</option>
                  <option>Electric Motors</option>
                  <option>Gearboxes</option>
                  <option>Pumps</option>
                  <option>VFDs / Automation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-industrial-blue uppercase tracking-wider">Requirements / Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  placeholder="Tell us about your technical specifications..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-industrial-accent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-industrial-blue hover:bg-industrial-blue/90 text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95 group"
              >
                SUBMIT RFQ
                <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
