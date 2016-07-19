var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

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
        loaders: ['style', 'css', 'autoprefixer', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      }
    ]
  },

  plugins: [new webpack.optimize.UglifyJsPlugin({
    exclude: /\.min\.js?/
  })],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      "react": path.resolve(__dirname, 'node_modules/react/dist/react.min.js'),
      "react-dom": path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.min.js')
    }
  }
};

module.exports = config;