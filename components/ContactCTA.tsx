import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_NAME, ADDRESS, PHONE, WORKING_HOURS } from '../constants';
import { Button } from './Button';

export const ContactCTA: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  return (
    <section id="contacts" className="py-24 relative bg-stone-100 overflow-hidden">
      {/* Background Texture Mockup */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-12 md:p-20 shadow-2xl border border-stone-100 inline-block max-w-4xl w-full"
        >
          <h2 className="text-5xl font-serif mb-4">{BRAND_NAME}</h2>
          <p className="text-xl italic font-serif text-stone-500 mb-12">Ваша красота - наша страсть</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-stone-800">
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-2">📍</span>
              <span className="text-sm font-medium">{ADDRESS}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-2">📞</span>
              <span className="text-sm font-medium">{PHONE}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-2">🕒</span>
              <span className="text-sm font-medium">{WORKING_HOURS}</span>
            </div>
          </div>

          <Button onClick={onBook} className="text-lg px-12 py-5">
             Записаться
          </Button>
        </motion.div>
      </div>
    </section>
  );
};