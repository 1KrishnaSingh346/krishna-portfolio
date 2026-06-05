"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function useGlobalFluid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fluidCoreRef = useRef<HTMLDivElement>(null);
  const fluidLagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!fluidCoreRef.current || !fluidLagRef.current) return;

      // Pure page context par dynamic translation vectors
      const coreXTo = gsap.quickTo(fluidCoreRef.current, "x", { duration: 0.4, ease: "power2.out" });
      const coreYTo = gsap.quickTo(fluidCoreRef.current, "y", { duration: 0.4, ease: "power2.out" });

      const lagXTo = gsap.quickTo(fluidLagRef.current, "x", { duration: 0.9, ease: "power3.out" });
      const lagYTo = gsap.quickTo(fluidLagRef.current, "y", { duration: 0.9, ease: "power3.out" });

      const handleMouseMove = (e: MouseEvent) => {
        // Local bound elements ke bajae direct client screen position utilize karega
        // Isse scroll karne par bhi fluid element upar-neeche break nahi hoga
        const x = e.clientX;
        const y = e.clientY;

        coreXTo(x);
        coreYTo(y);
        lagXTo(x);
        lagYTo(y);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    });

    return () => ctx.revert();
  }, []);

  return { containerRef, fluidCoreRef, fluidLagRef };
}