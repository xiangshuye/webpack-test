const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require("./webpack.base.config")

module.exports = merge(baseConfig, {
    mode: 'development', // 开发模式
    devtool: 'cheap-module-eval-source-map', // 生成 map 文件，选项
    output: { // 出口
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: { // 开发服务器设置
        contentBase: '../dist',
        historyApiFallback: true,
        open: true,
        hot: true,
        port: '9820'
    },
    module: {
        rules: [{
                test: /\.css$/, // 处理 css
                use: ['style-loader', 'vue-style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /.less$/,
                use: ['style-loader', 'vue-style-loader', 'css-loader', 'less-loader', 'postcss-loader']
            }
        ]
    }
})