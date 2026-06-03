import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { PRODUCT_CATEGORIES } from '@/src/constants/data';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({});

  useEffect(() => {
    const rotatingCategories = PRODUCT_CATEGORIES.filter(
      (category) => Array.isArray(category.images) && category.images.length > 1
    );

    if (!rotatingCategories.length) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlides((current) => {
        const next = { ...current };

        rotatingCategories.forEach((category) => {
          const images = category.images ?? [category.image];
          const currentIndex = current[category.id] ?? 0;
          next[category.id] = (currentIndex + 1) % images.length;
        });

        return next;
      });
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

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
              <Link to={category.href ?? `/product/${category.id}`}>
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  {(category.images ?? [category.image]).map((image, imageIndex) => (
                    <img
                      key={image}
                      src={image}
                      alt={category.title}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                        imageIndex === (activeSlides[category.id] ?? 0)
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {(category.images?.length ?? 0) > 1 ? (
                    <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                      {category.images?.map((image, imageIndex) => (
                        <span
                          key={image}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            imageIndex === (activeSlides[category.id] ?? 0)
                              ? 'w-6 bg-white'
                              : 'w-2 bg-white/45'
                          }`}
                        />
                      ))}
                    </div>
                  ) : null}
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
