var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var version = require('./package.json').version;


var entry =  __dirname + '/src/index.js';


var output =  {
  filename: 'page/[name]/index.js',
  chunkFilename: 'chunk/[name].[chunkhash:5].chunk.js',
};


var devtool = 'source-map';


var eslint =  {
  configFile: __dirname + '/.eslintrc.js',
}


var loaders = [
    {
      test: /\.(json)$/,
      exclude: /node_modules/,
      loader: 'json',
    },
/* with lint
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel!eslint-loader',
    },
*/
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
    },
    {
      test: /\.(?:png|jpg|gif)$/,
      loader: 'url?limit=8192', //小于8k,内嵌;大于8k生成文件
    },
    {
      test: /\.less/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[hash:base64:4]!postcss!less'),
    }
];


var devPlugins =  [
  new CopyWebpackPlugin([
    { from: './src/resource/music/music.mp3' },
    { from: './src/resource/css/loader.css' },
  ]),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new OpenBrowserPlugin({
    url: 'http://127.0.0.1:8080/'
  }),
  new ExtractTextPlugin('css.css', {
    allChunks: true
  }),
]


var productionPlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }),
  new CopyWebpackPlugin([
    { from: './src/resource/music/music.mp3' },
    { from: './src/resource/css/loader.css' },
  ]),
  new HtmlWebpackPlugin({
    template: __dirname + '/server/index.tmpl.html'
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }}
  ),
  new ExtractTextPlugin('css-' + version + '.css', {
    allChunks: true
  }),
];


var devServer = {
  contentBase: './server',
  colors: true,
  historyApiFallback: false,
  port: 8080, // defaults to "8080"
  hot: true, // Hot Module Replacement
  inline: true, // Livereload
  host: '0.0.0.0',
};

module.exports = {
  entry: entry,
  devtool: devtool,
  output: output,
  loaders: loaders,
  devPlugins: devPlugins,
  productionPlugins: productionPlugins,
  devServer: devServer,
  postcss: function () {
    return [precss, autoprefixer];
  },
  version: version
};
