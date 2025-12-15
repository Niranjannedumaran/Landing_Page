/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0B0F1A",
          secondary: "#111827",
        },
        accent: {
          gold: "#D4AF37",
        },
        text: {
          primary: "#F9FAFB",
          muted: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

