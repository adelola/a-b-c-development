const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
  './javascript/packs/**/*.html',
  './javascript/packs/**/*.jsx',
  ],
  css: ['./assets/stylesheets/*.css',
  './assets/stylesheets/*.scss',
  './javascript/stylesheets/**/*.scss',
  './public/build/*.css'],
})


module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-nested'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
    }),
    ...process.env.NODE_ENV === 'production'
    ? [purgecss]
    : [] 
  ]
}