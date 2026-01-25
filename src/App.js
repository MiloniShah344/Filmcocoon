import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import RecentWork from './components/RecentWork';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import Careers from './components/Careers';

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlides, setCurrentSlides] = useState({
    'web-series': 0,
    'films': 0,
    'micro-dramas': 0,
    'freelance-work': 0
  });

  // Recent work (3 most recent from different categories)
  const recentWork = [
    portfolioData['Web Series']?.[0],
    portfolioData['Films']?.[0],
    portfolioData['Micro Dramas']?.[0],
  ].filter(Boolean);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsDrawerOpen(false);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'recent-work', 'portfolio', 'contact', 'careers'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carousel navigation
  const navigateSlide = (category, direction) => {
    const categoryKey = category.toLowerCase().replace(/ /g, '-');
    const categoryData = portfolioData[category];
    const currentIndex = currentSlides[categoryKey];
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % categoryData.length;
    } else {
      newIndex = currentIndex === 0 ? categoryData.length - 1 : currentIndex - 1;
    }
    
    setCurrentSlides(prev => ({ ...prev, [categoryKey]: newIndex }));
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Header 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      
      <Sidebar 
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      <Hero scrollToSection={scrollToSection} />
      <About />
      <RecentWork recentWork={recentWork} />
      <Portfolio 
        portfolioData={portfolioData}
        currentSlides={currentSlides}
        setCurrentSlides={setCurrentSlides}
        navigateSlide={navigateSlide}
      />
      <Contact />
      <Careers />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;