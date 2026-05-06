import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '@/src/constants/data';
import * as LucideIcons from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-industrial-gray relative overflow-hidden">
      {/* Accent patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-industrial-accent/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-industrial-accent font-bold tracking-widest text-xs uppercase mb-4 block">The Kailashpati Advantage</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-industrial-blue mb-8 leading-tight">
              Why Global Industries <br /> <span className="text-industrial-accent">Trust Us</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              With over 15 years of industry presence, we have built a reputation for providing 
              genuine technical solutions, not just products. Our expert team ensures you get 
              the right specifications for your applications.
            </p>
            
            <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-lg border border-white">
               <div className="w-14 h-14 bg-industrial-accent/10 rounded-lg flex items-center justify-center">
                 <LucideIcons.MessageSquare size={28} className="text-industrial-accent" />
               </div>
               <div>
                  <h4 className="font-bold text-industrial-blue text-lg">Need Technical Advice?</h4>
                  <p className="text-gray-500 text-sm">Consult our engineers for custom specifications.</p>
               </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = (LucideIcons as any)[item.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-12 h-12 bg-industrial-gray rounded flex items-center justify-center text-industrial-accent mb-6 group-hover:bg-industrial-accent group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-industrial-blue text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
