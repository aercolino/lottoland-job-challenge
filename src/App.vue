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
  },
  mounted() {
    this.$i18n.locale = 'en';
  }
}
</script>

<style>
@font-face {
  font-family: 'FF Daxline Pro';
  src: url('assets/normal-f6f025a08fc3ca87.woff2'),
       url('assets/normal-e08aa66c8eb034ec.woff2');
}

#app {
  font-family: 'FF Daxline Pro', Geneva, 'Trebuchet MS', Tahoma, Verdana, sans-serif;
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
