import React from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { SERVICES, MASTERS } from '../../constants';

export const Content: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Services Section */}
      <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
        <div className="flex justify-between items-center mb-6">
             <div>
                <h2 className="text-2xl font-serif font-bold">Услуги</h2>
                <p className="text-stone-400 text-sm mt-1">Список всех предоставляемых услуг</p>
             </div>
             <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors">
                <Plus size={18} /> Добавить услугу
             </button>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-stone-400 border-b border-stone-100">
                        <th className="pb-4 font-medium w-16">ID</th>
                        <th className="pb-4 font-medium">Название</th>
                        <th className="pb-4 font-medium text-right">Действия</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {SERVICES.map((service, index) => (
                        <tr key={service.id} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                            <td className="py-4 text-stone-400">{index + 1}</td>
                            <td className="py-4 font-medium flex items-center gap-4">
                                <div className="w-10 h-10 bg-stone-100 rounded flex items-center justify-center overflow-hidden">
                                     <img src={`https://picsum.photos/100?random=${index}`} className="w-full h-full object-cover" alt="" />
                                </div>
                                {service.name}
                            </td>
                            <td className="py-4 text-right">
                                <div className="flex justify-end gap-3">
                                    <button className="text-stone-400 hover:text-stone-900"><Edit2 size={18} /></button>
                                    <button className="text-stone-400 hover:text-red-500"><Trash2 size={18} /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>

       {/* Masters Section */}
       <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
        <div className="flex justify-between items-center mb-6">
             <div>
                <h2 className="text-2xl font-serif font-bold">Мастера</h2>
                <p className="text-stone-400 text-sm mt-1">Список мастеров и их прайс</p>
             </div>
             <button className="bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors">
                <Plus size={18} /> Добавить мастера
             </button>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-stone-400 border-b border-stone-100">
                        <th className="pb-4 font-medium w-16">ID</th>
                        <th className="pb-4 font-medium">Имя</th>
                        <th className="pb-4 font-medium">Роль</th>
                        <th className="pb-4 font-medium">Услуги (кол-во)</th>
                        <th className="pb-4 font-medium text-right">Действия</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {MASTERS.map((master, index) => (
                        <tr key={master.id} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                            <td className="py-4 text-stone-400">{index + 1}</td>
                            <td className="py-4 font-medium">{master.name}</td>
                            <td className="py-4 text-stone-500">{master.role}</td>
                            <td className="py-4 text-stone-500">{master.services.length}</td>
                            <td className="py-4 text-right">
                                <div className="flex justify-end gap-3">
                                    <button className="text-stone-400 hover:text-stone-900"><Edit2 size={18} /></button>
                                    <button className="text-stone-400 hover:text-red-500"><Trash2 size={18} /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};