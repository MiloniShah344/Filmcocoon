import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = ({ portfolioData, currentSlides, setCurrentSlides, navigateSlide }) => {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Explore Our Work</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mt-2 mb-4">
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">Portfolio</span>
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Dive into a diverse collection of films, series, and creative projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-800 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="space-y-16">
          {Object.entries(portfolioData).map(([category, projects], categoryIndex) => {
            // ✅ FIXED: Properly handle category key generation (remove & and spaces)
            const categoryKey = category.toLowerCase().replace(/ /g, '-').replace(/&/g, '');
            const currentIndex = currentSlides[categoryKey] || 0;
            const currentProject = projects[currentIndex];
            
            const isEven = categoryIndex % 2 === 0;

            return (
              <div 
                key={category} 
                className={`rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow ${
                  categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-orange-50 to-stone-50'
                }`}
              >
                <div className="flex items-center mb-8">
                  <span className={`w-2 h-12 mr-4 rounded-full ${
                    categoryIndex % 2 === 0 
                      ? 'bg-gradient-to-b from-orange-600 to-orange-800' 
                      : 'bg-gradient-to-b from-stone-600 to-orange-600'
                  }`}></span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-stone-900">{category}</h3>
                  <div className="ml-4 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                    {projects.length} Projects
                  </div>
                </div>
                  
                <div className="relative">
                  <div className={`grid lg:grid-cols-2 gap-8 items-start ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}>
                    {/* Image Container */}
                    <a
                      href={currentProject?.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group cursor-pointer block ${
                        isEven ? 'lg:col-start-1' : 'lg:col-start-2'
                      }`}
                    >
                      <div className="relative overflow-hidden rounded-2xl aspect-video shadow-lg">
                        <img
                          src={currentProject?.thumbnail}
                          alt={currentProject?.title ?? "Current Project"}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                            <span className="text-white text-4xl ml-1">▶</span>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Text Content - ✅ FIXED: Added flex column with fixed structure */}
                    <div className={`flex flex-col ${
                      isEven ? 'lg:col-start-2' : 'lg:col-start-1'
                    }`}>
                      {/* Project Info - Fixed height section */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                            {currentIndex + 1} of {projects.length}
                          </span>
                        </div>
                        <h4 className="text-3xl font-bold text-stone-900 mb-4">
                          {currentProject?.title}
                        </h4>
                        {/* ✅ FIXED: Description with fixed min-height and line clamp */}
                        <div className="min-h-[84px]">
                          <p className="text-lg text-stone-600 leading-relaxed line-clamp-3">
                            {currentProject?.description}
                          </p>
                        </div>
                      </div>
                    <div>
                      </div>
                      {/* Navigation Controls - Always at same position */}
                      <div className="flex items-center gap-4 mb-6">
                        <button
                          onClick={() => navigateSlide(category, 'prev')}
                          className="p-3 bg-stone-200 hover:bg-orange-600 hover:text-white rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                          aria-label="Previous project"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        
                        <div className="flex-1 flex justify-center items-center gap-2">
                          {projects.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentSlides(prev => ({ ...prev, [categoryKey]: index }))}
                              className={`h-3 rounded-full transition-all ${
                                index === currentIndex
                                  ? 'bg-orange-600 w-10'
                                  : 'bg-stone-300 hover:bg-stone-400 w-3'
                              }`}
                              aria-label={`Go to project ${index + 1}`}
                            />
                          ))}
                        </div>
                        <div>
                        <button
                          onClick={() => navigateSlide(category, 'next')}
                          className="p-3 bg-stone-200 hover:bg-orange-600 hover:text-white rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-110"
                          aria-label="Next project"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                          </div>
                      {/* Watch Now Button - Always at same position */}
                      <a
                        href={currentProject?.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
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