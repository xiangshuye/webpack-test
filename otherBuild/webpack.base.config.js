const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "../src/index.js")
        // vendor: ['vue', 'vue-router', 'axios', 'echarts','vuex']
    },
    module: {
        rules: [
            {
                test: /iview.src.*?js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: "vue-loader",
                        options: {}
                    },
                    {
                        loader: "iview-loader",
                        options: {
                            prefix: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "thread-loader",
                        options: {
                            worker: 2,
                            workerParallelJobs: 30,
                            poolTimeout: 2000,
                            poolParallelJobs: 50
                        }
                    },
                    {
                        loader: require.resolve("babel-loader"),
                        options: {
                            cacheDirectory: true
                            // eslintPath: require.resolve('eslint'),
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: "url-loader",
                options: {
                    esModule: false,
                    limit: 102400,
                    name: path.posix.join("img/[name].[hash:7].[ext]")
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "url-loader",
                options: {
                    esModule: false, // 新版本包设置为 false
                    limit: 51200,
                    name: path.posix.join("fonts/[name].[ext]")
                }
            },
            {
                test: /\.(mp4|mp3)$/,
                loader: "url-loader",
                options: {
                    esModule: false,
                    limit: 51200,
                    name: path.posix.join("media/[name].[ext]")
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, "../dist/index.html"),
            template: path.resolve(__dirname, "../public/index.html"),
            inject: true
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "../public/static"),
                to: "static",
                ignore: [".*"]
            }
        ])
    ],
    optimization: {
        splitChunks: {
            chunks: "initial",
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 3,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    maxSize: 300 * 1024,
                    priority: -10
                }
            }
        }
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, "../src")
        },
        extensions: [".js", ".json", ".vue"]
    }
};
