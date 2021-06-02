<template>
  <h2>{{ idea.idea }}</h2>
  <button @click="$emit('del-idea', idea.id)">🗑</button>
</template>

<script>
export default {
  name: 'Card',
  props: ['idea'],
  emits: ['del-idea']
}
</script>

<style scoped>
</style>
