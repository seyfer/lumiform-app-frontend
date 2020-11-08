<template>
  <section>
    <h1 class="is-size-1">Guesszito</h1>
    <h2 class="subtitle">
      Guess the score of each movie and beat your opponents
    </h2>

    <b-button
      cypress="startGame"
      class="is-uppercase"
      type="is-text"
      tag="router-link"
      :to="{ name: 'credentials' }"
    >
      start a game
    </b-button>
  </section>
</template>
