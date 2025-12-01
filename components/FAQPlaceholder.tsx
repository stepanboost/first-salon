import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQPlaceholder: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl">
        <h2 className="text-3xl font-serif text-center mb-12">Часто задаваемые вопросы</h2>
        
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-b border-stone-200 pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === item ? null : item)}
                className="flex justify-between items-center w-full text-left py-2 hover:text-stone-600 transition-colors"
              >
                <span className="font-medium text-stone-900">Вопрос №{item}</span>
                <motion.div
                    animate={{ rotate: openIndex === item ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={18} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === item && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 pb-4 text-stone-500 text-sm">
                      Здесь будет ответ на вопрос №{item}.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};