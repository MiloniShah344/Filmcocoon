import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-stone-100 via-orange-50 to-stone-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-stone-300 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                Director • Filmmaker • Storyteller
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 leading-tight">
              Stories That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">
                Come Alive
              </span>
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-xl">
              Crafting cinematic experiences that resonate, inspire, and leave lasting impressions. Every frame tells a story, every story creates magic.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-orange-400 via-orange-500 to-stone-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                <span className="text-7xl animate-bounce">🎬</span>
              </div>
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/30 rounded-full animate-float"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/20 rounded-full animate-float-delayed"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-stone-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Animations CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;