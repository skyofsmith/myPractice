const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    // contentBase: path.join(__dirname, 'public'),
    contentBase: 'public',
    compress: true,
    port: 9000,
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}