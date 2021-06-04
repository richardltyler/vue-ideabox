# vue-ideabox1

## Overview
Vue-ideabox is a virtual playground that I'm using to brush up on Vue.js and learn to use Vue 3 and the Composition API. The app is based off of [Turing School of Software and Design's](https://turing.edu/) [*Ideabox* exercise](https://github.com/turingschool-examples/ideabox-react/tree/master/src) that is used to teach/learn React. The premise of the app is to log and display ideas and it is designed to add features over iterations.

### Iteration 1
- [x] Display all ideas from static data in the app's highest component's `state`

### Iteration 2
- [x] Add a `controlled form` component to add `ideas` 
  - the `ideas` should be added to the app's `state` and then automatically display on the DOM

### Iteration 3
- [x] Add a `delete` button to each `idea`
  - the `delete` button should update the app's `state` and then automatically remove the idea form the DOM

### Iteration 4
- [x] Refactor the app to display data from [Turing's IdeaBox API](https://github.com/turingschool-examples/ideabox-api)

### Iteration 5
- [ ] refactor to include the `description` property from the api
  - include an input field for it in the `Form` component
  - display the `descriptions`

### Iteration 6
- [ ] Build your own `Express` api for your ideas 
  - don't forget documentation!

## How to *Vue* (wink) the app

1. Follow the setup instructions for the [the ideabox api](https://github.com/turingschool-examples/ideabox-api)
2. Fork and clone this repo
3. cd into the directory
4. install dependencies with `npm install` 
5. run `npm run serve`
6. visit [localhost:8080](http://localhost:8080/) in your browser

## Additional Features
I will eventually be using this repo as a place to practice E2E testing using Cypress and learning other ways to test Vue.Js apps

## Future Iterations
I hope to start using Vue with Vuex and other state management tools 