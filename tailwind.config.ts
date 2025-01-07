import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F0FFF4",
        foreground: "#1A1F2C",
        primary: {
          DEFAULT: "#22C55E",
          light: "#86EFAC",
          dark: "#15803D",
        },
        secondary: {
          DEFAULT: "#F472B6",
          foreground: "#1E1B4B",
        },
        card: {
          pink: "#FFE4E6",
          purple: "#F3E8FF",
          mint: "#ECFDF5",
          orange: "#FFF7ED",
        },
        accent: {
          purple: "#A855F7",
          blue: "#3B82F6",
          green: "#22C55E",
          yellow: "#EAB308",
          orange: "#F97316",
          pink: "#EC4899",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
      backgroundImage: {
        'gradient-mint': 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
        'gradient-pink': 'linear-gradient(135deg, #FFE4E6 0%, #FBCFE8 100%)',
        'gradient-purple': 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;