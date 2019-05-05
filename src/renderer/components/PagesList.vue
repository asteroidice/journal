<template>
  <div id="wrapper">
    <h1>Your Journal</h1>

    <b-card-group columns>
      <router-link
        v-for="page in entries"
        :to="`/edit/${page.id}`"
        tag="a"
        :key="page.id"
      >
        <b-card
          :title="page.title"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <p class="card-text">
            {{ page.body }}
          </p>
        </b-card>
      </router-link>
    </b-card-group>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

// TODO: Make this file fetch journal entries from Vuex. Using a getter.
// TOOD: Use a getEntryById getter to get a specific entry.
// TODO: Make a mutation update journal entries.
// TOOD: See how vue-electron uses createPersistedState middleware. (do you need to use nedb then?)

export default {
  name: 'landing-page',
  components: {
    Datepicker
  },
  computed: {
    entries() {
      return this.$store.state.Entries
    }
  }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css?family=Merriweather:700'); */
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

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  width: 100vw;
  flex: 1 1;
  padding: 30px;
}
</style>
