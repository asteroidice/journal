<template>
  <div id="wrapper">
    <h1>Your Journal</h1>

    <b-card-group columns>
      <router-link v-for="page in pages" :to="`/edit/${page.id}`" tag="a">
        <b-card  :title="page.title"
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
                <p class="card-text">
          {{page.body}}
                </p>
          </b-card>
      </router-link>
    </b-card-group>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { MOCK_PAGES } from '../assets/MOCK_DATA.js'
export default {
  name: 'landing-page',
  components: {
    Datepicker
  },
  data: () => {
    return {
      pages: MOCK_PAGES
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

.input {
  border: 0;
  outline: none;
  background-color: transparent;
  width: 100%;
  padding-bottom: 10px;
}
#main {
  top: 0;
  height: 100%;
  resize: none;
  font-size: 1.7em;
}
#title {
  font-size: 40px;
  color: black;
}
</style>
