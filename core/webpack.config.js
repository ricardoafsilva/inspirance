const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        libraryTarget: 'amd',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
        }, ],
    },
    plugins: [
        new Dotenv()
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
