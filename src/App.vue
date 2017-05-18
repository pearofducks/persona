<template>
  <div id="app">
    <header>
      <h1>FULL NAME</h1>
      <h2>Persona</h2>
    </header>
    <main>
      <article class="element image">
        <h3>Image</h3>
      </article>
      <article class="element stats">
        <h3>Stats</h3>
      </article>
      <article class="element brands">
        <h3>Brands</h3>
      </article>
      <article class="element bio">
        <h3>Bio</h3>
        <p>A short paragraph to describe the user journey. Should include some background leading up to a current use case.</p>
      </article>
      <article class="element goals">
        <h3>Goals</h3>
        <ul>
          <li>Goal 1</li>
          <li>Goal 2</li>
          <li>Goal 3</li>
        </ul>
      </article>
      <article class="element needs">
        <h3>Needs</h3>
        <ul>
          <li>Need 1</li>
          <li>Need 2</li>
          <li>Need 3</li>
        </ul>
      </article>
      <article class="element frustrations">
        <h3>Frustrations</h3>
        <ul>
          <li>Frustration 1</li>
          <li>Frustration 2</li>
          <li>Frustration 3</li>
        </ul>
      </article>
      <article class="element technology">
        <h3>Technology</h3>
      </article>
      <article class="element motivations">
        <h3>Motivations</h3>
      </article>
      <article class="element personality">
        <h3>Personality</h3>
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
  // width: 42cm
  // height: 29.7cm

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
  grid-template-columns: 1fr 1.5fr 1.5fr
  grid-auto-rows: minmax(100px, auto)

section.column

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
