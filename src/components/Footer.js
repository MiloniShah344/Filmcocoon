import React from 'react';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  const quickLinks = ['Home', 'About', 'Recent Work', 'Portfolio', 'Contact', 'Careers'];

  return (
    <footer className="bg-gradient-to-b from-stone-900 to-black text-stone-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                FC
              </div>
              <span className="text-2xl font-bold text-white">FilmCocoon</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Crafting cinematic experiences that inspire and resonate with audiences worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block text-stone-400 hover:text-orange-500 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-3 mb-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-stone-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-stone-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-stone-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-stone-400 text-sm">
              <a href="mailto:filmcocoon25@gmail.com" className="hover:text-orange-500 transition-colors">
                filmcocoon25@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-stone-400 mb-2">
            Directed by <span className="text-white font-semibold">Naishal Shah</span>
          </p>
          <p className="text-stone-500 text-sm">© 2024 FilmCocoon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;