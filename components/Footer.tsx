import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { BRAND_NAME, ADDRESS, PHONE, WORKING_HOURS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 text-sm">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-white font-serif text-xl mb-2">{BRAND_NAME}</h3>
          <p>© {new Date().getFullYear()} Все права защищены</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
           <span>{ADDRESS}</span>
           <span>{PHONE}</span>
           <span>{WORKING_HOURS}</span>
        </div>

        <div className="flex gap-4">
          <div className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors cursor-pointer">
            <Instagram size={18} />
          </div>
          <div className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors cursor-pointer">
            <Facebook size={18} />
          </div>
          <div className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 transition-colors cursor-pointer">
            <Twitter size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
};