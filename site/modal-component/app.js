import Vue from 'vue'
import Modal from './Modal.vue'

const app = new Vue({
  el: '#app',
  components: { Modal },
  data: {
    message: 'Hello World'
  },
  methods: {
    open() {
      console.log('open')
    }
  }
})
