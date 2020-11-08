<template>
  <div class="card card-statistics" :style="styles">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <slot name="title" :attrs="{ class: 'card-statistics__title' }" />
        </div>
      </div>

      <slot name="content" :attrs="{ class: 'card-statistics__content' }" />

      <slot name="description" :attrs="{ class: 'card-statistics__description' }" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    height: {
      type: String,
    },
  },
  computed: {
    styles(): object {
      return {
        ...this.$attrs,
        height: this.height,
      };
    },
  },
});
</script>
