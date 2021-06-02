<template>
  <form class='bubble'>
    <input
      type='text'
      name='idea'
      id='idea-input'
      placeholder='idea'
    />

    <button id='submit-button'>Submit</button>
  </form>
</template>

<script>
export default {
  name: 'Form'
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