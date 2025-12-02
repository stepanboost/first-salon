import React from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Package, 
  Calendar, 
  Settings, 
  Wallet, 
  LogOut 
} from 'lucide-react';
import { BRAND_NAME } from '../constants';

export const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Дашборд", path: "/admin/dashboard", title: "Дашборд статистики", subtitle: "Комплексная статистика по всем системам салона красоты" },
    { icon: <Users size={20} />, label: "Пользователи", path: "/admin/users", title: "Управление пользователями", subtitle: "Управление клиентами и их статусами" },
    { icon: <FileText size={20} />, label: "Контент", path: "/admin/content", title: "Управление контентом", subtitle: "Управление услугами, мастерами и предложениями" },
    { icon: <Package size={20} />, label: "Товары", path: "/admin/products", title: "Управление товарами", subtitle: "Добавление, редактирование и удаление товаров" },
    { icon: <Calendar size={20} />, label: "Записи", path: "/admin/bookings", title: "Управление записями", subtitle: "Просмотр и управление записями клиентов" },
    { icon: <Settings size={20} />, label: "Настройки", path: "/admin/settings", title: "Настройки", subtitle: "Настройки системы" },
    { icon: <Wallet size={20} />, label: "Касса", path: "/admin/cash", title: "Касса", subtitle: "Управление доходами и расходами салона" },
  ];

  const getPageInfo = () => {
    const current = menuItems.find(item => item.path === location.pathname);
    return current ? { title: current.title, subtitle: current.subtitle } : { title: "Админ панель", subtitle: "" };
  };

  return (
    <div className="flex h-screen bg-stone-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-stone-900 text-stone-300 flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-stone-800">
          <h1 className="text-white font-serif text-2xl tracking-widest">{BRAND_NAME}</h1>
          <p className="text-xs uppercase tracking-wider text-stone-500 mt-1">Admin Panel</p>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? "bg-white text-stone-900 font-medium shadow-md" 
                    : "hover:bg-stone-800 hover:text-white"
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-stone-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-left text-red-400 hover:bg-stone-800 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            <span>Выйти</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-stone-200 py-6 px-8 sticky top-0 z-10">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-1">{getPageInfo().title}</h2>
              {getPageInfo().subtitle && (
                <p className="text-stone-500 text-sm">{getPageInfo().subtitle}</p>
              )}
            </div>
            <div className="flex items-center gap-4">
               <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold">A</div>
               <span className="text-sm font-medium">Administrator</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-y-auto bg-stone-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};