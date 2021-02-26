module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#302F41',
        secondary: '#7D639F',
        tertiary: '#D0CDE1',
        linkText: '#9F8E63',
        linkArrow: '#1068FA',
        header: '#3F3D56',
        sub: '#E5E5E5',
        linkColor: '#458EFC',
      },
      spacing: {
        5: '1.25rem',
        7.5: '1.875rem',
        8.5: '2.083rem',
        13: '3.12rem',
        25: '6.25rem',
        45: '11.25rem',
        49: '12.5rem',
        66: '17.1875rem',
        83: '20.833rem',
        97: '25rem',
        101: '31.875rem',
        168: '43.75rem',
        192: '48.125rem',
      },
      fontFamily: {
        body: ['Nunito'],
      },
      fontSize: {
        xxs: '0.375rem',
        '5.5xl': ['3.5rem', { lineHeight: '1' }],
      },
      height: (theme) => ({
        25: '6.25rem',
        49: '12.5rem',
        97: '25rem',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
