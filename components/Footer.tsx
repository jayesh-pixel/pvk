import React from 'react';
import { NAV_CATEGORIES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pvk-card-bg mt-16 border-t-2 border-pvk-gold">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          <div>
            <a href="/" className="text-white text-3xl font-serif font-bold tracking-wider">
              <span className="text-pvk-gold">P</span>VK
            </a>
            <p className="text-sm text-pvk-text-secondary mt-2">Portfolio | Vision | Knowledge</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_CATEGORIES.map((category) => (
              <a key={category} href="#" className="text-sm text-pvk-text-secondary hover:text-pvk-gold transition-colors">
                {category}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-pvk-border text-center text-pvk-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} PVK News. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;