"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/5 bg-[#070707]/30 py-10 md:py-14 z-20 select-none font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left text-[11px] font-mono uppercase tracking-widest text-gray-500">
        
        {/* Left Segment: Purani Core Identity Core Theme */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <span className="font-sans font-black text-sm text-white tracking-tighter uppercase">
            KRISHNA<span className="text-[#00f2fe] animate-pulse"> SINGH</span>
          </span>
          {/* <span className="hidden sm:inline text-gray-800">//</span> */}
          <span className="text-gray-400">© 2026 All rights reserved.</span>
        </div>

        {/* Right Segment: Designation Framework Placement */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[10px] md:text-[11px]">
          <span className="text-gray-400 font-medium">Full-Stack Engineer</span>
          <span className="hidden sm:inline text-gray-800">•</span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/80 to-white/40 font-semibold">
            Co-Founder @ Sankalp Nova LLP
          </span>
        </div>
        
      </div>
    </footer>
  );
}