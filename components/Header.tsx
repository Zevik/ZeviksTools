'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-gray-800">
            Zevik&apos;s Tools
          </a>;

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">בית</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">התוכנות</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">צור קשר</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">בית</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">התוכנות</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">צור קשר</a>
          </nav>
        )}
      </div>
    </header>
  );
}
