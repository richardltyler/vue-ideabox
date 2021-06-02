<template>
  <main>
    <article class='card' :key="idea.id" v-for="idea in ideas" >
      <Card />
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

</style>
