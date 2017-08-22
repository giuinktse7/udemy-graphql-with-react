const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

let config = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server.js',
  output: {
    filename: 'dist/output.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            ignore: '/node_modules/'
          }
        }]
}
    ]
  }
};

module.exports = config;
