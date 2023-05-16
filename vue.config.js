module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/scss/utilities/_variables.scss";
          @import "~@/assets/scss/utilities/_mixins.scss";
          @import "~@/assets/scss/base/_formalize.scss";
          @import "~@/assets/scss/base/_typography.scss";
          @import "~@/assets/scss/base/_global.scss";
          @import "~@/assets/scss/components/_table.scss";
          @import "~@/assets/scss/vendors/_vue-select.scss";
        `
      }
    }
  }
}
