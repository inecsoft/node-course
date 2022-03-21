const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Webpack Example App',
      header: 'Webpack Example Title',
      metaDesc: 'Webpack Example Description',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  mode: 'development',
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    // Serve index.html as the base
    // contentBase: './dist',
    open: true,
    // Enable compression
    compress: true,
    // Enable hot reloading
    // hot: true,
    // host,
    port: 9000,
  }
};