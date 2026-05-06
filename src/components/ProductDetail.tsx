import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCT_CATEGORIES } from '@/src/constants/data';
import { ArrowLeft, CheckCircle2, FileText, Settings, ShieldCheck } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCT_CATEGORIES.find(p => p.id === id);

  if (!product) return <div>Product Not Found</div>;

  return (
    <div className="min-h-screen bg-industrial-gray pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-industrial-accent font-bold mb-8 hover:translate-x-1 transition-transform">
          <ArrowLeft size={20} />
          BACK TO PORTFOLIO
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[600px]"
          >
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="space-y-8">
            <div>
              <span className="text-industrial-accent font-bold text-sm tracking-[0.25em] uppercase mb-4 block">Product Category</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-industrial-blue mb-4">{product.title}</h1>
              <p className="text-gray-500 text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pb-8 border-b border-gray-100">
               <div className="flex items-start gap-3">
                 <CheckCircle2 className="text-industrial-accent flex-shrink-0" size={24} />
                 <span className="text-sm font-medium text-gray-700">OEM Specified Compliance</span>
               </div>
               <div className="flex items-start gap-3">
                 <ShieldCheck className="text-industrial-accent flex-shrink-0" size={24} />
                 <span className="text-sm font-medium text-gray-700">Original Manufacturer Warranty</span>
               </div>
               <div className="flex items-start gap-3">
                 <Settings className="text-industrial-accent flex-shrink-0" size={24} />
                 <span className="text-sm font-medium text-gray-700">ISO Certified Build Quality</span>
               </div>
               <div className="flex items-start gap-3">
                 <FileText className="text-industrial-accent flex-shrink-0" size={24} />
                 <span className="text-sm font-medium text-gray-700">Full Technical Documentation</span>
               </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-industrial-blue tracking-wide uppercase text-sm">Key Specifications</h4>
              <ul className="space-y-2">
                <li className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Standard</span>
                  <span className="font-bold text-industrial-blue text-sm">IEC / IS Standards</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Efficiency Class</span>
                  <span className="font-bold text-industrial-blue text-sm">Up to IE4</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-gray-500 text-sm">Delivery Time</span>
                  <span className="font-bold text-industrial-blue text-sm">Ready Stock / 1-2 Weeks</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
               <a 
                href="/#contact"
                className="flex-1 bg-industrial-accent hover:bg-industrial-accent/90 text-white text-center py-5 rounded-xl font-bold shadow-lg shadow-blue-500/20"
               >
                 REQUEST QUOTATION
               </a>
               <button className="flex-1 bg-white border border-gray-200 text-industrial-blue py-5 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                 DOWNLOAD DATASHEET
               </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
