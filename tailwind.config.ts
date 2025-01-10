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
        background: "#F8F9FC",
        foreground: "#1E293B",
        primary: {
          DEFAULT: "#7C3AED",
          light: "#A78BFA",
          dark: "#5B21B6",
        },
        secondary: {
          DEFAULT: "#F472B6",
          foreground: "#1E1B4B",
        },
        card: {
          DEFAULT: "#FFFFFF",
          pink: "#FFE5EC",
          purple: "#F3E8FF",
          mint: "#ECFDF5",
          peach: "#FFF7ED",
        },
        accent: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
          green: "#10B981",
          yellow: "#F59E0B",
          red: "#EF4444",
        },
        chat: {
          background: "#F8FAFC",
          bubble: "#F1F5F9",
          time: "#94A3B8",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
      },
      backgroundImage: {
        'gradient-mint': 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;