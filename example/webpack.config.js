'use strict';
const path = require('path');

const rootPath = path.resolve(__dirname);

module.exports = {
    entry: rootPath + '/src/index.jsx',
    output: {
        path: rootPath + '/dist/assets',
        filename: 'app.js',
        publicPath: 'assets/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                include: [rootPath + '/src', path.resolve(rootPath, '../src')]
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
                loaders: ['url-loader?limit=8192']
            }
        ]
    },
    resolve: {
        extensions: ['.js', 'jsx', '.css']
    },
    devServer: {
        contentBase: rootPath + '/src',
        publicPath:  '/assets',//决定了app.js所在文件夹
        port: 3000,
        host: '0.0.0.0'
    }
}