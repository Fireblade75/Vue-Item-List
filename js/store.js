import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        posts: []
    },
    getters: {
        posts: (state) => {
            return state.posts
        }
    },
    mutations: {
        addPost: (state, post) => {
            state.posts.push(post)
        }
    }
})

export default store