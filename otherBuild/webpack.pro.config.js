const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = merge(baseConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash].js',
        publicPath: 'https://files.zhiqiuge.com/xiangshuye/vue/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        },
        {
            test: /.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', {
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true
                }
            }]
        }
        ]
    },
    plugins: [
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
