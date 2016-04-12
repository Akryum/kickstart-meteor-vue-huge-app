<template>
    <div class="view">
        <nav>
            <a v-path="todos-index">Back to website</a>
            <a v-path="admin-index">Dashboard</a>
            <a v-path="admin-about">About</a>
        </nav>
        <h1>Admin</h1>
        <component :is="view"></component>
    </div>
</template>

<script type="module">
    import home from './Home.vue';
    import about from  './About.vue';

    export default {
        name: "admin",
        data() {
            return {
                view: null
            };
        },
        components: {
            home,
            about
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    h1 {
        font-weight: lighter;
    }
</style>

<style lang="less" rel="stylesheet/less" scoped>
    h1 {
        font-weight: bold;
    }
</style>
