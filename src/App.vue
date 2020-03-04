<template>
  <div class="container-fluid" id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <nav class="peak-nav-bar">
        <a class="peak-menu-item">
            <i class="pencil"></i>
            <font-awesome-icon icon="pencil-alt" />
        </a>
        <a class="peak-menu-item">
            <font-awesome-icon icon="list" />
        </a>
        <a class="peak-menu-item">
            <font-awesome-icon icon="envelope" />
        </a>
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
