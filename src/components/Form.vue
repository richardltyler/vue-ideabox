<template>
  <form class='bubble' @submit="submitIdea">
    <input
      type='text'
      name='idea'
      id='idea-input'
      placeholder='idea'
      v-model="idea"
      required
    />

    <button type='submit' id='submit-button'>Submit</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      idea: ''
    };
  },

  methods: {
    submitIdea(e) {
      e.preventDefault();

      const newIdea = {
        id: Date.now(),
        idea: this.idea
      }

      this.$emit('add-idea', newIdea);
      
      this.idea = '';
    }
  }
}
</script>

<style>
form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  height: 40px;
}

#idea-input {
  border: none;
  color: #2c3e50;
  border-radius: 3px;
  width: 400px;
}

#submit-button {
  border: none;
  color: white;
  background-color: #2c3e50;
  border-radius: 3px;
  width: 100px;
}
</style>