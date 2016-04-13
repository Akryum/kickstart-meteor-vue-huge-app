<template>
    <div class="view">
        <h1>You are in another module</h1>
        <p>
            This module has been lazy-loaded thanks to webpack code-splitting feature!
        </p>
    </div>
</template>

<script type="module">
    export default {
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import '~main/client/style/vars.less';

    h1 {
        color: @vue-color;
    }
</style>
