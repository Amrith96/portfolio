export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#E8000B',
        'off-white': '#F5F5F0',
        gray: { DEFAULT: '#888888', dark: '#333333' },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
