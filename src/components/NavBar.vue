<template>
  <div>
    <nav class="peak-nav-bar">
        there
      <router-link class="peak-menu-item" to="/">
        <font-awesome-icon icon="pencil-alt" />
      </router-link>
      <router-link class="peak-menu-item" to="/list">
        <font-awesome-icon icon="list" />
      </router-link>
      <router-link class="peak-menu-item" to="/email">
        <font-awesome-icon icon="envelope" />
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {}
};
</script>
