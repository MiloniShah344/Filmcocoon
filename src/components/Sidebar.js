import React from 'react';
import { X, Linkedin, Instagram, Youtube } from 'lucide-react';

const Sidebar = ({ isDrawerOpen, setIsDrawerOpen, activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'recent-work', label: 'Recent Work' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity ${
        isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsDrawerOpen(false)}
      />
      <div
        className={`absolute left-0 top-0 h-full w-72 bg-gradient-to-b from-stone-100 to-orange-50 shadow-2xl transform transition-transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-2xl font-bold text-stone-800">Menu</span>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-200/50 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg transition-colors text-left ${
                  activeSection === item.id
                    ? 'text-orange-600 font-semibold'
                    : 'text-stone-700 hover:text-orange-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="mt-12 pt-12 border-t border-stone-300">
            <p className="text-sm text-stone-600 mb-4">Follow Us</p>
            <div className="flex space-x-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;