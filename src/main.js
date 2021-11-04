import './styles/index.scss'

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import ECharts from 'vue-echarts'
import "echarts"
import { BootstrapVue} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
