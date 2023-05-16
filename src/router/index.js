import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '../views/Home.vue'
import Calendar from '../views/Calendar.vue'
import Auth from './auth'
import Customer from './customers'
import Quotes from './quotes'
import Order from './orders'
import Invoice from './invoices'
import Sample from './samples'
import Installer from './installers'
import Supplier from './suppliers'
import LearningCenter from '../views/LearningCenter'

import PageError from '../components/partials/PageError.vue'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Auth
  ...Auth,
  // Customer
  ...Customer,
  // Quote
  ...Quotes,
  // Order
  ...Order,
  // Invoices
  ...Invoice,
  // Samples
  ...Sample,
  // Installers
  ...Installer,
  // Suppliers
  ...Supplier,
  // Learning Center
  {
    path: '/learning-center',
    name: 'LearningCenter',
    component: LearningCenter
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '*',
    name: 'Page Error',
    component: PageError
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
