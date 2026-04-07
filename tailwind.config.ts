import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        amberearth: {
          50: '#f8f2e9',
          100: '#f0e2cf',
          200: '#e8cfab',
          300: '#d5af7b',
          400: '#bf8852',
          500: '#a8693d',
          600: '#8d5232',
          700: '#6d3d27',
          800: '#4a2a1f',
          900: '#2e1a14'
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 30px rgba(22, 10, 6, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
