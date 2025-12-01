import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { BRAND_NAME, NAV_LINKS } from '../constants';
import { Button } from './Button';

export const Header: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Adjust header styles on scroll
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-serif font-bold tracking-widest uppercase z-50">
            <a href="#">{BRAND_NAME}</a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm tracking-widest hover:text-stone-500 transition-colors uppercase font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action */}
          <div className="hidden md:block">
            <Button onClick={onBook} variant={isScrolled ? 'primary' : 'outline'} className="text-xs px-6 py-3">
              Записаться
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-stone-50 z-40 md:hidden flex flex-col justify-center items-center space-y-8"
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        {NAV_LINKS.map((link) => (
          <a 
            key={link.label} 
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif tracking-widest hover:text-stone-500 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </motion.div>

      {/* Mobile Floating Button */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 right-6 z-30 md:hidden"
      >
        <button 
          onClick={onBook}
          className="w-14 h-14 rounded-full bg-stone-900 text-white flex items-center justify-center shadow-xl"
        >
          <Calendar size={24} />
        </button>
      </motion.div>
    </>
  );
};