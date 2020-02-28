module.exports = {
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%'
      },
      boxShadow: {
        'outline-gray': '0 0 0 3px #f7fafc',
        'outline-white': '0 0 0 12px white'
      },
      backgroundColor: theme => ({
       'black-transparent-1/2': 'rgba(0, 0, 0, .5)',
       'black-transparent-3/5': 'rgba(0, 0, 0, .6)'
      }),
      width: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      }
    },
    container: {
      center: true
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [
  ],
}
