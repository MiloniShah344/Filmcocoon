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
    <div className={`drawer-overlay ${isDrawerOpen ? '' : 'closed'}`}>
      <div className="drawer-backdrop" onClick={() => setIsDrawerOpen(false)} />
      <div className="drawer">
        <div className="drawer-content">
          <div className="drawer-header">
            <span className="drawer-title">Menu</span>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="drawer-close"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="drawer-nav">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`drawer-nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="drawer-footer">
            <p className="drawer-social-title">Follow Us</p>
            <div className="drawer-social-links">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="drawer-social-link"
              >
                <Linkedin />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="drawer-social-link"
              >
                <Instagram />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="drawer-social-link"
              >
                <Youtube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;