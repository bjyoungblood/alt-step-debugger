'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var env = process.env.NODE_ENV;

var entryPoints = [ './main' ];

if (env === 'development') {
  entryPoints.push('webpack-dev-server/client?http://0.0.0.0:8080');
  entryPoints.push('webpack/hot/only-dev-server');
}

var plugins = [
  new HtmlWebpackPlugin({
    filename : 'index.html',
    template : 'index.html',
    apiBaseUrl : (env === 'development') ? 'http://localhost:5000' : '',
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV' : JSON.stringify(env),
  }),
];

var output = {
  path : 'dist',
  pathinfo : true,
  filename : 'js/app-[hash].js',
  sourceMapFilename : 'js/app-[hash].map',
};

if (process.env.NODE_ENV === 'development') {
  plugins.push(new webpack.NoErrorsPlugin());
  output.devtoolModuleFilenameTemplate = 'file://[absolute-resource-path]';
  output.devtoolFallbackModuleFilenameTemplate = 'file://[absolute-resource-path]?[hash]';
}

module.exports = {
  entry : entryPoints,
  target : 'web',
  output : output,
  resolve : {
    root : __dirname,
    modulesDirectories : [ 'node_modules' ],
    extensions : [ '', '.js', '.jsx' ],
  },
  plugins : plugins,
  module : {
    noParse : /\.min\.js/,
    loaders : [
      {
        test : /\.jsx|js$/,
        exclude : /node_modules/,
        loaders : [ 'react-hot', 'babel-loader' ],
      },
      {
        test : /\.json$/,
        loader : 'json-loader',
      },
    ],
  },
};
