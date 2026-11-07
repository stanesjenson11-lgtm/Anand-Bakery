"use client";

import React, { useState } from "react";
import { CoffeePourMenu, CoffeeItem } from "@/components/ui/coffee-pour-menu";

const AMERICANO_POUR_ITEMS: CoffeeItem[] = [
  {
    id: "americano",
    name: "Sawyerpuram Hot Americano",
    subtitle: "240 ml · Sawyerpuram roast",
    description: "freshly pulled South Indian espresso over piping hot mineral water in a vintage faceted glass tumbler",
    vessel: "glass-mug",
    layers: [
      { type: "water", amount: 0.54 },
      { type: "espresso", amount: 0.26 },
    ],
    crema: true,
    blend: 0.95,
  },
  {
    id: "espresso",
    name: "Pure Peaberry Decoction",
    subtitle: "45 ml · thick golden crema",
    description: "a concentrated, bold pull of wood-hearth roasted South Indian peaberry beans",
    vessel: "demitasse",
    layers: [{ type: "espresso", amount: 0.72 }],
    crema: true,
  },
  {
    id: "cappuccino",
    name: "Hearth Cappuccino",
    subtitle: "180 ml · velvety microfoam",
    description: "bold espresso with steamed fresh country dairy milk and velvety microfoam",
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
    name: "Morning Silky Latte",
    subtitle: "280 ml · creamy & smooth",
    description: "steamed morning country milk laced with a gentle aromatic espresso ribbon",
    vessel: "tall-glass",
    layers: [
      { type: "espresso", amount: 0.22 },
      { type: "milk", amount: 0.54 },
    ],
    foam: 0.1,
    blend: 0.18,
  },
];

export function HotAmericanoExperience() {
  const [selectedDrink, setSelectedDrink] = useState("americano");

  return (
    <section
      id="americano"
      className="relative min-h-[100svh] lg:h-screen lg:max-h-[900px] pt-14 sm:pt-16 lg:pt-10 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 bg-[#1A0D08] text-cream-50 scroll-mt-0 flex flex-col justify-center overflow-hidden"
    >
      {/* Torn Paper Top Transition */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-cream-100 torn-edge-bottom z-20 opacity-95 pointer-events-none" />

      {/* Atmospheric Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gold-600/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-crust-800/20 blur-[90px]" />
        {/* Giant Watermark Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-serif font-black text-white/[0.02] select-none pointer-events-none leading-none">
          AMERICANO
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full my-auto space-y-2.5 sm:space-y-3.5">
        {/* Section Header: Two Lines */}
        <div className="text-center max-w-xl mx-auto space-y-0.5 shrink-0">
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black text-cream-50 tracking-tight leading-tight">
            The Sawyerpuram <br />
            <span className="font-display italic text-gold-400 font-normal">Hot Americano</span>
          </h2>
        </div>

        {/* The Physics Pour Menu Stage (Compact, Natural Proportion) */}
        <div className="rounded-2xl sm:rounded-3xl shadow-xl border border-gold-500/25 bg-[#e4cdb0] text-[#3a271d] overflow-hidden">
          <CoffeePourMenu
            items={AMERICANO_POUR_ITEMS}
            defaultValue="americano"
            value={selectedDrink}
            onValueChange={setSelectedDrink}
            className="w-full"
          />
        </div>

        {/* Quick CTA to Full Rotating Menu */}
        <div className="text-center shrink-0 pt-0.5">
          <a
            href="#menu"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gold-500 hover:bg-gold-400 text-espresso-950 font-display font-black text-[10.5px] sm:text-[11px] uppercase tracking-wider shadow-md transition-all hover:scale-105"
          >
            <span>Explore Menu</span>
            <span>↓</span>
          </a>
        </div>
      </div>

      {/* Torn Paper Bottom Transition */}
      <div className="absolute -bottom-1 left-0 right-0 h-4 bg-cream-100 torn-edge-top z-20 opacity-95 pointer-events-none" />
    </section>
  );
}
