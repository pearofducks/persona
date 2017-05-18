<template>
  <div id="app">
    <header>
      <h1><input class="white" type="text" placeholder="FULL NAME"></h1>
      <h2>Persona</h2>
    </header>
    <main>
      <article class="element image">
        <h3>Image</h3>
      </article>
      <article class="element stats">
        <div class="stats-block">
          <div class="row">
            <h4>Age</h4>
            <p>1-105</p>
          </div>
          <div class="row">
            <h4>Occupation</h4>
            <p>What they do for a living</p>
          </div>
          <div class="row">
            <h4>Marital Status</h4>
            <p>Single / Married / Other</p>
          </div>
          <div class="row">
            <h4>Location</h4>
            <p>Where they live</p>
          </div>
          <div class="row">
            <h4>Tier</h4>
            <p>Enthusiast / Prosumer / Pro</p>
          </div>
          <div class="row">
            <h4>Archetype</h4>
            <p>Character model</p>
          </div>
        </div>
      </article>
      <article class="element brands">
        <h3>Brands</h3>
      </article>
      <article class="element bio">
        <h3>Bio</h3>
        <textarea rows="2" placeholder="A short paragraph to describe the user journey. Should include some background leading up to a current use case."></textarea>
      </article>
      <article class="element goals">
        <h3>Goals</h3>
        <ul>
          <li><input class='inviso-input' placeholder="Goal 1" type="text"></li>
          <li><input class='inviso-input' placeholder="Goal 2" type="text"></li>
          <li><input class='inviso-input' placeholder="Goal 3" type="text"></li>
        </ul>
      </article>
      <article class="element needs">
        <h3>Needs</h3>
        <ul>
          <li><input class='inviso-input' placeholder="Need 1" type="text"></li>
          <li><input class='inviso-input' placeholder="Need 2" type="text"></li>
          <li><input class='inviso-input' placeholder="Need 3" type="text"></li>
        </ul>
      </article>
      <article class="element frustrations">
        <h3>Frustrations</h3>
        <ul>
          <li><input class='inviso-input' placeholder="Frustration 1" type="text"></li>
          <li><input class='inviso-input' placeholder="Frustration 2" type="text"></li>
          <li><input class='inviso-input' placeholder="Frustration 3" type="text"></li>
        </ul>
      </article>
      <article class="element technology">
        <h3>Technology</h3>
      </article>
      <article class="element motivations">
        <h3>Motivations</h3>
        <div class="row">
          <h4>Incentive</h4>
          <div class="slider">
            <input type="range" value="5" min="0" max="10"> 
          </div>
        </div>
        <div class="row">
          <h4>Fear</h4>
          <div class="slider">
            <input type="range" value="5" min="0" max="10"> 
          </div>
        </div>
        <div class="row">
          <h4>Achievement</h4>
          <div class="slider">
            <input type="range" value="5" min="0" max="10"> 
          </div>
        </div>
        <div class="row">
          <h4>Growth</h4>
          <div class="slider">
            <input type="range" value="5" min="0" max="10"> 
          </div>
        </div>
        <div class="row">
          <h4>Power</h4>
          <div class="slider">
            <input type="range" value="5" min="0" max="10"> 
          </div>
        </div>
        <div class="row">
          <h4>Social</h4>
          <div class="slider">
            <input type="range" value="5" min="0" max="10"> 
          </div>
        </div>
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
export default {
  name: 'app'
}
</script>

<style lang="sass">
#app

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

// onchange
// el.style.height = 0px
// el.style.height = el.scrollHeight
textarea
  width: 100%
  resize: none
textarea, input[type="text"]
  border: none
  background-color: transparent
  color: #3d5065
  &::-webkit-input-placeholder
    color: #a7b3c2
    font-style: italic
  &.white
    color: #fbfbfc
    &::-webkit-input-placeholder
      color: #fbfbfc
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

.personality
  display: flex
  flex-direction: column
  justify-content: space-between
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
.motivations
  display: flex
  flex-direction: column
  justify-content: space-between
  .row
    margin: 0.3rem 0
  h4
    flex: 1
    font-size: 1.2rem
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

.slider
  input
    width: 100%

.image-holder
  height: 240px

@media print
  #app
    width: 42cm
    height: 29.7cm
    display: flex
    flex-direction: column
    align-items: stretch
    justify-content: center
</style>
