import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Order from './Order.vue'
import Guests from './Guests.vue'
import TaxTip from './TaxTip.vue'


// Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/order'},
  {path: '/order', component: Order},
  {path: '/guests', component: Guests},
  {path: '/taxtip', component: TaxTip},
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
})

const app = new Vue({
  el: '#app',
  template: '<app/>',
  router,
  components: {App}
})
