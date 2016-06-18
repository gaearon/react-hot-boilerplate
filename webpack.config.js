var buildConfig = require('hjs-webpack')

var config = buildConfig({
  in: 'src/index',
  out: 'dist',
  clearBeforeBuild: true
})
config.entry.unshift('react-hot-loader/patch')

module.exports = config
