"use client";

import React, { useState } from "react";
import { journeyMilestones } from "@/lib/data"
export default function AboutSection() {
  const [activeMetric, setActiveMetric] = useState<number>(0);
  //   {
  //     year: "2025-Present",
  //     title: "CO-FOUNDER @ SANKALP NOVA LLP",
  //     description:
  //       "Co-founded Sankalp Nova LLP with the vision of helping students navigate academics, careers, and personal growth through structured guidance, mentorship, and educational support.",
  //     tag: "EDUCATION & MENTORSHIP",
  //   },
  //   {
  //     year: "2025",
  //     title: "COLLEGESECRACY",
  //     description:
  //       "Built a full-stack student platform featuring authentication, role-based access, secure payments, productivity tools, and a scalable backend architecture.",
  //     tag: "FULL-STACK PLATFORM",
  //   },
  //   {
  //     year: "2024-2025",
  //     title: "GDG ON CAMPUS IIIT KALYANI",
  //     description:
  //       "Served as an Ext-Core Team Member, contributing to developer-focused initiatives, technical events, community engagement, and student learning programs.",
  //     tag: "DEVELOPER COMMUNITY",
  //   },
  //   {
  //     year: "2024",
  //     title: "FULL-STACK JOURNEY",
  //     description:
  //       "Started builiding modern web applications with React, Node.js, MongoDB, and Javascript while strengthening problem-solving, algorithms, and software development fundamentals.",
  //     tag: "FOUNDATION",
  //   },
  // ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-transparent text-white select-none font-sans flex items-center py-20 md:py-30 border-t border-white/5"
    >
      {/* ─── TECHNICAL STUDIO BACKGROUND SUBSTRUCTURE GRID ─── */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 pointer-events-none z-0">
        <div className="md:col-span-7 border-r border-white/5 h-full hidden md:block" />
        <div className="md:col-span-5 h-full hidden md:block" />
      </div>

      {/* ─── FOREGROUND CONTENT RESPONSIVE CONTAINER ─── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 w-full max-w-7xl mx-auto gap-12 md:gap-0 px-5 sm:px-8 lg:px-12 items-center h-full">
        
        {/* LEFT COLUMN: Deep Humanized Portfolio Narrative */}
        <div className="md:col-span-7 flex flex-col justify-center text-left relative z-20 w-full lg:pr-12">
          
          {/* High-Grotesque Heavy Section Title */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
            ABOUT <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/70 to-white/10">
              ME
            </span>
          </h2>
          <h3 className="text-xl sm:text-xl lg:text-2xl font-black tracking-tighter uppercase leading-[0.85] mb-8 text-transparent bg-clip-text bg-linear-to-r from-white via-white/70 to-white/10">
              Building products, leading communities.
          </h3>

          {/* Deep Strategic Profile Content */}
          <div className="space-y-5 text-gray-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed mb-10">
            <p>
              I'm <span className="text-white font-bold">Krishna Singh</span>, a Full-Stack Engineer and Co-Founder of <span className="text-white font-bold">Sankalp Nova LLP</span>, currently pursuing Computer Science and Engineering at <span className="text-[#00f2fe] font-bold">IIIT Kalyani</span>. I 
              specialize in building scalable web applications, Progressive Web Apps (PWAs), intuitive user experiences, and high-performance backend systems using <span className="text-white">React, Next.js, TypeScript, Node.js, and MongoDB</span>.
            </p>
            <p>
              Previously, I served as an Ext-core Team member at <span className="text-white font-bold">GDG on Campus</span>, where I contributed to developer-focused initiatives and community events. Alongside my technical journey, I co-founded <span className="text-white font-bold">Sankalp Nova LLP</span> with a close friend, building an educational guidance and mentorship platform dedicated to helping students navigate academics, careers, and personal growth through structured support and guidance.
            </p>
          </div>

          {/* Core Hardware Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl border-t border-white/5 pt-6 font-mono">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white block tracking-tight">5+</h3>
              <span className="text-[9px] text-white/40 uppercase tracking-wider block mt-0.5">Projects Built</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white block tracking-tight">CO-FOUNDER </h3>
              <span className="text-[9px] text-white/40 uppercase tracking-wider block mt-0.5">SANKALP NOVA LLP</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#00f2fe] block tracking-tight">FULL-STACK</h3>
              <span className="text-[9px] text-white/40 uppercase tracking-wider block mt-0.5">ENGINEER</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0052ff] block tracking-tight">OPEN </h3>
              <span className="text-[9px] text-white/40 uppercase tracking-wider block mt-0.5">TO WORK</span>
            </div>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: DYNAMIC STRUCTURAL INTERACTIVE TIMELINE ─── */}
        <div className="md:col-span-5 w-full relative z-20 self-center">
          <div className="w-full bg-[#070707]/60 border border-white/10 rounded-4xl p-6 sm:p-8 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            
            {/* Terminal Tab Header Structure */}
            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6 font-mono text-[10px] tracking-widest uppercase text-white/30">
              <span>My JOURNEY</span>
              <span className="text-[#00f2fe] animate-pulse">BUILDING SINCE 2024</span>
            </div>

            {/* Micro Timeline Track Flow (Handles perfect axis alignment) */}
            <div className="relative border-l border-white/10 pl-6 sm:pl-8 space-y-8">
              {journeyMilestones.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveMetric(index)}
                  className="relative cursor-pointer group"
                >
                  {/* Dynamic Active Indicator Node on the Tracking Line */}
                  <span
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 h-3 w-3 rounded-full transition-all duration-300 border-2 ${
                      activeMetric === index
                        ? "bg-[#00f2fe] border-[#00f2fe] scale-125 shadow-[0_0_12px_#00f2fe]"
                        : "bg-[#070707] border-white/20 group-hover:border-white/60"
                    }`}
                  />

                  {/* Content Container Block Layer — Linear translate-y forward push instead of messy tilts */}
                  <div
                    className={`transition-all duration-500 ease-out transform ${
                      activeMetric === index
                        ? "translate-x-1"
                        : "opacity-40 group-hover:opacity-70"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-[#00f2fe] font-mono font-black text-base sm:text-lg">
                        {item.year}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-mono tracking-widest uppercase border border-white/10 bg-white/5 text-white/40 font-bold">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white mb-1.5 group-hover:text-[#00f2fe] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Industrial Design Sync Tech Corners */}
            <div className="absolute top-8 left-4 text-white/5 font-mono text-xs pointer-events-none select-none">+</div>
            <div className="absolute top-8 right-4 text-white/5 font-mono text-xs pointer-events-none select-none">+</div>
            <div className="absolute bottom-4 left-4 text-white/5 font-mono text-xs pointer-events-none select-none">+</div>
            <div className="absolute bottom-4 right-4 text-white/5 font-mono text-xs pointer-events-none select-none">+</div>

          </div>
        </div>

      </div>
    </section>
  );
}