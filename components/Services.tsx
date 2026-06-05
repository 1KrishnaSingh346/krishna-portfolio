"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { serviceMatrix } from "@/lib/data";
import handleSmoothScroll from "@/lib/helper";

export default function ServicesSection() {


  // Helper function to render a single service card instance
  const renderCard = (service: typeof serviceMatrix[0], uniqueKey: string) => {
    const ServiceIcon = service.icon;
    return (
      <div
        key={uniqueKey}
        className="w-72.5 sm:w-85 lg:w-full shrink-0 border border-white/5 bg-white/1 p-6 rounded-2xl flex flex-col justify-between min-h-95 transition-all duration-300 hover:border-[#00f2fe]/40 hover:bg-white/2"
      >
        <div>
     
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/1 border border-white/10 text-gray-400 group-hover:border-[#00f2fe]/20 group-hover:text-[#00f2fe] group-hover:bg-[#00f2fe]/5 transition-all duration-300">
              <ServiceIcon size={16} />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase font-bold">
              {service.subtitle}
            </span>
          </div>

          {/* Service Title */}
          <h3 className="text-lg lg:text-xl font-bold uppercase tracking-tight text-white mb-4 transition-colors duration-200">
            {service.title}
          </h3>

          {/* Service Description */}
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light mb-6">
            {service.description}
          </p>
        </div>

        {/* Deliverables & Call-To-Action */}
        <div className="flex flex-col gap-6 border-t border-white/5 pt-6">
          <div className="space-y-2.5 font-mono text-[11px] tracking-wide text-gray-500">
            {service.deliverables.map((item, dIdx) => (
              <div key={dIdx} className="flex items-center gap-3">
                <span className="h-1 w-1 bg-gray-600 rounded-full shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>

          {/* Action Trigger Link Button */}
          <div className="w-full flex justify-center pt-2">
            <a
              href="#contact"
              onClick={(e)=>handleSmoothScroll(e, "#contact")}
              className="w-full inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-gray-400 border border-white/10 bg-white/[0.02] py-3 rounded-xl hover:border-[#00f2fe] hover:text-[#00f2fe] hover:bg-[#00f2fe]/5 transition-all duration-200 group/btn"
            >
              <span>Let's Connect</span>
              <FiArrowRight size={13} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="services"
      className="relative min-h-screen w-full bg-transparent text-white select-none font-sans flex items-center py-20 md:py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Dynamic Global Keyframe injection inside component context for cross-browser support */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeHorizon {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        @media (max-width: 1023px) {
          .animate-infinite-marquee {
            animation: marqueeHorizon 25s linear infinite;
          }
          .animate-infinite-marquee:active,
          .animate-infinite-marquee:hover {
            animation-play-state: paused;
          }
        }
      `}} />

      {/* Background Ambience Layout Matrix Guides */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-5">
        <div className="max-w-7xl mx-auto h-full w-full px-6 sm:px-10 grid grid-cols-4 gap-6">
          <div className="border-r border-white/10 h-full" />
          <div className="border-r border-white/10 h-full" />
          <div className="border-r border-white/10 h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center">
        
        {/* ─── HEADER SEGMENT ─── */}
        <div className="w-full text-left relative z-20 mb-14 md:mb-20 max-w-3xl">
          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-6">
            EXPERTISE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/80 to-white/20">
              & SERVICES.
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl font-light mt-4">
            Architecting high-performance web systems, robust infrastructure pipelines, and highly responsive digital experiences.
          </p>
        </div>

        {/* ─── INFINITE AUTO-SCROLL HARDWARE ENGINE ─── */}
        {/* Mobile: Infinite Loop Scrolling Track | Desktop: Seamless Grid Breakdown */}
        <div className="w-full overflow-x-hidden pb-4 lg:overflow-visible">
          <div className="flex gap-6 w-max lg:w-full lg:grid lg:grid-cols-3 lg:gap-8 animate-infinite-marquee">
            
            {/* Set 1: Native Rendering */}
            {serviceMatrix.map((service, index) => 
              renderCard(service, `native-${index}`)
            )}
            <div className="flex gap-6 lg:hidden">
              {serviceMatrix.map((service, index) => 
                renderCard(service, `clone-${index}`)
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}