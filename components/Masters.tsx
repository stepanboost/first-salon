import React from 'react';
import { motion } from 'framer-motion';
import { MASTERS } from '../constants';
import { Button } from './Button';

export const Masters: React.FC<{ onBook: (service: string, master: string) => void }> = ({ onBook }) => {
  return (
    <section id="masters" className="py-24 bg-stone-900 text-stone-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif mb-4 text-white">Наши мастера</h2>
          <p className="text-stone-400">Ознакомьтесь с прайс-листом наших мастеров</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MASTERS.map((master, index) => (
            <motion.div
              key={master.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-stone-800 p-0 overflow-hidden relative hover:shadow-2xl hover:shadow-stone-900/50 transition-all duration-500"
            >
              {/* Avatar Placeholder */}
              <div className="h-64 bg-stone-700 w-full relative overflow-hidden">
                 <img 
                    src={`https://picsum.photos/400/400?random=${index + 10}&grayscale`} 
                    alt={master.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                 />
                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-stone-900 to-transparent">
                   <h3 className="text-2xl font-serif text-white">{master.name}</h3>
                   <p className="text-stone-400 text-xs tracking-widest uppercase">{master.role}</p>
                 </div>
              </div>

              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {master.services.map((service, idx) => (
                    <li key={idx} className="flex justify-between items-center text-sm border-b border-stone-700 pb-2">
                      <span className="text-stone-300">{service.name}</span>
                      <span className="text-white font-medium">{service.price}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="secondary" 
                  fullWidth 
                  onClick={() => onBook(master.services[0].name, master.name)}
                  className="opacity-90 hover:opacity-100"
                >
                  Записаться к мастеру
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};