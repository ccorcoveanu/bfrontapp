'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

module.exports = {
  entry: [
    './src/js/main.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [
      {
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src/js'),
        test: /\.js$/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', // The backup style loader
          'css?sourceMap!sass?sourceMap'
        )
      },
      { test: /\.(woff|woff2|eot|ttf)$/, loader: 'file?name=fonts/[name].[ext]'}
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/', 'index.html'),
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/', 'payments.html'),
      filename: 'payments.html',
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/', 'demography.html'),
      filename: 'demography.html',
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/', 'demography.html'),
      filename: 'neuer_fall.html',
      hash: true,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    })
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'cheap-module-source-map',
}