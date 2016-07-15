var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'scripts.js'
  },

  module: {
    loaders: [
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ["es2015"]
        }
      },
      {
        test: /\.scss?$/,
        include: APP_DIR,
        loaders: ['style', 'css', 'sass-loader']
      }
    ]
  },

  devtool: "sourcemap",

  watch: true
};

module.exports = config;