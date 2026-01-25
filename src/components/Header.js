import React from 'react';
import { Menu } from 'lucide-react';
import logo from '../assets/logo.png'
// import LogoInverted from '../assets/logo-inverted.png'

const Header = ({ activeSection, scrollToSection, setIsDrawerOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'recent-work', label: 'Recent Work' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
    { id: 'careers', label: 'Careers' },
  ];

  return (
    <header className="fixed top-0 w-full bg-stone-100/95 backdrop-blur-sm shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          {/* <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"> */}
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg bg-white flex items-center justify-center">
            <img 
              src={logo} 
              // src={LogoInverted} 
              alt="FilmCocoon logo" 
              className="w-full h-full object-cover"
            />
          {/* </div> */}
          </div>
          <span className="text-2xl font-bold text-stone-800">FilmCocoon</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-lg transition-colors ${
                activeSection === item.id
                  ? 'text-orange-600 font-semibold'
                  : 'text-stone-700 hover:text-orange-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="lg:hidden p-2 rounded-lg hover:bg-stone-200 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;