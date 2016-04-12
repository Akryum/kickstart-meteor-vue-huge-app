var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var babel = {
    "presets": ['es2015'],
    "plugins": ["transform-class-properties"]
};

var cssLoader;
var plugins = [];

if (process.env.NODE_ENV === 'production') {
    plugins.push(new ExtractTextPlugin('style.css', {allChunks: true}));
    cssLoader = ExtractTextPlugin.extract('style', 'css?module&localIdentName=[hash:base64:5]');

    if (!Meteor.isCordova) {
        plugins.push(new webpack.optimize.CommonsChunkPlugin('common', 'common.web.js'));
    }
} else {
    cssLoader = 'style!css';
}

var config = {
    plugins: plugins,
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', query: babel, exclude: /node_modules/},
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.css$/, loader: cssLoader},
            {test: /\.less$/, loader: cssLoader + "!less"},
            {test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182'},
            {test: /\.(woff|woff2)(\?.*)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?.*)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?.*)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\.eot(\?.*)?$/, loader: 'file'}
        ]
    },
    devServer: {
        hot: true
    }
};

// Mobile
// Enter your local ip address here
if(Meteor.isCordova) {
    config.devServer = {
        host: '192.168.1.105'
    };
}

module.exports = config;
