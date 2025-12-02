import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../contexts/DataContext';
import { Button } from './Button';

export const Services: React.FC<{ onBook: (service: string) => void }> = ({ onBook }) => {
  const { services } = useData();
  
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif mb-4">Наши услуги</h2>
          <p className="text-stone-500">Широкий спектр услуг красоты от профессиональных мастеров</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-stone-50 p-10 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-stone-200 mb-6 flex items-center justify-center">
                 <span className="text-stone-400 text-lg font-serif">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-serif mb-8">{service.name}</h3>
              <div className="mt-auto">
                <Button 
                  variant="outline" 
                  onClick={() => onBook(service.name)}
                  className="text-xs px-6"
                >
                  Записаться
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};