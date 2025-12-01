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
    { icon: <LayoutDashboard size={20} />, label: "Дашборд", path: "/admin/dashboard" },
    { icon: <Users size={20} />, label: "Пользователи", path: "/admin/users" },
    { icon: <FileText size={20} />, label: "Контент", path: "/admin/content" },
    { icon: <Package size={20} />, label: "Товары", path: "/admin/products" },
    { icon: <Calendar size={20} />, label: "Записи", path: "/admin/bookings" },
    { icon: <Settings size={20} />, label: "Настройки", path: "/admin/settings" },
    { icon: <Wallet size={20} />, label: "Касса", path: "/admin/cash" },
  ];

  const getPageTitle = () => {
    const current = menuItems.find(item => item.path === location.pathname);
    return current ? current.label : "Админ панель";
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
        <header className="bg-white border-b border-stone-200 py-4 px-8 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-serif font-bold text-stone-800">{getPageTitle()}</h2>
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold">A</div>
             <span className="text-sm font-medium">Administrator</span>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};