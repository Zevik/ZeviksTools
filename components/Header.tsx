'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">דף הבית</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">התוכנות והתוספים</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">צרו קשר</a>
          </nav>
          <a href="/" className="flex items-center mx-auto">
            <Image src="/images/logo.png" alt="Zevik's Tools Logo" width={200} height={200} />
          </a>

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
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">דף הבית</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">התוכנות והתוספים</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">צרו קשר</a>
          </nav>
        )}
      </div>
    </header>
  );
}
