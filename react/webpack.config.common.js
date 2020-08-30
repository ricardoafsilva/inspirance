const path = require('path')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss']
    },
    module: {
        rules: [{
                test: /\.html/,
                use: ['html-loader']
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: process.env.NODE_ENV !== 'production' ? '[path][name].[ext]' : '[contenthash].[ext]',
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
}
