import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT, ADDRESS, PHONE } from '../constants';
import { Button } from './Button';

export const Hero: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 space-y-8 z-10"
          >
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              {HERO_CONTENT.title}
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed max-w-md">
              {HERO_CONTENT.subtitle}
            </p>
            
            <div className="flex flex-col space-y-2 text-sm font-medium uppercase tracking-wider text-stone-500">
              <span>{ADDRESS}</span>
              <span>{PHONE}</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={onBook}>{HERO_CONTENT.ctaPrimary}</Button>
              <a href="#services">
                <Button variant="secondary">Услуги</Button>
              </a>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:w-1/2 w-full relative"
          >
            <div className="aspect-[3/4] md:aspect-[4/5] relative overflow-hidden bg-stone-200">
              {/* Placeholder for Interior Image */}
              <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt={HERO_CONTENT.imageLabel}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
              />
              {/* Label */}
              <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-widest">
                {HERO_CONTENT.imageLabel}
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-stone-100 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};