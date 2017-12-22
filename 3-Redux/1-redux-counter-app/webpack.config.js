


var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool:"cheap-eval-source-map",
    entry: [
        'webpack-dev-server/client?http://localhost:8181',
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loaders: ['babel'],
                include:path.join(__dirname,'src')
            }
        ]
    },
    devServer: {
        port:8181,
        contentBase: './dist',
        hot:true
    }
}