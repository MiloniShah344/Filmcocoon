import React from 'react';

const RecentWork = ({ recentWork }) => {
  return (
    <section id="recent-work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 to-orange-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Latest Projects</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mt-2 mb-4">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">Work</span>
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Latest projects across various formats showcasing diverse storytelling approaches
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-800 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentWork.map((project) => (
           <a 
              key={project.id}
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer flex flex-col"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 duration-300 flex flex-col h-full">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                      <span className="text-white text-3xl ml-1">▶</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                </div>
                {/* FIXED: Added flex-1 to make content area equal */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  {/* FIXED: Added line-clamp-3 to limit description to 3 lines */}
                  <p className="text-stone-600 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  {/* FIXED: Added mt-auto to push button to bottom */}
                  <div className="mt-auto flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Watch Now</span>
                    <span className="ml-2">→</span>
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