function go(actionName) {
    require.ensure(['./module'], require => {
        var module = require('./module').getModule();
        module.startup().then(module[actionName]);
    });
}

var routes = FlowRouter.group({
    name: 'RootAppGroup',
    prefix: '/admin',
    triggersEnter: [function(context, redirect) {
        console.log('Enter AdminGroup');
    }]
});

routes.route('/', {
    action: function() {
        go('index');
    }
});