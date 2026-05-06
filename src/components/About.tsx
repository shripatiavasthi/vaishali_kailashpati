import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" 
                  alt="Industrial Warehouse" 
                  className="rounded-2xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-10 -right-10 bg-industrial-accent p-12 rounded-2xl z-20 shadow-2xl hidden md:block">
                   <Award size={48} className="text-white mb-4" />
                   <p className="text-white font-bold text-lg leading-tight">ISO 9001:2015 <br /> Certified Supplier</p>
                </div>
                {/* Decorative dots */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#3b82f6_2px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-industrial-accent font-bold tracking-widest text-xs uppercase mb-4 block">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-industrial-blue mb-8 leading-tight">
              Supplying Engineering <br /> <span className="text-industrial-accent">Excellence</span> Since 2011
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Kailashpati Enterprises is a premiere industrial product trading house based in Ghaziabad. We specialize in the supply of high-perfomance electric motors, gearboxes, pumps, and automation drives.
            </p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              We serve as a critical bridge between global manufacturing giants like <span className="font-bold text-industrial-blue">Siemens, ABB, Crompton, and Kirloskar</span> and the diverse needs of Indian industries including SMEs, Large Manufacturing Plants, and Builders.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
               <div className="flex gap-4">
                  <div className="bg-industrial-gray p-3 rounded group-hover:bg-industrial-accent transition-colors">
                    <ShieldCheck className="text-industrial-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-industrial-blue">Genuine Products</h4>
                    <p className="text-sm text-gray-500">100% original manufacturer items with warranty.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="bg-industrial-gray p-3 rounded group-hover:bg-industrial-accent transition-colors">
                    <Users className="text-industrial-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-industrial-blue">Technical Support</h4>
                    <p className="text-sm text-gray-500">Dedicated engineering team for installation guidance.</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
