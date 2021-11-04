<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      option: {
        tooltip: {
        trigger: 'item',
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: '26%',
          top: 'center',
          itemWidth: 40,
          itemHeight: 40,
          itemGap: 25,
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 3
            },
            label: {
              show: false,
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
>>>>>>> Stashed changes
