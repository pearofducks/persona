<template>
  <textarea @change="checkForResize" :rows="r" :placeholder="ph"></textarea>
</template>

<script>
export default {
  name: 'multiline',
  props: {
    r: {
      type: Number,
      default: 1
    },
    ph: {
      type: String,
      required: true
    },
    isBullet: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkForResize() {
      this.$el.style.height = '0px'
      this.$el.style.height = this.$el.scrollHeight + 'px'
    }
  }
}
</script>
