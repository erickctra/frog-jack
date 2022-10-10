/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        monogram: ["monogram"]
      },
      colors: {
        'bg':         '#EDEBE9',
        'primary':    '#373948',
        'secondary':  '#AFAEA9',
        'shadow':     '#D4D2C9',
        'value':  '#6D5C5C'
      }
    },
  },
  plugins: [],
}
