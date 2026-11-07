/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          950: "#1A0D08",
          900: "#25140E",
          800: "#341C14",
          700: "#4D2B1E",
        },
        crust: {
          900: "#2F190E",
          800: "#3D2315",
          700: "#5A341E",
        },
        gold: {
          600: "#B86F24",
          500: "#D68A36",
          400: "#E69F4D",
          300: "#F4BE77",
          200: "#F8D5A3",
        },
        cream: {
          50: "#FAF7F2",
          100: "#F8F3EA",
          200: "#F2E9DB",
          300: "#EADBC4",
          400: "#DEC8A7",
        },
        stamp: {
          red: "#8F2A1E",
          ink: "#202E39",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        display: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-reverse": "spin 25s linear infinite reverse",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 28s linear infinite",
        "marquee-reverse": "marquee 32s linear infinite reverse",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "noise": "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 100%)",
        "paper-texture": "linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
