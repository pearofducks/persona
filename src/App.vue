<template>
  <div id="app">
    <transition name="slide-down">
      <section class="options" v-if="showingMenu"><h2>sup dudes</h2></section>
    </transition>
    <header :class="{ 'menu': showingMenu }">
      <h1><input class="white" type="text" placeholder="FULL NAME"></h1>
      <div class="right" @click="toggleMenu">
        <svg id="menu-icon" viewBox="0 0 32 32" height="2.4rem" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
        </svg>   
        <svg id="user-icon" viewBox="0 0 32 32" height="2.4rem" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
        </svg>
        <h1>Persona</h1>
      </div>
    </header>
    <main :class="{ 'menu': showingMenu }">
      <article class="element image column">
        <image-upload></image-upload>
        <multiline :r="2" ph="Persona quote - should capture the essence of this persona's personality"></multiline>
      </article>
      <article class="element stats">
        <div class="tabular row">
          <h4>Age</h4>
          <input type="text" placeholder="1-105">
        </div>
        <div class="tabular row">
          <h4>Occupation</h4>
          <input type="text" placeholder="What they do for a living">
        </div>
        <div class="tabular row">
          <h4>Marital Status</h4>
          <input type="text" placeholder="Single / Married / Other">
        </div>
        <div class="tabular row">
          <h4>Location</h4>
          <input type="text" placeholder="Where they live">
        </div>
        <div class="tabular row">
          <h4>Tier</h4>
          <input type="text" placeholder="Enthusiast / Prosumer / Pro">
        </div>
        <div class="tabular row">
          <h4>Archetype</h4>
          <input type="text" placeholder="Character model">
        </div>
        <div class="row wrap">
          <pill></pill>
          <pill></pill>
          <pill></pill>
        </div>
      </article>
      <article class="element brands">
        <h3>Brands</h3>
        <multiline :r="2" ph="A collection of grayscale logos representing the user's favorite brands should go here."></multiline>
      </article>
      <article class="element bio">
        <h3>Bio</h3>
        <multiline :r="2" ph="A short paragraph to describe the user journey. Should include some background leading up to a current use case."></multiline>
      </article>
      <article class="element goals">
        <h3>Goals</h3>
        <ul>
          <li><multiline is-bullet ph="Goal 1"></multiline></li>
          <li><multiline is-bullet ph="Goal 2"></multiline></li>
          <li><multiline is-bullet ph="Goal 3"></multiline></li>
        </ul>
      </article>
      <article class="element needs">
        <h3>Needs</h3>
        <ul>
          <li><multiline ph="Need 1"></multiline></li>
          <li><multiline ph="Need 2"></multiline></li>
          <li><multiline ph="Need 3"></multiline></li>
        </ul>
      </article>
      <article class="element frustrations">
        <h3>Frustrations</h3>
        <ul>
          <li><multiline ph="Frustration 1"></multiline></li>
          <li><multiline ph="Frustration 2"></multiline></li>
          <li><multiline ph="Frustration 3"></multiline></li>
        </ul>
      </article>
      <article class="element technology column">
        <h3>Technology</h3>
        <div class="row">
          <strength-gauge title="IT & Internet"></strength-gauge>
          <strength-gauge title="Software"></strength-gauge>
        </div>
        <div class="row">
          <strength-gauge title="Mobile Apps"></strength-gauge>
          <strength-gauge title="Social Networks"></strength-gauge>
        </div>
      </article>
      <article class="element motivations column">
        <h3>Motivations</h3>
        <strength-gauge title="Incentive"></strength-gauge>
        <strength-gauge title="Fear"></strength-gauge>
        <strength-gauge title="Achievement"></strength-gauge>
        <strength-gauge title="Growth"></strength-gauge>
        <strength-gauge title="Power"></strength-gauge>
        <strength-gauge title="Social"></strength-gauge>
      </article>
      <article class="element personality column">
        <h3>Personality</h3>
        <balance-gauge left="Introvert" right="Extrovert"></balance-gauge>
        <balance-gauge left="Intuition" right="Sensing"></balance-gauge>
        <balance-gauge left="Feeling" right="Thinking"></balance-gauge>
        <balance-gauge left="Judging" right="Perceiving"></balance-gauge>
      </article>
    </main>
  </div>
</template>

<script>
import multiline from './multiline.vue'
import pill from './pill.vue'
import imageUpload from './imageUpload.vue'
import strengthGauge from './strengthGauge.vue'
import balanceGauge from './balanceGauge.vue'
export default {
  name: 'app',
  components: { multiline, imageUpload, strengthGauge, balanceGauge, pill },
  data() {
    return { showingMenu: false }
  },
  methods: {
    toggleMenu() {
      this.showingMenu = ! this.showingMenu
    }
  }
}
</script>

<style lang="sass" src="./style.sass"></style>
