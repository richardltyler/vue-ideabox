# vue-ideabox1

## Overview
Vue-ideabox is a virtual playground that I'm using to brush up on Vue.js and learn to use Vue 3 and the Composition API. The app is based off of [Turing School of Software and Design's](https://turing.edu/) [*Ideabox* exercise](https://github.com/turingschool-examples/ideabox-react/tree/master/src) that is used to teach/learn React. The premise of the app is to log and display ideas and it is designed to add features over iterations.

### Iteration 1
- [x] Display all ideas from static data in the app's highest component's `state`

### Iteration 2
- [ ] Add a `controlled form` component to add `ideas` 
  - the `ideas` should be added to the app's `state` and then automatically display on the DOM

### Iteration 3
- [ ] Add a `delete` button to each `idea`
  - the `delete` button should update the app's `state` and then automatically remove the idea form the DOM

### Iteration 4
- [ ] Refactor the app to display data from [Turing's IdeaBox API](https://github.com/turingschool-examples/ideabox-api)

## How to *Vue* (wink) the app

1. Fork and clone this repo
2. cd into the directory
3. install dependencies with `npm install` 
4. run `npm run serve`
5. visit [localhost:8080](http://localhost:8080/) in your browser

## Additional Features
I will eventually be using this repo as a place to practice E2E testing using Cypress and learning other ways to test Vue.Js apps

## Future Iterations
I hope to start using Vue with Vuex and other state management tools 