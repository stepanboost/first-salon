import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { useData } from '../../contexts/DataContext';
import { ModalAddService } from '../components/ModalAddService';
import { ModalAddMaster } from '../components/ModalAddMaster';

export const Content: React.FC = () => {
  const { services, masters, deleteService, deleteMaster } = useData();
  const [activeTab, setActiveTab] = useState<'services' | 'masters' | 'offers'>('services');
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isMasterModalOpen, setIsMasterModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="bg-white p-1 rounded-lg border border-stone-100 shadow-sm inline-flex gap-1">
        <button
          onClick={() => setActiveTab('services')}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'services'
              ? 'bg-stone-900 text-white'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Услуги
        </button>
        <button
          onClick={() => setActiveTab('masters')}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'masters'
              ? 'bg-stone-900 text-white'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Мастера
        </button>
        <button
          onClick={() => setActiveTab('offers')}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'offers'
              ? 'bg-stone-900 text-white'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Предложения
        </button>
      </div>

      {/* Services Section */}
      {activeTab === 'services' && (
      <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
        <div className="flex justify-between items-center mb-6">
             <div>
                <h2 className="text-2xl font-serif font-bold">Услуги</h2>
                <p className="text-stone-400 text-sm mt-1">Список всех предоставляемых услуг</p>
             </div>
             <button 
               onClick={() => setIsServiceModalOpen(true)}
               className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors"
             >
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
                    {services.map((service, index) => (
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
                                    <button 
                                      onClick={() => deleteService(service.id)}
                                      className="text-stone-400 hover:text-red-500"
                                    >
                                      <Trash2 size={18} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
      )}

       {/* Masters Section */}
       {activeTab === 'masters' && (
       <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
        <div className="flex justify-between items-center mb-6">
             <div>
                <h2 className="text-2xl font-serif font-bold">Мастера</h2>
                <p className="text-stone-400 text-sm mt-1">Список мастеров и их прайс</p>
             </div>
             <button 
               onClick={() => setIsMasterModalOpen(true)}
               className="bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors"
             >
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
                    {masters.map((master, index) => (
                        <tr key={master.id} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                            <td className="py-4 text-stone-400">{index + 1}</td>
                            <td className="py-4 font-medium">{master.name}</td>
                            <td className="py-4 text-stone-500">{master.role}</td>
                            <td className="py-4 text-stone-500">{master.services.length}</td>
                            <td className="py-4 text-right">
                                <div className="flex justify-end gap-3">
                                    <button className="text-stone-400 hover:text-stone-900"><Edit2 size={18} /></button>
                                    <button 
                                      onClick={() => deleteMaster(master.id)}
                                      className="text-stone-400 hover:text-red-500"
                                    >
                                      <Trash2 size={18} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
      )}

      {/* Offers Section */}
      {activeTab === 'offers' && (
      <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
        <div className="flex justify-between items-center mb-6">
             <div>
                <h2 className="text-2xl font-serif font-bold">Предложения</h2>
                <p className="text-stone-400 text-sm mt-1">Список всех специальных предложений</p>
             </div>
             <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors">
                <Plus size={18} /> Добавить предложение
             </button>
        </div>
        <div className="text-center py-12 text-stone-400">
          <p>Предложения пока отсутствуют</p>
        </div>
      </div>
      )}

      <ModalAddService 
        isOpen={isServiceModalOpen} 
        onClose={() => setIsServiceModalOpen(false)} 
      />
      <ModalAddMaster 
        isOpen={isMasterModalOpen} 
        onClose={() => setIsMasterModalOpen(false)} 
      />
    </div>
  );
};