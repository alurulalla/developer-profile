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
      },
      spacing: {
        5: '1.25rem',
        13: '3.12rem',
        25: '6.25rem',
        49: '12.5rem',
        97: '25rem',
      },
      fontFamily: {
        body: ['Nunito'],
      },
      fontSize: {
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
