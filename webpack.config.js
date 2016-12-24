// Source: https://github.com/vuejs/vue-router/blob/dev/examples/webpack.config.js

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const ROOT = './site/'

let entries = fs.readdirSync(ROOT).reduce((entries, dir) => {
  let fullDir = path.join(ROOT, dir)
  let entry = path.join(fullDir, 'app.js')
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    entries[dir] = './' + entry
  }
  return entries
}, {})

console.log(entries)

module.exports = {
  devtool: 'inline-source-map',

  entry: entries,

  output: {
    path: path.join(ROOT, '__build__'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.vue$/, loader: 'vue' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: ['./node_modules'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    }
  },

  resolveLoader: {
    fallback: ['./node_modules']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
  ]
}
