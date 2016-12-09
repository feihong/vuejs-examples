<template lang='pug'>
.modal.fade(:id='id')
  .modal-dialog
    .modal-content
      .modal-header
        button.close(data-dismiss='modal')
          span &times;
        h4.modal-title Edit local port
      .modal-body
        .form-group
          input.form-control(:value='port', ref='portInput')
      .modal-footer
        button.btn.btn-default(data-dismiss='modal') Cancel
        button.btn.btn-primary Save
</template>

<script>
export default {
  props: {
    id: {
      // type: 'String',
      required: true
    }
  },
  data() {
    return {port: '15600'}
  },
  mounted() {
    $(this.$el).on('shown.bs.modal', () => {
      let portInput = this.$refs.portInput
      portInput.select()
      portInput.focus()
    })
  }
}
</script>
