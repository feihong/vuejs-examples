import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './Main.vue'
import Order from './Order.vue'
import Guests from './Guests.vue'
import TaxTip from './TaxTip.vue'


// Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/main/order'},
  {
    path: '/main', component: Main,
    children: [
      {path: 'order', component: Order},
      {path: 'guests', component: Guests},
      {path: 'taxtip', component: TaxTip},
    ]
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
})

const app = new Vue({
  el: '#app',
  // template: '<app/>',
  template: "<div id='app'><router-view/></div>",
  router,
  // components: {App}
})
