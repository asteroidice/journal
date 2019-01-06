<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">

  <!-- <b-navbar-toggle target="nav_collapse"></b-navbar-toggle> -->

  <router-link to="/" tag="b-navbar-brand">Journal</router-link>

  <!-- <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="ml-auto">
      <b-nav-item href="#">Link</b-nav-item>

    </b-navbar-nav>

  </b-collapse> -->
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
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  /* font-family: 'Merriweather', serif; */
  font-family: 'Indie Flower', cursive;
}
</style>
