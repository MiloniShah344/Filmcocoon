import React from 'react';
import { Film, Sparkles, Layers, Scissors } from 'lucide-react';
// import stylesheet from '../styles/style.css'

const About = () => {
  const highlights = [
    { icon: <Film className="highlight-icon" />, title: 'Cinematic Storytelling', desc: 'From raw footage to emotionally-driven visuals that speak beyond words.' },
    { icon: <Scissors className="highlight-icon" />, title: 'Expert Post-Production', desc: 'Editing, sound, and color that bring structure and soul together seamlessly.' },
    { icon: <Layers className="highlight-icon" />, title: 'End-to-End Production', desc: 'From scripting to final delivery — every stage shaped with intent and precision.' },
    { icon: <Sparkles className="highlight-icon" />, title: 'Creative Collaboration', desc: 'Partnering with brands and creators to build authentic, meaningful stories.' },
  ];

  return (
    <section id="about" className="section section-bg-gradient">
      <div className="section-container">
        <div className="section-header">
          <h2 className="text-5xl font-extrabold text-stone-900 mb-4 tracking-tight">
            About <span className="section-title-accent">FilmCocoon</span>
          </h2>
          <p className="text-lg sm:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Where stories take shape. We transform uncut moments into cinematic experiences through storytelling, post-production, and creative collaboration.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="about-text">
          <p className="about-paragraph">
            Every story begins raw — unshaped, imperfect, and full of potential. At FilmCocoon, we help it emerge, frame by frame, into something meaningful.
            We craft films that move people — blending creative direction, thoughtful editing, and cinematic design.
          </p>
          <p className="about-paragraph">
            From industrial documentaries and brand stories to short films and passion projects, we work with both creators and companies who believe in the power of emotion, structure, and storytelling.
          </p>
          <p className="about-paragraph about-paragraph-italic">
            We don't just cut clips — we build rhythm. We shape silence. We discover the heartbeat inside every frame.
          </p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="mb-4">{item.icon}</div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-description">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="about-founder">
          <p>
            <span className="founder-name">Founded by filmmaker Naishal Shah</span>, FilmCocoon continues to evolve as a studio where structure meets soul.
          </p>
        </div>

        <div className="about-decoration"></div>
      </div>
    </section>
  );
};

export default About;