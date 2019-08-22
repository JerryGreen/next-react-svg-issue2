const withReactSvg = require('next-react-svg')
const { resolve } = require('path')

const withCustomAliases = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(webpackConfig, options) {
    webpackConfig.resolve.alias['~'] = resolve('./components')
    webpackConfig.resolve.alias['@assets'] = resolve('./assets')

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(webpackConfig, options)
    }

    return webpackConfig
  },
})

module.exports = withCustomAliases(withReactSvg({
  include: resolve('./components/svg'),
  webpack(config) {
    return config
  }
}))
