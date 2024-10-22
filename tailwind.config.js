/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['neue-haas-grotesk-text', 'sans-serif'],
        display: ['neue-haas-grotesk-display', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0056e6',
          600: '#0043b3',
          700: '#003080',
          800: '#001c4d',
          900: '#00091a',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#e4e7eb',
          200: '#cbd2d9',
          300: '#9aa5b1',
          400: '#7b8794',
          500: '#616e7c',
          600: '#52606d',
          700: '#3e4c59',
          800: '#323f4b',
          900: '#1f2933',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'outline-primary': '0 0 0 3px rgba(0, 86, 230, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};