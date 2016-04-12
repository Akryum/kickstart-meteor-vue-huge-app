import Vue from 'vue';

// Routes
import './routes';

// Style
import './style/main.less';

// Vue
import './directives';
import './filters';

// Root component
import layout from './components/AppLayout.vue';
export const root = new Vue(layout);

// Not found page component
import notFound from './components/NotFound.vue';
Vue.component('not-found', notFound);

// Not-found special route
FlowRouter.notFound = {
    action: function () {
        console.log("not found");
        root.currentView = 'not-found';
    }
};

// Init router
FlowRouter.initialize();
