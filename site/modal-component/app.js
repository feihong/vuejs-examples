import Vue from 'vue'
import Modal from './Modal.vue'

const app = new Vue({
  el: '#app',
  components: { Modal },
  data: {
    port: '22311'
  },
  methods: {
    save(port) {
      console.log('Port:', port)
    }
  }
})
