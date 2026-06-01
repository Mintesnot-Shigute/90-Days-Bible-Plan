/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium paper palette
        cream: "#f5f1ed",
        parchment: "#f9f6f3",
        ink: "#1a1a1a",
        "ink-light": "#4a4a4a",
        
        // Gold system
        gold: "#b8860b",
        "gold-light": "#d4a574",
        "gold-dark": "#8b6914",
        
        // Section colors - harmonious and distinct
        "section-ot": "#b45d0f",      // warm amber/brown
        "section-nt": "#b91c1c",      // rich red
        "section-ps": "#1e40af",      // deep blue
        "section-pr": "#6b21a8",      // royal purple
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Outfit", "sans-serif"],
      },
      fontSize: {
        // Generous type scale
        "display": ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        "title": ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading": ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
        "subheading": ["1.125rem", { lineHeight: "1.5", fontWeight: "600" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.05em" }],
      },
      boxShadow: {
        // Layered shadows for depth
        "soft": "0 2px 4px rgba(26, 26, 26, 0.05)",
        "subtle": "0 4px 12px rgba(26, 26, 26, 0.08)",
        "elevation": "0 8px 24px rgba(26, 26, 26, 0.12)",
        "glass": "0 8px 32px rgba(31, 38, 135, 0.15)",
        "glow": "0 0 20px rgba(184, 134, 11, 0.15)",
      },
      borderRadius: {
        // Consistent corner radius system
        "sm": "0.375rem",
        "md": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.25rem",
      },
      animation: {
        // Smooth, purposeful animations
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-in": "slideIn 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "pulse-gentle": "pulseGentle 2s ease-in-out infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "count": "count 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseGentle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        count: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backdropBlur: {
        "xs": "2px",
      },
      spacing: {
        // Consistent spacing scale
        "gap": "0.5rem",
        "gutter": "1rem",
        "margin": "1.5rem",
      },
    },
  },
  plugins: [],
}
