import React from 'react';
import { Mail, Phone, MapPin, Youtube, Linkedin, Facebook, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-industrial-gray text-industrial-blue pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-industrial-blue text-white rounded flex items-center justify-center font-bold">K</div>
              <h2 className="font-display font-bold text-xl tracking-tight">KAILASHPATI</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Leading the way in industrial automation and power transmission supply. Providing precision engineering products to factories across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:text-industrial-accent transition-colors shadow-sm">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:text-industrial-accent transition-colors shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:text-industrial-accent transition-colors shadow-sm">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-industrial-accent">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-500 hover:text-industrial-accent transition-colors text-sm font-medium">About Us</a></li>
              <li><a href="#products" className="text-gray-500 hover:text-industrial-accent transition-colors text-sm font-medium">Product range</a></li>
              <li><a href="#industries" className="text-gray-500 hover:text-industrial-accent transition-colors text-sm font-medium">Industries Served</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-industrial-accent transition-colors text-sm font-medium">Technical Support</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-industrial-accent transition-colors text-sm font-medium">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-industrial-accent">Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-industrial-accent transition-colors text-sm font-medium">Electric Motors</a></li>
              <li><a href="#" className="text-gray-500 hover:text-industrial-accent transition-colors text-sm font-medium">Helical Gearboxes</a></li>
              <li><a href="#" className="text-gray-500 hover:text-industrial-accent transition-colors text-sm font-medium">Industrial Pumps</a></li>
              <li><a href="#" className="text-gray-500 hover:text-industrial-accent transition-colors text-sm font-medium">AC Drives / VFD</a></li>
              <li><a href="#" className="text-gray-500 hover:text-industrial-accent transition-colors text-sm font-medium">Automation PLCs</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-display font-bold text-lg uppercase tracking-widest text-industrial-accent">Resources</h4>
            <button className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-4 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all w-full justify-center">
              <Download size={18} />
              DOWNLOAD CATALOGUE
            </button>
            <div className="flex items-center gap-3 text-sm text-gray-500">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               System Status: Active Supply
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs font-medium">
            © 2026 Kailashpati Enterprises. All Rights Reserved. Designed for Industrial Excellence.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 text-xs hover:text-industrial-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-xs hover:text-industrial-accent transition-colors">Terms of Supply</a>
            <a href="#" className="text-gray-400 text-xs hover:text-industrial-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
