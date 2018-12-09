/**
 * This config file is intended for Server bundling of the app in '/dist'
 */
const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common');

const serverConfig = {
  name: 'server',
  target: 'node',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname + '/dist')
  }
};

module.exports = merge(serverConfig, common);