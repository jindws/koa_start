const path = require('path');
const webpack = require('webpack');
const externals = require('./externals')

module.exports = {
    entry: {
        app: [
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'app.js'
    },
    resolve: {
        extensions: [".js"]
    },
    target: 'node',
    // 移除掉所有绝对路径的引用，只保留以.开头的，也就是相对路径的引用
    // externals: /^(?![.])./,
    externals,
    context: __dirname,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true,
        path: true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"test"'
            }
        }),
    ]
}
