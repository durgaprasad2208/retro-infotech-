/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          navy: '#0B192C',
          deepBlue: '#002D62',
          blue: '#0047AB',
          cyan: '#0080FF',
          sky: '#00B4D8',
          orange: '#FF6B00',
          amber: '#FF8500',
          slate: '#4A5568',
          light: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 30px -10px rgba(0, 128, 255, 0.2)',
        'orange-glow': '0 10px 30px -10px rgba(255, 107, 0, 0.3)',
        'card-hover': '0 20px 40px -15px rgba(11, 25, 44, 0.1)',
      }
    },
  },
  plugins: [],
}
