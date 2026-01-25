import React from 'react';
import { Film, Sparkles, Layers, Scissors } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Film className="w-8 h-8 text-orange-600" />, title: 'Cinematic Storytelling', desc: 'From raw footage to emotionally-driven visuals that speak beyond words.' },
    { icon: <Scissors className="w-8 h-8 text-orange-600" />, title: 'Expert Post-Production', desc: 'Editing, sound, and color that bring structure and soul together seamlessly.' },
    { icon: <Layers className="w-8 h-8 text-orange-600" />, title: 'End-to-End Production', desc: 'From scripting to final delivery — every stage shaped with intent and precision.' },
    { icon: <Sparkles className="w-8 h-8 text-orange-600" />, title: 'Creative Collaboration', desc: 'Partnering with brands and creators to build authentic, meaningful stories.' },
  ];

  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-stone-50 via-orange-50 to-stone-100 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-stone-900 mb-4 tracking-tight">
          About <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">FilmCocoon</span>
        </h2>
        <p className="text-lg sm:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
          Where stories take shape. We transform uncut moments into cinematic experiences through storytelling, post-production, and creative collaboration.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-800 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 space-y-8 text-center">
        <p className="text-stone-700 text-lg leading-relaxed">
          Every story begins raw — unshaped, imperfect, and full of potential. At FilmCocoon, we help it emerge, frame by frame, into something meaningful.
          We craft films that move people — blending creative direction, thoughtful editing, and cinematic design.
        </p>
        <p className="text-stone-700 text-lg leading-relaxed">
          From industrial documentaries and brand stories to short films and passion projects, we work with both creators and companies who believe in the power of emotion, structure, and storytelling.
        </p>
        <p className="text-stone-700 text-lg leading-relaxed italic">
          We don’t just cut clips — we build rhythm. We shape silence. We discover the heartbeat inside every frame.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all border border-orange-100 text-left"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg text-stone-900 mb-2">{item.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <p className="text-stone-600">
          <span className="font-medium">Founded by filmmaker Naishal Shah</span>, FilmCocoon continues to evolve as a studio where structure meets soul.
        </p>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,122,0,0.07),transparent_70%)]"></div>
    </section>
  );
};

export default About;
