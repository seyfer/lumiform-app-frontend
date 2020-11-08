<template>
  <div class="column">
    <div class="column">
      <h1 class="is-size-1">You have finished your game</h1>
      <div class="subtitle">
        You scored {{ activeGame.finalScore }} out of {{ gameConfiguration.NUMBER_STEPS }}
        ({{ getGamePercentage(activeGame.finalScore) }}%)
      </div>
      <div class="subtitle">
      </div>

      <b-button
        cypress="seeLeaderboardButton"
        :to="{ name: 'results' }"
        tag="router-link"
      >
        See the leaderboard
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mapGetters } from 'vuex';
import GameConfiguration from '@/constants/GameConfiguration';
import { getGamePercentage } from '@/services/game/GameResults';
import StoreName from '../../../../constants/store/StoreName';
import GameStoreGetters from '../../../../constants/store/game/GameStoreGetters';

export default defineComponent({
  computed: {
    ...mapGetters(StoreName.Game, {
      activeGame: GameStoreGetters.GET_ACTIVE_GAME,
    }),
  },
  data: () => ({
    gameConfiguration: Object.freeze(GameConfiguration),
    getGamePercentage: Object.freeze(getGamePercentage),
  }),
});
</script>
