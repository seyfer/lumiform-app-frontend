<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { VNode } from 'vue';
import Colors from '@/constants/styles/Colors';
import Game from '../../../types/backend/entities/Game';

export default defineComponent({
  name: 'GameResultsChartTransformer',
  props: {
    results: {
      type: Array as () => Game[],
      required: true,
    },
  },
  computed: {
    chartOptions(): object {
      return {
        legend: {
          display: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              }],
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      };
    },
    chartData(): object {
      return {
        labels: this.results.map((game: Game) => game.user.username),
        datasets: [
          {
            label: 'Data One',
            backgroundColor: Colors.Primary,
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: this.results.map((game: Game) => game.finalScore),
          },
        ],
      };
    },
  },
  render(): VNode {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default({
        chartOptions: this.chartOptions,
        chartData: this.chartData,
      }) as never;
    }

    throw new Error('Please, provide a default slot');
  },
});
</script>
