'use strict';

var NODE_ENV = process.argv.indexOf('prod') >= 0 ? 'production' : 'development';
process.env.NODE_ENV = process.env.NODE_ENV || NODE_ENV;

var webpack = require('webpack');
var config = NODE_ENV === 'production' ?
  require("./webpack.production.config.js") :
  require("./webpack.config.js");
var compiler = webpack(config);

console.log("Starting " + NODE_ENV + " build.\n");

if (NODE_ENV === 'production') {
  compiler.run(function (err, stats) {
    console.log('[webpack:build]', (err || stats).toString({
      chunks: false,
      colors: true
    }));
  });
}
else {
  var WebpackDevServer = require('webpack-dev-server');
  var server = new WebpackDevServer(compiler, config.devServer);
      server.listen(config.devServer.port || 8080);
}