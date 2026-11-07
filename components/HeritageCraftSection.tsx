"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CoffeePourMenu, CoffeeItem } from "@/components/ui/coffee-pour-menu";

const BAKERY_POUR_ITEMS: CoffeeItem[] = [
  {
    id: "americano",
    name: "Hot Americano",
    subtitle: "240 ml · Sawyerpuram roast",
    description: "freshly pulled South Indian espresso over piping hot mineral water in a faceted glass tumbler",
    vessel: "glass-mug",
    layers: [
      { type: "water", amount: 0.54 },
      { type: "espresso", amount: 0.26 },
    ],
    crema: true,
    blend: 0.88,
  },
  {
    id: "espresso",
    name: "Classic Espresso",
    subtitle: "30 ml · rich crema",
    description: "a short, bold shot of slow-roasted South Indian peaberry",
    vessel: "demitasse",
    layers: [{ type: "espresso", amount: 0.72 }],
    crema: true,
  },
  {
    id: "cappuccino",
    name: "Hearth Cappuccino",
    subtitle: "180 ml · velvety foam",
    description: "bold espresso with steamed dairy milk and thick microfoam",
    vessel: "cup",
    layers: [
      { type: "espresso", amount: 0.3 },
      { type: "milk", amount: 0.44 },
    ],
    foam: 0.14,
    art: "heart",
  },
  {
    id: "latte",
    name: "Morning Latte",
    subtitle: "300 ml · creamy & smooth",
    description: "steamed country milk with a gentle espresso ribbon",
    vessel: "tall-glass",
    layers: [
      { type: "espresso", amount: 0.22 },
      { type: "milk", amount: 0.54 },
    ],
    foam: 0.1,
    blend: 0.18,
  },
];

export function HeritageCraftSection() {
  const [activeTab, setActiveTab] = useState<"starcake" | "americano">("starcake");
  const [activeSensory, setActiveSensory] = useState<"taste" | "oil" | "crust">("taste");

  return (
    <section
      id="craft"
      className="relative min-h-[90vh] lg:min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-espresso-950 text-cream-100 dark-paper-grain overflow-hidden flex flex-col justify-center"
    >
      {/* Torn Paper Top Border Transition */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-cream-100 torn-edge-bottom z-20 opacity-95" />

      {/* Atmospheric Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gold-600/10 blur-[130px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-crust-800/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-8">
        {/* Top Control Bar: The Seamless Craft Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gold-500/20 pb-5">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-xs font-display font-black uppercase tracking-[0.22em] text-gold-400">
              Sawyerpuram Heritage Craft • Since 1968
            </span>
          </div>

          {/* Clean Segmented Toggle Pill */}
          <div className="inline-flex p-1.5 rounded-full bg-crust-900/90 border border-gold-500/30 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("starcake")}
              className={`px-5 py-2 rounded-full font-display text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                activeTab === "starcake"
                  ? "bg-gold-500 text-espresso-950 shadow-md scale-102"
                  : "text-cream-200/70 hover:text-cream-50"
              }`}
            >
              ★ Star Cake Legend
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("americano")}
              className={`px-5 py-2 rounded-full font-display text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                activeTab === "americano"
                  ? "bg-gold-500 text-espresso-950 shadow-md scale-102"
                  : "text-cream-200/70 hover:text-cream-50"
              }`}
            >
              ☕ Hot Americano & Pour Craft
            </button>
          </div>
        </div>

        {/* =====================================================================
            VIEW 1: STAR CAKE DEEP DIVE & TASTE ANATOMY
        ====================================================================== */}
        {activeTab === "starcake" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fadeIn">
            {/* Left: Star Cake on White Studio Plate */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 aspect-square rounded-full p-3 bg-cream-50/95 border border-crust-800/20 shadow-2xl flex items-center justify-center">
                <div className="absolute inset-2 rounded-full border border-dashed border-gold-500/30 animate-spin-slow pointer-events-none" />

                <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
                  <Image
                    src="/images/studio-white-star-cake.jpg"
                    alt="Star Cake on White Studio Plate"
                    width={380}
                    height={380}
                    priority
                    className="object-contain filter drop-shadow-[0_15px_30px_rgba(26,13,8,0.35)] rounded-full hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hotspot 1: Petal Crust */}
                  <div
                    onClick={() => setActiveSensory("crust")}
                    className="absolute top-4 right-8 cursor-pointer group/pin"
                    title="1: Petal Crust"
                  >
                    <span className="flex h-5 w-5 relative items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-gold-500 border-2 border-espresso-950 font-black text-[9px] text-espresso-950 items-center justify-center">1</span>
                    </span>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-cream-50 text-espresso-950 text-[9.5px] font-display font-bold px-2 py-0.5 rounded shadow whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">
                      Petal Crust
                    </span>
                  </div>

                  {/* Hotspot 2: Coconut Oil */}
                  <div
                    onClick={() => setActiveSensory("oil")}
                    className="absolute bottom-8 left-6 cursor-pointer group/pin"
                    title="2: 100% Coconut Oil"
                  >
                    <span className="flex h-5 w-5 relative items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-gold-500 border-2 border-espresso-950 font-black text-[9px] text-espresso-950 items-center justify-center">2</span>
                    </span>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-cream-50 text-espresso-950 text-[9.5px] font-display font-bold px-2 py-0.5 rounded shadow whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">
                      Coconut Oil
                    </span>
                  </div>

                  {/* Hotspot 3: Cloud Crumb */}
                  <div
                    onClick={() => setActiveSensory("taste")}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin"
                    title="3: Cloud Crumb"
                  >
                    <span className="flex h-5 w-5 relative items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-gold-500 border-2 border-espresso-950 font-black text-[9px] text-espresso-950 items-center justify-center">3</span>
                    </span>
                  </div>
                </div>
              </div>

              <p className="font-serif italic text-xs sm:text-sm text-gold-300 mt-4 text-center">
                “Soft, fluffy, and filled with nostalgia in every bite.”
              </p>
            </div>

            {/* Right: Legend Narrative & Sensory Taste Breakdown */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-[11px] font-display font-black uppercase tracking-[0.2em] text-gold-400">
                  ★ DEEP DIVE INTO THE LEGEND ★
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-black text-cream-50 tracking-tight leading-tight mt-1">
                  WHY SAWYERPURAM HAS <br />
                  <span className="font-display italic text-gold-400 font-normal">CHERISHED IT</span> FOR 58 YEARS
                </h3>
                <p className="font-sans text-xs sm:text-sm text-cream-200/80 leading-relaxed mt-2">
                  In an era of mass-manufactured imitation butter and hydrogenated fats, Anand Bakery holds fast to the 1968 sacred standard: <strong className="text-gold-300 font-bold">100% Pure Coconut Oil</strong>. Here is the anatomy of the taste that defined generations.
                </p>
              </div>

              {/* Sensory Breakdown Card */}
              <div className="p-5 rounded-2xl bg-crust-900/80 border border-gold-500/25 shadow-xl space-y-3.5">
                {/* Micro Tabs */}
                <div className="flex flex-wrap gap-2 p-1 rounded-lg bg-espresso-950/70 border border-gold-500/15">
                  <button
                    type="button"
                    onClick={() => setActiveSensory("taste")}
                    className={`px-3 py-1 rounded text-[11px] font-display font-black uppercase tracking-wider transition-all ${
                      activeSensory === "taste"
                        ? "bg-gold-500 text-espresso-950 shadow-sm"
                        : "text-cream-200/70 hover:text-cream-50"
                    }`}
                  >
                    The Sensory Taste
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSensory("oil")}
                    className={`px-3 py-1 rounded text-[11px] font-display font-black uppercase tracking-wider transition-all ${
                      activeSensory === "oil"
                        ? "bg-gold-500 text-espresso-950 shadow-sm"
                        : "text-cream-200/70 hover:text-cream-50"
                    }`}
                  >
                    100% Coconut Oil
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSensory("crust")}
                    className={`px-3 py-1 rounded text-[11px] font-display font-black uppercase tracking-wider transition-all ${
                      activeSensory === "crust"
                        ? "bg-gold-500 text-espresso-950 shadow-sm"
                        : "text-cream-200/70 hover:text-cream-50"
                    }`}
                  >
                    Star Petal Crust
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-gold-400">
                  <span>🍯 ☁️ 🥥 THE TASTE EXPERIENCE</span>
                  <span className="text-cream-200/50">1968 Secret Recipe</span>
                </div>

                <h4 className="font-serif text-lg font-black text-cream-50">
                  What Taste Does It Give?
                </h4>

                <p className="font-sans text-xs sm:text-sm text-cream-200/80 leading-relaxed">
                  The first sensation is a gentle, sweet coconut-oil aroma rising with warmth. As your teeth break the caramelized star petal tips, there is a micro-crunch that instantly gives way to an airy, cloud-like sponge crumb.
                </p>

                {/* Aroma & Mouthfeel Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-2.5 rounded-lg bg-espresso-950/60 border border-gold-500/15">
                    <span className="block font-display text-[9.5px] uppercase tracking-wider text-gold-400 font-bold">
                      Aroma
                    </span>
                    <span className="block font-serif text-xs font-bold text-cream-100 mt-0.5">
                      Toasted sweet coconut & pure vanilla
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-espresso-950/60 border border-gold-500/15">
                    <span className="block font-display text-[9.5px] uppercase tracking-wider text-gold-400 font-bold">
                      Mouthfeel
                    </span>
                    <span className="block font-serif text-xs font-bold text-cream-100 mt-0.5">
                      Light, spongy & melt-away finish
                    </span>
                  </div>
                </div>

                {/* Switch to Americano Banner */}
                <div
                  onClick={() => setActiveTab("americano")}
                  className="p-3 rounded-xl bg-espresso-950 border border-gold-500/30 flex items-center justify-between cursor-pointer hover:border-gold-400 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">☕</span>
                    <div>
                      <span className="block text-[9.5px] font-display font-black uppercase tracking-widest text-gold-400">
                        THE ICONIC PAIRING
                      </span>
                      <span className="font-serif text-xs font-bold text-cream-100">
                        Best Enjoyed with our Hot Americano
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-display font-bold uppercase tracking-wider text-gold-400 group-hover:translate-x-1 transition-transform">
                    Pour Craft →
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            VIEW 2: THE REAL-TIME COFFEE POUR MENU & PHYSICS
        ====================================================================== */}
        {activeTab === "americano" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="font-serif text-2xl sm:text-4xl font-black text-cream-50 tracking-tight">
                Watch It Naturally Fill. <br />
                <span className="font-display italic text-gold-400 font-normal">Handcrafted Pour Physics</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-cream-200/80 leading-relaxed">
                Click any drink below to spring an empty vessel onto the counter and watch mineral water, slow espresso, and microfoam pour with real fluid gravity and golden crema ripples.
              </p>
            </div>

            {/* The Integrated Coffee Pour Menu Component */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gold-500/25 bg-[#e4cdb0] text-[#3a271d]">
              <CoffeePourMenu
                items={BAKERY_POUR_ITEMS}
                defaultValue="americano"
                className="w-full"
              />
            </div>

            {/* Under-Pour Ritual Note */}
            <div className="p-4 rounded-2xl bg-crust-900/60 border border-gold-500/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-cream-200/70">
              <span className="flex items-center gap-2">
                <span className="text-gold-400">☕ The 1968 Ritual:</span>
                <span>One bite of Star Cake, one sip of piping Hot Americano.</span>
              </span>
              <a href="#menu" className="text-gold-400 font-bold hover:underline">
                [ Explore Full Orbit Menu ↓ ]
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Torn Paper Bottom Border Transition */}
      <div className="absolute -bottom-1 left-0 right-0 h-6 bg-cream-100 torn-edge-top z-20 opacity-95" />
    </section>
  );
}
