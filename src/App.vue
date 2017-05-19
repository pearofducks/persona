<template>
  <div id="app">
    <header>
      <h1><input class="white" type="text" placeholder="FULL NAME"></h1>
      <h2>Persona</h2>
    </header>
    <main>
      <article class="element image">
        <image-upload></image-upload>
        <multiline :r="2" ph="Persona quote - should capture the essence of this persona's personality"></multiline>
      </article>
      <article class="element stats">
        <div class="stats-block">
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
      <article class="element technology">
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
      <article class="element motivations">
        <h3>Motivations</h3>
        <strength-gauge title="Incentive"></strength-gauge>
        <strength-gauge title="Fear"></strength-gauge>
        <strength-gauge title="Achievement"></strength-gauge>
        <strength-gauge title="Growth"></strength-gauge>
        <strength-gauge title="Power"></strength-gauge>
        <strength-gauge title="Social"></strength-gauge>
      </article>
      <article class="element personality">
        <h3>Personality</h3>
        <div class="vertical row">
          <div class="spread row">
            <h4>Introvert</h4>
            <h4>Extrovert</h4>
          </div>
          <div class="slider">
            <input type="range" value="5" min="0" max="10"> 
          </div>
        </div>
        <div class="vertical row">
          <div class="spread row">
            <h4>Intuition</h4>
            <h4>Sensing</h4>
          </div>
          <div class="slider">
            <input type="range" value="5" min="0" max="10"> 
          </div>
        </div>
        <div class="vertical row">
          <div class="spread row">
            <h4>Feeling</h4>
            <h4>Thinking</h4>
          </div>
          <div class="slider">
            <input type="range" value="5" min="0" max="10"> 
          </div>
        </div>
        <div class="vertical row">
          <div class="spread row">
            <h4>Judging</h4>
            <h4>Perceiving</h4>
          </div>
          <div class="slider">
            <input type="range" value="5" min="0" max="10"> 
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
import multiline from './multiline.vue'
import imageUpload from './imageUpload.vue'
import strengthGauge from './strengthGauge.vue'
export default {
  name: 'app',
  components: { multiline, imageUpload, strengthGauge }
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

.row
  display: flex
  align-items: center

// .image
//   display: flex
//   flex-direction: column

.personality, .image
  display: flex
  flex-direction: column
  justify-content: space-between
  > textarea
    flex: 1
    padding-top: 1.2rem
  .row
    margin: 0.3rem 0
  .vertical.row
    flex-direction: column
    align-items: stretch
  .spread.row
    justify-content: space-between
  h4
    font-size: 1.2rem
    margin-bottom: 0.6rem
  .slider
    flex: 2
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

.motivations, .technology
  display: flex
  flex-direction: column
  justify-content: space-between
  .row
    flex: 1
    margin: 0.3rem 0
    .row ~ .row
      padding-left: 2.4rem
      margin-left: 2.4rem
  h4
    flex: 1
    font-size: 1.2rem
    margin-bottom: 0.6rem
  .slider
    flex: 2
    input[type='range']
      -webkit-appearance: none;
      position: relative;
      overflow: hidden;
      height: 1.2rem;
      width: 100%;
      cursor: pointer;
      border-radius: 0;
      &::-webkit-slider-runnable-track
        background: #dadfe4
      &::-webkit-slider-thumb
        -webkit-appearance: none
        width: 0px
        height: 0px
        background: #fff
        box-shadow: -100vw 0 0 100vw #a7b3c2
        border: 1.2rem solid #a7b3c2

.stats-block
  h4, p
    font-size: 1.2rem
  p
    flex: 2
  h4
    color: #228ba8
    flex: 1
    margin-right: 0.6rem
.tabular.row
  margin-bottom: 1.2rem
  input[type="text"]
    flex: 2
  h4
    margin-bottom: 0

.slider
  input
    width: 100%

@media print
  #app
    width: 42cm
    height: 29.7cm
    display: flex
    flex-direction: column
    align-items: stretch
    justify-content: center
</style>
