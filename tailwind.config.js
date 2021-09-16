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
