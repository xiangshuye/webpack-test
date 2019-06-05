const webpack = require('webpack')
const config = require('./webpack.pro.config')
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')

const spinner = ora('build start...')
spinner.start();
// 打包前删除出口文件夹
rm(path.join(path.resolve(__dirname, '../dist')), err => {
    if (err) {
        throw new Error(err)
    }
    webpack(config, (err, stats) => { // 打包函数
        spinner.stop();
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }))
    })
})