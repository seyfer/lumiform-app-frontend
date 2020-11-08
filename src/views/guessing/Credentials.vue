<template>
  <section>
    <div class="column">
      <div class="column is-6 is-offset-3">
        <component :current-step.sync="currentStep" :is="`step-${currentStep}`" />
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Step1 from '@/components/_pages/guessing/credentials/Step1.vue';
import Step2 from '@/components/_pages/guessing/credentials/Step2.vue';
import StoreName from '@/constants/store/StoreName';
import GameStoreGetters from '@/constants/store/game/GameStoreGetters';
import { mapGetters } from 'vuex';

export default defineComponent({
  components: {
    Step1,
    Step2,
  },
  data: () => ({
    currentStep: 1,
  }),
  created() {
    // If the user already have an account we just need to ask for the term
    if (this.activeUser !== null) this.currentStep = 2;
  },
  computed: {
    ...mapGetters(StoreName.Game, {
      activeUser: GameStoreGetters.GET_ACTIVE_USER,
    }),
  },
});
</script>
