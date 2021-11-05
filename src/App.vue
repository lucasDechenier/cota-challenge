<template>
  <v-app>
    <div id="app">
      <home></home>
    </div>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
