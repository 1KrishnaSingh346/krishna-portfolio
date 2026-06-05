"use client";
import React from "react";

import { skillRegistry } from "@/lib/data";

export default function SkillsSection() {


  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-transparent text-white select-none font-sans flex items-center py-20 md:py-20 border-t border-white/5"
    >
      {/* ─── TECHNICAL MATRIX BACKGROUND LINES ─── */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <div className="max-w-7xl mx-auto h-full w-full px-4 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full hidden sm:block" />
          <div className="h-full hidden lg:block" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-center">
        
        {/* ─── HEADER BLOCK ─── */}
        <div className="max-w-2xl text-left relative z-20 mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
            SKILLS & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/70 to-white/10">
              EXPERTISE.
            </span>
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm max-w-xl leading-relaxed">
           Technologies, tools, and engineering practices I use to build scalable web applications, modern user experiences, and production-ready digital products.
          </p>
        </div>

        {/* ─── INTERACTIVE MATRIX BORDER LAYOUT (NO CARDS) ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/5 w-full">
          {skillRegistry.map((group, index) => {
            const CategoryIcon = group.icon;

            return (
              <div
                key={group.category}
                className="group relative border-r border-b border-white/5 p-6 md:p-8 transition-all duration-300 hover:bg-white/1"
              >
                {/* Minimal Dynamic Corner Glow */}
                <div className="absolute top-0 left-0 w-0.5 h-0 bg-[#00f2fe] transition-all duration-300 group-hover:h-full" />
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#00f2fe] transition-all duration-300 group-hover:w-full" />

                {/* Section Identifier Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <CategoryIcon size={16} className="text-gray-500 group-hover:text-[#00f2fe] transition-colors duration-300" />
                    <h3 className="text-xs uppercase tracking-widest font-mono font-bold text-white/80 group-hover:text-white transition-colors duration-300">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-gray-700 tracking-wider">
                    [0{index + 1}]
                  </span>
                </div>

                {/* Clean Structural Rows for Skills */}
                <div className="flex flex-col division-y division-white/5">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between py-3 border-b border-white/3 last:border-none group/row transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <SkillIcon
                            size={14}
                            className="text-gray-600 group-hover/row:text-[#00f2fe] group-hover:text-gray-400 transition-colors duration-200 shrink-0"
                          />
                          <span className="font-mono text-xs text-gray-400 group-hover/row:text-white transition-colors duration-200">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}