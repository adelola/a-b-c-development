process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

environment.loaders.get('moduleSass').use.splice(0, 0, {      
    loader: 'style-loader'
})

module.exports = environment.toWebpackConfig()

