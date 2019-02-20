const webpack = require('webpack')
const config = require('./webpack.pro.config')
const rm = require('rimraf')
const path = require('path')

// 打包前删除出口文件夹
rm(path.join(path.resolve(__dirname, '../dist'), 'static'), err => {
    if (err) {
        throw new Error(err)
    }
    webpack(config, (err, stats) => { // 打包函数
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }))
    })
})