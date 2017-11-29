const express = require('express')
const app = express()
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const webpackMiddleware = require("webpack-dev-middleware")
const server = require('http').Server(app)
const io = require('socket.io')(server)
require('dotenv').config()

app.use(webpackMiddleware(webpack(webpackConfig), {
    publicPath: "/assets/",
}));

app.use(express.static('.dist'));
app.use(express.static('public'));

const posts = [{
    title: "Example Post",
    body: `Lorem ipsum dolor sit amet, cu volutpat ocurreret assentior nam, an nisl suas nostro est. Id has lobortis 
           intellegam, prompta epicuri est ei, his facete maluisset ad. Sed quod illum ei. Ad cum feugait dissentiunt, 
           id commodo ornatus splendide eam. Mea officiis delicatissimi at.`
}];

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.emit('posts', posts)

    socket.on('post', (input) => {
        console.log(input)
        if(input && input.title && input.body) {
            const post = {
                title: input.title,
                body: input.body
            }
            posts.push(post)
            socket.broadcast.emit('posts', [post])
        }
    })
});

const listener = server.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port)
})