<template>
  <main >
    <article class='card bubble' :key="idea.id" v-for="idea in ideas" >
      <Card :idea="idea"/>
    </article> 
  </main>
  
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Ideas',
  props: ['ideas'],
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
    /* background-color: #2c3e50; */
    /* margin-top: 1rem;
    margin-bottom: 1rem; */
    text-align: center;
    /* color: white; */
  }

</style>
