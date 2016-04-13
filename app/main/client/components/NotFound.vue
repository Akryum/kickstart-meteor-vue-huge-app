<template>
    <div class="view">
        <h1>:(</h1>
        <h2>Not Found</h2>
        <p>This is not the page you are looking for.</p>
    </div>
</template>

<script type="module">
    export default {
        name: "not-found"
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .view {
        color: darken(red, 10%);
        text-align: center;
    }

    h2 {
        font-weight: lighter;
    }

    p {
        text-align: center;
    }
</style>
