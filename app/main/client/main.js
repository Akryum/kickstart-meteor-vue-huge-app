import Vue from 'vue';

// Routes
import './imports/routes';

// Méthodes
import 'main/both/imports/methods';

// Style
import './style/main.less';

// Vue
import './imports/directives';
import './imports/filters';

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
