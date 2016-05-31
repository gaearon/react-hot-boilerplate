var path = require('path');
var webpack = require('webpack');

var packageJson = require('./package.json');

module.exports = {
  devtool: 'eval',
  entry: [
    `webpack-dev-server/client?http://localhost:${packageJson[packageJson.name].port}`,
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
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
