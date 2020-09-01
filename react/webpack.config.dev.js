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
    },
    module: {
        rules: [{
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    'sass-loader'
                ],
            }
        ]
    }
})
