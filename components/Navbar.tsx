"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Micro-kinetic character flip
function Swap({ text }: { text: string }) {
  return (
    <span className="relative inline-flex overflow-hidden group/swap whitespace-nowrap">
      <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/swap:-translate-y-full">
        {text}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-full left-0 inline-block text-gold-600 font-bold transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/swap:-translate-y-full"
      >
        {text}
      </span>
    </span>
  );
}

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#americano", label: "Hot Americano" },
  { href: "#menu", label: "Menu" },
  { href: "#heritage", label: "1968 Legacy" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 40);

      // Track scroll direction with a buffer to prevent jitter
      const diff = currentY - lastScrollY.current;
      if (Math.abs(diff) > 8) {
        if (diff > 0 && currentY > 100) {
          setScrollDir("down");
        } else if (diff < 0) {
          setScrollDir("up");
        }
        lastScrollY.current = currentY;
      }

      const sections = ["hero", "americano", "menu", "heritage", "reviews", "visit"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= 0) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetId = href.replace("#", "");
    setActiveSection(targetId);
    const el = document.getElementById(targetId);
    if (!el) return;
    if (typeof window !== "undefined" && (window as any).__scrollToTarget) {
      (window as any).__scrollToTarget(el);
    } else if (typeof window !== "undefined" && (window as any).__lenis) {
      (window as any).__lenis.scrollTo(el, { offset: 0, duration: 0.85 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 
        Scroll-Down Floating Logo Circle:
        When scrolling down, the full navbar hides and this minimal circle logo button stays pinned 
        to the top-left corner. Clicking it returns to top / reveals navbar.
      */}
      <div
        className={`fixed top-4 left-4 sm:left-6 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled && scrollDir === "down"
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={(e) => {
            setScrollDir("up");
            handleNavClick(e as any, "#hero");
          }}
          className="w-11 h-11 rounded-full bg-cream-50/95 backdrop-blur-md border border-gold-500/50 shadow-md p-1.5 flex items-center justify-center hover:scale-110 hover:border-gold-500 transition-all cursor-pointer group"
          aria-label="Anand Bakery — Back to top"
        >
          <Image
            src="/images/logo.png"
            alt="Anand Bakery"
            width={28}
            height={28}
            className="object-contain group-hover:rotate-12 transition-transform duration-300"
          />
        </button>
      </div>

      {/* 
        Main Masthead:
        - At Hero top: Full-width luxurious layout (logo on left, links in center, action on right)
        - On scroll UP: Floats down as a sleek, auto-fitting centered pill
        - On scroll DOWN: Slides up out of view to maximize screen reading space
      */}
      <header
        className={`fixed inset-x-0 z-50 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? scrollDir === "down"
              ? "-translate-y-28 opacity-0 pointer-events-none top-3 px-3 sm:px-6 flex justify-center"
              : "translate-y-0 opacity-100 top-3 px-3 sm:px-6 flex justify-center"
            : "translate-y-0 opacity-100 top-0 px-6 sm:px-12 lg:px-16"
        }`}
      >
        <div
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "w-auto max-w-fit mx-auto rounded-full bg-cream-50/95 backdrop-blur-md border border-crust-800/12 shadow-[0_4px_24px_rgba(26,13,8,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] px-5 sm:px-7 py-2"
              : "w-full max-w-7xl mx-auto bg-transparent border-transparent shadow-none px-0 py-5 sm:py-6"
          }`}
        >
          <div
            className={`flex items-center ${
              isScrolled
                ? "gap-4 sm:gap-6 lg:gap-8"
                : "justify-between w-full"
            }`}
          >
            {/* Left: Brand Seal & Title */}
            <div className="flex items-center shrink-0">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
                className="inline-flex items-center gap-2.5 group whitespace-nowrap"
                aria-label="Anand Bakery — Home"
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold-500/50 p-0.5 bg-cream-50 shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/logo.png"
                    alt="Anand Bakery Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-sm sm:text-base font-black tracking-tight text-espresso-950 group-hover:text-gold-600 transition-colors">
                    ANAND BAKERY
                  </span>
                  <span className="hidden sm:inline text-[10px] font-sans font-bold tracking-normal text-gold-600">
                    • 1968
                  </span>
                </div>
              </a>
            </div>

            {/* Center: Sleek Navigation Links (Compact, Aesthetic, Less Wide) */}
            <nav
              aria-label="Primary"
              className={`hidden md:flex items-center justify-center font-sans font-semibold shrink-0 ${
                isScrolled
                  ? "gap-4 lg:gap-6 text-[12.5px] lg:text-[13px] tracking-tight"
                  : "gap-6 lg:gap-8 text-[13px] lg:text-[13.5px] tracking-tight"
              }`}
            >
              {NAV_LINKS.map(({ href, label }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`relative py-1 transition-colors whitespace-nowrap ${
                      isActive ? "text-gold-600 font-bold" : "hover:text-gold-600 text-espresso-950/75"
                    }`}
                  >
                    <Swap text={label} />
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-500 shadow-xs" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Architectural Action Button + Mobile Toggle */}
            <div className="flex items-center justify-end gap-2.5 shrink-0">
              <a
                href="#visit"
                onClick={(e) => handleNavClick(e, "#visit")}
                className="hidden sm:inline-flex items-center font-sans font-semibold text-[11.5px] lg:text-[12px] tracking-tight text-espresso-950 hover:text-gold-600 transition-colors whitespace-nowrap px-3.5 sm:px-4 py-1.5 rounded-full hover:bg-gold-500/10 border border-gold-500/35 shrink-0"
              >
                <span>[ Plan a Visit → ]</span>
              </a>

              {/* Minimalist 2-line Mobile Burger */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 rounded-full hover:bg-crust-800/10 focus:outline-none"
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                <span className="w-5 h-[1.5px] bg-espresso-950 transition-all duration-300" />
                <span className="w-3.5 h-[1.5px] bg-espresso-950 transition-all duration-300 self-end mr-0.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Architectural Mobile Sheet */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-10 bg-[#1A0D08] text-cream-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className="flex items-center justify-between border-b border-crust-800/50 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold-500/50 p-0.5 bg-cream-50">
              <Image src="/images/logo.png" alt="" width={32} height={32} className="object-contain" />
            </div>
            <span className="font-serif text-xl font-black text-cream-50 tracking-tight">
              ANAND BAKERY
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center text-cream-100 hover:text-gold-400 focus:outline-none"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-4 py-6">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="font-sans text-2xl sm:text-3xl font-bold text-cream-50 hover:text-gold-400 transition-colors tracking-tight"
            >
              {label}
            </a>
          ))}
          <a
            href="#visit"
            onClick={(e) => handleNavClick(e, "#visit")}
            className="mt-2 inline-flex items-center gap-2 text-gold-400 font-sans font-semibold text-xs tracking-tight"
          >
            <span>[ Plan a Visit → ]</span>
          </a>
        </nav>

        <div className="border-t border-crust-800/50 pt-4 text-[11px] font-sans uppercase tracking-widest text-cream-200/60">
          <p>Sawyerpuram, Thoothukudi District • Est. 1968</p>
          <p className="mt-1 text-gold-400 font-bold">Open Daily: 6:00 AM – 10:30 PM</p>
        </div>
      </div>
    </>
  );
}
