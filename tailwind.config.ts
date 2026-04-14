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
        navy: {
          950: "#0D1520",
          900: "#1E2A3A",
          800: "#2C3E52",
          700: "#3D5166",
          400: "#8BA3B8",
          100: "#E8EDF2",
        },
        "brand-red": "#FF3B30",
        "brand-orange": "#FF8C42",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #FF3B30, #FF8C42)",
      },
    },
  },
  plugins: [],
};

export default config;
