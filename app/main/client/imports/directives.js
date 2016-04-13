import Vue from 'vue';

// Add your vue directives here

Vue.directive('path', {
    params: ['params', 'query'],
    update: function() {
        this.el.setAttribute('href', FlowRouter.path(this.expression, this.params.params, this.params.query));
    },
    paramWatchers: {
        params() {
            this.update();
        },
        query() {
            this.update();
        }
    }
})
