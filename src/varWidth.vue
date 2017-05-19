<template>
  <input @change='onChange' class="pill" type="text" placeholder="Adjective">
</template>
<script>
export default {
  name: 'var-width',
  mounted() {
    this.$el.style.width = '10rem'
  },
  methods: {
    onChange() {
      this.$el.style.width = (( this.$el.value.length + 1 ) * 9 ) + 'px'
    }
  }
}
</script>