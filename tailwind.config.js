/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths to all template files in your project
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js}",
    "./public/PMC_Assets/EventPhotos/**/*.{html,js}",
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
