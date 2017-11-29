const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: "./js/main",
    output: {
        path: path.join('/'),
        filename: "app.js",
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', {
                            'targets': {
                                'browsers': ['last 2 versions']
                            }
                        }], 'stage-0'],
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },
            {
                test: /\.(css)$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: ['css-loader?url=false']
                })
            },
            {
                test: /\.(sass|scss)$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: ['css-loader?url=false', 'sass-loader']
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    resolve: {
        extensions: [".js", ".vue", ".scss", ".sass"],
    }
};