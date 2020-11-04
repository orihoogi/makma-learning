const webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/auth': {
        target: 'http://localhost:7500',
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:7500',
        changeOrigin: true
      },
      '/static': {
        target: 'http://localhost:7500',
        changeOrigin: true
      },
      '/images': {
        target: 'http://localhost:7500',
        changeOrigin: true
      },
      '/socket.io': {
        target: 'http://localhost:7500',
        changeOrigin: true
      }
    }
  }
};
