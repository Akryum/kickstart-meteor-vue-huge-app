<template>
    <h2>Meteor + Webpack + Vue</h2>
    <div>Welcome to MWV, the most awesome stack (with hot component reload)!</div>
    <div class="test">{{msg}}</div>
    <a @click="handleClick">Click me</a>
</template>

<script>
    Session.setDefault("click", 0);

    export default {
        /* Meteor Reactivity */
        sync: {
            msg: function () {
                return "You clicked " + Session.get("click") + " times";
            }
        },
        methods: {
            handleClick() {
                Session.set("click", Session.get("click") + 1);
            }
        }
    }
</script>

<!-- Scoped Styling -->
<style scoped>
    a {
        color: white;
        background: darkcyan;
        display: inline-block;
        padding: 4px 8px;
        border-radius: 3px;
        cursor: pointer;
    }
</style>