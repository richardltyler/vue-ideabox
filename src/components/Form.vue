<template>
  <form class='bubble' @submit="submitIdea">
    <input
      type='text'
      name='title'
      id='title'
      class='input'
      placeholder='title'
      v-model="idea.title"
      required
    />

    <input
      type='text'
      name='description'
      id='description'
      class='input'
      placeholder='description'
      v-model="idea.description"
      required
    />

    <button type='submit' id='submit-button'>SUBMIT</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      idea: {
        title: '',
        description: ''
      }
    };
  },

  methods: {
    submitIdea(e) {
      e.preventDefault();

      const newIdea = {
        id: Date.now(),
        ...this.idea
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

.input {
  border: none;
  color: #2c3e50;
  border-radius: 3px;
}

#title {
  width: 150px;
}

#description {
  width: 200px;
}

#submit-button {
  border: none;
  color: white;
  background-color: #2c3e50;
  border-radius: 3px;
  width: 100px;
}

@media screen and (max-width: 510px) {
  form {
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
  }

  #title {
    width: 200px;
  }

  #description {
    height: 2rem;
  }

  #submit-button {
    width: 200px;
    height: 2rem;
    /* margin-top: 2rem; */
  }
}
</style>