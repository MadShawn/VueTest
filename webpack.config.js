const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: './app/main.js', // 已多次提及的唯一入口文件
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle-[hash].js', // 打包后输出文件的文件名
        publicPath: 'assets'
    },
    devServer: {
        contentBase: './build', // 本地服务器所加载的页面所在的目录
        port: 9000,
        historyApiFallback: true, // 不跳转
        inline: true, // 实时刷新
        hot: true // 热加载
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
            use: [
                {
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        // modules: true
                    }
                }
            ]
        }]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: './app/index.tmpl.html' // new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin() // 热加载插件
    ]
};
