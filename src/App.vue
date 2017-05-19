<template>
  <div id="app">
    <header>
      <h1><input class="white" type="text" placeholder="FULL NAME"></h1>
      <h2>Persona</h2>
    </header>
    <main>
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
      </article>
      <article class="element brands">
        <h3>Brands</h3>
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
import imageUpload from './imageUpload.vue'
import strengthGauge from './strengthGauge.vue'
import balanceGauge from './balanceGauge.vue'
export default {
  name: 'app',
  components: { multiline, imageUpload, strengthGauge, balanceGauge }
}
</script>

<style lang="sass">

ul
  list-style: disc outside
  li
    color: #dadfe4

header
  background-color: #228ba8
  color: #fbfbfc
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0.6rem 1.2rem
  > *
    margin: 0

main
  margin: 1.2rem
  display: grid
  grid-gap: 1.2rem
  grid-template-columns: minmax(160px, 1fr) minmax(240px, 1.5fr) minmax(240px, 1.5fr)
  grid-auto-rows: minmax(100px, auto)

article.element
  background-color: #fbfbfc
  border: 2px solid #dadfe4
  padding: 1.2rem
  &.image
    grid-column: 1
    grid-row: 1 / 3
  &.stats
    grid-column: 1
    grid-row: 3 / 5
  &.brands
    grid-column: 1
    grid-row: 5
  &.bio
    grid-column: 2
    grid-row: 1
  &.goals
    grid-column: 2
    grid-row: 2
  &.needs
    grid-column: 2
    grid-row: 3
  &.frustrations
    grid-column: 2
    grid-row: 4
  &.technology
    grid-column: 2 / 4
    grid-row: 5
  &.motivations
    grid-column: 3
    grid-row: 1 / 3
  &.personality
    grid-column: 3
    grid-row: 3 / 5
  h3
    color: #228ba8
  h4
    font-size: 1.2rem
    margin-bottom: 0.6rem

.column
  display: flex
  flex-direction: column
.row
  display: flex
  align-items: center
.1-3
  flex: 1
.2-3
  flex: 2

.personality, .image, .motivations, .technology
  justify-content: space-between

.personality, .image
  > textarea
    flex: 1
    padding-top: 1.2rem

.motivations, .technology
  .row
    flex: 1
    margin: 0.3rem 0
    .row ~ .row
      padding-left: 2.4rem
      margin-left: 2.4rem

.stats
  h4
    color: #228ba8
    flex: 1
    margin-right: 0.6rem
  input[type="text"]
    flex: 2
    margin-bottom: 0.6rem
  .row
    margin-bottom: 1.2rem

@media print
  #app
    width: 42cm
    height: 29.7cm
    display: flex
    flex-direction: column
    align-items: stretch
    justify-content: center
</style>
