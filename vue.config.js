module.exports = {
  chainWebpack: config => {
    // here we're changing the default template compiler
    // to use the nativescript-vue-template-compiler
    // which has the necessary modules to handle
    // ListView's and v-templates

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compiler = require('nativescript-vue-template-compiler')

        return options
      })
  }
}
