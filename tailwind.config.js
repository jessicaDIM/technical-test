/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      white: '#FFF',
      blue: '#3E6BEC',
      orange: '#DBA97C',
      green: '#52D8B0',
      lightGrey: 'rgba(143, 146, 161, 0.2)',
      grey: '#F7F7F7',
      darkGrey: '#A4A8BB'
    },
    textColor: {
      white: '#FFF',
      lightGrey: '#9FA3B9',
      grey: '#7F85A2',
      mediumGrey: '#A4A8BB',
      darkGrey: '#1E1F20'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif']
    },
    fontSize: {
      title: ['22px', '30px'],
      subtitle: ['17px', '30px'],
      titleCard: ['18px', '20px'],
      text: ['14px', '20px'],
      smallText: ['12px', '20px']
    },
    letterSpacing: {
      1: '0.0625rem',
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      dropShadow: {
        xs: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      boxShadow: {
        xs: '0px 4px 10px rgba(0, 0, 0, 0.04)'
      }
    }
  },
  plugins: []
};
