"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { WheatSketch, CoconutSketch, HeritageStamp } from "./SketchElements";

export function HeroAndStarSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseTilt, setMouseTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMouseTilt({
      rotateX: -y * 0.035,
      rotateY: x * 0.035,
    });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ rotateX: 0, rotateY: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroRect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const currentHeroScroll = Math.max(0, -heroRect.top);
      const p1 = Math.min(Math.max(currentHeroScroll / (windowHeight * 0.8), 0), 1);
      setScrollProgress(p1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rollY = scrollProgress * 70;
  const rollRotation = scrollProgress * 260;

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* =========================================================================
          SECTION 1: HERO (SEAMLESSLY INTEGRATED WITH KICKSTART-STYLE MASTHEAD)
      ========================================================================== */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-[100svh] lg:h-screen lg:max-h-[920px] flex flex-col justify-between pt-16 sm:pt-24 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 bg-cream-100 paper-grain scroll-mt-0"
      >
        {/* Background Sketches */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
          <div className="absolute inset-0 paper-texture" />
          <div className="absolute top-20 left-8 text-crust-800/30 rotate-[-15deg] hidden lg:block">
            <WheatSketch className="w-16 h-16" />
          </div>
          <div className="absolute bottom-14 left-12 text-crust-800/30 rotate-[12deg] hidden md:block">
            <CoconutSketch className="w-16 h-16" />
          </div>
          <div className="absolute top-1/3 -right-10 text-[14vw] font-serif font-black text-crust-800/[0.03] select-none tracking-tighter">
            STAR CAKE
          </div>
        </div>

        {/* Main Hero Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-2 sm:py-4">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-stamp-red text-cream-50 px-3 py-1 rounded text-[11px] sm:text-xs font-display font-black uppercase tracking-wider shadow-xs">
                WOOD-FIRED DAILY
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50 border border-gold-500/30 text-crust-900 text-[11px] sm:text-xs font-display font-black tracking-wider uppercase shadow-xs">
                <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0">
                  <Image src="/images/logo.png" alt="Ananth Bakery Official Logo" fill className="object-contain" />
                </div>
                <span>The 1968 Crown Jewel</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-espresso-950 tracking-tight leading-[0.93]">
              HERITAGE <br />
              <span className="font-display font-extrabold text-gold-600 italic tracking-normal drop-shadow-xs">
                STAR
              </span>{" "}
              <span className="font-serif font-black underline decoration-gold-500/60 decoration-wavy decoration-2">
                CAKE
              </span>
            </h1>

            <p className="font-sans text-xs sm:text-sm text-crust-800/90 leading-relaxed max-w-lg">
              Since <strong className="text-espresso-950 font-bold">1968</strong>, one cake has remained close to the hearts of Sawyerpuram. 
              Baked with <strong className="text-espresso-950 font-bold underline decoration-gold-500 decoration-2">100% pure cold-pressed coconut oil</strong>, 
              soft, fluffy, and filled with nostalgia in every golden bite.
            </p>

            {/* 3 Stats Strip */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-0.5">
              <div className="p-1.5 sm:p-2 rounded-lg bg-cream-50/80 border border-crust-800/12 shadow-xs text-center sm:text-left">
                <span className="block font-display text-[8px] sm:text-[9px] text-crust-700 font-black uppercase tracking-wider">
                  The Core Secret
                </span>
                <span className="block font-serif font-bold text-[11px] sm:text-xs text-espresso-950 mt-0.5 leading-tight">
                  100% Coconut Oil
                </span>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-cream-50/80 border border-crust-800/12 shadow-xs text-center sm:text-left">
                <span className="block font-display text-[8px] sm:text-[9px] text-crust-700 font-black uppercase tracking-wider">
                  Texture Promise
                </span>
                <span className="block font-serif font-bold text-[11px] sm:text-xs text-espresso-950 mt-0.5 leading-tight">
                  Golden Cloud Crumb
                </span>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-cream-50/80 border border-crust-800/12 shadow-xs text-center sm:text-left">
                <span className="block font-display text-[8px] sm:text-[9px] text-crust-700 font-black uppercase tracking-wider">
                  Origin Year
                </span>
                <span className="block font-serif font-bold text-[11px] sm:text-xs text-espresso-950 mt-0.5 leading-tight">
                  Since 1968 (58 Yrs)
                </span>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="#americano"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-espresso-950 text-cream-100 hover:bg-gold-600 transition-all font-display font-black text-[11px] sm:text-xs uppercase tracking-widest shadow-md group"
              >
                <span>Taste The Pairing</span>
                <span className="transform group-hover:translate-y-1 transition-transform">↓</span>
              </a>

              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-crust-800/25 text-espresso-950 hover:bg-cream-200 transition-colors font-display font-black text-[11px] sm:text-xs uppercase tracking-widest"
              >
                <span>Studio Menu</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Star Cake Visual on White Porcelain Plate */}
          <div
            className="lg:col-span-6 relative flex items-center justify-center min-h-[260px] sm:min-h-[320px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1000px" }}
          >
            {/* Spinning background decorative ring */}
            <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full border border-dashed border-gold-500/30 animate-spin-reverse pointer-events-none" />

            <div className="absolute -top-2 right-4 sm:right-6 z-20 hidden sm:block">
              <HeritageStamp text="1968" sub="ANAND BAKERY" />
            </div>

            {/* The Rolling 3D Star Cake */}
            <div
              className="relative z-10 transition-transform duration-75 ease-out select-none cursor-pointer group"
              style={{
                transform: `translateY(${rollY * 0.35}px) rotate(${rollRotation}deg) rotateX(${mouseTilt.rotateX}deg) rotateY(${mouseTilt.rotateY}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative w-[230px] sm:w-[290px] md:w-[320px] aspect-square rounded-full p-2 bg-gradient-to-b from-cream-50/90 to-cream-200/50 shadow-2xl backdrop-blur-sm border border-crust-800/15 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/studio-white-star-cake.jpg"
                  alt="Anand Bakery 3D Star Cake on White Plate with Studio Lighting"
                  width={420}
                  height={420}
                  priority
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(26,13,8,0.25)]"
                />

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-espresso-950 text-cream-50 border border-gold-500 text-[9px] font-display font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                  <span>Scroll to Hot Americano ↓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Ticker: Clean Cult Icon Badges */}
        <div className="relative z-10 max-w-7xl mx-auto w-full border-t border-crust-800/15 pt-2 pb-1 flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] font-display font-bold text-crust-800 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stamp-red" />
            <span className="font-black">SAWYERPURAM CULT ICON</span>
          </div>
          <div className="hidden md:flex items-center gap-4 tracking-wider uppercase text-[10px]">
            <span>★ 100% PURE COCONUT OIL</span>
            <span>★ NO PRESERVATIVES</span>
            <span>★ HOT AMERICANO COMPANION</span>
            <span>★ THREE GENERATIONS (1968)</span>
          </div>
          <div>
            <span className="font-serif italic font-bold">58 Years of Generational Goodness</span>
          </div>
        </div>

        {/* Torn Paper Edge Bottom Transition */}
        <div className="absolute -bottom-1 left-0 right-0 h-6 bg-[#1A0D08] torn-edge-top z-30" />
      </section>
    </div>
  );
}
