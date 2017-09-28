const path = require('path');

const SRC_PATH = resolve('src');
const BUILD_PATH = resolve('dist');
// const ENTRYS_PATH = path.join(ROOT_PATH, 'entrys');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    cache: true,
    devtool: '#source-map',
    entry: {
        app: [path.join(SRC_PATH,'main.js')]
    },
    output: {
        filename: '[name].js',
        path: BUILD_PATH,
        publicPath: "/dist/"
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {}
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('dist')]
            }
        ]
    }
}
