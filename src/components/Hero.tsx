import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Settings, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden industrial-gradient">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 border-[40px] border-white rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 border-[30px] border-industrial-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-industrial-accent/20 border border-industrial-accent/30 rounded-full px-4 py-1.5 mb-6">
              <Zap size={16} className="text-industrial-accent" />
              <span className="text-industrial-accent text-sm font-bold tracking-wide uppercase italic">Authorized Industrial Partner</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Powering Industrial <br />
              <span className="text-industrial-accent">Progress</span> with <br />
              Precision
            </h1>
            
            <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
              Your trusted partner for mission-critical power transmission and automation solutions. 
              Supplying world-class electric motors, gearboxes, and VFDs to India's leading industries.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#enquiry"
                className="bg-industrial-accent hover:bg-blue-600 text-white px-8 py-4 rounded font-bold transition-all shadow-xl shadow-blue-500/25 flex items-center gap-3"
              >
                REQUEST QUOTE
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#products"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded font-bold transition-all"
              >
                EXPLORE PRODUCTS
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
               <Shield size={32} className="text-white" />
               <Settings size={32} className="text-white" />
               <div className="h-8 w-px bg-white/20"></div>
               <div className="text-white/60 text-sm font-medium">
                 Authorized Supplier of <br /> Siemens, ABB & Crompton
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Industrial Engineering" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-blue/80 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-xl">
                 <div className="flex items-center gap-4 mb-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-white font-bold text-sm tracking-widest uppercase">Live Project Support</span>
                 </div>
                 <p className="text-white/80 text-sm italic leading-snug">
                   "Supplying over 500+ motors to the leading chemical plants in Uttar Pradesh this quarter."
                 </p>
              </div>
            </div>
            
            {/* Floating Achievement */}
            <div className="absolute -top-6 -right-6 glass-card p-5 rounded-xl shadow-2xl border border-white/20 z-20">
               <span className="block text-3xl font-display font-bold text-white mb-1">15+</span>
               <span className="text-industrial-accent text-xs font-bold uppercase tracking-widest">Years Expertise</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
