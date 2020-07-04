module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public',
    port: 9000
  }
}