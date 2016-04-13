var webpack = require('webpack');

var babel = {
  "presets": ['es2015'],
  "plugins": ["transform-class-properties"]
};

module.exports = {
  entry: './entry',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', query: babel, exclude: /node_modules/ }
    ]
  }
};
