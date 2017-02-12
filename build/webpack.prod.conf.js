const path = require('path'),
  utils = require('./utils'),
  webpack = require('webpack'),
  config = require('../config'),
  merge = require('webpack-merge'),
  baseWebpackConfig = require('./webpack.base.conf'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  env = config.build.env

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash:12].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash:12].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash:12].css')
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
})

if (config.build.productionGzip) {
  let CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

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
      chunks: [page, 'vendor', 'manifest'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        // removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }
  // generate dist *.html with correct asset hash for caching.
  // you can customize output by editing /*.html
  // https://github.com/ampedandwired/html-webpack-plugin
  webpackConfig.plugins.push(new HtmlWebpackPlugin(conf))
}

module.exports = webpackConfig
