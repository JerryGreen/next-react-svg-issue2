const { withPlugins } = require('next-compose-plugins')
const withReactSvg = require('next-react-svg')
const { resolve } = require('path')

const withCustomAliases = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(webpackConfig, options) {
    webpackConfig.resolve.alias['~'] = resolve('src')
    webpackConfig.resolve.alias['@assets'] = resolve('assets')
    webpackConfig.resolve.alias['@types'] = resolve('types')

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(webpackConfig, options)
    }

    return webpackConfig
  },
})

module.exports = withPlugins([
  withCustomAliases,
  [withReactSvg, {
    include: resolve('assets'),
  }]
])
