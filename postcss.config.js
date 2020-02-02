const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project 
  content: [
    './javascript/packs/**/*.html',
    './javascript/packs/**/*.jsx',
  ],
  css: ['./assets/stylesheets/*.css',
        './assets/stylesheets/*.scss',
        './javascript/stylesheets/**/*.scss',
        './public/build/*.css'

],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    require('tailwindcss'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}