/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        wire: "var(--wire)",
        ash: "var(--ash)",
        bone: "var(--bone)",
        paper: "var(--paper)",
      },
      fontFamily: {
        display: ["Anton", "Impact", "Arial Narrow", "sans-serif"],
        serif: ["'Instrument Serif'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "Helvetica", "Arial", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widestest: "0.4em",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translate3d(-50%,0,0)" },
          "100%": { transform: "translate3d(0,0,0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(28px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        flicker: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0.92 },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
        "marquee-reverse": "marquee-reverse 44s linear infinite",
        "spin-slow": "spin-slow 60s linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(.2,.7,.2,1) both",
        flicker: "flicker 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
