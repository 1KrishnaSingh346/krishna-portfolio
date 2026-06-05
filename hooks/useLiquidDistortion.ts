"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface FluidNode {
  x: number;
  y: number;
  ox: number; // Original X coordinate
  oy: number; // Original Y coordinate
  vx: number; // Velocity X
  vy: number; // Velocity Y
}

export function useLiquidDistortion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const nodesRef = useRef<FluidNode[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, lx: 0, ly: 0, vX: 0, vY: 0, active: false });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Grid Configuration Metrics
    const spacing = 45; // Density of liquid interaction vertices
    const influenceRadius = 160; // How far the distortion reaches
    const fluidFriction = 0.92; // Fluid thickness / drag rate
    const elasticReturn = 0.04; // Spring back speed to rigid architecture

    const initGrid = () => {
      const w = (canvas.width = container.clientWidth);
      const h = (canvas.height = container.clientHeight);
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;
      
      const tmpNodes: FluidNode[] = [];
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * spacing;
          const y = r * spacing;
          tmpNodes.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
        }
      }
      nodesRef.current = tmpNodes;
    };

    initGrid();

    // Resize Observer to handle flexible fluid sizing without layout breaks
    const resizeObserver = new ResizeObserver(() => {
      initGrid();
    });
    resizeObserver.observe(container);

    // 2. Continuous Liquid Simulation Render Loop
    const renderSimulation = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      
      // Real-time calculation of frame velocity
      mouse.vX = mouse.x - mouse.lx;
      mouse.vY = mouse.y - mouse.ly;
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;

      const nodes = nodesRef.current;

      // Update Node Vectors Physics
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Structural Vector Distance Math
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (mouse.active && dist < influenceRadius) {
          // Dynamic force proportional to proximity and mouse speed
          const force = (1 - dist / influenceRadius) * 1.5;
          const pushX = (dx / dist) * force * Math.abs(mouse.vX + 1);
          const pushY = (dy / dist) * force * Math.abs(mouse.vY + 1);

          // Displace the liquid node away from cursor trajectory
          n.vx -= pushX;
          n.vy -= pushY;
        }

        // Apply Natural Homeopathic Elastic Gravity
        const homeDx = n.ox - n.x;
        const homeDy = n.oy - n.y;
        n.vx += homeDx * elasticReturn;
        n.vy += homeDy * elasticReturn;

        // Apply Drag/Friction dampening
        n.vx *= fluidFriction;
        n.vy *= fluidFriction;

        // Mutate positions
        n.x += n.vx;
        n.y += n.vy;
      }

      // Draw Re-engineered Dynamic Fluid Mesh Grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      
      // Render clean horizontal structural strings warped by vector forces
      const w = canvas.width;
      const h = canvas.height;
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const idx = c * rows + r;
          if (idx < nodes.length) {
            const n = nodes[idx];
            if (c === 0) ctx.moveTo(n.x, n.y);
            else ctx.lineTo(n.x, n.y);
          }
        }
        ctx.stroke();
      }

      // Draw Neon Interactive Plasma Energy Fields at displaced coordinates
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const displacement = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        
        if (displacement > 0.8) {
          const alpha = Math.min(displacement * 0.12, 0.45);
          
          // Render glowing quantum energy particles inside the distortion field
          const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, displacement * 2.5);
          gradient.addColorStop(0, `rgba(0, 242, 254, ${alpha})`);
          gradient.addColorStop(0.4, `rgba(0, 82, 255, ${alpha * 0.4})`);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(n.x, n.y, displacement * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameRef.current = requestAnimationFrame(renderSimulation);
    };

    animationFrameRef.current = requestAnimationFrame(renderSimulation);

    // 3. Document Interactivity Event Handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;

      // Master 3D Card Matrix Core Perspective Shift
      if (cardRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const rotateX = (e.clientY - cardCenterY) * -0.06;
        const rotateY = (e.clientX - cardCenterX) * 0.06;

        gsap.to(cardRef.current, {
          rotateX,
          rotateY,
          transformPerspective: 1200,
          duration: 0.4,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleMouseLeaveCard = () => {
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.6)",
        });
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    cardRef.current?.addEventListener("mouseleave", handleMouseLeaveCard);

    return () => {
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cardRef.current?.removeEventListener("mouseleave", handleMouseLeaveCard);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return { containerRef, canvasRef, cardRef };
}