import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import ECharts from 'vue-echarts'
import "echarts"
Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
