// import webpack from 'webpack';
import path from 'path';
// import UglifyJS from 'uglify-js';
// var UglifyJS = require("uglify-js");
import HtmlWebpackPlugin from 'html-webpack-plugin';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


export default {
  //debug: true,
  devtool: 'source-map',
  //noInfo: false,
  entry: [path.resolve(__dirname, 'src/index')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    //Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    // new webpack.LoaderOptionsPlugin({
    //   debug: false,
    //   noInfo: true
    // }),
    // Eliminate duplicate packages when generating bundle
    // new webpack.optimize.DedupePlugin(),
    // Minify JS
    //new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimization.minimize()
    // new config.optimization.minimize()
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
};
