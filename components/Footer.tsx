import React from 'react';
import { NAV_CATEGORIES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pvk-card-bg mt-16 border-t-2 border-pvk-gold">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <a href="/" className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center bg-white/5 ring-1 ring-pvk-gold/40 p-1">
                <img src="/logo.webp" alt="PVK News Logo" className="h-full w-full object-cover" />
              </div>
              <span className="text-white text-2xl font-serif font-bold tracking-wider">
                <span className="text-pvk-gold">P</span>VK News
              </span>
            </a>
            <p className="text-sm text-pvk-text-secondary leading-relaxed max-w-xs mx-auto md:mx-0">
              Your trusted source for comprehensive news coverage across commodities, finance, agriculture, markets, business, real estate, technology, and entertainment. Stay informed with PVK News Channel.
            </p>
            <p className="text-xs text-pvk-gold mt-3 font-semibold">Portfolio | Vision | Knowledge</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-pvk-gold mb-4 uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col gap-y-2">
              {NAV_CATEGORIES.slice(0, 4).map((category) => (
                <a key={category} href="#" className="text-sm text-pvk-text-secondary hover:text-pvk-gold transition-colors">
                  {category}
                </a>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-pvk-gold mb-4 uppercase tracking-wider">Categories</h3>
            <nav className="flex flex-col gap-y-2">
              {NAV_CATEGORIES.slice(4).map((category) => (
                <a key={category} href="#" className="text-sm text-pvk-text-secondary hover:text-pvk-gold transition-colors">
                  {category}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-pvk-border text-center text-pvk-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} PVK News Channel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;