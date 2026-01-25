import React from 'react';

const RecentWork = ({ recentWork }) => {
  return (
    <section id="recent-work" className="section section-bg-gradient">
      <div className="section-decoration decoration-green" style={{top: 0, right: 0, width: '24rem', height: '24rem'}}></div>
      
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Latest Projects</span>
          <h2 className="section-title">
            Recent <span className="section-title-accent">Work</span>
          </h2>
          <p className="section-description">
            Latest projects across various formats showcasing diverse storytelling approaches
          </p>
          <div className="section-divider"></div>
        </div>
        
        <div className="work-grid">
          {recentWork.map((project) => (
            <a 
              key={project.id}
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card-link"
            >
              <div className="work-card-inner">
                <div className="work-thumbnail-container">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="work-thumbnail"
                  />
                  <div className="work-thumbnail-overlay"></div>
                  <div className="work-play-button">
                    <div className="play-circle">
                      <span className="play-icon">▶</span>
                    </div>
                  </div>
                  <div className="featured-badge">
                    Featured
                  </div>
                </div>

                <div className="work-content">
                  <h3 className="work-title">
                    {project.title}
                  </h3>
                  <p className="work-description line-clamp-3">
                    {project.description}
                  </p>
                  <div className="work-cta">
                    <span>Watch Now</span>
                    <span className="cta-arrow">→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;