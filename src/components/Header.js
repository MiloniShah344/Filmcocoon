import React from 'react';
import { Menu } from 'lucide-react';
import logo from '../assets/logo.png'

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
    <header className="header">
      <div className="header-container">
        <div className="logo-container" onClick={() => scrollToSection('home')}>
          <div className="logo-circle">
            <img 
              src={logo} 
              alt="FilmCocoon logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="logo-text">FilmCocoon</span>
        </div>
        
        <nav className="nav-desktop">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="menu-button"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;