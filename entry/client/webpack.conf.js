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
    cssLoader = 'style!css?module&localIdentName=[name]__[local]__[hash:base64:5]';
}

module.exports = {
    entry: './entry',
    plugins: plugins,
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', query: babel, exclude: /node_modules/},
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.css$/, loader: cssLoader},
            {test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182'},
            {test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file'}
        ]
    }
};
