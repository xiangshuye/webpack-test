const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const AutoDllPlugin = require("autodll-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry:{
        app: path.resolve(__dirname, "../src/index.js"),
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    limit: 90000,
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'vue-style-loader', 'postcss-loader']
            },
            {
                test: /.less$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader', 'postcss-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            // filename: path.resolve(__dirname, '../index.html'),
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new AutoDllPlugin({
        //     cache: true,
        //     inject: true,
        //     debug: true,
        //     filename: '[name].js',
        //     path: './dll',
        //     entry: {
        //         vendor: ['vue']
        //     }
        // }),
        new webpack.optimize.SplitChunksPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),
    ],
    resolve: {
        alias:{
            "vue$": "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, '../src'),
        },
        extensions: [".js", ".json", ".vue"]
    }
}