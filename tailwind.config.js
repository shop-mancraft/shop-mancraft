const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    // ...
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      // strategy: 'class' // https://github.com/tailwindlabs/tailwindcss-forms#using-classes-instead-of-element-selectors
    }),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.2xl')
        },
        h2: {
          fontSize: theme('fontSize.xl')
        }
      })
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl')
        }
      })
      addUtilities({
        '.bg-success': {
        },
        '.bg-danger': {
        },
        '.content-auto': {
          contentVisibility: 'auto'
        }
      })
    })
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: false,
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      require('@tailwindcss/forms')
    ]
  }
}
