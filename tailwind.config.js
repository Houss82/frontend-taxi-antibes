/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          // Remappé vers un bleu marine foncé pour l'identité visuelle
          DEFAULT: "#0b1b34", // navy foncé
          light: "#132a4a", // navy un peu plus clair
          lighter: "#1b2e5c", // navy encore plus clair
        },
        silver: {
          DEFAULT: "#c0c0c0",
          light: "#e5e5e5",
          dark: "#8b8b8b",
        },
        gold: {
          DEFAULT: "#d4af37",
          light: "#f0d875",
          dark: "#b8941f",
        },
      },
      backgroundImage: {
        "gradient-silver": "linear-gradient(135deg, #c0c0c0 0%, #8b8b8b 100%)",
        "gradient-dark": "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
        "gradient-gold": "linear-gradient(135deg, #d4af37 0%, #f0d875 100%)",
      },
    },
  },
  plugins: [],
};
