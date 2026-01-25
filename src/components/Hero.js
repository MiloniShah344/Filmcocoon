import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-decoration-1"></div>
      <div className="hero-decoration-2"></div>
      
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div>
              <span className="hero-badge">
                Director • Filmmaker • Storyteller
              </span>
            </div>
            <h1 className="hero-title">
              Stories That
              <span className="hero-title-accent">
                Come Alive
              </span>
            </h1>
            <p className="hero-description">
              Crafting cinematic experiences that resonate, inspire, and leave lasting impressions. Every frame tells a story, every story creates magic.
            </p>
            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-box">
              <div className="hero-icon-circle">
                <span className="hero-icon">🎬</span>
              </div>
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/30 rounded-full animate-float"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/20 rounded-full animate-float-delayed"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-stone-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;