"use client";

import React from "react";
import Image from "next/image";
import handleSmoothScroll from "@/lib/helper";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen md:min-h-[calc(100vh-72px)] w-full overflow-hidden bg-transparent text-white select-none font-sans flex items-center pt-20 md:pt-26 pb-12 md:pb-0">
      
      {/* ─── NEO-BRUTALIST GRAPHIC SUBSTRUCTURE MATRIX GUIDES ─── */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 pointer-events-none border-b border-white/5 z-0">
        <div className="md:col-span-7 border-r border-white/5 h-full hidden md:block" />
        <div className="md:col-span-5 h-full hidden md:block" />
      </div>

      {/* ─── FOREGROUND CONTENT WRAPPER ─── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 w-full max-w-7xl mx-auto gap-0 md:gap-0 px-5 sm:px-8 lg:px-12 items-center h-full">
        
        {/* LEFT COLUMN: Deep, Premium Developer Layout (Aligned & Packed) */}
        <div className="md:col-span-7 flex flex-col justify-center text-left order-2 md:order-1 lg:pr-12 relative z-20">
          
          {/* Main Grotesque Heavy Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
            KRISHNA<span className="text-transparent bg-clip-text bg-linear-to-r from-[#00f2fe] via-white/80 to-white/10"> SINGH</span>
          </h1>

          {/* Premium Tech Studio Segment Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none font-mono text-[10px] tracking-widest uppercase">
            <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-white rounded-md whitespace-nowrap">Full-Stack Engineer</span>
            <span className="px-3 py-1.5 bg-transparent border border-white/5 text-white/40 rounded-md whitespace-nowrap">ENTREPRENEUR</span>
            <span className="px-3 py-1.5 bg-transparent border border-white/5 text-white/40 rounded-md whitespace-nowrap">FOUNDER @ SANKALP NOVA LLP</span>
          </div>
          
          {/* Punchy Core Narrative Statement */}
          <p className="text-gray-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-8">
            Engineering products that solve real problems.
            Full-Stack Engineer and Founder of Sankalp Nova LLP, specializing in high-performance web applications, modern user experiences and scalable backend systems.
          </p>

          {/* Core Interactive Touchpoint Controls */}
          <div className="flex flex-col sm:flex-row gap-4 relative z-20 w-full sm:w-auto mb-10">
            <a
             href="#contact"
             onClick={(e)=> handleSmoothScroll(e,"#contact")}
            >
              <button className="group relative cursor-pointer w-full sm:w-auto px-8 py-4 bg-white text-black font-mono font-black text-xs tracking-widest uppercase overflow-hidden transition-all duration-300 active:scale-95 border border-white rounded-full text-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">HIRE ME</span>
                <div className="absolute inset-0 bg-linear-to-r from-[#0052ff] to-[#00f2fe] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </button>
            </a>
            <a 
            href="https://drive.google.com/file/d/1yqLiK_ABEaENxHELZn4-7hrvHYBTxtE7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            >
              <button className="group w-full sm:w-auto px-8 py-4 border cursor-pointer border-white/10 hover:border-[#00f2fe]/30 font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 text-white/80 hover:text-[#00f2fe] bg-white/[0.01] rounded-full text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                WATCH CV <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
              </button>
            </a>
          </div>

          {/* Mechanical Live Counters/Stats Section */}
          <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 max-w-lg font-mono">
            <div>
              <span className="text-xl sm:text-2xl font-black text-white block tracking-tight">FULL-STACK</span>
              <span className="text-[10px] text-white/40 uppercase tracking-wider">ENGINEER</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-white block tracking-tight animate-pulse text-[#00f2fe]">STARTUP</span>
              <span className="text-[10px] text-white/40 uppercase tracking-wider">FOUNDER</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-white block tracking-tight">OPEN TO</span>
              <span className="text-[10px] text-white/40 uppercase tracking-wider">OPPORTUNITIES</span>
            </div>
          </div>
        </div>

        

        {/* ─── STABILIZED PURE HOVER AVATAR SYSTEM (RIGHT COLUMN) ─── */}
        {/* Removed cardRef dynamic script boundaries entirely. Controls layout with precise native transitions */}
        <div className="md:col-span-5 flex items-end justify-center order-1 md:order-2 w-full h-90 sm:h-110 md:h-full max-h-115 relative overflow-visible mt-2 md:mt-0">
          <div className="group relative w-full h-full flex items-end justify-center transition-all duration-500 ease-out">
            
            {/* Unbounded Frame Image Layer */}
            <div className="relative w-full h-full flex items-end justify-center overflow-visible">
              
              {/* Soft Studio Radial Spotlight Behind Avatar */}
              <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[420px] md:w-[550px] h-[320px] sm:h-[420px] md:h-[550px] bg-linear-to-t from-[#0052ff]/10 via-[#00f2fe]/5 to-transparent rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

              {/* Blueprint Grid Mesh Base Underlay */}
              <div className="absolute bottom-0 inset-x-0 h-40 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] -z-10 rounded-3xl pointer-events-none" />

              {/* Profile Image Container Shell — Safe vertical tracking transformation matrix on hover */}
              <div className="relative w-full h-full flex items-end justify-center transition-transform duration-500 ease-out origin-bottom scale-100 sm:scale-105 md:scale-100 group-hover:scale-[1.03] group-hover:-translate-y-3">
                <Image
                  src="/hero-removebg-preview.png"
                  alt="Krishna Full-Fledge 3D Portrait Asset"
                  width={520}
                  height={700}
                  priority
                  className="object-contain w-auto h-full max-h-full select-none pointer-events-none drop-shadow-[0_25px_55px_rgba(0,0,0,0.72)]"
                />
              </div>

              {/* Tech Corner Grid Sync Accents */}
              <div className="absolute top-8 left-2 text-white/5 font-mono text-sm pointer-events-none select-none">+</div >
              <div className="absolute top-8 right-2 text-white/5 font-mono text-sm pointer-events-none select-none">+</div >
              <div className="absolute bottom-2 left-2 text-white/5 font-mono text-sm pointer-events-none select-none">+</div >
              <div className="absolute bottom-2 right-2 text-white/5 font-mono text-sm pointer-events-none select-none">+</div >
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}