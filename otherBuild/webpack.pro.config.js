const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


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
                use: [MiniCssExtractPlugin.loader, 'postcss-loader', 'css-loader']
            },
            {
                test: /.less$/,
                use: [MiniCssExtractPlugin.loader, 'postcss-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin ({
        //     root: path.resolve(__dirname, '../dist'),
        //     verbose: true,
        //     dry: false
        // }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })
    ]
})
