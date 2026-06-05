"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LoaderContextType {
  isLoading: boolean;
}

const LoaderContext = createContext<LoaderContextType>({ isLoading: true });

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent dual scrollbar rendering bugs during entry sequence
    document.body.style.overflow = "hidden";

    // Extreme performance non-linear timing loop
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "unset";
          }, 400); // Ultra-fast snappier transition dismiss threshold
          return 100;
        }

        // Professional Non-Linear pacing system
        let increment = 0;
        if (prev < 80) {
          // Hyper-speed entry burst state
          increment = Math.floor(Math.random() * 14) + 10;
        } else {
          // Precise mathematical calibration simulation near completion
          increment = Math.floor(Math.random() * 4) + 2;
        }

        return Math.min(prev + increment, 100);
      });
    }, 30); // 30ms refresh engine loop speed

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading }}>
      {/* ─── ULTRA PREMIUM CYBER SHUTTER PRELOADER OVERLAY ─── */}
      <div
        className={`fixed inset-0 bg-[#040404] z-50 flex flex-col justify-center items-center select-none transition-all duration-600 cubic-bezier(0.85, 0, 0.15, 1) ${
          !isLoading ? "-translate-y-full opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Futuristic Technical Line Matrix Backdrop Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Subtle Ambient Radial Lighting Layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#00f2fe]/5 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-8 text-center">
          
          {/* Personalised Identity Node Header Brand */}
          <div className="mb-6 flex flex-col items-center gap-1.5">
            <h1 className="font-sans font-black text-xs sm:text-sm tracking-[0.35em] text-white uppercase">
              KRISHNA<span className="text-[#00f2fe] drop-shadow-[0_0_8px_#00f2fe]"> SINGH</span>
            </h1>
            <p className="font-mono text-[8px] tracking-[0.25em] text-gray-500 uppercase">
              Developer // Portfolio // Core
            </p>
          </div>

          {/* Large Minimalist Matrix Percentage Counter */}
          <div className="font-mono text-7xl sm:text-8xl font-black tracking-tighter text-white flex items-baseline mb-4">
            <span className="w-[120px] sm:w-[165px] text-right text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40">
              {String(progress).padStart(3, "0")}
            </span>
            <span className="text-[#00f2fe] text-xl sm:text-2xl font-bold ml-1 animate-pulse">
              %
            </span>
          </div>

          {/* Tech Bar Container with Dual Gradient Trace line */}
          <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative mb-4">
            <div
              className="h-full bg-gradient-to-r from-[#0052ff] via-[#00f2fe] to-white transition-all duration-300 ease-out rounded-full shadow-[0_0_15px_rgba(0,242,254,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Dynamic Console Telemetry Logs System */}
          <div className="font-mono text-[9px] tracking-[0.2em] text-gray-400 uppercase h-4 flex items-center justify-center">
           {progress < 40 && (
  <span className="text-gray-500">
    Initializing Portfolio Experience...
  </span>
)}

{progress >= 40 && progress < 80 && (
  <span className="text-gray-500">
    Loading Projects & Expertise...
  </span>
)}

{progress >= 80 && progress < 100 && (
  <span className="text-gray-400 animate-pulse">
    Preparing Workspace...
  </span>
)}

{progress === 100 && (
  <span className="text-[#00f2fe] font-bold tracking-[0.15em]">
    Ready • Welcome
  </span>
)}
          </div>

        </div>
      </div>

      {children}
    </LoaderContext.Provider>
  );
}

export const useLoader = () => useContext(LoaderContext);