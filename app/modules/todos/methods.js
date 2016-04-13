import {Tasks} from './collections';

Meteor.methods({
    'addTask': function(text) {
        check(text, String);

        Tasks.insert({
            text,
            created: new Date(),
            done: false
        })
    },
    'removeTask': function(_id) {
        check(_id, String);

        Tasks.remove(_id);
    },
    'setTaskDone': function(_id, done) {
        check(_id, String);
        check(done, Boolean);

        Tasks.update(_id, {
            $set: {
                done,
                updated: new Date()
            }
        });
    },
    'updateTaskText': function(_id, text) {
        check(_id, String);
        check(text, String);

        Tasks.update(_id, {
            $set: {
                text,
                updated: new Date()
            }
        });
    }
});
