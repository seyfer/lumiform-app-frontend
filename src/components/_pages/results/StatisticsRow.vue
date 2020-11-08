<template>
  <div class="columns">
    <div class="column">
      <base-statistics-card height="175px">
        <template #title="{ attrs }">
          <div v-bind="attrs"># Average Score</div>
        </template>
        <template #content="{ attrs }">
          <div v-text="averageScore" v-bind="attrs"/>
        </template>
        <template #description="{ attrs }">
          <div v-bind="attrs">Average score of the current results</div>
        </template>
      </base-statistics-card>
    </div>
    <div class="column">
      <base-statistics-card height="175px">
        <template #title="{ attrs }">
          <div v-bind="attrs"># Scores</div>
        </template>
        <template #content>
          <linear-chart
            class="results__chart__linear"
            :chart-data="chartData"
            :chart-options="chartOptions"
          />
        </template>
      </base-statistics-card>
    </div>
    <div class="column">
      <base-statistics-card height="175px">
        <template #title="{ attrs }">
          <div v-bind="attrs"># Users</div>
        </template>
        <template #content="{ attrs }">
          <div v-text="numberUniqueUsers.length" v-bind="attrs"/>
        </template>
        <template #description="{ attrs }">
          <div v-bind="attrs">Number of unique users in the table</div>
        </template>
      </base-statistics-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import BaseStatisticsCard from '@/components/statistics/BaseStatisticsCard.vue';
import Game from '@/types/backend/entities/Game';
import uniqueBy from 'lodash.uniqby';
import LinearChart from '../../charts/LinearChart.vue';

export default defineComponent({
  components: {
    BaseStatisticsCard,
    LinearChart,
  },
  props: {
    chartOptions: {
      type: Object,
      default: null,
    },
    chartData: {
      type: Object,
      default: null,
    },
    results: {
      type: Array as () => Game[],
      required: true,
    },
  },
  computed: {
    numberUniqueUsers(): Game[] {
      return uniqueBy(this.results, (game: Game) => game.user.id);
    },
    averageScore(): number {
      // eslint-disable-next-line max-len
      return this.results.reduce((previous, current) => current.finalScore + previous, 0) / this.results.length;
    },
  },
});
</script>
