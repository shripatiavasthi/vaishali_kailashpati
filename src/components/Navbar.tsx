import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/#products' },
    { name: 'About Us', href: '/#about' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4 shadow-sm backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-industrial-accent rounded flex items-center justify-center text-white font-bold text-xl">K</div>
            <div>
              <h1 className={cn(
                "font-display font-bold text-xl leading-tight tracking-tight",
                scrolled ? "text-industrial-blue" : "text-white"
              )}>
                KAILASHPATI
              </h1>
              <p className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-semibold",
                scrolled ? "text-industrial-accent" : "text-blue-200"
              )}>Enterprises</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-medium transition-colors hover:text-industrial-accent text-sm",
                    scrolled ? "text-gray-700" : "text-white/90"
                  )}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "font-medium transition-colors hover:text-industrial-accent text-sm",
                    scrolled ? "text-gray-700" : "text-white/90"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="flex items-center gap-4">
              <button className={cn(
                 "p-2 rounded-full transition-colors",
                 scrolled ? "text-gray-500 hover:bg-gray-100" : "text-white/70 hover:bg-white/10"
              )}>
                <Search size={20} />
              </button>
              <a 
                href="#enquiry" 
                className="bg-industrial-accent text-white px-5 py-2.5 rounded font-semibold text-sm transition-transform active:scale-95 shadow-lg shadow-blue-500/20"
              >
                GET QUOTE
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                scrolled ? "text-industrial-blue" : "text-white"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3 flex flex-col gap-4">
                <a 
                  href="#enquiry" 
                  onClick={() => setIsOpen(false)}
                  className="bg-industrial-accent text-white py-3 rounded text-center font-bold tracking-wide"
                >
                  GET A QUOTE
                </a>
                <div className="flex flex-col gap-2 py-2">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={18} className="text-industrial-accent" />
                    <span className="text-sm font-medium">+91-9873739966</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={18} className="text-industrial-accent" />
                    <span className="text-sm font-medium">sales@kailashpati.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
