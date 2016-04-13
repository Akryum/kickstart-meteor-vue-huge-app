import Vue from 'vue';
import moment from 'moment';

// Add your vue filters here
Vue.filter('date', function(value) {
    return moment(value).format('YYYY MM DD');
});

Vue.filter('fromNow', function(value) {
    return moment(value).fromNow();
});
