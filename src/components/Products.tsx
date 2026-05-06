import React from 'react';
import { motion } from 'motion/react';
import { PRODUCT_CATEGORIES } from '@/src/constants/data';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 bg-industrial-gray rounded border border-gray-200"
          >
            <span className="text-industrial-accent text-xs font-bold tracking-[0.2em] uppercase">Product Portfolio</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-industrial-blue mb-6">
            Precision Solutions for <br /> Every <span className="text-industrial-accent">Requirement</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500">
            We provide a comprehensive range of industrial power transmission components sourced from the world's leading engineering brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/product/${category.id}`}>
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-8 border border-gray-100 border-t-0 rounded-b-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                  <h3 className="text-xl font-display font-bold text-industrial-blue mb-4 group-hover:text-industrial-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-industrial-accent font-bold text-sm tracking-wide">
                    VIEW DETAILS
                    <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

