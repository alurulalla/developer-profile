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
        timeAgo: '#B2B1BB',
        overlay: '#E0E0E0',
      },
      spacing: {
        5: '1.25rem',
        7.5: '1.875rem',
        8.5: '2.083rem',
        8.6: '2.109375rem',
        13: '3.12rem',
        24.5: '5.25rem',
        25: '6.25rem',
        44: '10.93rem',
        45: '11.25rem',
        49: '12.5rem',
        66: '17.1875rem',
        83: '20.833rem',
        85: '21.875rem',
        97: '25rem',
        101: '31.875rem',
        120: '37.5rem',
        168: '43.75rem',
        192: '48.125rem',
        350: '65rem',
        400: '75rem',
      },
      fontFamily: {
        body: ['Nunito'],
      },
      fontSize: {
        xxs: '0.375rem',
        '3.5xl': ['2rem', { lineHeight: '2.25rem' }],
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
