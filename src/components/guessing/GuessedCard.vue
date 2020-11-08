<template>
  <div class="card guessed-card">
    <div class="card-image">
      <figure class="image">
        <img :src="guess.poster" :alt="guess.title" class="guessed-card__image">
      </figure>
    </div>
    <div class="card-content guessed-card__content">
      <div class="media has-text-centered is-block">
        <h1 class="is-size-5 subtitle guessed-card__score" v-text="guess.score"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import MovieGuessing from '@/types/helpers/MovieGuessing';

export default defineComponent({
  props: {
    guess: {
      type: Object as () => MovieGuessing,
      required: true,
    },
  },
});
</script>
