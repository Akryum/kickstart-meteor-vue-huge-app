<template>
    <div class="view" :class="{done:done}" :title="title">
        <input type="checkbox" v-model="done" @change="toggleDone" />
        <input class="text input" v-model="text" @change="updateText"/>
        <span class="time" :title="time | fromNow"><i class="zmdi zmdi-time"></i></span>
        <a @click="removeTask"><i class="zmdi zmdi-delete"></i> Delete</a>
    </div>
</template>

<script type="module">
    export default {
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                /* We init the local attributes */
                text: this.data.text,
                done: this.data.done
            }
        },
        watch: {
            data(val) {
                /* We update the local attributes if they change externally */
                this.text = val.text;
                this.done = val.done;
            }
        },
        computed: {
            time() {
                if(this.data.updated) {
                    return this.data.updated;
                } else {
                    return this.data.created;
                }
            }
        },
        methods: {
            toggleDone() {
                Meteor.call('setTaskDone', this.data._id, this.done);
            },
            removeTask() {
                Meteor.call('removeTask', this.data._id);
            },
            updateText() {
                Meteor.call('updateTaskText', this.data._id, this.text);
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import '~main/client/style/vars.less';
    @import '~main/client/style/mixins.less';
    @import '../style/vars.less';

    .view {
        .h-box;
        .box-center;
        padding: @padding 0;
        border-top: @task-border;
        position: relative;

        &.done {
            opacity: 0.5;
        }

        .text {
            flex: 1 1 100%;
            margin: 0 @padding;
            width: auto;
        }

        .time {
            margin-right: @padding;
        }
    }
</style>
