const ora = require('ora');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');

webpackBaseConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

const webpackConfig = merge(webpackBaseConfig, {
    devtool: '#cheap-module-eval-source-map',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});

var compiler = webpack(webpackConfig);

var server = new WebpackDevServer(compiler, {
    hot: true,
    quiet: false,
    inline: true,
    stats: { colors: true },
    publicPath: "/dist",
});
server.listen(8080);
