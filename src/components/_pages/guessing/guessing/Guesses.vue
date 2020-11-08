<template>
  <section>
    <template v-if="guesses.length < 1">
      <h1 class="is-size-1">You currently don't have any guesses</h1>
      <div class="subtitle">Try guessing the first movie</div>
    </template>

    <div class="columns guessing__guesses">
      <transition-group
        v-for="guess in guesses"
        class="column is-3"
        tag="div"
        enter-active-class="animated fadeIn"
        :key="`${guess.id}-column`"
      >
        <guessed-card :guess="guess" :key="guess.id" />
      </transition-group>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mapGetters } from 'vuex';
import StoreName from '@/constants/store/StoreName';
import GameStoreGetters from '@/constants/store/game/GameStoreGetters';
import GuessedCard from '@/components/guessing/GuessedCard.vue';

export default defineComponent({
  components: {
    GuessedCard,
  },
  computed: {
    ...mapGetters(StoreName.Game, {
      guesses: GameStoreGetters.GET_MOVIE_GUESSINGS,
    }),
  },
});
</script>
