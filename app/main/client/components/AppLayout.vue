<template>
    <div id="wrapper">
        <div id="root">
            <div class="main-content">
                <div id="module">
                    <component :is="currentView"></component>
                </div>
            </div>

            <footer>
                <span>Kickstart project by <a href="https://github.com/Akryum">@Akryum</a></span>
                <iframe class="github-star" src="https://ghbtns.com/github-btn.html?user=Akryum&repo=kickstart-meteor-vue-huge-app&type=star&count=true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
            </footer>
        </div>
    </div>
</template>

<script type="module">
    export default {
        el: 'body',
        replace: false,
        data() {
            return {
                currentView: null
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import '~main/client/style/vars.less';
    @import '~main/client/style/mixins.less';

    footer {
        @color: lighten(@page-color, 60%);
        color: @color;
        font-size: 0.9em;
        padding: @padding;
        border-top: @color;
        .h-box;
        .box-center;

        .github-star {
            margin-left: @padding;
        }
    }
</style>
