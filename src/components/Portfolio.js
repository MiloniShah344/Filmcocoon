import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = ({ portfolioData, currentSlides, setCurrentSlides, navigateSlide }) => {
  return (
    <section id="portfolio" className="section section-bg-light">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Explore Our Work</span>
          <h2 className="section-title">
            Complete <span className="section-title-accent">Portfolio</span>
          </h2>
          <p className="section-description">
            Dive into a diverse collection of films, series, and creative projects
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="portfolio-categories">
          {Object.entries(portfolioData).map(([category, projects], categoryIndex) => {
            // FIXED: Properly handle all special characters
            const categoryKey = category
              .toLowerCase()
              .replace(/ /g, '-')
              .replace(/&/g, '')
              .replace(/'/g, '');
            
            const currentIndex = currentSlides[categoryKey] || 0;
            const currentProject = projects[currentIndex];
            
            const isEven = categoryIndex % 2 === 0;

            return (
              <div key={category} className="portfolio-category">
                <div className="category-header">
                  <span className="category-bar"></span>
                  <h3 className="category-title">{category}</h3>
                  <div className="category-count">
                    {projects.length} Projects
                  </div>
                </div>
                  
                <div className="relative">
                  <div className={`portfolio-project-grid ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}>
                    <a
                      href={currentProject?.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group cursor-pointer block ${
                        isEven ? 'lg:col-start-1' : 'lg:col-start-2'
                      }`}
                    >
                      <div className="work-thumbnail-container">
                        <img
                          src={currentProject?.thumbnail}
                          alt={currentProject?.title ?? "Current Project"}
                          className="work-thumbnail"
                        />
                        <div className="work-thumbnail-overlay"></div>
                        <div className="work-play-button">
                          <div className="play-circle">
                            <span className="play-icon">▶</span>
                          </div>
                        </div>
                      </div>
                    </a>

                    <div className={`project-info ${
                      isEven ? 'lg:col-start-2' : 'lg:col-start-1'
                    }`}>
                      <div className="mb-6">
                        <div className="project-index">
                          <span className="index-badge">
                            {currentIndex + 1} of {projects.length}
                          </span>
                        </div>
                        <h4 className="project-title">
                          {currentProject?.title}
                        </h4>
                        <div className="project-description-container">
                          <p className="project-description line-clamp-3">
                            {currentProject?.description}
                          </p>
                        </div>
                      </div>

                      <div className="project-controls">
                        <button
                          onClick={() => navigateSlide(category, 'prev')}
                          className="nav-btn"
                          aria-label="Previous project"
                        >
                          <ChevronLeft />
                        </button>
                        
                        <div className="dot-navigation">
                          {projects.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentSlides(prev => ({ ...prev, [categoryKey]: index }))}
                              className={`dot ${index === currentIndex ? 'active' : ''}`}
                              aria-label={`Go to project ${index + 1}`}
                            />
                          ))}
                        </div>

                        <button
                          onClick={() => navigateSlide(category, 'next')}
                          className="nav-btn"
                          aria-label="Next project"
                        >
                          <ChevronRight />
                        </button>
                      </div>

                      <a
                        href={currentProject?.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="watch-btn"
                      >
                        <span>Watch Now</span>
                        <span className="text-xl">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;