import React, { useState } from 'react';
import { NAV_CATEGORIES } from '../constants';
import { FaYoutube } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (category: string) => {
    const sectionId = category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-pvk-card-bg/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg border-b border-pvk-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-3">
              {/* circular wrapper so logo appears as a visible circle */}
              <div className="h-16 w-16 rounded-full overflow-hidden flex items-center justify-center bg-white/5 ring-1 ring-pvk-gold/40 p-1 shadow-md">
                <img src="/logo.webp" alt="PVK News Logo" className="h-full w-full object-cover" />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {NAV_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => scrollToSection(category)}
                className="text-white hover:text-pvk-gold transition-colors duration-300 text-sm font-medium uppercase tracking-wider cursor-pointer"
              >
                {category}
              </button>
            ))}
          </nav>
          
          {/* Search + YouTube (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* YouTube button */}
            <a
              href="#"
              aria-label="PVK YouTube"
              className="h-10 w-10 rounded-full bg-pvk-red flex items-center justify-center hover:bg-pvk-red-dark transition-colors text-white shadow-sm"
            >
              <FaYoutube size={20} />
            </a>

            {/* Search button */}
            <button className="p-2 rounded-full text-white hover:bg-pvk-grey hover:text-pvk-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>

          {/* Mobile Menu Button + YouTube */}
          <div className="md:hidden flex items-center gap-3">
            {/* YouTube button (mobile) */}
            <a
              href="#"
              aria-label="PVK YouTube"
              className="h-10 w-10 rounded-full bg-pvk-red flex items-center justify-center hover:bg-pvk-red-dark transition-colors text-white shadow-sm"
            >
              <FaYoutube size={20} />
            </a>

            {/* Menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-pvk-card-bg py-4 border-t border-pvk-border">
          <nav className="flex flex-col items-center space-y-4">
            {NAV_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => scrollToSection(category)}
                className="text-white hover:text-pvk-gold transition-colors duration-300 text-base uppercase cursor-pointer"
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;