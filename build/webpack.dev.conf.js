const utils = require('./utils'),
  webpack = require('webpack'),
  config = require('../config'),
  merge = require('webpack-merge'),
  baseWebpackConfig = require('./webpack.base.conf'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach((name) => {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})

// vue multi entries
let pages = require('./entry.conf').entriesHtml

for(let page in pages) {
  let fileName = page.split('/')[1] === 'home'
        ? 'index' + '.html'
        : page.split('/')[1] + '.html',
    conf = {
        filename: fileName,
        template: pages[page],
        inject: true,
        chunks: [page, 'vendor', 'manifest']
    }
  //console.log(conf)
  // console.log(fileName)

  // https://github.com/ampedandwired/html-webpack-plugin
  module.exports.plugins.push(new HtmlWebpackPlugin(conf))
}

