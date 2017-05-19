<template>
  <div class="column">
    <div class="spread row">
      <h4>{{left}}</h4>
      <h4>{{right}}</h4>
    </div>
    <div class="slider">
      <input type="range" value="12" min="0" max="24"> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'balance-gauge',
  props: {
    left: {
      type: String,
      required: true
    },
    right: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="sass">
.column
  align-items: stretch
.spread.row
  justify-content: space-between
.slider
  margin: 0.3rem 0
  input[type='range']
    -webkit-appearance: none;
    position: relative;
    overflow: hidden;
    height: 1.2rem;
    width: 100%;
    cursor: pointer;
    border-radius: 1.2rem;
    &::-webkit-slider-runnable-track
      background: #dadfe4
    &::-webkit-slider-thumb
      -webkit-appearance: none
      width: 3.6rem
      height: 1.2rem
      background: #a7b3c2
      border-radius: 4.8rem
</style>