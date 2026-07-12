/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edfaff',
          100: '#d6f3ff',
          500: '#009eee',
          600: '#007ec4',
          700: '#075e91',
          900: '#19467a',
        },
        lime: '#1abd1a',
        paper: '#f5f5f5',
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 18px 55px rgba(11, 39, 72, 0.12)' },
    },
  },
  plugins: [],
}
