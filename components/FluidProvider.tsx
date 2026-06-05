"use client";

import React from "react";
import { useGlobalFluid } from "@/hooks/useGlobalFluid";

export default function FluidProvider({ children }: { children: React.ReactNode }) {
  const { containerRef, fluidCoreRef, fluidLagRef } = useGlobalFluid();

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0d0d0d] text-white w-full">
      {/* ========================================================= */}
      {/* GLOBAL FIXED GOOEY BACKGROUND BACKDROP                    */}
      {/* ========================================================= */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none hidden md:block" 
        style={{ filter: "url(#global-gooey)" }}
      >
        {/* Lead Liquid Element */}
        <div
          ref={fluidCoreRef}
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#0052ff] to-[#00f2fe] opacity-[0.18] blur-[45px]"
        />
        
        {/* Trailing Elastic Liquid Element */}
        <div
          ref={fluidLagRef}
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-[#0052ff] opacity-[0.15] blur-[55px]"
        />
      </div>

      {/* Heavy Blend Color Matrix Node */}
      <svg className="hidden">
        <defs>
          <filter id="global-gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="35" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -10" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Dynamic App Content Tree Shell */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}