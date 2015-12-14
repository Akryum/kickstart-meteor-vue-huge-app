var webpack = require('webpack');

var babel = {
  "presets": ['es2015'],
  "plugins": ["transform-class-properties"]
};

var localIdentName = process.env.NODE_ENV === 'production' ? '[hash:base64:5]' : '[name]__[local]__[hash:base64:5]';

module.exports = {
  entry: './entry',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', query: babel, exclude: /node_modules/ },
      { test: /\.css$/, loader: 'css/locals?module&localIdentName=' + localIdentName },
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182' },
      { test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file' }
    ]
  }
};
