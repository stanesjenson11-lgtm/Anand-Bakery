"use client";

import React from "react";
import { HeritageStamp, TamilHeritageStamp } from "./SketchElements";

export function HeritageStorySection() {
  return (
    <section
      id="heritage"
      className="relative h-screen max-h-[960px] min-h-[640px] flex flex-col justify-between py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-crust-900 text-cream-100 dark-paper-grain overflow-hidden scroll-mt-16"
    >
      {/* Torn Paper Top Transition */}
      <div className="absolute -top-1 left-0 right-0 h-5 bg-cream-100 torn-edge-bottom z-20" />

      {/* Subtle Background Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-serif font-black text-white select-none leading-none">
          1968
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto flex flex-col justify-between h-full py-1">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1 shrink-0">
          <div className="inline-flex items-center gap-2">
            <HeritageStamp text="1968" sub="SAWYERPURAM" />
            <TamilHeritageStamp />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-cream-50 tracking-tight leading-tight max-w-full">
            THREE GENERATIONS. <span className="font-display italic text-gold-400 font-normal">ONE SACRED LEGACY.</span>
          </h2>

          <p className="font-sans text-xs sm:text-[13px] text-cream-200/80 leading-relaxed max-w-xl mx-auto">
            &ldquo;What started as a small dream, baked with love and hard work, has today become a part of your everyday moments. 
            This is not just our bakery story — it&apos;s our journey with you.&rdquo;
          </p>
        </div>

        {/* 3 Generations Grid (Fitted cleanly in viewport) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 my-auto">
          {/* Generation 1 */}
          <div className="relative rounded-xl bg-espresso-950/85 border border-gold-500/25 p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-lg hover:border-gold-400/50 transition-colors">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between border-b border-gold-500/15 pb-2">
                <span className="w-6 h-6 rounded-full bg-gold-500 text-espresso-950 font-display font-black text-xs flex items-center justify-center shrink-0">
                  1
                </span>
                <span className="font-display text-[9.5px] uppercase tracking-widest text-gold-400 font-bold">
                  EST. 1968 • THE BEGINNING
                </span>
              </div>

              <div>
                <span className="block font-display text-[9.5px] text-gold-400 uppercase tracking-widest font-semibold">
                  FOUNDED BY
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-black text-cream-50 leading-tight">
                  Mr. V. Thiruvadi
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-[13px] text-cream-200/85 leading-relaxed">
                With deep vision and passion, our grandfather laid the foundation of Ananth Bakery in 1968. 
                He introduced the coconut oil star cake and believed in uncompromising quality, honesty, and the warmth of homemade goodness.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-crust-800/40 border border-gold-500/20">
              <span className="font-serif italic text-xs text-gold-300">
                &ldquo;Pure ingredients are the only secret that never fails.&rdquo;
              </span>
            </div>
          </div>

          {/* Generation 2 */}
          <div className="relative rounded-xl bg-espresso-950/85 border border-gold-500/25 p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-lg hover:border-gold-400/50 transition-colors">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between border-b border-gold-500/15 pb-2">
                <span className="w-6 h-6 rounded-full bg-gold-500 text-espresso-950 font-display font-black text-xs flex items-center justify-center shrink-0">
                  2
                </span>
                <span className="font-display text-[9.5px] uppercase tracking-widest text-gold-400 font-bold">
                  EXPANSION & DEVOTION
                </span>
              </div>

              <div>
                <span className="block font-display text-[9.5px] text-gold-400 uppercase tracking-widest font-semibold">
                  CARRIED FORWARD BY
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-black text-cream-50 leading-tight">
                  Mr. Mohan & Mr. Altrin
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-[13px] text-cream-200/85 leading-relaxed">
                Preserving the values of quality and dedication. They worked tirelessly together with resilience, 
                modernizing the bakery ovens and expanding our reach across Thoothukudi while staying true to the original 1968 recipes.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-crust-800/40 border border-gold-500/20">
              <span className="font-serif italic text-xs text-gold-300">
                &ldquo;Through every tough day, our customers gave us strength.&rdquo;
              </span>
            </div>
          </div>

          {/* Generation 3 */}
          <div className="relative rounded-xl bg-espresso-950/85 border border-gold-500/25 p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-lg hover:border-gold-400/50 transition-colors">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between border-b border-gold-500/15 pb-2">
                <span className="w-6 h-6 rounded-full bg-gold-500 text-espresso-950 font-display font-black text-xs flex items-center justify-center shrink-0">
                  3
                </span>
                <span className="font-display text-[9.5px] uppercase tracking-widest text-gold-400 font-bold">
                  PRESENT & FUTURE
                </span>
              </div>

              <div>
                <span className="block font-display text-[9.5px] text-gold-400 uppercase tracking-widest font-semibold">
                  THE THIRD GENERATION
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-black text-cream-50 leading-tight">
                  The Modern Custodians
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-[13px] text-cream-200/85 leading-relaxed">
                Today, the third generation proudly carries the torch — serving Sawyerpuram&apos;s celebrated Hot Americano, 
                perfecting the Star Cake for travelers near and far, and infusing modern digital craft into timeless family heritage.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-crust-800/40 border border-gold-500/20">
              <span className="font-serif italic text-xs text-gold-300">
                &ldquo;Creating sweet memories for the next 50 years.&rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* Archival Banner / Family Promise (Compact horizontal strip) */}
        <div className="relative rounded-xl bg-gradient-to-r from-espresso-950 via-crust-900 to-espresso-950 border border-gold-500/30 p-3.5 sm:p-4 shadow-xl shrink-0">
          <div className="space-y-0.5">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <span className="text-[9.5px] font-display font-black tracking-widest uppercase text-gold-400">
                A JOURNEY OF HARDWORK, RESILIENCE & GRATITUDE
              </span>
              <span className="font-serif italic font-bold text-xs text-gold-300">
                — The Anand Bakery Family, Sawyerpuram
              </span>
            </div>
            <h4 className="font-serif text-xs sm:text-sm font-black text-cream-50 truncate">
              &ldquo;This isn&apos;t just our bakery. It&apos;s our family&apos;s legacy.&rdquo;
            </h4>
            <p className="font-sans text-[11px] text-cream-200/80 leading-tight">
              Every loaf we bake, every cup of Americano we serve, and every smile we receive is a tribute to the dream that began in 1968. Thank you for walking this journey with us.
            </p>
          </div>
        </div>
      </div>

      {/* Torn Paper Bottom Transition */}
      <div className="absolute -bottom-1 left-0 right-0 h-5 bg-cream-100 torn-edge-top z-20" />
    </section>
  );
}
