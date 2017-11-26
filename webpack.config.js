const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: "./public/app",
    output: {
        path: path.join('/.dist'),
        filename: "bundle.js",
    },
    module: {
      loaders: [
        {
          test: /\.(sass|scss)$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
        },
         {
          test: /\.css/,
          loaders: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [
      /* new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }) */
    ],
    resolve: {
      extensions: [".js", ".jsx", ".scss"],
    }
};