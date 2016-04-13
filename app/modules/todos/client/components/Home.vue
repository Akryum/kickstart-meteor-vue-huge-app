<template>
    <div class="view">
        <h1>You are ready</h1>
        <p class="logo">
            <img src="/img/vue-logo.png" alt="Vue logo" />
        </p>
        <h2>Write awesome apps now!</h2>
        <p>
            This is a kickstart project built with tasty technologies like <a href="https://www.meteor.com/">meteor</a> (the javascript stack), <a href="https://vuejs.org/">vue</a> (a fast &amp; powerfull ui library), <a href="https://webpack.github.io/">webpack</a> (a bundler with code-splitting), <a href="https://github.com/kadirahq/flow-router">flow-router</a> (a modern meteor router), <a href="https://babeljs.io/">babel</a> (you can write next gen javascript), and it features a lazy-loaded module-based architecture.
        </p>
        <hr />
        <p>
            Update your app dependencies:
        </p>
        <p class="console">
            npm update<br />
            meteor update
        </p>
        <p>
            Add npm packages:
        </p>
        <p class="console">
            npm i &lt;package-name&gt; --save-dev
        </p>
        <p>
            Add <a href="https://atmospherejs.com/">atmosphere</a> meteor packages:
        </p>
        <p class="console">
            meteor add &lt;package-name&gt;
        </p>
        <hr />
        <p>
            Change the main style:
        </p>
        <p class="dir">
            <span>app</span>&#47;<span>main</span>&#47;<span>client</span>&#47;<span>style</span>&#47;<span>main.less</span>
        </p>
        <p>
            Customize colors:
        </p>
        <p class="dir">
            <span>app</span>&#47;<span>main</span>&#47;<span>client</span>&#47;<span>style</span>&#47;<span>vars.less</span>
        </p>
        <p>
            Change the app layout:
        </p>
        <p class="dir">
            <span>app</span>&#47;<span>main</span>&#47;<span>client</span>&#47;<span>components</span>&#47;<span>AppLayout.vue</span>
        </p>
        <p>
            Customize the 404 Not found page:
        </p>
        <p class="dir">
            <span>app</span>&#47;<span>main</span>&#47;<span>client</span>&#47;<span>components</span>&#47;<span>NotFound.vue</span>
        </p>
        <hr />
        <p>
            Add modules here (copy todos module folder):
        </p>
        <p class="dir">
            <span>app</span>&#47;<span>modules</span>&#47;<span>your-module</span>
        </p>
        <p class="warning">
            All your client-specific files must be under a client folder for the hot-reloading to work (or else, the server may restart unexpectedly). See <a href="https://github.com/thereactivestack/meteor-webpack/issues/71">#71</a>.
        </p>
        <p>
            For example:
        </p>
        <p class="dir">
            <span>app</span>&#47;<span>modules</span>&#47;<span>your-module</span>&#47;<span><b>client</b></span>&#47;<span>components</span>&#47;<span>YourComponent.vue</span>
        </p>
        <p>
            Don't forget to include the module routes here:
        </p>
        <p class="dir">
            <span>app</span>&#47;<span>main</span>&#47;<span>client</span>&#47;<span>routes.js</span>
        </p>
        <p class="console">
            import 'modules/todos/client/routes';<br />
            import 'modules/admin/client/routes';<br />
            import 'modules/your-module/client/routes';
        </p>
        <hr />
        <p>
            To launch the app on mobile platforms, edit this file and change your computer local network ip address:
        </p>
        <p class="dir">
            <span>config</span>&#47;<span>client</span>&#47;<span>webpack.conf.js</span>
        </p>
        <p>
            Then follow the official guide <a href="http://guide.meteor.com/mobile.html">here</a>.
        </p>
        <hr />
        <p>
            Please share your thoughts, report issues and comment this kickstart project <a href="https://github.com/Akryum/kickstart-meteor-vue-huge-app/issues">on Github</a>!
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

    h2 {
        font-weight: lighter;
    }

    .logo {
        text-align: center;

        img {
            max-width: 150px;
        }
    }
</style>
