<template>
  <div class="image-wrapper" :class="{ 'no-image': !hasImage }">
  </div>
</template>

<script>
export default {
  name: 'imageUpload',
  data() {
    return {
      hasImage: false
    }
  },
  methods: {
    onDragOver(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    onDrop(e) {
      e.stopPropagation()
      e.preventDefault()
      let f = e.dataTransfer.files[0]
      let reader = new FileReader()
      reader.onload = (e) => {
        this.$el.style.backgroundImage = `url(${e.target.result})`
        this.hasImage = true
      }
      reader.readAsDataURL(f)
    }
  },
  mounted() {
    this.$el.addEventListener('dragover', this.onDragOver, false)
    this.$el.addEventListener('drop', this.onDrop, false)
  }
}
</script>

<style lang="sass">
.image-wrapper
  flex: 3
  background-color: #fbfbfc
  height: 100%
  width: 100%
  background-size: contain
  background-repeat: no-repeat
  &.no-image
    display: flex
    align-items: center
    justify-content: center
    border: 2px dashed #dadfe4
    &:before
      content: "DROP IMAGE HERE"
      font-size: 1.6rem
      font-weight: 600
      color: #dadfe4
</style>