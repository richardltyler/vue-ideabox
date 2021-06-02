<template>
  <h1 class="app-title bubble">Sah Dude</h1>
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
body { 
  margin: 0;
  background-color: #2c3e50;
  padding: 1rem;
}

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
  width: 100%;
}

.app-title {
  margin: 0;
  width: 100%;
  font-size: 50px;
}

.bubble {
  background-color: rgb(255, 255, 255, .8);
  border-radius: 10px;
  border: 3px solid #6E9887;
}
</style>
