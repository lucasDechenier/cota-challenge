<template>
  <section class="bg-color">
    <section class="d-flex col-md-12">
      <v-text-field
        flat
        height="55"
        solo
        label="First name"
      >
      </v-text-field>

      <v-text-field
        flat
        height="55"
        solo
        label="Last name"
      >
      </v-text-field>

      <v-text-field
        flat
        height="55"
        solo
        label="Participation"
      >
      </v-text-field>
      <section class="d-flex">
        <v-btn
          height="55"
          min-width="155"
          outlined
          color="white"
          class="send-btn"
        >
          send
        </v-btn>
      </section>
    </section>
    <v-chart class="chart" :option="option" />
  </section>
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
.send-btn{
  border-width: 2px !important;
}
.bg-color{
  background-color: #00B8E2;
}
</style>
