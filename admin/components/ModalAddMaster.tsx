import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { useData } from '../../contexts/DataContext';
import { MasterService } from '../../types';

interface ModalAddMasterProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalAddMaster: React.FC<ModalAddMasterProps> = ({ isOpen, onClose }) => {
  const { addMaster, services } = useData();
  const [name, setName] = useState('');
  const [role, setRole] = useState('Мастер');
  const [masterServices, setMasterServices] = useState<MasterService[]>([]);
  const [newServiceName, setNewServiceName] = useState('');
  const [newServicePrice, setNewServicePrice] = useState('');

  const handleAddService = () => {
    if (newServiceName.trim() && newServicePrice.trim()) {
      setMasterServices([
        ...masterServices,
        { name: newServiceName.trim(), price: newServicePrice.trim() },
      ]);
      setNewServiceName('');
      setNewServicePrice('');
    }
  };

  const handleRemoveService = (index: number) => {
    setMasterServices(masterServices.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addMaster({
        name: name.trim(),
        role,
        services: masterServices,
      });
      setName('');
      setRole('Мастер');
      setMasterServices([]);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl my-8">
        <div className="flex justify-between items-center p-6 border-b border-stone-200">
          <h2 className="text-2xl font-serif font-bold">Добавить мастера</h2>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Имя мастера *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
                placeholder="Например: Анна"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Роль
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
                placeholder="Мастер"
              />
            </div>
          </div>

          <div className="border-t border-stone-200 pt-4">
            <h3 className="text-lg font-medium mb-3">Услуги мастера</h3>
            
            <div className="space-y-2 mb-3">
              {masterServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-stone-50 rounded-lg"
                >
                  <div>
                    <span className="font-medium">{service.name}</span>
                    <span className="text-stone-500 ml-2">— {service.price}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveService(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newServiceName}
                onChange={(e) => setNewServiceName(e.target.value)}
                className="flex-1 px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
                placeholder="Название услуги"
              />
              <input
                type="text"
                value={newServicePrice}
                onChange={(e) => setNewServicePrice(e.target.value)}
                className="flex-1 px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
                placeholder="Цена (например: 1500 сом)"
              />
              <button
                type="button"
                onClick={handleAddService}
                className="px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors flex items-center gap-2"
              >
                <Plus size={18} />
                Добавить
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
            >
              Добавить мастера
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

