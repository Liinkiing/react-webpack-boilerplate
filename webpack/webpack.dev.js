const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    watch: true,
    watchOptions: {
        poll: 1000,
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
    },
    plugins: [
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            })
        ]
    }
})