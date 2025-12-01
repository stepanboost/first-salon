import React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export const Products: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm min-h-[500px]">
        <div className="flex justify-between items-center mb-6">
             <div>
                <h2 className="text-2xl font-serif font-bold">Товары</h2>
                <p className="text-stone-400 text-sm mt-1">Список всех товаров салона. Количество отражает общий объем/запас товара.</p>
             </div>
             <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors">
                <Plus size={18} /> Добавить товар
             </button>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-stone-400 border-b border-stone-100">
                        <th className="pb-4 font-medium w-16">ID</th>
                        <th className="pb-4 font-medium">Название</th>
                        <th className="pb-4 font-medium">Цена за единицу(сом)</th>
                        <th className="pb-4 font-medium">Общий объем/запас</th>
                        <th className="pb-4 font-medium">Единица измерения</th>
                        <th className="pb-4 font-medium">Дата добавления</th>
                        <th className="pb-4 font-medium text-right">Действия</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    <tr className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                         <td className="py-4 text-stone-400">1</td>
                         <td className="py-4 font-medium">1212</td>
                         <td className="py-4">1212121</td>
                         <td className="py-4">202</td>
                         <td className="py-4">Миллилитры</td>
                         <td className="py-4">29.11.2025</td>
                         <td className="py-4 text-right">
                            <div className="flex justify-end gap-3">
                                <button className="text-stone-400 hover:text-stone-900"><Edit2 size={18} /></button>
                                <button className="text-stone-400 hover:text-red-500"><Trash2 size={18} /></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};