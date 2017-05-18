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

<style lang="sass">
li textarea
  margin-bottom: 0.2rem
textarea, input[type="text"]
  width: 100%
  resize: none
  border: none
  background-color: transparent
  color: #3d5065
  vertical-align: top
  &::-webkit-input-placeholder
    color: #a7b3c2
    font-style: italic
  &.white
    color: #fbfbfc
    &::-webkit-input-placeholder
      color: #eef1f5
</style>