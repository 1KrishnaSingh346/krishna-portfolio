"use client";

import React, { useState } from "react";
import handleSmoothScroll from "@/lib/helper";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
  ];

  return (

    <div className="fixed top-4 sm:top-5 left-0 right-0 z-50 w-full px-3 sm:px-6 lg:px-8 pointer-events-none">
      <nav className="mx-auto max-w-4xl w-full bg-[#0a0a0a]/65 border border-white/15 backdrop-blur-xl rounded-full transition-all duration-500 pointer-events-auto hover:border-[#00f2fe]/40 shadow-[0_25px_60px_rgba(0,0,0,0.65)]">
        <div className="px-5 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-15 items-center justify-between">
            
            {/* ─── BRAND LOGO AREA ─── */}
            <div className="shrink-0">
              <a 
                href="/" 
                onClick={(e) => handleSmoothScroll(e, "#")}
                className="text-sm sm:text-base font-black font-mono tracking-tighter text-white uppercase group select-none flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-none bg-[#00f2fe] inline-block animate-pulse shadow-[0_0_10px_#00f2fe]" />
                KRISHNA<span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f2fe] to-[#0052ff] group-hover:text-white transition-colors duration-300"> SINGH</span>
              </a>
            </div>

            {/* ─── DESKTOP NAVIGATION LINKS ─── */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1 lg:space-x-2 font-mono text-[11px] font-medium tracking-widest uppercase">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="relative px-3 lg:px-4 py-2 text-white/70 hover:text-[#00f2fe] tracking-widest hover:tracking-[0.18em] transition-all duration-300 group flex items-center"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00f2fe] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#00f2fe]" />
                  </a>
                ))}
              </div>
            </div>

            {/* ─── DESKTOP CALL TO ACTION ─── */}
            <div className="hidden md:block">
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="group relative inline-block px-5 py-2 cursor-pointer bg-white text-black font-mono text-[10px] tracking-widest uppercase font-black rounded-full overflow-hidden transition-all duration-300 active:scale-95 border border-white"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Hire Me</span>
                <div className="absolute inset-0 bg-linear-to-r from-[#0052ff] to-[#00f2fe] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </a>
            </div>

            {/* ─── MOBILE HAMBURGER MECHANICS (Perfect Alignment) ─── */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-white hover:text-[#00f2fe] focus:outline-none transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Toggle Layout Menu</span>
                <div className="w-5 h-3.5 flex flex-col justify-between items-end relative">
                  <span className={`h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 absolute top-1.5 w-5 bg-[#00f2fe]' : 'w-5'}`} />
                  <span className={`h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-3.5'}`} />
                  <span className={`h-[1.5px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 absolute top-1.5 w-5 bg-[#00f2fe]' : 'w-4'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ─── OPTIMIZED MOBILE DRAWER OVERLAY (Sleek Grid Integration) ─── */}
        <div 
          className={`md:hidden absolute top-[66px] sm:top-[72px] left-0 right-0 w-full bg-[#070707]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] transition-all duration-400 cubic-bezier(0.16, 1, 0.3, 1) overflow-hidden ${
            isOpen ? 'max-h-[370px] opacity-100 visible shadow-[0_30px_60px_rgba(0,0,0,0.85)]' : 'max-h-0 opacity-0 pointer-events-none'
          }`} 
          id="mobile-menu"
        >
          {/* Internal Grid Frame Layout */}
          <div className="px-5 py-5 sm:p-6 space-y-1 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] font-mono text-xs tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-white/70 hover:text-[#00f2fe] hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-200 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                <span className="text-[10px] text-white/20 group-hover:text-[#00f2fe] group-hover:translate-x-0.5 transition-all duration-200">&rarr;</span>
              </a>
            ))}
            
            {/* Interactive Mobile Premium Button Grid */}
            <div className="pt-4 px-1">
              <a 
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="block w-full text-center cursor-pointer py-3.5 bg-linear-to-r from-[#0052ff] to-[#00f2fe] text-white font-black tracking-widest text-xs uppercase rounded-full shadow-[0_10px_25px_rgba(0,82,255,0.35)] active:scale-[0.98] transition-all duration-200 border border-white/10"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}