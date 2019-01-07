const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: {
        app: path.resolve(__dirname, "../src/index.js")
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                    }
                }]

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 51200,
                    name: path.posix.join('fonts', '[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
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
        new webpack.HotModuleReplacementPlugin()
        // new webpack.optimize.SplitChunksPlugin()
    ],
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, '../src'),
        },
        extensions: [".js", ".json", ".vue"] // 列表过长，会影响查找速度  import导入时，一些文件建议添加 后缀名 此时要添加 “*”
    }
}