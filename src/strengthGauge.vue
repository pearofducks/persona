<template>
  <div class="row">
    <h4>{{ title }}</h4>
    <div class="slider">
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