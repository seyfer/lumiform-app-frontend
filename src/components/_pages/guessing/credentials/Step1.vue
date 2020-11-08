<template>
  <section>
    <h1 class="is-size-2 mb-3">Let's start with your username</h1>

    <validation-observer ref="validator">
      <b-input-with-validation
        v-model="newUser.username"
        cypress="username"
        placeholder="Username"
        rules="required"
        name="Username"
        @keydown.enter.native="onCreateUser"
      />
    </validation-observer>

    <b-button
      class="is-uppercase"
      type="is-text"
      cypress="chooseMovie"
      :loading="loaders.creatingUser"
      @click="onCreateUser"
    >
      choose movie term
    </b-button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import BInputWithValidation from '@/components/_buefy/BInputWithValidation.vue';
import CreateUser from '@/services/composition/user/CreateUser';
import { ValidationObserver } from 'vee-validate';

export default defineComponent({
  components: {
    ValidationObserver,
    BInputWithValidation,
  },
  setup() {
    const { createUser, newUser } = CreateUser();

    return {
      newUser,
      createUser,
    };
  },
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    loaders: {
      creatingUser: false,
    },
  }),
  methods: {
    async onCreateUser() {
      const isValid = (
        await (this.$refs.validator as InstanceType<typeof ValidationObserver>).validate()
      );

      if (!isValid) return;

      try {
        this.loaders.creatingUser = true;
        await this.createUser();
        this.loaders.creatingUser = false;
        this.$emit('update:current-step', this.currentStep + 1);
      } catch (e) {
        this.loaders.creatingUser = false;
      }
    },
  },
});
</script>
