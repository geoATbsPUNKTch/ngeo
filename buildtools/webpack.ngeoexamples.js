const path = require('path');
const ls = require('ls');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [];
const entry = {};

for (const filename of ls('examples/*.html')) {
  const name = filename.name;
  entry[name] = ['ngeo/mainmodule.js', `./examples/${name}.js`];
  plugins.push(
    new HtmlWebpackPlugin({
      template: `examples/${name}.html`,
      chunksSortMode: 'manual',
      filename: name + '.html',
      chunks: ['common', name],
    }),
  );
}

module.exports = {
  output: {
    path: path.resolve(__dirname, '../.build/examples-hosted/'),
  },
  optimization: {
    splitChunks: {
      chunks: Object.keys(entry),
      name: 'commons',
    }
  }
  entry: entry,
  plugins: plugins,
};
