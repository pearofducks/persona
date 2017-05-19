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
