var webpack = require('webpack');
var path = require('path');

module.exports = {
    externals: {
        // Make sure we use Meteor package for jQuery
        'jquery': '$',
        'underscore': '_'
    },
    devServer: {
        // You can change this to your server IP address to access it remotely
        host: 'localhost',
        inline: true,
        hot: true,
        quiet: true
    },
    hotMiddleware: {
        reload: true
    },
    resolve: {
        root: path.join(__dirname, '..', 'app'),
        extensions: ['', '.js', '.vue', '.json', '.css', '.scss']
    }
};
