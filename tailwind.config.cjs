module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'kalido-black': '#0a0a0f',
        'kalido-surface': '#111827',
        'kalido-gold': '#d4a853',
        'kalido-gold-light': '#e8c777',
        'kalido-gold-dark': '#b8922e',
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
