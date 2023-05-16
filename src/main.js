import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/scss/vendors/bootstrap/_index.scss'

import vSelect from 'vue-select'

import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'
import Vuelidate from 'vuelidate'
import AppLayout from '@/layouts/Layout'

Vue.config.productionTip = false

Vue.component('Layout', AppLayout)
Vue.component('v-select', vSelect)

Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueCompositionApi)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
