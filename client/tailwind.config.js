/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        128: '28rem'
      },
      colors: {
        'gray-p1': '#3d4848'
      },
      animation: {
        'marquee-rtl': 'marquee 25s linear infinite',
        'marquee-ltr': 'marquee 25s linear infinite reverse'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      }
    }
  },
  plugins: []
};
