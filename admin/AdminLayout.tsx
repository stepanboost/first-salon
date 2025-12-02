import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Package, 
  Calendar, 
  Settings, 
  Wallet, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { BRAND_NAME } from '../constants';

export const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static
        w-64 bg-stone-900 text-stone-300 flex flex-col h-full z-50
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4 lg:p-6 border-b border-stone-800 flex justify-between items-center">
          <div>
            <h1 className="text-white font-serif text-xl lg:text-2xl tracking-widest">{BRAND_NAME}</h1>
            <p className="text-xs uppercase tracking-wider text-stone-500 mt-1 hidden lg:block">Admin Panel</p>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden text-stone-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 py-4 lg:py-6 px-3 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
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
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        <header className="bg-white border-b border-stone-200 py-4 lg:py-6 px-4 lg:px-8 sticky top-0 z-30">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden text-stone-600 hover:text-stone-900"
                >
                  <Menu size={24} />
                </button>
                <h2 className="text-xl lg:text-3xl font-serif font-bold text-stone-900 truncate">{getPageInfo().title}</h2>
              </div>
              {getPageInfo().subtitle && (
                <p className="text-stone-500 text-xs lg:text-sm">{getPageInfo().subtitle}</p>
              )}
            </div>
            <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
               <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold text-sm">A</div>
               <span className="text-xs lg:text-sm font-medium hidden sm:inline">Administrator</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8 overflow-y-auto bg-stone-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};