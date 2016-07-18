var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var DEV = false;
process.argv.forEach(function (value) {
  if (value.indexOf('webpack-dev-server') >= 0) {
    DEV = true;
  }
});

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'scripts.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss?$/,
        include: APP_DIR,
        loaders: ['style', 'css', 'sass-loader']
      }
    ]
  }
};

if (DEV) {
  config.entry = [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    APP_DIR + '/app.jsx'
  ];

  config.module.loaders.unshift({
    test: /\.jsx?/,
    include: APP_DIR,
    loader: 'react-hot'
  });

  config.devtool = "sourcemap";

  config.watch = true;

  config.devServer = {
    contentBase: "./public",
    noInfo: true,
    hot: true,
    inline: true,
    port: '3000',
    host: '0.0.0.0'
  };

  config.plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ];
}

module.exports = config;