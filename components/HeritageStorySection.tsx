"use client";

import React from "react";
import { HeritageStamp, TamilHeritageStamp } from "./SketchElements";

export function HeritageStorySection() {
  return (
    <section
      id="heritage"
      className="relative min-h-screen py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-crust-900 text-cream-100 dark-paper-grain scroll-mt-20 flex flex-col justify-center"
    >
      {/* Torn Paper Top Transition */}
      <div className="absolute -top-1 left-0 right-0 h-5 bg-cream-100 torn-edge-bottom z-20" />

      {/* Subtle Background Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-serif font-black text-white select-none leading-none">
          1968
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 shrink-0">
          <div className="inline-flex items-center gap-2">
            <HeritageStamp text="1968" sub="SAWYERPURAM" />
            <TamilHeritageStamp />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-cream-50 tracking-tight leading-tight">
            THREE GENERATIONS. <span className="font-display italic text-gold-400 font-normal">ONE SACRED LEGACY.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-cream-200/85 leading-relaxed max-w-2xl mx-auto">
            &ldquo;What started as a small dream, baked with love and hard work, has today become a part of your everyday moments. 
            This is not just our bakery story — it&apos;s our journey with you.&rdquo;
          </p>
        </div>

        {/* 3 Generations Grid (Spacious, elegant cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Generation 1 */}
          <div className="relative rounded-2xl bg-espresso-950/90 border border-gold-500/25 p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-xl hover:border-gold-400/50 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gold-500/15 pb-2.5">
                <span className="w-7 h-7 rounded-full bg-gold-500 text-espresso-950 font-display font-black text-xs flex items-center justify-center shrink-0">
                  1
                </span>
                <span className="font-display text-[10px] uppercase tracking-widest text-gold-400 font-bold">
                  EST. 1968 • THE BEGINNING
                </span>
              </div>

              <div>
                <span className="block font-display text-[10px] text-gold-400 uppercase tracking-widest font-semibold">
                  FOUNDED BY
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-black text-cream-50 leading-tight">
                  Mr. V. Thiruvadi
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-cream-200/85 leading-relaxed">
                With deep vision and passion, our grandfather laid the foundation of Ananth Bakery in 1968. 
                He introduced the coconut oil star cake and believed in uncompromising quality, honesty, and the warmth of homemade goodness.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-crust-800/40 border border-gold-500/20">
              <span className="font-serif italic text-xs sm:text-sm text-gold-300">
                &ldquo;Pure ingredients are the only secret that never fails.&rdquo;
              </span>
            </div>
          </div>

          {/* Generation 2 */}
          <div className="relative rounded-2xl bg-espresso-950/90 border border-gold-500/25 p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-xl hover:border-gold-400/50 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gold-500/15 pb-2.5">
                <span className="w-7 h-7 rounded-full bg-gold-500 text-espresso-950 font-display font-black text-xs flex items-center justify-center shrink-0">
                  2
                </span>
                <span className="font-display text-[10px] uppercase tracking-widest text-gold-400 font-bold">
                  EXPANSION & DEVOTION
                </span>
              </div>

              <div>
                <span className="block font-display text-[10px] text-gold-400 uppercase tracking-widest font-semibold">
                  CARRIED FORWARD BY
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-black text-cream-50 leading-tight">
                  Mr. Mohan & Mr. Altrin
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-cream-200/85 leading-relaxed">
                Preserving the values of quality and dedication. They worked tirelessly together with resilience, 
                modernizing the bakery ovens and expanding our reach across Thoothukudi while staying true to the original 1968 recipes.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-crust-800/40 border border-gold-500/20">
              <span className="font-serif italic text-xs sm:text-sm text-gold-300">
                &ldquo;Through every tough day, our customers gave us strength.&rdquo;
              </span>
            </div>
          </div>

          {/* Generation 3 */}
          <div className="relative rounded-2xl bg-espresso-950/90 border border-gold-500/25 p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-xl hover:border-gold-400/50 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gold-500/15 pb-2.5">
                <span className="w-7 h-7 rounded-full bg-gold-500 text-espresso-950 font-display font-black text-xs flex items-center justify-center shrink-0">
                  3
                </span>
                <span className="font-display text-[10px] uppercase tracking-widest text-gold-400 font-bold">
                  PRESENT & FUTURE
                </span>
              </div>

              <div>
                <span className="block font-display text-[10px] text-gold-400 uppercase tracking-widest font-semibold">
                  THE THIRD GENERATION
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-black text-cream-50 leading-tight">
                  The Modern Custodians
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-cream-200/85 leading-relaxed">
                Today, the third generation proudly carries the torch — serving Sawyerpuram&apos;s celebrated Hot Americano, 
                perfecting the Star Cake for travelers near and far, and infusing modern digital craft into timeless family heritage.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-crust-800/40 border border-gold-500/20">
              <span className="font-serif italic text-xs sm:text-sm text-gold-300">
                &ldquo;Creating sweet memories for the next 50 years.&rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* Archival Banner / Family Promise (Comfortable, spacious strip) */}
        <div className="relative rounded-2xl bg-gradient-to-r from-espresso-950 via-crust-900 to-espresso-950 border border-gold-500/30 p-5 sm:p-6 shadow-xl space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-1">
            <span className="text-[10px] font-display font-black tracking-widest uppercase text-gold-400">
              A JOURNEY OF HARDWORK, RESILIENCE & GRATITUDE
            </span>
            <span className="font-serif italic font-bold text-xs sm:text-sm text-gold-300">
              — The Anand Bakery Family, Sawyerpuram
            </span>
          </div>
          <h4 className="font-serif text-sm sm:text-base font-black text-cream-50">
            &ldquo;This isn&apos;t just our bakery. It&apos;s our family&apos;s legacy.&rdquo;
          </h4>
          <p className="font-sans text-xs sm:text-sm text-cream-200/85 leading-relaxed">
            Every loaf we bake, every cup of Americano we serve, and every smile we receive is a tribute to the dream that began in 1968. Thank you for walking this journey with us.
          </p>
        </div>
      </div>

      {/* Torn Paper Bottom Transition */}
      <div className="absolute -bottom-1 left-0 right-0 h-5 bg-cream-100 torn-edge-top z-20" />
    </section>
  );
}
