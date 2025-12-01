import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BRAND_NAME } from '../../constants';
import { Button } from '../../components/Button';

export const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple mock auth
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Неверный пароль');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-md border border-stone-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">{BRAND_NAME}</h1>
          <p className="text-stone-500 uppercase tracking-widest text-xs">Admin Login</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Пароль</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent text-stone-900"
              placeholder="Введите пароль"
            />
          </div>
          
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <Button type="submit" fullWidth>Войти</Button>
        </form>
        
        <div className="mt-8 text-center">
           <a href="/" className="text-xs text-stone-400 hover:text-stone-900 transition-colors">Вернуться на сайт</a>
        </div>
      </div>
    </div>
  );
};