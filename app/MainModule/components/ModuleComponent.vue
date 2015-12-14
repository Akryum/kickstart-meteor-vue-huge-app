<template>
    <h1>RootApp</h1>
    <menu></menu>
    <component :is="currentView"></component>
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';
import Menu from './Menu.vue';

export default {
    name: 'MainModule',
    replace: false,
    data() {
        return {
            currentView: null
        };
    },
    components: {
        home: Home,
        about: About,
        menu: Menu
    }
}
</script>

<style>

</style>