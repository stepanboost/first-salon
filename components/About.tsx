import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">О салоне</span>
          <h2 className="text-4xl md:text-5xl font-serif">
            {HERO_CONTENT.title}
          </h2>
          <div className="w-px h-16 bg-stone-900 mx-auto opacity-20"></div>
          <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-serif italic">
             "{HERO_CONTENT.subtitle}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};