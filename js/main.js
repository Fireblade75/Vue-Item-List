import '../css/main.sass'
import Vue from 'vue'
import App from './components/app'
import io from 'socket.io-client'
import store from './store'

const socket = io('http://localhost:3000');
Vue.prototype.$socket = socket
socket.on('posts', (posts) => {
    posts.forEach((post) => {
        store.commit('addPost', post)
    })
})

const instance = new Vue({
  el: '#vue-container',
  render: h => h(App),
  store
})
