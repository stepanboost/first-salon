import React from 'react';
import { Search, ChevronDown, Plus, X } from 'lucide-react';

export const Bookings: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm min-h-[500px]">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
                <h2 className="text-2xl font-serif font-bold">Записи</h2>
                <p className="text-stone-400 text-sm mt-1">Список всех записей клиентов</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto items-center">
                 <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors whitespace-nowrap">
                    <Plus size={18} /> Создать запись
                </button>
                <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="Поиск по имени, телефону, услуге..." 
                        className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-900"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-lg text-sm hover:bg-stone-50 bg-white whitespace-nowrap">
                    Все статусы <ChevronDown size={16} />
                </button>
            </div>
       </div>

       <div className="overflow-x-auto">
         <table className="w-full">
            <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-stone-400 border-b border-stone-100">
                    <th className="pb-4 font-medium">Клиент</th>
                    <th className="pb-4 font-medium">Телефон</th>
                    <th className="pb-4 font-medium">Услуга</th>
                    <th className="pb-4 font-medium">Мастер</th>
                    <th className="pb-4 font-medium">Дата и время</th>
                    <th className="pb-4 font-medium">Статус</th>
                    <th className="pb-4 font-medium text-right">Действия</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                    <td className="py-4 font-medium">Stepan</td>
                    <td className="py-4 text-stone-600">+996637742371</td>
                    <td className="py-4">Маникюр</td>
                    <td className="py-4">Светлана</td>
                    <td className="py-4 text-stone-600">30.11.2025, 15:30</td>
                    <td className="py-4">
                        <span className="bg-rose-500 text-white text-xs px-3 py-1 rounded-full font-bold">Подтверждена</span>
                    </td>
                    <td className="py-4 text-right">
                         <button className="text-red-500 border border-red-500 rounded-full p-1 hover:bg-red-50">
                             <X size={14} />
                         </button>
                    </td>
                </tr>
            </tbody>
         </table>
       </div>
    </div>
  );
};