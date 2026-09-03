import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        surface: "#0f172a",
        card: "rgba(15, 23, 42, 0.7)",
        primary: {
          DEFAULT: "#00f0ff",
          glow: "#00f0ff33",
        },
        secondary: {
          DEFAULT: "#a855f7",
          glow: "#a855f733",
        },
        accent: {
          DEFAULT: "#10b981",
          glow: "#10b98133",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-cyan": "glowCyan 3s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "grid-move": "gridMove 20s linear infinite",
      },
      keyframes: {
        glowCyan: {
          "0%": { boxShadow: "0 0 15px rgba(0, 240, 255, 0.2)" },
          "100%": { boxShadow: "0 0 35px rgba(0, 240, 255, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gridMove: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
