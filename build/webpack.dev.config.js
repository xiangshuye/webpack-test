const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require("./webpack.base.config")

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    output:{
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        publicPath:'/'
        // assetsSubDirectory: 'static',
        // assetsPublicPath: '/',
    },
    devServer: {
        contentBase: '../dist',
        open: true,
        hot: true,
        port: '9820'
    }
})
