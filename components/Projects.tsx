"use client";

import React from "react";
import { projectLedger } from "@/lib/data";
import { FiGithub, FiGlobe, FiFolder } from "react-icons/fi";

export default function ProjectsSection() {

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-transparent text-white select-none font-sans flex flex-col justify-center py-20 md:py-24 border-t border-white/5 overflow-hidden"
    >
      {/* ─── SYSTEM SUBSTRUCTURE MATRIX TRACKS ─── */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="max-w-7xl mx-auto h-full w-full px-6 sm:px-10 lg:px-16 grid grid-cols-4 gap-6">
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col">
        
        {/* ─── HEADER SEGMENT: POORI WIDTH TEXT BLOCK ─── */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-left relative z-20 mb-14 md:mb-20">

          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-6">
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/80 to-white/20">
              PROJECTS.
            </span>
          </h2>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              An architecture pipeline of robust platform deployments, scalable infrastructure grids, and custom processing nodes.
            </p>
            
            {/* Minimal Scroll Instruction */}
            <div className="flex items-center gap-2 font-mono text-[11px] text-gray-500 uppercase tracking-widest shrink-0">
              <span>Shift + Scroll Panel</span>
              <span className="text-[#00f2fe] font-bold">&rarr;</span>
            </div>
          </div>
        </div>

        {/* ─── FLEX-RIBBON HORIZONTAL HORIZON ENGINE ─── */}
        {/* Cross-Browser Scrollbar Hiding Inject */}
        <div className="w-full overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-6 md:gap-8 px-6 sm:px-10 lg:px-16 w-max">
            {projectLedger.map((project, index) => (
              <div
                key={index}
                className="w-[85vw] sm:w-[50vw] lg:w-[420px] shrink-0 border border-white/5 bg-white/1 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:border-[#00f2fe]/30 hover:bg-white/[0.02] flex flex-col justify-between min-h-[380px] group relative snap-center"
              >
              

                <div>
                  {/* Meta Label Grid */}
                  <div className="flex flex-col gap-1 mb-6">
                    <span className="font-mono text-[10px] text-[#00f2fe] tracking-widest uppercase font-black">
                      {project.meta}
                    </span>
                    <span className="font-mono text-[11px] text-gray-500 uppercase tracking-tight truncate max-w-60">
                      {project.category}
                    </span>
                  </div>

                  {/* Clean Folder Directory Title with Secure Wrapping */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#00f2fe] transition-colors duration-200 mb-4 flex items-start gap-3 break-words whitespace-normal leading-snug">
                    <FiFolder size={18} className="text-gray-500 group-hover:text-[#00f2fe] transition-colors duration-200 shrink-0 mt-1" />
                    <span className="w-full">{project.title}</span>
                  </h3>

                  {/* Description Blueprint Block */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footer Controls & System Badging */}
                <div className="flex flex-col gap-5 border-t border-white/5 pt-5">
                  {/* Fluid Dynamic Tags Wrap */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-white/2 border border-white/5 text-gray-400 rounded-md font-mono text-[10px] tracking-wide uppercase transition-colors duration-200 group-hover:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Operational Action Gateways */}
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex gap-2">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl border border-white/5 bg-white/1 text-gray-400 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-200"
                          title="Source Code Repository"
                        >
                          <FiGithub size={15} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl border border-[#00f2fe]/20 bg-[#00f2fe]/5 text-[#00f2fe] hover:bg-[#00f2fe]/10 transition-all duration-200"
                          title="Live Dashboard Execution"
                        >
                          <FiGlobe size={15} />
                        </a>
                      )}
                    </div>

                    {/* Operational Environment Validation Metric */}
                    {/* <span className="font-mono text-[10px] text-gray-600 tracking-tighter uppercase font-medium">
                      {project.liveUrl ? "ENV // DEPLOYED" : "ENV // INTERNAL"}
                    </span> */}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}