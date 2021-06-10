<template>
  <main>
    <article class='card bubble' v-for="(idea, index) in ideas" v-bind:key="index">
      <Card :idea="idea" @del-idea="$emit('del-idea', idea.id)" />
    </article> 
  </main>
  
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Ideas',
  props: {
    ideas: Array
  },
  components: {
    Card
  }
}
</script>

<style scoped>
main {
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 200px;
  grid-gap: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* font-size: 0.7rem; */
  padding: 0.5rem;
}

/* .card > * {
  margin: 0;
} */
</style>
