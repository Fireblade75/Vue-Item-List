<template>
    <div>
        <page-header title='Vue Message Board' />
        <main>
            <post-form/>

            <post-item 
                v-for="(post, i) in posts" 
                :key="i" :title="post.title" 
                :body="post.body" />
        </main>
    </div>
</template>

<script>
    import Header from './header'
    import PostForm from './post-form'
    import PostItem from './post-item'
    import { mapGetters } from 'vuex'

    export default {
        name: "app",
        components: {
            "page-header": Header,
            "post-form": PostForm,
            "post-item": PostItem
        },
        computed: mapGetters({
                posts: 'posts'
            })
    }
</script>