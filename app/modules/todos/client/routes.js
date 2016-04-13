var routes = FlowRouter.group({
    name: 'AppGroup',
    prefix: '/todos',
    triggersEnter: [function(context, redirect) {
        console.log('Enter AppGroup');
    }]
});

routes.route('/', {
    name: 'todos-index',
    action: function() {
        require.ensure(['./module'], require => {
            require('./module').index();
        });
    }
});

routes.route('/list', {
    name: 'todos-list',
    action: function() {
        require.ensure(['./module'], require => {
            require('./module').list();
        });
    }
});

routes.route('/about', {
    name: 'todos-about',
    action: function() {
        require.ensure(['./module'], require => {
            require('./module').about();
        });
    }
});
