/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#fabf48',
        },
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        "hero":  "url('/src/assets/images/hero-bg.jpg')",
        "calltoaction":  "url('/src/assets/images/cta-bg.jpg')",
        "testimonial": "url('/src/assets/images/testimonials-bg.jpg')",
      }
    },
  },
  plugins: [],
}