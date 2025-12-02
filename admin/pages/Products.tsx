import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { useData } from '../../contexts/DataContext';
import { ModalAddProduct } from '../components/ModalAddProduct';

export const Products: React.FC = () => {
  const { products, deleteProduct } = useData();
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  return (
    <div className="bg-white p-4 lg:p-6 rounded-xl border border-stone-100 shadow-sm min-h-[500px]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
             <div>
                <h2 className="text-xl lg:text-2xl font-serif font-bold">Товары</h2>
                <p className="text-stone-400 text-xs lg:text-sm mt-1">Список всех товаров салона. Количество отражает общий объем/запас товара.</p>
             </div>
             <button 
               onClick={() => setIsProductModalOpen(true)}
               className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors whitespace-nowrap"
             >
                <Plus size={18} /> Добавить товар
             </button>
        </div>

        {/* Mobile Card View */}
        <div className="block md:hidden space-y-4">
          {products.map((product, index) => (
            <div key={product.id} className="bg-stone-50 p-4 rounded-lg border border-stone-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-stone-900">{product.name}</h3>
                  <p className="text-xs text-stone-500 mt-1">ID: {index + 1}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-stone-400 hover:text-stone-900"><Edit2 size={18} /></button>
                  <button 
                    onClick={() => deleteProduct(product.id)}
                    className="text-stone-400 hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div><span className="text-stone-500">Цена:</span> {product.pricePerUnit.toLocaleString('ru-RU')} сом</div>
                <div><span className="text-stone-500">Запас:</span> {product.totalStock} {product.unit}</div>
                <div><span className="text-stone-500">Добавлен:</span> {product.dateAdded}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
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
                    {products.map((product, index) => (
                        <tr key={product.id} className="border-b border-stone-50 hover:bg-stone-50 transition-colors">
                            <td className="py-4 text-stone-400">{index + 1}</td>
                            <td className="py-4 font-medium">{product.name}</td>
                            <td className="py-4">{product.pricePerUnit.toLocaleString('ru-RU')}</td>
                            <td className="py-4">{product.totalStock}</td>
                            <td className="py-4">{product.unit}</td>
                            <td className="py-4">{product.dateAdded}</td>
                            <td className="py-4 text-right">
                                <div className="flex justify-end gap-3">
                                    <button className="text-stone-400 hover:text-stone-900"><Edit2 size={18} /></button>
                                    <button 
                                      onClick={() => deleteProduct(product.id)}
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

        <ModalAddProduct 
          isOpen={isProductModalOpen} 
          onClose={() => setIsProductModalOpen(false)} 
        />
    </div>
  );
};