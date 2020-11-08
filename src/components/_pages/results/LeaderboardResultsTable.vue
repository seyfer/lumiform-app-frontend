<template>
  <section>
    <b-table
      class="elevation-1 results__table"
      :data="games"
      :loading="loading"
      @sort="onSortUpdate"
    >
      <b-table-column label="User" width="40" v-slot="{ row }">
        {{ row.user.username }}
      </b-table-column>

      <b-table-column label="Finished at" width="40" v-slot="{ row }">
        {{ formatDate(row.createdAt) }}
      </b-table-column>

      <b-table-column label="Term" width="40" v-slot="{ row }">
        {{ row.term.term }}
      </b-table-column>

      <b-table-column
        v-slot="{ row }"
        sortable
        field="final_score"
        label="Score"
        width="40"
      >
        {{ row.finalScore }}
      </b-table-column>
    </b-table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { format, parseISO } from 'date-fns';
import DefaultDatesDisplay from '@/constants/dates/DefaultDatesDisplay';
import { TableSortingDirection } from '@/types/buefy/components/Table';
import { BuildSortingName } from '@/services/helpers/string/BuildSortingName';
import Game from '../../../types/backend/entities/Game';

export default defineComponent({
  name: 'LeaderboardResultsTable',
  props: {
    games: {
      type: Array as () => Game[],
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    sort: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    formatDate(date: string) {
      return format(parseISO(date), DefaultDatesDisplay.defaultDisplayFNS);
    },
    onSortUpdate(sort: string, direction: TableSortingDirection) {
      this.$emit('update:sort', BuildSortingName(sort, direction));
    },
  },
});
</script>
