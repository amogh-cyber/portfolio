import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, scrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Life Beyond Code', id: 'extracurriculars' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-4 inset-x-4 z-50 transition-all duration-300 max-w-5xl mx-auto">
      <div className="glassmorphism bg-[#0B0F19]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-cyan-500/30 transition-all duration-300">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollTo('home'); }} 
              className="text-xl font-syne font-extrabold text-white tracking-widest hover:text-cyan-400 transition-colors duration-300"
            >
              AMOGH<span className="text-cyan-400 animate-pulse">.</span>HL
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'text-cyan-400 bg-cyan-500/10 shadow-[inset_0_0_12px_rgba(6,182,212,0.15)] border border-cyan-500/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 focus:outline-none transition-all duration-300"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#0B0F19]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                scrollTo(link.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeSection === link.id 
                  ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
