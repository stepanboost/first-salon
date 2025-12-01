import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants';

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group p-8 border border-stone-100 hover:border-stone-900 transition-colors duration-500 bg-stone-50 hover:bg-white"
            >
              <h3 className="text-xl font-serif mb-4 group-hover:translate-x-1 transition-transform duration-300">
                {benefit.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
              <div className="w-8 h-[1px] bg-stone-300 mt-6 group-hover:w-16 group-hover:bg-stone-900 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};