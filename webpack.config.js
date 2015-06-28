var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: 'static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
