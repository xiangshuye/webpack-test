const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base.config");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = merge(baseConfig, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js",
        publicPath: "/"
    },
    devServer: {
        contentBase: "../dist",
        historyApiFallback: true,
        open: true,
        hot: true,
        port: "9830"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "vue-style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /.less$/,
                use: [
                    "style-loader",
                    "vue-style-loader",
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new PrerenderSPAPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, "../dist"),
            // Required - Routes to render.
            routes: ["/", "/user/userInfo", "/account/accountInfo"]
        })
    ]
});
