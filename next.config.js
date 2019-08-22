const withReactSvg = require('next-react-svg')
const { resolve } = require('path')

module.exports = withReactSvg({
  include: resolve('./assets'),
  webpack(webpackConfig) {
    webpackConfig.resolve.alias['~'] = resolve('./src')
    webpackConfig.resolve.alias['@assets'] = resolve('./assets')
    return webpackConfig
  }
})
