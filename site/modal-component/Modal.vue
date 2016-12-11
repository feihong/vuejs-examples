<template lang='pug'>
.modal.fade(:id='id')
  .modal-dialog
    .modal-content
      .modal-header
        button.close(data-dismiss='modal')
          span &times;
        h4.modal-title Edit local port
      .modal-body
        form(@submit.prevent='submit')
          .form-group(:class="{'has-error': hasError}")
            input.form-control(v-model.trim.number='port', ref='portInput')
          p(class='text-danger', v-if='hasError') Port must be a number
      .modal-footer
        button.btn.btn-default(data-dismiss='modal') Cancel
        button.btn.btn-primary(@click='submit') Save
</template>

<script>
export default {
  props: {
    id: {required: true}
  },
  data() {
    return {port: 15600, hasError: false}
  },
  mounted() {
    $(this.$el).on('shown.bs.modal', () => {
      let portInput = this.$refs.portInput
      portInput.select()
      portInput.focus()
    })
  },
  methods: {
    submit() {
      this.hasError = false
      if (/^\d+$/.test(this.port)) {
        this.$emit('save', this.port)
        $(this.$el).modal('hide')
      } else {
        this.hasError = true
      }
    }
  }
}
</script>
