const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
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
    // The [name] in the output will be main, as specified in the entry object.
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
    port: 7000,
  }
};