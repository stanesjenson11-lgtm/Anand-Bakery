"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function StarScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
      setScrollProgress(progress);

      // Rotate the star cake as user scrolls
      const delta = currentScroll - lastScrollY;
      setRotation((prev) => prev + delta * 0.85);
      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const percentage = clickY / rect.height;
    const targetScroll = percentage * (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Page scroll position"
      className="fixed right-2 sm:right-5 top-1/2 -translate-y-1/2 z-40 flex items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:flex items-center mr-3 px-2.5 py-1 rounded-sm bg-espresso-950 text-cream-50 font-display text-[10px] font-black uppercase tracking-wider shadow-lg transition-all duration-200 pointer-events-none ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="text-gold-400 mr-1.5 font-bold">★</span>
        <span>{Math.round(scrollProgress * 100)}% BAKED</span>
      </div>

      {/* Vertical Track */}
      <div
        onClick={scrollToProgress}
        className="relative w-6 sm:w-8 h-48 sm:h-64 flex flex-col items-center justify-center cursor-pointer group"
        title="Scroll tracker: Click anywhere to jump"
      >
        {/* Track groove line */}
        <div className="absolute top-0 bottom-0 w-1 bg-crust-800/15 rounded-full overflow-hidden">
          {/* Filled progress bar */}
          <div
            className="w-full bg-gradient-to-b from-gold-500 via-crust-800 to-espresso-950 transition-all duration-75 ease-out rounded-full"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Section anchor notches */}
        <div className="absolute top-[5%] w-2 h-0.5 bg-crust-800/30 rounded" title="Hero" />
        <div className="absolute top-[25%] w-2 h-0.5 bg-crust-800/30 rounded" title="Star Cake" />
        <div className="absolute top-[48%] w-2 h-0.5 bg-crust-800/30 rounded" title="Menu" />
        <div className="absolute top-[72%] w-2 h-0.5 bg-crust-800/30 rounded" title="1968 Heritage" />
        <div className="absolute top-[92%] w-2 h-0.5 bg-crust-800/30 rounded" title="Reviews & Visit" />

        {/* The Rolling Star Cake Thumb */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-transform duration-75 ease-out pointer-events-none drop-shadow-md"
          style={{
            top: `calc(${scrollProgress * 100}% - 14px)`,
          }}
        >
          {/* Subtle golden aura beacon when active */}
          <div className="absolute inset-0 -m-1 rounded-full bg-gold-400/20 blur-sm animate-pulse" />

          <div
            className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.05s linear",
            }}
          >
            <Image
              src="/images/star-cake-perfect.png"
              alt="Transmorphed Star Cake vertical scroll progress loader"
              width={34}
              height={34}
              className="object-contain pointer-events-none drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
