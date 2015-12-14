// Import global subscriptions
// Import global methods

var Vue = require('vue');

// Meteor patch
PatchVue(Vue, false);

// Routes
import 'routes';

// TODO better root template options
// Root component
RootVue = new Vue({
    el: 'body',
    template: '<div id="wrapper">\
    <div id="root">\
    <div id="mount">\
    <component :is="currentView">Please wait...</component>\
    </div>\
    </div>\
    </div>',
    data() {
        return {
            currentView: null
        }
    },
    ready() {
        console.log("root vue ready");
    }
});