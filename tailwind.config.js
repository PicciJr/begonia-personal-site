module.exports = {
  theme: {
    extend: {
      colors: {
        'begonia-primary-purple': '#DDD3E7',
        'begonia-primary-orange': '#F2A38C',
        'begonia-primary-gray': '#D6D5CF',
        'begonia-sec-blue': '#C0CFDB',
        'begonia-sec-gray': '#767779'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  }
}
