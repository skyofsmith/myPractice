const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const RemoveCommentsPlugin = require('./remove-comments-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'custom title',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      title: 'about',
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        './public'
      ]
    }),
    new RemoveCommentsPlugin()
  ]
}