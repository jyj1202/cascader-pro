const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: 'warning',
  outputDir: 'lib',
  publicPath: '/vue-lazy-cascader/'
})
