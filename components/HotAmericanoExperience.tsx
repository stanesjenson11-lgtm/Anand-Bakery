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
      className="relative min-h-screen pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#1A0D08] text-cream-50 scroll-mt-24 flex flex-col justify-center"
    >
      {/* Torn Paper Top Transition */}
      <div className="absolute top-0 left-0 right-0 h-5 bg-cream-100 torn-edge-bottom z-20 opacity-95 pointer-events-none" />

      {/* Atmospheric Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-crust-800/20 blur-[100px]" />
        {/* Giant Watermark Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-black text-white/[0.02] select-none pointer-events-none leading-none">
          AMERICANO
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto space-y-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-[10px] font-mono uppercase tracking-widest text-gold-400">
            <span>Morning Counter & Twilight Hearth</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-cream-50 tracking-tight leading-tight">
            The Sawyerpuram <br />
            <span className="font-display italic text-gold-400 font-normal">Hot Americano</span>
          </h2>
        </div>

        {/* The Physics Pour Menu Stage (Natural Proportion, Zero Cropping) */}
        <div className="rounded-3xl shadow-2xl border border-gold-500/25 bg-[#e4cdb0] text-[#3a271d] overflow-hidden">
          <CoffeePourMenu
            items={AMERICANO_POUR_ITEMS}
            defaultValue="americano"
            value={selectedDrink}
            onValueChange={setSelectedDrink}
            className="w-full"
          />
        </div>

        {/* Quick CTA to Full Rotating Menu */}
        <div className="text-center shrink-0 pt-2">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-espresso-950 font-display font-black text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
          >
            <span>Explore Menu</span>
            <span>↓</span>
          </a>
        </div>
      </div>

      {/* Torn Paper Bottom Transition */}
      <div className="absolute -bottom-1 left-0 right-0 h-5 bg-cream-100 torn-edge-top z-20 opacity-95 pointer-events-none" />
    </section>
  );
}
