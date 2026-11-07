"use client";

import React from "react";
import Image from "next/image";

interface ReviewStory {
  user: string;
  handle: string;
  image: string;
  text: string;
  highlight: string;
  date: string;
  rotation: string;
}

const REVIEWS: ReviewStory[] = [
  {
    user: "Kira",
    handle: "@its_kira535",
    image: "/images/reviews/review-5.jpg",
    text: "Best Americano in sawyerpuram ⭐❤️",
    highlight: "Sawyerpuram's Best Coffee",
    date: "21 August",
    rotation: "rotate-[-2deg]",
  },
  {
    user: "Joel Robinson",
    handle: "@joelrobinson3007",
    image: "/images/reviews/review-8.jpg",
    text: "Best Americano in town ☕ thanks brother 🤍",
    highlight: "Daily Ritual",
    date: "28 August",
    rotation: "rotate-[3deg]",
  },
  {
    user: "Moses J",
    handle: "@moses_j_sawyer",
    image: "/images/reviews/review-9.jpg",
    text: "Tuticorin, Sawyerpuram @ananth_bakery Americano Must try!",
    highlight: "Must Try for Travellers",
    date: "24 August",
    rotation: "rotate-[-3deg]",
  },
  {
    user: "Reamah Raj",
    handle: "@reamah_raj",
    image: "/images/reviews/review-10.jpg",
    text: "With my WIFEY ❤️ Hot Chocolate & Mocha indulgence!",
    highlight: "Couple's Evening Favorite",
    date: "September",
    rotation: "rotate-[2deg]",
  },
  {
    user: "Steffana",
    handle: "@steffana_04",
    image: "/images/reviews/review-11.jpg",
    text: "Hot chocolate 🤎 pure comfort in a glass!",
    highlight: "Rich Cocoa Bliss",
    date: "5 September",
    rotation: "rotate-[-1deg]",
  },
  {
    user: "Jen",
    handle: "@3j.jen",
    image: "/images/reviews/review-7.jpg",
    text: "Americano thanks brother 🤍",
    highlight: "Crema Perfection",
    date: "26 August",
    rotation: "rotate-[2deg]",
  },
];

export function SawyerpuramReviews() {
  return (
    <section id="reviews" className="relative pt-16 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-cream-100 paper-grain overflow-hidden scroll-mt-0">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stamp-red/10 border border-stamp-red/30 text-stamp-red text-xs font-display font-black tracking-widest uppercase">
            <span>INSTAGRAM STORIES & REAL LOVE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-espresso-950 tracking-tight leading-tight">
            WHAT SAWYERPURAM <br />
            <span className="font-display italic text-gold-600">IS SAYING</span> ONLINE
          </h2>
          <p className="font-sans text-sm sm:text-base text-crust-800/80">
            Real snapshots tagged by our customers, travelers, and morning regulars on Instagram.
          </p>
        </div>

        {/* Stories: Horizontal Swipeable on Mobile (like real IG stories), 3-col Grid on Tablet/Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-4 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-10 sm:overflow-visible">
          {REVIEWS.map((rev, i) => (
            <div
              key={i}
              className={`w-[78vw] max-w-[280px] shrink-0 snap-center sm:w-auto sm:max-w-none relative rounded-2xl bg-cream-50 border-2 border-crust-800/20 p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:rotate-0 sm:${rev.rotation}`}
            >
              {/* Polaroid-style Header */}
              <div className="flex items-center justify-between pb-3 border-b border-crust-800/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-500" />
                  <span className="font-display font-bold text-espresso-950">{rev.handle}</span>
                </div>
                <span className="font-sans text-[11px] text-crust-700/80">{rev.date}</span>
              </div>

              {/* Story Screenshot Preview Container */}
              <div className="relative my-3 w-full aspect-[9/16] rounded-xl overflow-hidden bg-espresso-950 border border-crust-800/20 shadow-inner">
                <Image
                  src={rev.image}
                  alt={`Review from ${rev.user}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Review Quote Footer */}
              <div className="pt-2 space-y-1">
                <div className="flex items-center gap-1 text-gold-500 text-sm">
                  {"★★★★★"}
                </div>
                <p className="font-serif italic font-bold text-sm text-espresso-950 leading-snug">
                  &ldquo;{rev.text}&rdquo;
                </p>
                <span className="block font-display text-[10px] text-stamp-red uppercase tracking-wider font-extrabold pt-1">
                  TAGGED AT @ANANTH_BAKERY
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-espresso-950 to-crust-900 text-cream-50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-gold-500/30">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-display text-xs text-gold-400 font-black uppercase tracking-wider">
              FOLLOW OUR BAKERY ON INSTAGRAM
            </span>
            <h3 className="font-serif text-2xl font-black">
              Tag us in your Star Cake & Americano moments!
            </h3>
            <p className="font-sans text-xs text-cream-200/80">
              Mention @ananth_bakery on your story to get featured on our board.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-espresso-950 font-display font-black text-xs uppercase tracking-widest shadow-md transition-all whitespace-nowrap"
          >
            Follow @ananth_bakery
          </a>
        </div>
      </div>
    </section>
  );
}
