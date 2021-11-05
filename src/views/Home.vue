<template>
  <section class="d-flex flex-column align-center">
    <section class="centralize flex-grow bg-color full-width">
      <v-form ref="form" v-model="valid" class="d-flex col-11 col-sm-7 col-md-11 col-xl-9 mt-12 mb-2 gap-20-px flex-grow" :class="smAndDown ?'flex-column mb-5 py-7' : ''">
        <v-text-field
          v-model="firstName"
          :rules="firstNameRules"
          flat
          height="55"
          solo
          label="First name"
        >
        </v-text-field>

        <v-text-field
          v-model="lastName"
          :rules="lastNameRules"
          flat
          height="55"
          solo
          label="Last name"
        >
        </v-text-field>

        <v-text-field
          v-model="participation"
          :rules="participationRules"
          flat
          height="55"
          solo
          label="Participation"
        >
        </v-text-field>
        <section class="d-flex">
          <v-btn
            @click="add"
            height="55"
            min-width="155"
            outlined
            color="white"
            class="send-btn title_2--semibold"
          >
            send
          </v-btn>
        </section>
      </v-form>
    </section>
    <section class="col-11 col-sm-7 col-md-11 col-xl-9 d-flex gap-8-px text-center flex-column mt-10 mb-10">
      <div class="d-flex flex-column">
        <div class="title_1--semibold mb-4">DATA</div>
        <div class=" base--light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      <div class="d-flex" :class="smAndDown ?'flex-column' : ''">
        <div class="d-flex flex-column flex-grow justify-center" :class="smAndDown ?'' : 'mr-15'">
          <table-info class="d-flex" :infos="dataInfo"></table-info>
        </div>
        <div :class="smAndDown ?'centralize' : ''">
          <v-chart ref="chart" :class="smAndDown ?'chart-sm teste' : 'chart'" :option="option" />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import TableInfo from "../components/TableInfo.vue"
import Breakpoints from '../mixins/Breakpoints.js'

export default {
  name: "Home",
  components: {TableInfo},
  mixins: [Breakpoints],
  data() {
    return {
      valid: false,
      firstNameRules:[
        v => !!v || 'First name is required',
      ],
      lastNameRules: [
        v => !!v || 'Last name is required',
      ],
      participationRules:[
        v => (!isNaN(parseFloat(v)) && isFinite(v) && !!v) || 'It must be a number'
      ],
      firstName: '',
      lastName: '',
      participation: null,
      option: {
        tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
        },
        legend: {
          textStyle: {
            overflow: 'break'
          },
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: "18%",
          bottom: 20,
          itemWidth: 35,
          itemHeight: 35,
          itemGap: 25,
        },
        series: [
          {
            type: 'pie',
            radius: ['35%', '70%'],
            center: ['40%', '50%'],
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
            data: [],
            width: "100%",
            height: "100%"
          },
        ]
      }
    };
  },
  created(){
    /* Simula uma requisição a um serviço, quando o componente é criado, carrega as informações */
    this.load()
  },
  mounted(){
    if(this.smAndDown){
      this.chartSmAndDown()
    }
  },
  computed: {
    dataInfo(){
      let info = []
      this.option.series[0].data.forEach(element => {
        let firstName = element.name.split(' ')[0]
        let lastName = element.name.split(' ')[1]
        info.push({
          firstName: firstName,
          lastName: lastName,
          value: `${element.value} %`,
        })
      })
      return info
    }
  },
  methods: {
    chartSmAndDown(){
      this.option.legend.itemWidth = 15
      this.option.legend.itemHeight = 15
      this.option.legend.itemGap = 15
      this.option.legend.right = 10
      this.option.legend.top = 30
      this.option.legend.orient = 'horizontal'
      this.option.series[0].center = ['50%', '50%']
    },
    chartSmAndUp(){
      this.option.legend.itemWidth = 35
      this.option.legend.itemHeight = 35
      this.option.legend.itemGap = 25
      this.option.legend.right = 10
      this.option.legend.top = "18%"
      this.option.legend.orient = 'vertical'
      this.option.series[0].center = ['40%', '50%']
    },
    load(){
      this.option.series[0].data = [
        { value: 5, name: 'Carlos Moura' },
        { value: 15, name: 'Fernanda Oliveira' },
        { value: 20, name: 'Hugo Silva' },
        { value: 20, name: 'Eliza Souza' },
        { value: 40, name: 'Anderson Santos' }
      ]
    },
    add(){
      this.$refs.form.validate()
      if(this.valid){
        let fullName = this.firstName + " " + this.lastName
        this.option.series[0].data.push({
          value: this.participation,
          name: fullName,
        })
        this.$refs.form.reset()
      }
    }
  },
  watch: {
    smAndDown: async function (val){
      if(val){
        await this.chartSmAndDown()
      }
      else{
        await this.chartSmAndUp()
      }
      this.$refs.chart.resize()
    }
  }
};
</script>

<style scoped>
.chart-sm{
  height: 400px;
  width: 300px;
}

.chart {
  height: 450px;
  width: 600px;
}

.send-btn{
  border-width: 2px !important;
}
.bg-color{
  background-color: #00B8E2;
}
</style>
