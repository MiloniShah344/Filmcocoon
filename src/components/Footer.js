import React from 'react';
import { Linkedin, Instagram, Youtube } from 'lucide-react';
import logo_white_bg from '../assets/logo_white_bg.png';

const Footer = ({ scrollToSection }) => {
  const quickLinks = ['Home', 'About', 'Recent Work', 'Portfolio', 'Contact', 'Careers'];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              {/* <div className="footer-logo">
                FC
              </div> */}
              <div className="logo-circle">
            <img 
              src={logo_white_bg} 
              alt="FilmCocoon logo" 
              className="w-full h-full object-cover"
            />
          </div>
              <span className="footer-brand-text">FilmCocoon</span>
            </div>
            <p className="footer-description">
              Crafting cinematic experiences that inspire and resonate with audiences worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="footer-section-title">Quick Links</h4>
            <nav className="footer-nav">
              {quickLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="footer-link"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="footer-section-title">Connect</h4>
            <div className="footer-social">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
              >
                <Linkedin />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
              >
                <Instagram />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
              >
                <Youtube />
              </a>
            </div>
            <p className="footer-description">
              <a href="mailto:filmcocoon25@gmail.com" className="footer-email">
                filmcocoon25@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-credit">
            Directed by <span className="footer-credit-name">Naishal Shah</span>
          </p>
          <p className="footer-copyright">© 2024 FilmCocoon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;