<template>
  <div class="d-flex flex-column base--light">
    <v-row no-gutters class="d-flex line">
      <v-col cols="1" class="colum"></v-col>
      <v-col class="colum base--regular pa-2" :class="index == 2 ? 'text-center':'text-start'" v-for="(header, index) in headers" :key="index">
        {{ header }}
      </v-col>
    </v-row>
    <v-row no-gutters class="d-flex line-sub" v-for="(info, index) in infos" :key="index + infos.length">
      <v-col cols="1" class="colum pa-2">{{index + 1}}</v-col>
      <v-col class="colum pa-2" :class="index_item === 'value' ? 'text-center':'text-start'" v-for="(item, index_item) in info" :key="item + index_item + index">
        {{ item }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default{
  props: {
    infos: {type: Array, dafault: []},
    headers: { type: Array, default (){ return ['First name', 'Last name', 'Participation'] } },
  },
  data(){
    return {
    }
  }
}
</script>

<style scoped>
  .line-sub{
    border-bottom: 1px solid grey;
    border-left: 1px solid grey;
  }
  .line{
    border-bottom: 1px solid grey;
    border-left: 1px solid grey;
    border-top: 1px solid grey;
  }
  .colum{
    border-right: 1px solid grey;
  }
</style>