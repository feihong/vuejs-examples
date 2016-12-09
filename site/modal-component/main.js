const app = new Vue({
  data: {
    message: 'Hello World'
  },
  methods: {
    open() {
      console.log('open')
    }
  }
}).$mount('#app')
