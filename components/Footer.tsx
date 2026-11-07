import React from "react";
import Image from "next/image";
import { HeritageStamp, TamilHeritageStamp, WheatSketch } from "./SketchElements";

export function Footer() {
  return (
    <footer className="relative bg-espresso-950 text-cream-100 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-crust-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-cream-50 p-1 flex items-center justify-center border-2 border-gold-500/50 shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Ananth Bakery Official Seal"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-black text-cream-50 tracking-tight">
                  ANAND BAKERY
                </h3>
                <p className="text-[11px] font-display uppercase tracking-widest text-gold-400 font-bold">
                  ANANTH BAKERY • SINCE 1968
                </p>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-cream-200/70 leading-relaxed max-w-sm">
              Home to Sawyerpuram&apos;s iconic 100% pure coconut oil Star Cake and artisanal Hot Americano. 
              Three generations of honest wood-fired baking, resilience, and family warmth.
            </p>

            <div className="pt-2">
              <TamilHeritageStamp />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-display text-xs font-black uppercase tracking-widest text-gold-400">
              EXPLORE
            </span>
            <ul className="space-y-2 text-xs font-display font-semibold uppercase tracking-wider text-cream-200/80">
              <li>
                <a href="#hero" className="hover:text-gold-400 transition-colors">★ The Star Cake</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-gold-400 transition-colors">Why It&apos;s Famous</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-400 transition-colors">Menu & Americano</a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-gold-400 transition-colors">1968 Family Story</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-gold-400 transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-gold-400 transition-colors">Location & Hours</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-display text-xs font-black uppercase tracking-widest text-gold-400">
              SAWYERPURAM SHOP
            </span>
            <p className="font-sans text-xs text-cream-200/80 leading-relaxed">
              Main Road, Sawyerpuram, Thoothukudi, Tamil Nadu, India.
            </p>
            <div className="text-xs space-y-1 pt-1">
              <p className="text-cream-200/90">
                <span className="text-gold-400 font-bold">Baking Hours:</span> 6:00 AM – 10:00 PM Daily
              </p>
              <p className="text-cream-200/90">
                <span className="text-gold-400 font-bold">Direct Call:</span> +91 95668 08729 / 98942 97396
              </p>
              <p className="text-cream-200/90">
                <span className="text-gold-400 font-bold">Instagram:</span> @ananth_bakery
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-crust-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-cream-200/60 gap-4">
          <p>
            © {new Date().getFullYear()} Anand Bakery (Ananth Bakery). All rights reserved. Crafted with 100% Pure Coconut Oil.
          </p>
          <div className="flex items-center gap-4 font-serif italic text-gold-400/90">
            <span>&ldquo;A Taste of Heritage — Since 1968&rdquo;</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
