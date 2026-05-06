import React from 'react';
import { motion } from 'motion/react';
import { INDUSTRIES } from '@/src/constants/data';
import * as LucideIcons from 'lucide-react';

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-industrial-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Industries We <span className="text-industrial-accent">Serve</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our products power a wide spectrum of industrial sectors across India, 
            contributing to infrastructure development and manufacturing excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, index) => {
            const Icon = (LucideIcons as any)[industry.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-industrial-accent transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-industrial-accent/10 rounded flex items-center justify-center text-industrial-accent mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-white font-bold text-lg leading-tight uppercase tracking-wide">
                  {industry.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
