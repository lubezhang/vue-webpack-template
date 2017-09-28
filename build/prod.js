const webpack = require('webpack');
const ora = require('ora');
const chalk = require('chalk');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

const webpackConfig = merge(webpackBaseConfig, {
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.min.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        })
    ]
});


var spinner = ora('building for production...');
spinner.start();

webpack(webpackConfig, function (err, stats) {
    if(err) {
        spinner.fail(chalk.red(err));
    } else {
        spinner.succeed(chalk.green('  Build complete.'));

        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }
    }
})