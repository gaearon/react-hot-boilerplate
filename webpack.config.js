var path = require('path');
var webpack = require('webpack');
var loaders = require('./webpack.loaders');

module.exports = {
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: loaders
  }
};
