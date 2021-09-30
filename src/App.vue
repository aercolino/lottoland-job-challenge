<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ae-results></ae-results>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AeResults from './components/AeResults.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    AeResults
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
