const withReactSvg = require('next-react-svg')
const { resolve } = require('path')

module.exports = withReactSvg({
  include: resolve('assets'),
  webpack(config) {
    config.resolve.alias['~'] = resolve('src')
    config.resolve.alias['@assets'] = resolve('assets')
    return config
  }
})
