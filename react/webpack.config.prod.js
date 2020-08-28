const {
    merge
} = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const path = require('path')

module.exports = merge(commonConfig, {
    entry: path.resolve(__dirname, 'src', 'index.prod.tsx'),
    output: {
        libraryTarget: 'amd'
    },
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint-loader'],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['to-string-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
})
