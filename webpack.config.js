var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths[1];
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('main.css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', "css!sass?includePaths[]=" + bourbon + '&includePaths[]=' + neat)},
      { test: /\.css$/,
        loader: 'style!css' },
      // { test: /\.scss$/, loader: 'style!css!sass!postcss-loader'},
      // { test: /\.css$/, loader: 'style!css!postcss-loader' }
    ]
  },
  postcss: function() {
    return [autoprefixer]
  }
};
