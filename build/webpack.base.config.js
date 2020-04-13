const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: { // 入口文件
        app: path.resolve(__dirname, "../src/index.js")
    },
    module: { // 模块选项
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {

                    }
                }, {
                    loader: 'iview-loader',
                    options: {
                        prefix: true
                    }
                }]
            },
            {
                test: /\.js$/, // 对 js 文件进行处理
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/, // 处理图片
                use: [{
                    loader: 'url-loader',
                    options: {
                        esModule: false, // 新版本包设置为 false
                        limit: 10240,
                        name: path.posix.join('img/[name].[hash:7].[ext]')
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // 处理字体文件
                use: [{
                    loader: 'url-loader',
                    options: {
                        esModule: false, // 新版本包设置为 false
                        limit: 51200,
                        name: path.posix.join('fonts', '[name].[hash:7].[ext]')
                    }
                }]
            }
        ]
    },
    plugins: [ // 插件选项
        new HtmlWebpackPlugin({ // 处理 index.html 文件
            filename: path.resolve(__dirname, '../dist/index.html'), // 生成的 html 文件名
            template: path.resolve(__dirname, '../public/index.html'), // 模板文件
            inject: true // 是否把编译的 js，css 文件地址 注入到 html 文件中
        }),
        new CopyWebpackPlugin([{ // 处理一些静态文件，直接复制到指定文件夹中
            from: path.resolve(__dirname, '../public/static'),
            to: 'static',
            ignore: ['.*']
        }]),
        new VueLoaderPlugin(), // 处理 vue 组建的插件
        new webpack.HotModuleReplacementPlugin() // 热更新模块
    ],
    resolve: { // 解析选项
        alias: { // 别名，减少查找时间
            "vue$": "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, '../src'),
        },
        extensions: [".js", ".json", ".vue"] // 列表过长，会影响查找速度  import导入时，一些文件建议添加 后缀名 此时要添加 “*”
    }
}
