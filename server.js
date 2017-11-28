
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const webpackMiddleware = require("webpack-dev-middleware")
require('dotenv').config()

const app = express()
app.use(webpackMiddleware(webpack(webpackConfig), {
  publicPath: "/assets/",
}));

app.use(express.static('.dist'));
app.use(express.static('public'));


const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
