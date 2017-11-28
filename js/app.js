import '../css/main.scss'
import Vue from 'vue'
import App from './components/app'

const instance = new Vue({
  el: '#vue-container',
  render: h => h(App)
})
