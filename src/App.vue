<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/ll-logo-green-14c4a0ddaf8c5179.svg">
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
    // this.$i18n.locale = 'de';
    // this.$i18n.locale = 'sv-SE';
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
  margin-top: 20px;
}

.logo {
  width: 288px;
}
</style>
