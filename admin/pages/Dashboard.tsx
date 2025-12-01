import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Cell 
} from 'recharts';
import { Users, Calendar, DollarSign, Activity } from 'lucide-react';

// Mock Data
const revenueData = [
  { name: '1', value: 4000 },
  { name: '5', value: 3000 },
  { name: '10', value: 2000 },
  { name: '15', value: 2780 },
  { name: '20', value: 1890 },
  { name: '25', value: 2390 },
  { name: '30', value: 3490 },
];

const masterLoadData = [
  { name: 'Анна', value: 85 },
  { name: 'Айгуль', value: 65 },
  { name: 'Жанна', value: 92 },
  { name: 'Светлана', value: 40 },
];

const stats = [
  { label: 'Всего записей', value: '1,284', icon: <Calendar className="text-stone-500" />, sub: 'Все записи в системе' },
  { label: 'Подтверждено', value: '892', icon: <Activity className="text-green-500" />, sub: 'Подтвержденные записи' },
  { label: 'Клиенты', value: '452', icon: <Users className="text-blue-500" />, sub: 'Зарегистрированные клиенты' },
  { label: 'Выручка', value: '1.2M с', icon: <DollarSign className="text-yellow-600" />, sub: 'Общий доход' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-sm font-medium text-stone-500 mb-1">{stat.label}</h3>
                <div className="text-3xl font-serif font-bold text-stone-900">{stat.value}</div>
              </div>
              <div className="p-2 bg-stone-50 rounded-lg">
                {stat.icon}
              </div>
            </div>
            <p className="text-xs text-stone-400">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Revenue Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <DollarSign size={20} />
            <h3 className="text-xl font-serif font-bold">Финансовая статистика</h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1c1917" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#1c1917" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#a8a29e', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#a8a29e', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e7e5e4', borderRadius: '8px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#1c1917" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-4 px-4">
             <div className="text-center p-4 bg-green-50 rounded-lg w-1/3 mx-2">
                <div className="text-green-800 text-lg font-bold">121,268 c</div>
                <div className="text-green-600 text-xs uppercase">Доходы</div>
             </div>
             <div className="text-center p-4 bg-red-50 rounded-lg w-1/3 mx-2">
                <div className="text-red-800 text-lg font-bold">0 c</div>
                <div className="text-red-600 text-xs uppercase">Расходы</div>
             </div>
             <div className="text-center p-4 bg-blue-50 rounded-lg w-1/3 mx-2">
                <div className="text-blue-800 text-lg font-bold">121,268 c</div>
                <div className="text-blue-600 text-xs uppercase">Баланс</div>
             </div>
          </div>
        </div>

        {/* General Stats / Sidebar Widgets */}
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                    <Activity size={20} />
                    <h3 className="text-xl font-serif font-bold">Общая статистика</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-stone-50 rounded-lg">
                        <span className="text-stone-600">Услуги</span>
                        <span className="bg-stone-200 text-stone-800 px-2 py-1 rounded text-xs font-bold">12</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-stone-50 rounded-lg">
                        <span className="text-stone-600">Мастера</span>
                        <span className="bg-stone-200 text-stone-800 px-2 py-1 rounded text-xs font-bold">5</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-stone-50 rounded-lg">
                        <span className="text-stone-600">Товары</span>
                        <span className="bg-stone-200 text-stone-800 px-2 py-1 rounded text-xs font-bold">48</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span className="text-red-800">Низкий запас</span>
                        <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-xs font-bold">0</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                 <h3 className="text-xl font-serif font-bold mb-4">Нагрузка по мастерам</h3>
                 <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={masterLoadData}>
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12}} />
                            <Tooltip cursor={{fill: 'transparent'}} />
                            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                                {masterLoadData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#1c1917' : '#a8a29e'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                 </div>
            </div>
        </div>
      </div>
      
      {/* Client Stats & Today's Bookings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
            <h3 className="text-xl font-serif font-bold mb-6">Статистика клиентов</h3>
            <div className="space-y-4">
                {['Новые клиенты', 'Постоянные клиенты', 'Капризные клиенты', 'Заблокированные'].map((label, i) => (
                    <div key={i} className="flex justify-between items-center">
                        <span className="text-stone-600">{label}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${i === 2 || i === 3 ? 'bg-rose-500' : 'bg-stone-400'}`}>
                            {i === 2 ? 1 : 0}
                        </span>
                    </div>
                ))}
            </div>
         </div>

         <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
            <h3 className="text-xl font-serif font-bold mb-6">Записи на сегодня</h3>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                     <span className="text-stone-600">Сегодня</span>
                     <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold">0</span>
                </div>
                <div className="flex justify-between items-center">
                     <span className="text-stone-600">Предстоящие</span>
                     <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold">0</span>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};