<script>
import { Pie, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: Pie,
  mixins: [reactiveProp],
  props: {
    chartOptions: {
      type: Object,
      default: null,
    },
    chartData: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  },
};
</script>
