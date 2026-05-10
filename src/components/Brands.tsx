import React from 'react';
import { BRANDS } from '@/src/constants/data';
import { motion } from 'motion/react';

const Brands = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <h4 className="text-gray-400 font-bold text-xs uppercase tracking-[0.3em]">Partner Brands</h4>
      </div>
      
      <div className="flex whitespace-nowrap">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex items-center gap-16 pr-16"
        >
          {[...BRANDS, ...BRANDS].map((brand, idx) => (
            <div key={idx} className="flex-shrink-0">
              <div className="flex h-12 w-28 items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 max-w-28 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
