<template>
  <div class="row">
    <h4 class="strength-gauge-title">{{ title }}</h4>
    <div class="strength-gauge">
      <input type="range" value="12" min="0" max="24"> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'strength-gauge',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
