import React from 'react';

const ADMECard = ({ letter, title, image, color }) => {
  return (
    <div className="group relative bg-[#020815] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#00ccff]/30 hover:shadow-[0_0_40px_rgba(0,204,255,0.1)] flex flex-col items-center p-8 w-full max-w-[280px]">
      {/* Background Glow */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
      
      {/* Header Area */}
      <div className="w-full flex justify-between items-start mb-8">
        <span className={`text-5xl font-black italic text-white/80 ${color === 'green-500' ? 'group-hover:text-green-500' : 'group-hover:text-[#00ccff]'} transition-colors duration-500`}>
          {letter}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mt-2">
          {title}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-black/40 border border-white/5 group-hover:border-[#00ccff]/20 transition-all duration-500">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover mix-blend-lighten opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
        />
        {/* Scanning Line Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ccff]/5 to-transparent h-[200%] -translate-y-full group-hover:animate-scan-fast pointer-events-none"></div>
      </div>

      {/* Label Overlay (matching the screenshot style) */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 pointer-events-none text-center">
         <div className="text-[14px] font-bold text-white shadow-black drop-shadow-lg opacity-90">{title}</div>
         <div className="text-[8px] text-white/60 tracking-wider">Drug enters process</div>
      </div>
    </div>
  );
};

const Pharmacokinetics = () => {
  const admeData = [
    { letter: 'A', title: 'ABSORPTION', image: '/images/absorption.png', color: 'blue-400' },
    { letter: 'D', title: 'DISTRIBUTION', image: '/images/distribution.png', color: 'blue-400' },
    { letter: 'M', title: 'METABOLISM', image: '/images/metabolism.png', color: 'green-500' },
    { letter: 'E', title: 'EXCRETION', image: '/images/excretion.png', color: 'blue-400' },
  ];

  return (
    <section id="simulation" className="w-full py-20 px-8 flex flex-col items-center bg-black">
      <div className="max-w-7xl w-full">
        {/* Title Section */}
        <div className="flex items-center gap-6 mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white/90">
            Pharmacokinetics <span className="font-bold">Parameters</span>
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-[#00ccff]/50 via-[#0ef]/10 to-transparent"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {admeData.map((data, index) => (
            <ADMECard key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pharmacokinetics;
