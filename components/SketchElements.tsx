import React from "react";

// Hand-drawn sketch and botanical bakery elements
export function WheatSketch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M50 90 L50 15" />
      <path d="M50 30 C40 25 35 15 50 10 C65 15 60 25 50 30" />
      <path d="M50 45 C38 40 32 30 46 25" />
      <path d="M50 45 C62 40 68 30 54 25" />
      <path d="M50 60 C38 55 30 45 44 40" />
      <path d="M50 60 C62 55 70 45 56 40" />
      <path d="M50 75 C38 70 30 60 44 55" />
      <path d="M50 75 C62 70 70 60 56 55" />
      <path d="M48 90 C45 92 40 95 38 98" />
      <path d="M52 90 C55 92 60 95 62 98" />
    </svg>
  );
}

export function CoconutSketch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Half coconut shell */}
      <path d="M20 50 C20 75 40 88 55 88 C75 88 88 72 88 50 C88 50 75 52 55 52 C35 52 20 50 20 50 Z" />
      {/* Inner coconut flesh */}
      <path d="M26 53 C27 70 42 81 55 81 C70 81 81 68 82 53" />
      {/* Coconut oil drop */}
      <path d="M45 28 C45 28 35 38 35 44 C35 50 40 53 45 53 C50 53 55 50 55 44 C55 38 45 28 45 28 Z" fill="currentColor" fillOpacity="0.2" />
      {/* Palm leaf frond */}
      <path d="M50 15 C65 18 80 25 85 35" strokeDasharray="2 3" />
      <path d="M55 18 L60 12" />
      <path d="M63 21 L70 16" />
      <path d="M72 26 L80 22" />
    </svg>
  );
}

export function OvenSketch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 85 L85 85 L85 55 C85 30 70 20 50 20 C30 20 15 30 15 55 Z" />
      <path d="M28 85 L28 60 C28 45 38 38 50 38 C62 38 72 45 72 60 L72 85" fill="currentColor" fillOpacity="0.15" />
      {/* Brick lines */}
      <path d="M20 38 L34 38" />
      <path d="M66 38 L80 38" />
      <path d="M16 52 L26 52" />
      <path d="M74 52 L84 52" />
      <path d="M16 68 L26 68" />
      <path d="M74 68 L84 68" />
      {/* Fire flames */}
      <path d="M42 80 C42 72 46 68 47 64 C49 68 52 70 52 75 C54 71 58 73 58 80" />
    </svg>
  );
}

export function CoffeeCupSketch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Glass tumbler */}
      <path d="M30 35 L35 80 C36 84 40 87 45 87 L55 87 C60 87 64 84 65 80 L70 35 Z" />
      {/* Coffee level */}
      <path d="M32 45 C40 47 60 47 68 45" />
      {/* Crema foam top */}
      <path d="M28 35 C28 32 35 30 50 30 C65 30 72 32 72 35 C72 38 65 40 50 40 C35 40 28 38 28 35 Z" fill="currentColor" fillOpacity="0.2" />
      {/* Glass handle */}
      <path d="M68 42 C78 44 80 58 75 66 C72 70 66 70 66 70" />
      {/* Steam ribbons */}
      <path d="M40 24 C42 18 39 14 43 8" strokeDasharray="2 3" />
      <path d="M50 22 C52 16 49 12 53 6" strokeDasharray="2 3" />
      <path d="M60 25 C62 19 59 15 63 9" strokeDasharray="2 3" />
    </svg>
  );
}

export function HeritageStamp({ text = "EST. 1968", sub = "SAWYERPURAM", className = "" }: { text?: string; sub?: string; className?: string }) {
  return (
    <div className={`relative inline-flex flex-col items-center justify-center p-3 border-2 border-stamp-red border-dashed rounded-full text-stamp-red select-none rotate-[-6deg] ${className}`}>
      <div className="absolute inset-1 rounded-full border border-stamp-red/30 pointer-events-none" />
      <span className="font-display text-[9px] tracking-widest uppercase font-black">{sub}</span>
      <span className="font-serif text-lg font-black leading-tight tracking-wider">{text}</span>
      <span className="text-[8px] tracking-widest uppercase font-semibold">★ ORIGINAL RECIPE ★</span>
    </div>
  );
}

export function TamilHeritageStamp({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-crust-800/10 border border-crust-800/30 text-crust-900 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
      <span className="font-serif text-xs font-bold tracking-wide">1968 முதல் தலைமுறை பாரம்பரியம்</span>
    </div>
  );
}
