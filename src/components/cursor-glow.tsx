"use client";

import { useEffect, useRef, useState } from "react";

const GLOW_SIZE = 600;

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!coarse && !reducedMotion) {
      setEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const coords = { x: -GLOW_SIZE, y: -GLOW_SIZE };
    let rafId = 0;

    const apply = () => {
      rafId = 0;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${coords.x - GLOW_SIZE / 2}px, ${coords.y - GLOW_SIZE / 2}px, 0)`;
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      coords.x = event.clientX;
      coords.y = event.clientY;
      if (!rafId) rafId = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      <div
        ref={glowRef}
        className="rounded-full will-change-transform"
        style={{
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          background: "radial-gradient(closest-side, hsl(var(--primary) / 0.12), transparent)",
          transform: `translate3d(${-GLOW_SIZE}px, ${-GLOW_SIZE}px, 0)`,
        }}
      />
    </div>
  );
}
