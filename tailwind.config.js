/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths to all template files in your project
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js}",
    "./public/assets/**/*.{html,js}",
    "./public/assets/services/**/*.{html,js}",
    "./public/assets/services/roofing/**/*.{html,js}",
    "./public/assets/services/siding/**/*.{html,js}",
    "./public/assets/services/gutters/**/*.{html,js}",
    "./public/assets/services/roofing/storm-repair/**/*.{html,js}",
    "./public/assets/services/roofing/leak-repair/**/*.{html,js}",
    "./public/assets/services/roofing/wind-repair/**/*.{html,js}",
    "./public/assets/services/roofing/natural-repair/**/*.{html,js}",
    "./public/assets/services/roofing/renewal/**/*.{html,js}",
    "./lib/**/*.{js,jsx,ts,tsx}",
    "@/lib/googleAuth/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Define your custom colors here
      colors: {
        primary: "#FFD700", // Your yellow color
        secondary: "#808080", // Your grey color
      },
    },
  },
  plugins: [],
};
