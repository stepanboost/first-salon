import React from 'react';
import { Search, Edit2, ChevronDown } from 'lucide-react';

export const Users: React.FC = () => {
  return (
    <div className="bg-white p-4 lg:p-6 rounded-xl border border-stone-100 shadow-sm min-h-[500px]">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
                <h2 className="text-2xl font-serif font-bold">Клиенты</h2>
                <p className="text-stone-400 text-sm mt-1">Список всех клиентов салона</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="Поиск по имени или телефону..." 
                        className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-900"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-lg text-sm hover:bg-stone-50">
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
             <span className="bg-rose-500 text-white text-xs px-2 py-1 rounded-md">Капризный</span>
           </div>
           <div className="text-xs text-stone-500 mb-3">Дата регистрации: 29.11.2025</div>
           <div className="flex gap-2 items-center">
             <button className="p-1 hover:text-stone-900 text-stone-400"><Edit2 size={16} /></button>
             <div className="flex border border-stone-200 rounded overflow-hidden flex-1">
               <button className="flex-1 px-2 py-1 text-xs hover:bg-stone-100 border-r border-stone-200">Новый</button>
               <button className="flex-1 px-2 py-1 text-xs hover:bg-stone-100 border-r border-stone-200">Постоянный</button>
               <button className="flex-1 px-2 py-1 text-xs hover:bg-stone-100 text-stone-400">Капризный</button>
             </div>
           </div>
         </div>
       </div>

       {/* Desktop Table View */}
       <div className="hidden md:block overflow-x-auto">
         <table className="w-full">
            <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-stone-400 border-b border-stone-100">
                    <th className="pb-4 font-medium">Имя</th>
                    <th className="pb-4 font-medium">Телефон</th>
                    <th className="pb-4 font-medium">Статус</th>
                    <th className="pb-4 font-medium">Дата регистрации</th>
                    <th className="pb-4 font-medium text-right">Действия</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                <tr className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                    <td className="py-4 font-medium">Stepan</td>
                    <td className="py-4 text-stone-600">+996637742371</td>
                    <td className="py-4">
                        <span className="bg-rose-500 text-white text-xs px-2 py-1 rounded-md">Капризный</span>
                    </td>
                    <td className="py-4 text-stone-600">29.11.2025</td>
                    <td className="py-4 text-right">
                        <div className="flex justify-end gap-2 items-center">
                            <button className="p-1 hover:text-stone-900 text-stone-400"><Edit2 size={16} /></button>
                            <div className="flex border border-stone-200 rounded overflow-hidden">
                                <button className="px-3 py-1 text-xs hover:bg-stone-100 border-r border-stone-200">Новый</button>
                                <button className="px-3 py-1 text-xs hover:bg-stone-100 border-r border-stone-200">Постоянный</button>
                                <button className="px-3 py-1 text-xs hover:bg-stone-100 text-stone-400">Капризный</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
         </table>
       </div>
    </div>
  );
};