module.exports = {
  purge: [
    // './src/**/*.html',
    // './src/**/*.vue',
    // './src/**/*.jsx',
    // './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4'
      },
      spacing: {
        88: '120rem'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
