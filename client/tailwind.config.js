/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        '128': '28rem',
      }, colors: {
        'gray-p1': '#3d4848',
      }
    }
  },
  plugins: []
};
