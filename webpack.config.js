'use strict';

require('dotenv').load();

const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-pligin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let plugins = [
  new ExtractTextPlugin({filename: 'bundle.css'}),
  new HTMLPlugin({template: `${__dirname}/app/index.html`}),
];

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: true},
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [`${__dirname}/app/scss`],
              },
            },
          ],
        }),
      },
    ],
  },
};
