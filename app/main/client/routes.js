import 'modules/todos/client/routes';
import 'modules/admin/client/routes';

// Default route
FlowRouter.route('/', {
    triggersEnter: [function(context, redirect) {
        redirect(FlowRouter.path('todos-index'));
    }]
});
