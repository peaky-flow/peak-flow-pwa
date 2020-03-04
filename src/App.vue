<template>
  <div class="container-fluid" id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <nav class="navbar fixed-bottom navbar-light bg-light">
        <a class="navbar-brand" href="#">Fixed bottom</a>
    </nav>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
