<template>
    <div class='post-container'>
        <h2>{{title}}</h2>
        <p>{{body}}</p>
    </div>
</template>

<script>
    export default {
        name: "page-header",
        props: ["title", "body"]
    }
</script>

<style lang="sass" scoped>
  
</style>
