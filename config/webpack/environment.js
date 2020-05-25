const { environment } = require('@rails/webpacker')

//Overriding the default options for compiling CSS modules
const myCssLoaderOptions = {
  modules: {
    localIdentName: '[name]__[local]___[hash:base64:5]',
  },
  sourceMap: true,
}
const CSSLoader = environment.loaders
  .get('sass')
  .use
  .find((el) => el.loader === 'css-loader')
CSSLoader.options = { ...CSSLoader.options, ...myCssLoaderOptions }


//Loader to enable URLs in Sass
environment.loaders.get('sass').use.splice(-1, 0, {
  loader: 'resolve-url-loader'
});

//Loader to enable importing SVGs as React components
const babelLoader = environment.loaders.get('babel')
environment.loaders.insert('svg', {
  test: /\.svg$/,
  use: babelLoader.use.concat([
    {
      loader: 'react-svg-loader',
      options: {
        jsx: true // true outputs JSX tags
      }
    }
  ])
}, { before: 'file' })
const fileLoader = environment.loaders.get('file')
fileLoader.exclude = /\.(svg)$/i

module.exports = environment