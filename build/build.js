const webpack = require('webpack')
const config = require('./webpack.pro.config')
const rm = require('rimraf')
const path = require('path')
webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        return;
    }
    console.log(stats.toString({
        chunks: false,
        colors: true
    }));
})
// rm(path.join(path.resolve(__dirname, '../dist'), 'static'), err => {
//     if (err) {
//         throw new Error(err)
//     }

// })