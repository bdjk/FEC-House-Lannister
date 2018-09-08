const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client'),
  output: {
    path: path.resolve(__dirname, './static'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js[x]?/,
      exclude: /(node_modules|dep)/,
      options: {
        presets: ['react']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  {
    test: /\.css$/,
    loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
  }
};