import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
      <div className="flex flex-col gap-4">
        <Logo className="scale-90 origin-left" />
        <p className="text-[10px] text-white/40 max-w-xs mt-2 uppercase tracking-widest leading-relaxed">
          Pioneering the future of digital health through advanced 3D simulations and predictive analytics.
        </p>
      </div>
      
      <div className="flex flex-col items-center md:items-end gap-2 text-[10px] text-white/30 uppercase tracking-[0.2em]">
        <div>© 2026 insYra Industries. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-[#00ccff]">Privacy Policy</a>
          <a href="/terms" className="hover:text-[#00ccff]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
