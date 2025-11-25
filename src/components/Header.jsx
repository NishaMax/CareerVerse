import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-transparent">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="w-1/4">
          <Link to="/" className="text-2xl font-bold text-teal-500" style={{ color: 'var(--color-teal)' }}>
            CareerVerse
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center gap-12 flex-1">
          <Link
            to="/"
            className={`font-medium text-base hover:text-teal-500 transition-colors ${isActive('/') ? 'text-teal-500' : 'text-gray-600'}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-medium text-base hover:text-teal-500 transition-colors ${isActive('/about') ? 'text-teal-500' : 'text-gray-600'}`}
          >
            About
          </Link>
        </nav>

        {/* Auth Buttons - Right Aligned */}
        <div className="hidden md:flex items-center justify-end gap-8 w-1/4">
          <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium">Login</Link>
          <Link to="/signup" className="btn btn-primary text-sm px-8 py-2.5 rounded-full shadow-lg shadow-teal-500/20">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-6 shadow-xl">
          <Link to="/" className="text-gray-600 font-medium text-lg" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-gray-600 font-medium text-lg" onClick={() => setIsMenuOpen(false)}>About</Link>
          <div className="h-px bg-gray-100 my-2"></div>
          <div className="flex flex-col gap-4">
            <Link to="/login" className="text-gray-600 font-medium text-lg" onClick={() => setIsMenuOpen(false)}>Login</Link>
            <Link to="/signup" className="btn btn-primary w-full justify-center py-3" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
