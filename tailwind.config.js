/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        foreground: "#0A0A0A",
        brand: {
          DEFAULT: "#FF4500",
          dark: "#CC3700",
        },
        accent: "#00E676",
        muted: "#EBEBEB",
        "muted-fg": "#525252",
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-ibm-plex)", "sans-serif"],
        mono: ["var(--font-ibm-mono)", "monospace"],
      },
      boxShadow: {
        brutal: "6px 6px 0 0 #0A0A0A",
        "brutal-sm": "4px 4px 0 0 #0A0A0A",
        "brutal-lg": "10px 10px 0 0 #0A0A0A",
        "brutal-orange": "6px 6px 0 0 #FF4500",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
