const webpack = require('webpack-settings/webpack.settings.js')
const path = require('path')

webpack.entry = {
    // name and input entry of your file
    // this first js is a alias js/src/js/input-file-name.js
    'image-hydrate-loading': 'js/src/entry/index.js',
}

webpack.output = {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    path: path.resolve(__dirname, 'demo'),
}

module.exports = webpack
