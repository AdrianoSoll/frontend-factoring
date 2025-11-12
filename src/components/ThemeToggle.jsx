import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'; 

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative flex items-center justify-center w-12 h-12 
                 rounded-full border border-gray-500/30
                 bg-gradient-to-br from-gray-900 to-gray-800
                 dark:from-gray-100 dark:to-gray-200
                 text-gray-100 dark:text-gray-800
                 shadow-md hover:shadow-lg 
                 transition-all duration-500 ease-in-out
                 hover:scale-105 active:scale-95"
      title={dark ? 'Modo Claro' : 'Modo Oscuro'}
    >
      <span
        className={`absolute transform transition-transform duration-500 ease-in-out ${
          dark ? 'rotate-180 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'
        }`}
      >
        <Moon size={22} />
      </span>
      <span
        className={`absolute transform transition-transform duration-500 ease-in-out ${
          dark ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-0'
        }`}
      >
        <Sun size={22} />
      </span>
    </button>
  );
}

