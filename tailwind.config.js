/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA500',
          light: '#FFB733',
          deep: '#CC8400',
        },
        black: {
          DEFAULT: '#0A0A0A',
          soft: '#111111',
        },
        gray: {
          100: '#F2F2F2',
          200: '#E0E0E0',
          400: '#A0A0A0',
          600: '#5A5A5A',
        },
        'off-white': '#F7F7F5',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['Inter', 'sans-serif'],
      },
      animation: {
        'float-1': 'floatDrift 7s ease-in-out infinite',
        'float-2': 'floatDrift 6.5s ease-in-out 1.2s infinite',
        'float-3': 'floatDrift 8s ease-in-out 2.1s infinite',
        'float-4': 'floatDrift 7.5s ease-in-out 0.7s infinite',
        'float-5': 'floatDrift 6s ease-in-out 3s infinite',
        'float-6': 'floatDrift 9s ease-in-out 1.8s infinite',
        'scroll-left': 'scrollLeft 30s linear infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.25,0.1,0.25,1) forwards',
      },
      keyframes: {
        floatDrift: {
          '0%,100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-0.5deg)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.3)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
