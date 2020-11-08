<template>
  <section>
    <h1 class="is-size-2 mb-3">Provide a term related to the title of the movie</h1>

    <validation-observer ref="validator">
      <b-input-with-validation
        v-model="newTerm.term"
        cypress="term"
        class="mt-2"
        placeholder="Term"
        rules="required"
        name="Term"
        @keydown.enter.native="onCreateTerm"
      />
    </validation-observer>

    <b-button
      class="is-uppercase"
      cypress="createTerm"
      type="is-text"
      :loading="loaders.creatingTerm"
      @click="onCreateTerm"
    >
      play
    </b-button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { ValidationObserver } from 'vee-validate';
import BInputWithValidation from '@/components/_buefy/BInputWithValidation.vue';
import CreateTerm from '@/services/composition/term/CreateTerm';

export default defineComponent({
  components: {
    ValidationObserver,
    BInputWithValidation,
  },
  setup() {
    const { newTerm, createNewTerm } = CreateTerm();

    return {
      newTerm,
      createNewTerm,
    };
  },
  data: () => ({
    loaders: {
      creatingTerm: false,
    },
  }),
  methods: {
    async onCreateTerm() {
      const isValid = (
        await (this.$refs.validator as InstanceType<typeof ValidationObserver>).validate()
      );

      if (!isValid) return;

      try {
        this.loaders.creatingTerm = true;
        await this.createNewTerm();
        this.loaders.creatingTerm = false;
        await this.$router.push({ name: 'guessing' });
      } catch (e) {
        this.loaders.creatingTerm = false;
      }
    },
  },
});
</script>
