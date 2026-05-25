import { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = ({ scrollTo }) => {
  const roles = ["Software Developer", "AI Engineer", "Full-Stack Developer", "Data Analyst"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText === currentFullText) {
          // Pause at the end of the word
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden dot-grid">
      {/* Background Neon Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite_1s]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Available for Work Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-sm font-semibold mb-8 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300 transform hover:scale-105">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 absolute" />
          Available for Opportunities
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-syne font-extrabold text-white tracking-tight mb-4 select-none">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 hover:brightness-110 transition-all">Amogh HL</span>
        </h1>

        {/* Dynamic Typing Title */}
        <div className="h-12 flex items-center justify-center mb-6">
          <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {displayText}
            <span className="border-r-2 border-cyan-400 ml-1 cursor-blink inline-block h-6 md:h-8 align-middle" />
          </p>
        </div>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Computer Science Undergraduate <span className="text-cyan-500/80">|</span> Building Next-Gen AI/ML & Full-Stack Solutions
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-5">
          <button
            onClick={() => scrollTo('projects')}
            className="group px-8 py-4 rounded-2xl bg-cyan-500 text-slate-950 font-bold flex items-center justify-center gap-2 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollTo('contact')}
            className="group px-8 py-4 rounded-2xl bg-slate-900/60 text-white font-medium border border-white/10 flex items-center justify-center gap-2 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
            <Mail className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>
      </div>

      {/* Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 opacity-70 hover:opacity-100 transition-opacity" onClick={() => scrollTo('about')}>
        <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">Scroll Down</span>
        <svg className="w-5 h-5 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
