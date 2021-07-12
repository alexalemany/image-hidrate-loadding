const webpack = require('webpack-config/webpack.config.js')
const path = require('path')

webpack.entry = {
    // name and input entry of your file
    'image-hydrate-loading': '@/src/entry/index.js'
}

webpack.output = {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
}

module.exports = webpack
