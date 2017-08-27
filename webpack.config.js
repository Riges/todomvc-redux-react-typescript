const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "css/[name].[contenthash].css",
  //disable: process.env.NODE_ENV === "development"
});

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'src/index.html',
  inject: 'body'
})

module.exports = {
  devtool: 'eval',
  entry: [
    'index.tsx',
    'scss/main.scss'
  ],
  output: {
    filename: 'app.[chunkhash].js',
    path: path.resolve('dist')
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    inline: true,
    //open: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'awesome-typescript-loader'],
        include: path.resolve('src')
      },
      {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ],
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    extractSass,
    HTMLWebpackPluginConfig
  ]
};