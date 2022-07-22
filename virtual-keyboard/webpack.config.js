const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Virtual keyboard",
    filename: 'index.html',
      template: 'src/index.html',
      favicon: "./src/assets/img/keyboard.png"
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    static: 'dist',
    port: 3002
  },
};