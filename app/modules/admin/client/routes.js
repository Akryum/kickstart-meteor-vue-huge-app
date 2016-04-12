var routes = FlowRouter.group({
    name: 'AdminGroup',
    prefix: '/admin',
    triggersEnter: [function(context, redirect) {
        console.log('Enter AdminGroup');
    }]
});

routes.route('/', {
    name: 'admin-index',
    action: function() {
        require.ensure(['./module'], require => {
            require('./module').index();
        });
    }
});

routes.route('/about', {
    name: 'admin-about',
    action: function() {
        require.ensure(['./module'], require => {
            require('./module').about();
        });
    }
});
