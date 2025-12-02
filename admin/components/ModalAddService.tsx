import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

interface ModalAddServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalAddService: React.FC<ModalAddServiceProps> = ({ isOpen, onClose }) => {
  const { addService } = useData();
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addService({ name: name.trim() });
      setName('');
      setImageUrl('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-6 border-b border-stone-200">
          <h2 className="text-2xl font-serif font-bold">Добавить услугу</h2>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Название услуги *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
              placeholder="Например: Маникюр"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              URL изображения (опционально)
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
              placeholder="https://example.com/image.jpg"
            />
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
              className="flex-1 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
            >
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

