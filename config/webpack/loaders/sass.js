// const { environment } = require('@rails/webpacker')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// module.exports = {
//   test: /\.(scss|sass|css)$/i,
//   use: ExtractTextPlugin.extract({
//     fallback: 'style-loader',
//     use: [
//       { loader: 'css-loader', options: {
//         modules: true,
//         sourceMap: true,
//         importLoaders: 2,
//         localIdentName: '[name]__[local]___[hash:base64:5]'
//       }
//     },
//     'postcss-loader',
//     'sass-loader'
//   ]
// })
// }

// module.exports = environment


// const { environment } = require('@rails/webpacker');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const isDevelopment = process.env.NODE_ENV === 'development';

// module.exports = {
//   test: /\.(scss|sass|css)$/i,
//   plugins: [
//     new MiniCssExtractPlugin({
//     filename: isDevelopment ? '[name].css' : '[name].[hash].css',
//     chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
//     })
//   ],
//   use: [{
//     fallback: 'style-loader',
//     use: [
//       {
//         loader: MiniCssExtractPlugin.loader,
//         // options: {
//         //   publicPath: (resourcePath, context) => {
//         //     return path.relative(path.dirname(resourcePath), context) + '/';
//         //   },
//         // },
//       }, 
//       {loader:'css-loader', 
//         options: {
//         modules: true,
//         sourceMap: true,
//         importLoaders: 2,
//         localIdentName: '[name]__[local]___[hash:base64:5]'
//       }},
//       'postcss-loader',
//       {
//         loader: 'sass-loader',
//         options: {
//           sourceMap: true,
//           sassOptions: {
//             outputStyle: 'compressed',
//           },
//         },
//       },
//     ]
//   }]
// }

// module.exports = environment

// const { environment } = require('@rails/webpacker');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const isDevelopment = process.env.NODE_ENV === 'development';


// module.exports = {
//   test: /\.(scss|sass|css)$/i,
//   plugins: [
//     new MiniCssExtractPlugin({
//     filename: isDevelopment ? '[name].css' : '[name].[hash].css',
//     chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
//     })
//   ],
//   use: [
//     {
//       test: /\.module\.s(a|c)ss$/,
//       loader: [
//         isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
//         {
//           loader: 'css-loader',
//           options: {
//             modules: {
//               localIdentName: '[name]__[local]___[hash:base64:5]'
//             },
//             sourceMap: isDevelopment,
//           }
//         },
//         'resolve-url-loader',
//         {
//           loader: 'sass-loader',
//           options: {
//             sourceMap: isDevelopment
//           }
//         }
//       ]
//     },
//     {
//       test: /\.s(a|c)ss$/,
//       exclude: /\.module.(s(a|c)ss)$/,
//       loader: [
//         isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
//         'css-loader',
//         'resolve-url-loader',
//         {
//           loader: 'sass-loader',
//           options: {
//             sourceMap: isDevelopment
//           }
//         }
//       ]
//     }
//   ] 
// }

// module.exports = environment