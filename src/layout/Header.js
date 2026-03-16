import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="relative w-full z-50 bg-black border-b border-white/10 px-8 py-6 flex justify-between items-center">
      <Logo />
      <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
        <a href="#home" className="hover:text-[#00ccff] transition-colors">Home</a>
        <a href="#simulation" className="hover:text-[#00ccff] transition-colors">Simulation</a>
        <a href="#technology" className="hover:text-[#00ccff] transition-colors">Technology</a>
        <a href="#contact" className="hover:text-[#00ccff] transition-colors">Contact</a>
      </nav>
      <button className="px-5 py-2 rounded-full border border-[#00ccff]/30 text-[#00ccff] text-[10px] font-bold uppercase tracking-wider hover:bg-[#00ccff] hover:text-black transition-all">
        Launch Console
      </button>
    </header>
  );
};

export default Header;
