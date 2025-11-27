import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303", // Deep Void Black
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#00f3ff", // Neon Cyan
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#7000ff", // Electric Purple
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ff00ff", // Neon Magenta
          foreground: "#ffffff",
        },
        surface: {
          50: "#0a0a0a",
          100: "#121212",
          200: "#1e1e1e",
          300: "#2a2a2a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "deep-void": "linear-gradient(to bottom, #030303, #0a0a0a)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;

