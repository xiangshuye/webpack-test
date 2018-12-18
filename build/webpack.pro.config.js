const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
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
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../public/static'),
            to: 'static',
            ignore: ['.*']
        }])
    ]
})