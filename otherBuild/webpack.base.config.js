const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, "../src/index.js"),
        //vendor: ['vue', 'vue-router', 'axios', 'echarts']
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 102400,
                    name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 51200,
                    name: path.posix.join('static', 'fonts/[name].[ext]')
                }
            },
            {
                test: /\.(mp4|mp3)$/,
                loader: 'url-loader',
                options: {
                    limit: 51200,
                    name: path.posix.join('static', 'media/[name].[ext]')
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'),
            template: path.resolve(__dirname, '../public/index.html'),
            inject: true
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.SplitChunksPlugin({
        //     chunks: "all",
        //     minSize: 20000,
        //     minChunks: 1,
        //     maxAsyncRequests: 5,
        //     maxInitialRequests: 3,
        //     name: true
        // }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../public/static'),
            to: 'static',
            ignore: ['.*']
        }]),
        new AddAssetHtmlPlugin({ // 为何没用？
            filepath: 'http://api.map.baidu.com/api?v=2.0&ak=eIGwkbkGLzFGy3bVduSUXlBcPMQEM5fi',
            outputPath: '../dist/js',
            publicPath: './js',
            includeSourcemap: false
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: 10
                }
            }
        }
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, '../src'),
        },
        extensions: [".js", ".json", ".vue"]
    }
}