// TODO common routes interface?
function go(actionName) {
    require.ensure(['./module'], require => {
        var module = require('./module').getModule();
        module.startup().then(module[actionName]);
    });
}

var routes = FlowRouter.group({
    name: 'RootAppGroup',
    triggersEnter: [function(context, redirect) {
        console.log('Enter RootAppGroup');
    }]
});

routes.route('/', {
    action: function() {
        go('home');
    }
});

routes.route('/about', {
    action: function() {
        go('about');
    }
});