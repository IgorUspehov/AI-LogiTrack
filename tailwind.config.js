/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040D1A',
          900: '#0A1628',
          800: '#0F2040',
          700: '#1A3158',
          600: '#1E3A5F',
          500: '#2A4F7C',
          400: '#3B6599',
          300: '#5B85B9',
        },
        steel: {
          100: '#EEF3F9',
          200: '#D4E1EF',
          300: '#B0C8E0',
          400: '#8AAEC9',
        },
        accent: {
          500: '#1D6FE8',
          400: '#3D85F0',
          300: '#6BA4F5',
          600: '#1558C0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-right': 'slideRight 1.2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
