/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        electric: {
          blue: '#00A3FF',
          cyan: '#00F0FF',
          deep: '#3B82F6',
        },
        ink: {
          DEFAULT: '#030712',
          panel: '#080B10',
          card: '#0B1220',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(0,240,255,0.25)',
        'glow-lg': '0 0 45px rgba(0,240,255,0.35)',
      },
    },
  },
  plugins: [],
}
