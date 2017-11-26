const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: "./js/app",
    output: {
        path: path.join('/'),
        filename: "app.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'stage-0', 'env']
                    }
                }
            },
            {
                test: /\.(css)$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?url=false']
                })
            },
            {
                test: /\.(sass|scss)$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?url=false', 'sass-loader']
                })
            },
        ]
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
      /* new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }) */
    ],
    resolve: {
      extensions: [".js", ".jsx", ".scss", ".sass"],
    }
};