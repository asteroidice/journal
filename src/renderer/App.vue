<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">Journal</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right ali  gned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="#">Link</b-nav-item>

    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'my-project'
  }
</script>

<style>
  /* CSS */
</style>
