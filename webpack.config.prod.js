var config = require('./config');

module.exports = {
  devtool: config.devtool,
  entry: config.entry,
  output: {
    path: __dirname + '/build',
    filename: 'app-' + config.version+'.js',
  },
  eslint: config.eslint,
  module: {
    loaders: config.loaders
  },
  plugins: config.productionPlugins,
  postcss: config.postcss
};