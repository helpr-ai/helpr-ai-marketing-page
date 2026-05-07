/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rawson', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Fran', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          50: '#F4F2EE',
          100: '#E0DFDC',
          500: '#0A66C2',
          600: '#004182',
          700: '#003366',
          900: '#191919',
        },
        warm: {
          bg: '#F4F2EE',
          border: '#E0DFDC',
          ink: '#191919',
          gray: '#666666',
        },
        gold: {
          500: '#915907',
          600: '#7A4A05',
        },
      },
      animation: {
        'reveal-up': 'reveal-up 0.7s ease-out forwards',
        'reveal-fade': 'reveal-fade 0.7s ease-out forwards',
        'reveal-scale': 'reveal-scale 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-fade': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'reveal-scale': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 0 0 1px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.12)',
        'modal': '0 4px 16px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
