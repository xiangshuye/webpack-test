const webpack = require('webpack')
const config = require('./webpack.pro.config')
const chalk = require('chalk')
const rm = require('rimraf')
const path = require('path')

rm(path.join(path.resolve(__dirname, '../dist'), 'static'), err => {
    if (err) {
        throw new Error(err)
    }
    webpack(config, (err, stats) => {
        if(err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        })+ '\n\n')

        if(stats.hasErrors()){
            console.log(chalk.red('Build faild with errors. \n'))
            process.exit(1)
        }

        console.log(chalk.cyan(' Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
