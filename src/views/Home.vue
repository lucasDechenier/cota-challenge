<template>
  <section class="d-flex flex-column align-center">
    <section class="centralize flex-grow bg-color full-width">
      <v-form ref="form" v-model="valid" class="d-flex col-md-9 mt-12 mb-2 gap-20-px">
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
    <section class="col-md-9 d-flex gap-8-px text-center flex-column mt-10 mb-10">
      <span class="title_1--semibold">DATA</span>
      <span class="mb-10 base--light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      <div class="d-flex">
        <div class="d-flex flex-column flex-grow mr-15 justify-center">
          <table-info :infos="dataInfo"></table-info>
        </div>
        <v-chart class="chart item2" :option="option" />
      </div>
    </section>
  </section>
</template>

<script>
import TableInfo from "../components/TableInfo.vue"

export default {
  name: "Home",
  components: {TableInfo},
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
          type: 'scroll',
          orient: 'vertical',
          left: '70%',
          top: 'center',
          itemWidth: 25,
          itemHeight: 25,
          itemGap: 25,
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '43%'],
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
            width: "80%",
            height: "120%"
          },
        ]
      }
    };
  },
  created(){
    /* Simula uma requisição a um serviço, quando o componente é criado, carrega as informações */
    this.load()
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
  }
};
</script>

<style scoped>
.chart {
  height: 300px;
  width: 450px;
}
.send-btn{
  border-width: 2px !important;
}
.bg-color{
  background-color: #00B8E2;
}
</style>
