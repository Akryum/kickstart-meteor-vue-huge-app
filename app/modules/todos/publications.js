import {Tasks} from './collections';

Meteor.publish('tasks', function() {
    return Tasks.find();
});
