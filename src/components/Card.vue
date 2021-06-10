<template>
  <h2>{{ idea.title }}</h2>
  <p>{{ idea.description }}</p>
  <button class='delete-button' @click="$emit('del-idea', idea.id)">🗑</button>
</template>

<script>
export default {
  name: 'Card',
  props: {
    idea: Object
  },
  emits: ['del-idea']
}
</script>

<style >
.delete-button {
  align-self: flex-end;
  border: none;
  background: rgb(0, 0, 0, 0);
  font-size: 1.5rem;
}

h2 {
  font-size: 1rem;
}

p {
  font-size: 0.8rem;
}
</style>
