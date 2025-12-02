import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Button } from './Button';
import { useData } from '../contexts/DataContext';
import { ModalState, BookingFormData } from '../types';

interface ModalBookingProps {
  isOpen: boolean;
  onClose: () => void;
  initialState: Partial<ModalState>;
}

export const ModalBooking: React.FC<ModalBookingProps> = ({ isOpen, onClose, initialState }) => {
  const { services, masters } = useData();
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    service: initialState.preselectedService || (services[0]?.name || ''),
    master: initialState.preselectedMaster || '',
    time: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        service: initialState.preselectedService || prev.service,
        master: initialState.preselectedMaster || prev.master,
      }));
      setIsSubmitted(false);
    }
  }, [isOpen, initialState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white shadow-2xl overflow-hidden p-8 md:p-10"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 transition-colors"
          >
            <X size={24} />
          </button>

          {!isSubmitted ? (
            <>
              <h2 className="text-3xl font-serif text-center mb-2">Записаться</h2>
              <p className="text-center text-stone-500 mb-8 font-sans text-sm">Заполните форму ниже, и мы свяжемся с вами.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Имя</label>
                  <input 
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Телефон</label>
                  <input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                    placeholder="+996 (XXX) XX-XX-XX"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Услуга</label>
                    <div className="relative">
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full border-b border-stone-300 py-2 pr-8 focus:outline-none focus:border-stone-900 transition-colors bg-transparent appearance-none"
                      >
                        {services.map(s => (
                          <option key={s.id} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Мастер (опционально)</label>
                    <select 
                      value={formData.master}
                      onChange={(e) => setFormData({...formData, master: e.target.value})}
                      className="w-full border-b border-stone-300 py-2 pr-8 focus:outline-none focus:border-stone-900 transition-colors bg-transparent appearance-none"
                    >
                      <option value="">Любой мастер</option>
                      {masters.map(m => (
                        <option key={m.id} value={m.name}>{m.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                   <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Желаемое время</label>
                   <input 
                    type="text"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                    placeholder="Например: Завтра в 14:00"
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" fullWidth>Отправить заявку</Button>
                </div>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-10"
            >
              <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-serif mb-4">Заявка отправлена</h3>
              <p className="text-stone-500 mb-8">Мы свяжемся с вами в ближайшее время для подтверждения записи.</p>
              <Button onClick={onClose} variant="outline">Закрыть</Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};