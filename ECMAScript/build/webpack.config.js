const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.[hash].js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: {
                    // chrome: 75
                  }
                }]
              ],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: 'src/template/index.html'
    })
  ],
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-sourcemap',
  devServer: {
    // contentBase: '../dist/',
    stats: 'errors-only',
    compress: false,
    host: 'localhost',
    port: 8089
  }
}
