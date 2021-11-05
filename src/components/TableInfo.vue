<template>
  <div class="d-flex flex-column base--light">
    <v-simple-table class="pa-0 ma-0">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="border pa-2"></th>
            <th class="border" :class="index == 2 ? 'text-center':'text-start'" v-for="(header, index) in headers" :key="index">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border" v-for="(info, index) in infos" :key="index + infos.length">
            <td class="border pa-2">{{index + 1}}</td>
            <td class="border" :class="index_item === 'value' ? 'text-center':'text-start'" v-for="(item, index_item) in info" :key="item + index_item + index">
              {{ item }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
  .border{
    border: 1px solid grey !important;
  }
</style>