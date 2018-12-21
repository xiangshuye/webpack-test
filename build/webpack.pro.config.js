const path = require('path')
const webpack = require("webpack")
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: "cheap-module-source-map",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash].js',
        publicPath: './'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/'], {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),
        new CopyWebpackPlugin([{
                from: path.resolve(__dirname, '../public/static'),
                to: 'static',
                ignore: ['.*']
            }
        ]),
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, '..'),
            manifest: require('./vendor-manifest.json')
        }),
        // //这个主要是将生成的vendor.dll.js文件加上hash值插入到页面中。
        new AddAssetHtmlPlugin([{
            filepath: path.resolve(__dirname, '../public/js/vendor.dll.js'),
            outputPath: '../dist/js', // 【坑：不要用path.resolve，否则打包进程结束不了】
            publicPath: './js',
            includeSourcemap: false,
            // hash: true,
        }])
    ]
})