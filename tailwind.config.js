module.exports = {
  theme: {
    extend: {
      spacing: {
        '1/4': '25%',
        '1/3': '33.333333%',
        '1/2': '50%',
        '9/16': '56.25%',
        '2/3': '66.666667%',
        '3/4': '75%'
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
      },
      borderRadius: {
        'xl': '0.625rem',
        '2xl': '0.75rem',
        '3xl': '0.875rem'
      }
    },
    container: {
      center: true
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
      // '2xl': '1600px'
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
  ],
}
