import React, { useState } from 'react';
import { Plus, Minus, Sparkles, Calendar } from 'lucide-react';
import { Button } from '../../components/Button';

export const CashRegister: React.FC = () => {
  const [period, setPeriod] = useState<'day' | 'week' | 'month'>('day');
  
  return (
    <div className="space-y-8">
      
      {/* Daily Summary */}
      <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
        <h2 className="text-2xl font-serif font-bold mb-6">Сегодня: 02 декабря 2025</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-stone-200 rounded-lg">
             <div className="text-stone-400 text-sm mb-1">Доходы</div>
             <div className="text-2xl font-bold text-green-600">0 сом</div>
          </div>
          <div className="p-4 border border-stone-200 rounded-lg">
             <div className="text-stone-400 text-sm mb-1">Расходы</div>
             <div className="text-2xl font-bold text-red-600">0 сом</div>
          </div>
          <div className="p-4 border border-stone-200 rounded-lg">
             <div className="text-stone-400 text-sm mb-1">Баланс</div>
             <div className="text-2xl font-bold text-green-600">0 сом</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
        <h3 className="text-xl font-serif font-bold mb-2">Добавить/Снять деньги</h3>
        <p className="text-stone-400 text-sm mb-6">Быстрые операции с кассой</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
                <label className="text-sm font-medium">Добавить деньги в кассу</label>
                <div className="flex gap-2">
                    <input type="number" placeholder="Сумма" className="flex-1 bg-stone-50 border border-stone-200 rounded p-2 text-sm" />
                    <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-1 hover:bg-green-700 transition">
                        <Plus size={16} /> Добавить
                    </button>
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium">Снять деньги из кассы</label>
                <div className="flex gap-2">
                    <input type="number" placeholder="Сумма" className="flex-1 bg-stone-50 border border-stone-200 rounded p-2 text-sm" />
                    <button className="bg-red-600 text-white px-4 py-2 rounded flex items-center gap-1 hover:bg-red-700 transition">
                        <Minus size={16} /> Снять
                    </button>
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium">Инкассация</label>
                 <button className="w-full border border-yellow-600 text-yellow-700 px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-yellow-50 transition">
                    <Sparkles size={16} /> Инкассация
                </button>
            </div>
        </div>
      </div>

      {/* Transaction Form */}
      <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
         <h3 className="text-xl font-serif font-bold mb-2">Добавить транзакцию</h3>
         <p className="text-stone-400 text-sm mb-6">Формирование транзакции по услуге, товару или сверхурочным</p>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
                <label className="text-sm font-medium block mb-2">Услуга + Мастер</label>
                <select className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm">
                    <option>Выберите услугу</option>
                </select>
            </div>
            <div>
                <label className="text-sm font-medium block mb-2">Товар</label>
                <select className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm">
                    <option>Выберите товар</option>
                </select>
            </div>
             <div>
                <label className="text-sm font-medium block mb-2">Сверхурочные (сом)</label>
                <input type="number" placeholder="Сумма сверхурочных" className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm" />
            </div>
            <div>
                <label className="text-sm font-medium block mb-2">Общая сумма (сом)</label>
                <input type="number" placeholder="Общая сумма" className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm" />
            </div>
             <div>
                <label className="text-sm font-medium block mb-2">Тип транзакции</label>
                <select className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm">
                    <option>Доход</option>
                    <option>Расход</option>
                </select>
            </div>
             <div>
                <label className="text-sm font-medium block mb-2">Дата транзакции</label>
                <div className="relative">
                    <input type="date" className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm pr-10" defaultValue="2025-12-02" />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={18} />
                </div>
            </div>
         </div>
         <Button fullWidth className="bg-rose-500 hover:bg-rose-600 border-none text-white shadow-none">Создать транзакцию</Button>
      </div>

      {/* Transaction Table */}
      <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
         <h3 className="text-xl font-serif font-bold mb-2">Сегодняшние транзакции</h3>
         <p className="text-stone-400 text-sm mb-6">Транзакции за 02 декабря 2025</p>

         <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-stone-400 uppercase border-b border-stone-100">
                    <tr>
                        <th className="py-3">Дата</th>
                        <th className="py-3">Услуга</th>
                        <th className="py-3">Товар</th>
                        <th className="py-3">Сверхурочные</th>
                        <th className="py-3">Сумма</th>
                        <th className="py-3">Тип</th>
                    </tr>
                </thead>
                <tbody className="text-stone-600">
                    <tr>
                        <td colSpan={6} className="py-8 text-center text-stone-400">Нет транзакций</td>
                    </tr>
                </tbody>
            </table>
         </div>
      </div>

      {/* Financial Reports */}
      <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
         <h3 className="text-xl font-serif font-bold mb-2">Финансовые отчеты</h3>
         <p className="text-stone-400 text-sm mb-6">Отчеты по доходам и расходам за выбранный период</p>
         
         <div className="flex gap-2 mb-6">
            <button 
               onClick={() => setPeriod('day')}
               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  period === 'day' 
                     ? 'bg-rose-500 text-white' 
                     : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
               }`}
            >
               День
            </button>
            <button 
               onClick={() => setPeriod('week')}
               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  period === 'week' 
                     ? 'bg-rose-500 text-white' 
                     : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
               }`}
            >
               Неделя
            </button>
            <button 
               onClick={() => setPeriod('month')}
               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  period === 'month' 
                     ? 'bg-rose-500 text-white' 
                     : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
               }`}
            >
               Месяц
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-4 bg-green-50 rounded-lg">
               <div className="text-green-800 text-2xl font-bold mb-1">0 сом</div>
               <div className="text-green-600 text-sm">Общий доход</div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
               <div className="text-red-800 text-2xl font-bold mb-1">0 сом</div>
               <div className="text-red-600 text-sm">Общие расходы</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
               <div className="text-green-800 text-2xl font-bold mb-1">0 сом</div>
               <div className="text-green-600 text-sm">Чистая прибыль</div>
            </div>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-stone-400 uppercase border-b border-stone-100">
                    <tr>
                        <th className="py-3">Дата</th>
                        <th className="py-3">Доходы</th>
                        <th className="py-3">Расходы</th>
                        <th className="py-3">Баланс</th>
                    </tr>
                </thead>
                <tbody className="text-stone-600">
                    <tr className="border-b border-stone-50">
                        <td className="py-3">02.12.2025</td>
                        <td className="py-3">0 сом</td>
                        <td className="py-3">0 сом</td>
                        <td className="py-3">0 сом</td>
                    </tr>
                </tbody>
            </table>
         </div>
      </div>
    </div>
  );
};