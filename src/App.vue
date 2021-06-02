<template>
  <h1>Sah Dude</h1>
  <Ideas :ideas="ideas" />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Ideas from './components/Ideas.vue';

export default {
  name: 'App',
  components: {
    Ideas
  },

  data() {
    return {
      ideas: [
        {idea: 'Lights in clear drums', id: 1},
        {idea: 'Hardware same color as cymbals', id: 2},
        {idea: 'Translucent color front kick head', id: 3}
      ]
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  margin: 1rem;
}

</style>
