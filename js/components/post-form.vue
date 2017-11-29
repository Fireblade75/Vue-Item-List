<template>
    <div class='post-container'>
        <form>
            <div class="form-group">
                <label for="title-input" class="sr-only">Title</label>
                <input type="text" class="form-control" id="title-input" 
                    placeholder="Title" v-model="title">
            </div>
            <div class="form-group">
                <label for="post-area" class="sr-only">Post content</label>
                <textarea class="form-control" id="post-area" rows="3" 
                    placeholder="Post body" v-model="body"></textarea>
            </div>
            <div class="form-buttons">
                <button class="btn btn-secondary" v-on:click="clear">Clear</button>
                <button class="btn btn-primary" v-on:click="send">Send</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "page-header",
        data: function() {
            return {
                title: '',
                body: ''
            };
        },
        methods: {
            clear: function(e) {
                e.preventDefault()
                this.title = ''
                this.body = ''
            },
            send: function(e) {
                e.preventDefault()
                const post = {
                    title: this.title,
                    body: this.body
                }
                this.title = ''
                this.body = ''
                this.$store.commit('addPost', post)
                this.$socket.emit('post', post)
            }
        }
    }
</script>

<style lang="sass" scoped>
    .form-buttons
        display: flex
        justify-content: space-around

        .btn
            width: 150px

        @media screen and (max-width: 500px)
            justify-content: space-between

        @media screen and (max-width: 400px)
            flex-direction: column
            .btn
                width: 100%
                &:not(:last-child)
                    margin-bottom: 16px
        
</style>
