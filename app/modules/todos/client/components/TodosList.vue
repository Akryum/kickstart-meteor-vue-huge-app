<template>
    <div class="view">
        <h1>Todos List ({{count}})</h1>
        <form @submit.prevent="submitNewTask">
            <input class="add-task input" placeholder="Add a task" v-model="newTaskText" required />
        </form>
        <p>
            <task v-for="task in tasks" :data="task"></task>
        </p>
    </div>
</template>

<script type="module">
    import {Tasks} from '../../collections';
    import task from './Task.vue';

    export default {
        data() {
            return {
                count: 0,
                tasks: [],
                newTaskText: ""
            }
        },
        sync: {
            count() {
                return Tasks.find({
                    done: false
                }).count();
            },
            tasks() {
                return Tasks.find({}, {
                    sort: {
                        done: 1,
                        created: -1
                    }
                }).fetch();
            }
        },
        created() {
            this.sub = Meteor.subscribe('tasks');
        },
        destroyed() {
            this.sub.stop();
        },
        methods: {
            submitNewTask() {
                Meteor.call('addTask', this.newTaskText);
                this.newTaskText = "";
            }
        },
        components: {
            task
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import '~main/client/style/vars.less';

    h1 {
        color: @vue-color;
    }

    .add-task {
        display: block;
        width: 100%;
        box-sizing: border-box;
    }
</style>
