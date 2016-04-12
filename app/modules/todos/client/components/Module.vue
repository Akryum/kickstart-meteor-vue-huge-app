<template>
    <div class="view">
        <nav>
            <a v-path="todos-index">Home</a>
            <a v-path="todos-list">Todos List</a>
            <a v-path="todos-about">About</a>
            <a v-path="admin-index">Admin</a>
        </nav>
        <h1>App title</h1>
        <component :is="view"></component>
    </div>
</template>

<script type="module">
    import home from './Home.vue';
    import about from  './About.vue';
    import todosList from  './TodosList.vue';

    export default {
        name: "todos",
        data() {
            return {
                view: null
            };
        },
        components: {
            home,
            about,
            todosList
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
