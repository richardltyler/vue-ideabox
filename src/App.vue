<template>
  <h1 class="app-title bubble">Sah Dude</h1>
  <Form @addIdea="addIdea"/>
  <Ideas :ideas="ideas" @del-Idea="deleteIdea" />
</template>

<script>
import Form from './components/Form.vue';
import Ideas from './components/Ideas.vue';
import apiCalls from './apiCalls.js';

export default { 
  name: 'App',
  components: {
    Form,
    Ideas
  },

  data() {
    return {
      ideas: []
    };
  },

  methods: {
    addIdea(newIdea) {
      apiCalls.addIdea(newIdea)
        .then(() => this.ideas = [...this.ideas, newIdea])
    },

    deleteIdea(ID) {
      apiCalls.deleteIdea(ID)
        .then(() => this.ideas = this.ideas.filter(idea => idea.id !== ID))
    },
  },

  created() {
    apiCalls.getIdeas()
      .then(ideas => this.ideas = ideas)
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
