import React from 'react';
import { Star } from 'lucide-react';

export const ReviewsPlaceholder: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">Отзывы</span>
            <h2 className="text-3xl font-serif mt-2">Что говорят клиенты</h2>
        </div>
        
        {/* Slider UI Placeholder */}
        <div className="max-w-3xl mx-auto relative bg-white p-12 shadow-sm border border-stone-100 text-center">
            <div className="flex justify-center gap-1 text-stone-900 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <div className="h-20 flex items-center justify-center bg-stone-50 mb-6 rounded text-stone-400 italic font-serif text-lg">
                [Место для отзыва клиента]
            </div>
            <div className="font-medium uppercase text-xs tracking-widest text-stone-900">Клиент Салона</div>
            
            {/* Arrows mockup */}
            <div className="flex justify-center gap-4 mt-8">
                <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
                <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
            </div>
        </div>
      </div>
    </section>
  );
};