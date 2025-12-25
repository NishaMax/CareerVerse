import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Initialize dark mode from system preference or local storage
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-full shadow-2xl border border-white/40 dark:border-gray-700/40 transition-all duration-300">
        <div className="w-full h-16 px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/home" className="flex items-center gap-2">
              <span className="text-xl font-bold text-teal-600 dark:text-teal-400 tracking-tight">
                CareerVerse
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center gap-10">
            <Link
              to="/home"
              className={`text-sm font-semibold hover:text-teal-600 dark:hover:text-teal-400 transition-colors ${isActive('/home') ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}`}
            >
              Home
            </Link>
            <Link
              to="/home"
              className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/home"
              className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              How it Works
            </Link>
          </nav>

          {/* Right Side - Auth & Dark Mode */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>

            <Link to="/login" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Login</Link>
            <Link to="/signup" className="btn btn-primary text-sm px-6 py-2 rounded-full shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div
            className="absolute top-28 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col gap-4"
            onClick={e => e.stopPropagation()}
          >
            <Link to="/home" className="text-gray-700 dark:text-gray-200 font-semibold text-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <div className="h-px bg-gray-100 dark:bg-gray-800 my-1"></div>
            <Link to="/login" className="text-gray-700 dark:text-gray-200 font-semibold text-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl" onClick={() => setIsMenuOpen(false)}>Login</Link>
            <Link to="/signup" className="btn btn-primary w-full justify-center py-3 rounded-xl shadow-lg shadow-teal-500/20" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
