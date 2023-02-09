const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
}),

{
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/_variables.scss";`
      }
    }
  }
};
