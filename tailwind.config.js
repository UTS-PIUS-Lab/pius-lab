/** @type {import('tailwindcss').Config} */

// Theme-aware colours: each one reads an RGB triplet CSS variable defined in
// src/app/globals.css (`:root` = light theme, `.dark` = dark theme), so the
// same class (e.g. `text-fg`, `bg-ink`, `border-tint/10`) works in both.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        electric: {
          blue: v('electric-blue'),
          cyan: v('electric-cyan'),
          deep: v('electric-deep'),
        },
        ink: {
          DEFAULT: v('ink'),        // page background
          panel:   v('ink-panel'),  // page heroes, footer
          card:    v('ink-card'),   // cards, logo chip
        },
        fg:    v('fg'),     // headings / primary text
        body:  v('body'),   // paragraph text
        soft:  v('soft'),   // secondary text
        muted: v('muted'),  // tertiary text, links
        faint: v('faint'),  // captions, dates
        tint:  v('tint'),   // subtle overlays & borders, use with opacity (bg-tint/5, border-tint/10)
      },
      boxShadow: {
        glow: '0 0 20px rgb(var(--electric-cyan) / var(--glow-alpha))',
        'glow-lg': '0 0 45px rgb(var(--electric-cyan) / calc(var(--glow-alpha) * 1.4))',
      },
    },
  },
  plugins: [],
}
