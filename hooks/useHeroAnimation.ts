"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function useHeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !cardRef.current) return;

      const card = cardRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        const cardRect = card.getBoundingClientRect();
        
        // Exact element center calculations for hyper-precise angle translation
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        // Balanced angular tracking metrics (neither too rigid nor over-tilted)
        const rotateX = (e.clientY - cardCenterY) * -0.06;
        const rotateY = (e.clientX - cardCenterX) * 0.06;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1200,
          duration: 0.4,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      // Friction bounce matrix on mouse leave
      const handleMouseLeaveCard = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.6)",
        });
      };

      // Device Capability Filter: Runs heavy 3D tracking vectors only on desktop viewports
      const mediaQuery = window.matchMedia("(min-width: 768px)");
      if (mediaQuery.matches) {
        window.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeaveCard);
      }

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeaveCard);
      };
    });

    return () => ctx.revert();
  }, []);

  return { containerRef, cardRef };
}