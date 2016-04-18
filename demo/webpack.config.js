var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'demo': "./demo.js"
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['','.webpack.js', '.js']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  watch: true
}
