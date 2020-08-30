const path = require('path')
const {
    merge
} = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8888
    }
})
