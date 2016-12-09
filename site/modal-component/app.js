import Vue from 'vue'


const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World'
  },
  methods: {
    open() {
      console.log('open')
    }
  }
})
