<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container-fluid header-container">
            <a class="navbar-brand nf-primary" href="/">{{title}}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarLinks">
                <div class="navbar-nav ml-auto">
                    <a class="nav-link nav-item active" href="/">Posts</a>
                    <a class="nav-link nav-item" href="/#/about">About</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "page-header",
        props: ["title"]
    }
</script>

<style lang="sass" scoped>
    nav
        margin-bottom: 32px
</style>
