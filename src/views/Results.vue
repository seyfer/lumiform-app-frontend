<template>
  <section class="results">
    <listable-items :service="service" :config="config">
      <template #items="{ items, loading }">
        <game-results-chart-transformer :results="items">
          <template #default="props">
           <statistics-row :results="items" v-bind="props"/>
          </template>
        </game-results-chart-transformer>
        <leaderboard-results-table
          :games="items"
          :loading="loading"
          :sort.sync="sort"
        />
      </template>

      <template #pagination="{ onPageChange, pageMeta, loading }">
        <div class="columns is-mobile mt-4">
          <div class="column">
            <b-button
              class="is-pulled-left"
              cypress="lastPageButton"
              rounded
              :loading="loading"
              :disabled="pageMeta.currentPage === 1"
              @click="onPageChange(pageMeta.currentPage - 1)"
            >
              &lt;
            </b-button>
          </div>
          <div class="column">
            <b-button
              class="is-pulled-right"
              cypress="nextPageButton"
              rounded
              :loading="loading"
              :disabled="pageMeta.currentPage === pageMeta.lastPage"
              @click="onPageChange(pageMeta.currentPage + 1)"
            >
              &gt;
            </b-button>
          </div>
        </div>
      </template>
    </listable-items>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import LeaderboardResultsTable from '@/components/_pages/results/LeaderboardResultsTable.vue';
import { AxiosRequestConfig } from '@/types/backend/Axios';
import GameResultsChartTransformer from '@/components/charts/transformers/GameResultsChartTransformer.vue';
import StatisticsRow from '@/components/_pages/results/StatisticsRow.vue';
import ListableItems from '../components/ListableItems.vue';
import GameApiService from '../services/api/GameApiService';

export default defineComponent({
  components: {
    StatisticsRow,
    ListableItems,
    LeaderboardResultsTable,
    GameResultsChartTransformer,
  },
  computed: {
    config(): AxiosRequestConfig {
      return {
        params: {
          sort: [this.sort],
        },
      };
    },
  },
  data: () => ({
    service: Object.freeze(GameApiService),
    sort: 'final_score',
  }),
});
</script>
