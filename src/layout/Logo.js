import React from "react";

const Logo3D = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      
      {/* 3D Sphere */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-300 via-gray-700 to-black shadow-2xl"></div>

        {/* highlight */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full opacity-80 blur-[1px]"></div>

        {/* glow */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.7)]"></div>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">

        {/* Main Text */}
        <div
          className="text-3xl font-extrabold flex items-baseline"
          style={{
            color: "#e5e5e5",
            textShadow: `
              1px 1px 0 #000,
              2px 2px 0 #000,
              3px 3px 6px rgba(0,0,0,0.7)
            `,
          }}
        >
          <span>ins</span>

          <span
            style={{
              fontSize: "34px",
              color: "#ffffff",
              textShadow: `
                0 0 8px rgba(255,255,255,0.8),
                2px 2px 6px rgba(0,0,0,0.8)
              `,
            }}
          >
            Y
          </span>

          <span>ra</span>
        </div>

        {/* Tagline */}
        <div
          className="text-[10px] italic uppercase"
          style={{
            letterSpacing: "0.18em",
            color: "#00ccff",
            textShadow: "0 0 6px rgba(0,204,255,0.6)",
          }}
        >
          Insights & Synergies...!
        </div>
      </div>
    </div>
  );
};

export default Logo3D;