import React from 'react';
import { Search, ChevronDown, Plus, X } from 'lucide-react';

export const Bookings: React.FC = () => {
  return (
    <div className="bg-white p-4 lg:p-6 rounded-xl border border-stone-100 shadow-sm min-h-[500px]">
       <div className="flex flex-col gap-4 mb-6 lg:mb-8">
            <div>
                <h2 className="text-xl lg:text-2xl font-serif font-bold">Записи</h2>
                <p className="text-stone-400 text-xs lg:text-sm mt-1">Список всех записей клиентов</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
                 <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors">
                    <Plus size={18} /> <span className="whitespace-nowrap">Создать запись</span>
                </button>
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="Поиск..." 
                        className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-900"
                    />
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-stone-200 rounded-lg text-sm hover:bg-stone-50 bg-white whitespace-nowrap">
                    Все статусы <ChevronDown size={16} />
                </button>
            </div>
       </div>

       {/* Mobile Card View */}
       <div className="block md:hidden space-y-4">
         <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
           <div className="flex justify-between items-start mb-3">
             <div>
               <h3 className="font-medium text-stone-900">Stepan</h3>
               <p className="text-sm text-stone-600 mt-1">+996637742371</p>
             </div>
             <span className="bg-rose-500 text-white text-xs px-3 py-1 rounded-full font-bold">Подтверждена</span>
           </div>
           <div className="space-y-2 text-sm">
             <div><span className="text-stone-500">Услуга:</span> Маникюр</div>
             <div><span className="text-stone-500">Мастер:</span> Светлана</div>
             <div><span className="text-stone-500">Дата:</span> 30.11.2025, 15:30</div>
           </div>
           <div className="mt-3 flex justify-end">
             <button className="text-red-500 border border-red-500 rounded-full p-2 hover:bg-red-50">
               <X size={16} />
             </button>
           </div>
         </div>
       </div>

       {/* Desktop Table View */}
       <div className="hidden md:block overflow-x-auto">
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