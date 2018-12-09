/**
 * This config file is intended for client bundling of the app in '/public'
 */

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const clientConfig = {
  name: 'client',
  target: 'web',
  entry: {
    main: './src/client/client.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname + '/public')
  }  
};

module.exports = merge(clientConfig, common);