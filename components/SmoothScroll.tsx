"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SECTIONS = ["hero", "americano", "menu", "heritage", "reviews", "visit"];

export function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Only run on client with smooth inertia
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Expose lenis globally for laser-precise anchor jumps
    (window as any).__lenis = lenis;

    // Connect Lenis with GSAP ScrollTrigger for seamless pinning
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Section Snap Locking: Gracefully lock to the nearest section when scroll settles
    let snapTimeout: ReturnType<typeof setTimeout> | null = null;
    let isUserInteracting = false;
    let wheelResetTimer: ReturnType<typeof setTimeout>;

    const onUserTouchStart = () => { isUserInteracting = true; };
    const onUserTouchEnd = () => { isUserInteracting = false; };
    const onUserWheel = () => {
      isUserInteracting = true;
      clearTimeout(wheelResetTimer);
      wheelResetTimer = setTimeout(() => { isUserInteracting = false; }, 200);
    };

    window.addEventListener("touchstart", onUserTouchStart, { passive: true });
    window.addEventListener("touchend", onUserTouchEnd, { passive: true });
    window.addEventListener("wheel", onUserWheel, { passive: true });

    lenis.on("scroll", (e: any) => {
      if (snapTimeout) clearTimeout(snapTimeout);

      // Settle check (disabled on mobile touch screens for silky native inertia)
      snapTimeout = setTimeout(() => {
        if (window.innerWidth < 768) return;
        if (isUserInteracting) return;
        if (Math.abs(e.velocity) > 0.25) return;

        const vh = window.innerHeight;
        let closestEl: HTMLElement | null = null;
        let minDistance = Infinity;

        // Check if inside the pinned Orbit Menu stretch
        const menuTrack = document.querySelector(".dsh-trk");
        if (menuTrack) {
          const mRect = menuTrack.getBoundingClientRect();
          // If within the middle of pinned scrub, don't hijack dish rotations
          if (mRect.top < -80 && mRect.bottom > vh + 80) {
            return;
          }
        }

        for (const id of SECTIONS) {
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top);

          // If within snap range (closer section zone)
          if (dist < minDistance && dist < vh * 0.44) {
            minDistance = dist;
            closestEl = el;
          }
        }

        if (closestEl && minDistance > 12) {
          lenis.scrollTo(closestEl, {
            offset: 0,
            duration: 0.75,
            easing: (t) => 1 - Math.pow(1 - t, 3),
          });
        }
      }, 190);
    });

    // Intercept all in-page hash links so they land cleanly at exact offsets
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, {
            offset: 0,
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      if (snapTimeout) clearTimeout(snapTimeout);
      clearTimeout(wheelResetTimer);
      window.removeEventListener("touchstart", onUserTouchStart);
      window.removeEventListener("touchend", onUserTouchEnd);
      window.removeEventListener("wheel", onUserWheel);
      gsap.ticker.remove(tickerUpdate);
      document.removeEventListener("click", handleAnchorClick);
      delete (window as any).__lenis;
      lenis.destroy();
    };
  }, []);

  return null;
}
