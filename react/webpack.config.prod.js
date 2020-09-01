const path = require('path')
const {
    merge
} = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
    entry: path.resolve(__dirname, 'src', 'index.prod.js'),
    mode: 'production',
    devtool: 'source-map',
    output: {
        libraryTarget: 'amd'
    },
    module: {
        rules: [{
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[contenthash].[ext]',
                }
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'to-string-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            }
        ]
    }
})
