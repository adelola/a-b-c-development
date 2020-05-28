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
    // require('postcss-modules')({
    //   getJSON: function(cssFileName, json, outputFileName) {
    //     var path = require("path");
    //     var cssName = path.basename(cssFileName, ".css");
    //     var jsonFileName = path.resolve("./build/" + cssName + ".json");
    //     fs.writeFileSync(jsonFileName, JSON.stringify(json));
    //   }
    // }),
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