const { environment } = require('@rails/webpacker')

environment.loaders.get('sass').use.splice(-1, 0, {
  loader: 'resolve-url-loader'
});

// environment.loaders.insert('sass', {
//   test: /\.(scss|sass|css)$/,
//     use: [
//       { loader: 'css-loader', options: { minimize: environment.NODE_ENV === 'production' } },
//       { loader: 'postcss-loader', options: { sourceMap: true } },
//       'resolve-url-loader',
//       { loader: 'sass-loader', options: { sourceMap: true, sourceMapContents: false } }
//     ]
// })


module.exports = environment

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