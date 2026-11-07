"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function LogoPreloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Disable scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const startTime = performance.now();
    const duration = 1800; // 1.8 seconds

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressFraction = Math.min(elapsed / duration, 1);
      
      // Easing out for natural loading feel
      const eased = Math.round(Math.sin((progressFraction * Math.PI) / 2) * 100);
      setProgress(eased);

      if (progressFraction < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        // Complete
        setTimeout(() => {
          setIsFinished(true);
          document.body.style.overflow = "";
          if (onComplete) onComplete();
          // Remove from DOM after exit animation finishes
          setTimeout(() => {
            setIsMounted(false);
          }, 800);
        }, 300);
      }
    };

    const animId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animId);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (!isMounted) return null;

  // Circle radius and circumference for SVG circle stroke dash
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1A0D08] transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isFinished ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
      }`}
    >
      {/* Background radial warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,138,54,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Center Emblem Container */}
      <div className="relative flex flex-col items-center justify-center z-10 px-6 text-center">
        {/* Animated Circle Wrapper */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
          {/* SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
            {/* Background Track */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="#3D2315"
              strokeWidth="3"
            />
            {/* Animated Golden Stroke */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="#D68A36"
              strokeWidth="3.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-75 ease-out"
            />
          </svg>

          {/* Centered Logo Badge */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1 shadow-[0_0_30px_rgba(214,138,54,0.35)] transform transition-transform duration-500 scale-100 hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Ananth Bakery Official Seal"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Brand Typography */}
        <div className="mt-6 flex flex-col items-center">
          <span className="font-serif text-2xl sm:text-3xl font-black tracking-wider text-[#FAF7F2] uppercase">
            ANAND BAKERY
          </span>
          <div className="flex items-center gap-2 mt-1.5 text-[10px] sm:text-xs font-display font-semibold tracking-[0.25em] text-[#D68A36] uppercase">
            <span>Sawyerpuram</span>
            <span>•</span>
            <span>Est. 1968</span>
            <span>•</span>
            <span>Tamil Nadu</span>
          </div>

          {/* Percentage Indicator */}
          <div className="mt-4 font-mono text-xs tracking-widest text-[#EADBC4]/70">
            {progress}%
          </div>
        </div>
      </div>

      {/* Bottom Architectural Tag */}
      <div className="absolute bottom-8 text-[9px] uppercase tracking-[0.3em] text-[#EADBC4]/40 font-mono">
        Crafting South India&apos;s Legendary Star Cake
      </div>
    </div>
  );
}
