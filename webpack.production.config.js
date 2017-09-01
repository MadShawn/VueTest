const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: './app/main.js', // 已多次提及的唯一入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[hash].js' // 打包后输出文件的文件名
    },
    module: {
        rules: [{
            test: /(\.js|\.jsx)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        // modules: true
                    }
                }]
            })
        }]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: './app/index.tmpl.html' // new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(), // 热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('style.css')
    ]
};
