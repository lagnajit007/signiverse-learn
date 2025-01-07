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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#7C3AED",
        },
        secondary: {
          DEFAULT: "#F97316",
          foreground: "#1A1F2C",
        },
        accent: {
          purple: "#D946EF",
          blue: "#0EA5E9",
          green: "#22C55E",
          yellow: "#EAB308",
          orange: "#F97316",
          pink: "#EC4899",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "bounce-slight": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "bounce-slight": "bounce-slight 2s infinite",
      },
      backgroundImage: {
        'gradient-playful': 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)',
        'gradient-fun': 'linear-gradient(-60deg, #ff9a9e 0%, #fad0c4 100%)',
        'gradient-cool': 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
        'gradient-warm': 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        'gradient-fresh': 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;