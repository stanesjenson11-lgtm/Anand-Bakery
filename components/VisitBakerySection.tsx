"use client";

import React, { useState } from "react";
import { HeritageStamp, WheatSketch, CoffeeCupSketch } from "./SketchElements";

export function VisitBakerySection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [items, setItems] = useState("1 Box of Heritage Star Cakes (6 pcs)");
  const [customItem, setCustomItem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const selectedPack = items === "Other" ? (customItem.trim() || "Custom Bakery Pack") : items;
    const message = `Hello Anand Bakery Sawyerpuram! 🌟\n\nI would like to reserve fresh bakes:\n• Name: ${name}\n• Phone: ${phone}\n• Items: ${selectedPack}\n\nPlease confirm availability. Thank you!`;
    const whatsappUrl = `https://wa.me/919566808729?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="visit" className="relative pt-16 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-cream-50 paper-grain scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-crust-900 text-xs font-display font-black tracking-widest uppercase">
            <span>PLAN YOUR VISIT TO SAWYERPURAM</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-espresso-950 tracking-tight leading-tight">
            COME TASTE THE <br />
            <span className="font-display italic text-gold-600">TRADITION</span> IN PERSON
          </h2>
          <p className="font-sans text-sm sm:text-base text-crust-800/80">
            Located in the heart of Sawyerpuram. Fresh bakes hot from the oven twice daily.
          </p>
        </div>

        {/* Location & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Location & Contact Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-cream-100 border-2 border-crust-800/20 shadow-md space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-widest text-gold-600 font-black">
                  BAKERY ADDRESS
                </span>
                <HeritageStamp text="1968" sub="ANAND" className="scale-75 origin-top-right" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-black text-espresso-950">
                  Anand Bakery (Ananth Bakery)
                </h3>
                <p className="font-sans text-sm sm:text-base text-crust-800/90 leading-relaxed mt-2">
                  Main Road, Sawyerpuram, <br />
                  Thoothukudi (Tuticorin) District, <br />
                  Tamil Nadu, India
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-crust-800/15">
                <div>
                  <span className="block font-display text-[10px] font-black uppercase tracking-wider text-crust-700">
                    BAKERY TIMINGS
                  </span>
                  <span className="font-serif font-bold text-sm text-espresso-950 mt-0.5 block">
                    6:00 AM – 10:00 PM
                  </span>
                  <span className="text-[11px] font-sans text-crust-700/80">
                    Open Every Day (Mon – Sun)
                  </span>
                </div>
                <div>
                  <span className="block font-display text-[10px] font-black uppercase tracking-wider text-crust-700">
                    DIRECT CALL / ORDERS
                  </span>
                  <a
                    href="tel:+919566808729"
                    className="font-serif font-bold text-sm text-gold-600 hover:underline mt-0.5 block"
                  >
                    +91 95668 08729
                  </a>
                  <a
                    href="tel:+919894297396"
                    className="font-serif font-bold text-sm text-gold-600 hover:underline block"
                  >
                    +91 98942 97396
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=Ananth+Bakery+Sawyerpuram+Thoothukudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-espresso-950 hover:bg-gold-600 text-cream-50 font-display font-black text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href="tel:+919566808729"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-crust-800/30 text-espresso-950 hover:bg-cream-200 font-display font-black text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Call to Check Warm Star Cakes</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Quick Star Cake Box Pre-Order Form */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl bg-cream-100 border-2 border-crust-800/20 shadow-md space-y-6">
              <div className="space-y-1">
                <span className="font-display text-xs uppercase tracking-widest text-stamp-red font-black">
                  FRESH PACK PRE-ORDER & TRAVEL PACKS
                </span>
                <h3 className="font-serif text-2xl font-black text-espresso-950">
                  Travelling Through Sawyerpuram?
                </h3>
                <p className="font-sans text-xs sm:text-sm text-crust-800/80">
                  Pre-order your Star Cake boxes so our bakers have them packed and warm when you arrive!
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-gold-500/20 border border-gold-500/40 text-center space-y-3">
                  <span className="text-3xl">⭐ 📦</span>
                  <h4 className="font-serif text-xl font-black text-espresso-950">
                    Thank You, {name}!
                  </h4>
                  <p className="font-sans text-sm text-crust-900 leading-relaxed">
                    We have drafted your pre-order for <strong>{items === "Other" ? customItem : items}</strong> to our WhatsApp counter (<strong>+91 95668 08729</strong>).
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919566808729?text=${encodeURIComponent(
                        `Hello Anand Bakery Sawyerpuram! 🌟\n\nI would like to reserve fresh bakes:\n• Name: ${name}\n• Phone: ${phone}\n• Items: ${items === "Other" ? customItem : items}\n\nPlease confirm availability. Thank you!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-cream-50 font-display font-black text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                    >
                      <span>💬 Open in WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-display font-bold uppercase tracking-wider text-espresso-950 underline"
                    >
                      Edit Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-crust-800 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anand Kumar"
                      className="w-full px-4 py-2.5 rounded-lg bg-cream-50 border border-crust-800/20 text-espresso-950 text-base sm:text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-crust-800 mb-1">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-lg bg-cream-50 border border-crust-800/20 text-espresso-950 text-base sm:text-sm focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-crust-800 mb-1">
                      What would you like to pack?
                    </label>
                    <select
                      value={items}
                      onChange={(e) => setItems(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-cream-50 border border-crust-800/20 text-espresso-950 text-base sm:text-sm focus:outline-none focus:border-gold-500"
                    >
                      <option value="1 Box of Heritage Star Cakes (6 pcs)">1 Box of Heritage Star Cakes (6 pcs)</option>
                      <option value="Family Pack of Star Cakes (12 pcs)">Family Pack of Star Cakes (12 pcs)</option>
                      <option value="Star Cakes + Hot Americano Combo">Star Cakes + Hot Americano Combo</option>
                      <option value="Mixed Assorted Sweets & Savouries Box">Mixed Assorted Sweets & Savouries Box</option>
                      <option value="Bulk Celebration Order">Bulk Celebration Order (Event / Gathering)</option>
                      <option value="Other">Other (Type your custom items)</option>
                    </select>

                    {items === "Other" && (
                      <div className="mt-2.5">
                        <label className="block text-[11px] font-display font-bold uppercase tracking-wider text-crust-700 mb-1">
                          Type your custom items & quantity:
                        </label>
                        <input
                          type="text"
                          required
                          value={customItem}
                          onChange={(e) => setCustomItem(e.target.value)}
                          placeholder="e.g. 2 boxes star cakes, 4 veg puffs, 2 hot americanos"
                          className="w-full px-4 py-2.5 rounded-lg bg-cream-50 border-2 border-gold-500/50 text-espresso-950 text-base sm:text-sm focus:outline-none focus:border-gold-600 shadow-inner"
                        />
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-espresso-950 hover:bg-gold-600 text-cream-50 font-display font-black text-xs uppercase tracking-widest transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Reserve Fresh Bakes</span>
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
