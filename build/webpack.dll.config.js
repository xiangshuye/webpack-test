'use strict'
 
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const AssetsPlugin = require('assets-webpack-plugin')
 
module.exports = {
  entry: 'vue',
  output: {
    path: path.resolve(__dirname, '../public/static/js/'), // 生成的文件存放路径
    filename: 'dll.[name].[chunkhash].js', // 生成的文件名字(默认为dll.vendor.[hash].js)
    library: '[name]_[chunkhash]' // 生成文件的映射关系，与下面DllPlugin中配置对应
  },
  plugins: [
    new webpack.DllPlugin({
    // 会生成一个json文件，里面是关于dll.js的一些配置信息
      path: path.resolve(__dirname, '[name]-manifest.json'),
      name: '[name]_[chunkhash]', // 与上面output中配置对应
      context: __dirname // 上下文环境路径（必填，为了与DllReferencePlugin存在与同一上下文中）
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new AssetsPlugin({  //
    //   filename: 'bundle-conf.json',
    //   path: __dirname
    // }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    }),
    new CleanWebpackPlugin(['dll'])
  ]
}