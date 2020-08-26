const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const path = require('path')

module.exports = merge(commonConfig, {
    entry: path.resolve(__dirname, 'src', 'index.prod.js'),
    output: {
        libraryTarget: 'amd'
    },
    mode: 'production',
    devtool: 'source-map'
})
