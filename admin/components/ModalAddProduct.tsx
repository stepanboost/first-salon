import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

interface ModalAddProductProps {
  isOpen: boolean;
  onClose: () => void;
}

const UNIT_OPTIONS = [
  'Штуки',
  'Миллилитры',
  'Литры',
  'Граммы',
  'Килограммы',
  'Метры',
];

export const ModalAddProduct: React.FC<ModalAddProductProps> = ({ isOpen, onClose }) => {
  const { addProduct } = useData();
  const [name, setName] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [totalStock, setTotalStock] = useState('');
  const [unit, setUnit] = useState('Штуки');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && pricePerUnit && totalStock) {
      addProduct({
        name: name.trim(),
        pricePerUnit: parseFloat(pricePerUnit),
        totalStock: parseFloat(totalStock),
        unit,
      });
      setName('');
      setPricePerUnit('');
      setTotalStock('');
      setUnit('Штуки');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-6 border-b border-stone-200">
          <h2 className="text-2xl font-serif font-bold">Добавить товар</h2>
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
              Название товара *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
              placeholder="Например: Крем для рук"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Цена за единицу (сом) *
              </label>
              <input
                type="number"
                step="0.01"
                value={pricePerUnit}
                onChange={(e) => setPricePerUnit(e.target.value)}
                className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
                placeholder="0"
                required
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Общий объем/запас *
              </label>
              <input
                type="number"
                step="0.01"
                value={totalStock}
                onChange={(e) => setTotalStock(e.target.value)}
                className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
                placeholder="0"
                required
                min="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Единица измерения *
            </label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900"
              required
            >
              {UNIT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
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

