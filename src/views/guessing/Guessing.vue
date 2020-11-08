<template>
  <section class="guessing" v-if="activeMovie">
    <finished-game v-if="activeGame" />

    <div class="columns is-vcentered" v-if="!loaders.creatingGame && activeGame === null">
      <div class="column is-3">
        <b-image
          class="mb-4 guessing__image"
          :alt="activeMovie.title"
          :src="activeMovie.poster"
        />

        <validation-observer ref="validator">
          <b-input-with-validation
            v-model.number="guessingScore"
            cypress="guessing"
            placeholder="Guess IMDB score"
            rules="required|between:1,5"
            name="IMDB Score"
            :custom-messages="{ between: 'Provide a value between 1 and 5' }"
            @keydown.enter.native="onAddNewMovieGuessingClick"
          />
        </validation-observer>

        <b-button
          cypress="guessButton"
          type="is-text"
          :loading="loaders.creatingGame"
          @click="onAddNewMovieGuessingClick"
        >
          Guess
        </b-button>
      </div>
      <div class="column">
        <guesses />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import GameLogic from '@/services/composition/game/GameLogic';
import { ValidationObserver } from 'vee-validate';
import BInputWithValidation from '@/components/_buefy/BInputWithValidation.vue';
import { mapGetters, mapMutations } from 'vuex';
import StoreName from '@/constants/store/StoreName';
import GameStoreMutations from '@/constants/store/game/GameStoreMutations';
import Guesses from '@/components/_pages/guessing/guessing/Guesses.vue';
import GameStoreGetters from '@/constants/store/game/GameStoreGetters';
import GameConfiguration from '@/constants/GameConfiguration';
import FinishedGame from '@/components/_pages/guessing/guessing/FinishedGame.vue';
import router from '@/router';

export default defineComponent({
  components: {
    ValidationObserver,
    BInputWithValidation,
    Guesses,
    FinishedGame,
  },
  setup() {
    const {
      originalMovies,
      activeTerm,
      currentStep,
      activeMovie,
      guessingScore,
      moviesGuessed,
      addNewMovieGuessing,
      finishGame,
    } = GameLogic();

    if (originalMovies.value.length < 1) {
      router.push({ name: 'credentials' });
    }

    return {
      originalMovies,
      activeTerm,
      currentStep,
      activeMovie,
      guessingScore,
      moviesGuessed,
      addNewMovieGuessing,
      finishGame,
    };
  },
  computed: {
    ...mapGetters(StoreName.Game, {
      activeUser: GameStoreGetters.GET_ACTIVE_USER,
      activeGame: GameStoreGetters.GET_ACTIVE_GAME,
    }),
  },
  data: () => ({
    loaders: {
      creatingGame: false,
    },
  }),
  methods: {
    ...mapMutations(StoreName.Game, [
      GameStoreMutations.SET_MOVIE_GUESSINGS,
      GameStoreMutations.SET_ACTIVE_GAME,
    ]),
    async onAddNewMovieGuessingClick() {
      const validator = (this.$refs.validator as InstanceType<typeof ValidationObserver>);
      const isValid = await validator.validate();

      if (!isValid) return;

      this.addNewMovieGuessing(this.activeMovie, this.guessingScore!);
      this[GameStoreMutations.SET_MOVIE_GUESSINGS](this.moviesGuessed.list);
      this.$nextTick(() => validator.reset());

      if (this.currentStep >= GameConfiguration.NUMBER_STEPS) this.completeGame();
    },
    async completeGame() {
      try {
        this.loaders.creatingGame = true;
        await this.finishGame(
          this.moviesGuessed.list,
          this.activeTerm,
          this.activeUser,
        );
        this.loaders.creatingGame = false;
      } catch (e) {
        this.loaders.creatingGame = false;
      }
    },
  },
  created() {
    this[GameStoreMutations.SET_MOVIE_GUESSINGS]([]);
  },
  destroyed() {
    this[GameStoreMutations.SET_ACTIVE_GAME](null);
  },
});
</script>
