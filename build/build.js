const webpack = require('webpack')
const config = require('./webpack.pro.config')
const rm = require('rimraf')
const path = require('path')

rm(path.join(path.resolve(__dirname, '../dist'), 'static'), err => {
    if (err) {
        throw new Error(err)
    }
    webpack(config, (err, stats) => {
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }))
    })
})