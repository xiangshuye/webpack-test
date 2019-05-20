const path = require('path')
const webpack = require("webpack")
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

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
        new CleanWebpackPlugin(['dist/'], { // 编译前删除出口文件夹，防止文件体积过大
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false
        }),
        new MiniCssExtractPlugin({ // 抽取 css ,生成文件并压缩
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css'
        }),
        new webpack.DllReferencePlugin({ // 连接清单文件，不再打包
            context: path.resolve(__dirname, '..'),
            manifest: require('./vendor-manifest.json')
        }),
        //这个主要是将生成的vendor.dll.js文件加上hash值插入到页面中。
        new AddAssetHtmlPlugin([{ // 把生成的 dll.js 写入到 index.html 文件中
            filepath: path.resolve(__dirname, '../public/js/vendor.dll.js'),
            outputPath: '../dist/js', // 【坑：不要用path.resolve，否则打包进程结束不了】
            publicPath: './js',
            includeSourcemap: false,
            // hash: true,
        }]),
        new OptimizeCssAssetsWebpackPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })
    ]
})