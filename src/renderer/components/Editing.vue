<template>
  <div id="wrapper">
    <input id="title" class="input" v-model="title" placeholder="Today's Title" />
    <!-- <datepicker class="input" v-model="date" placeholder="Select Date"></datepicker> -->
    <div class="input">{{date.toLocaleDateString('en-us', {'year': 'numeric', 'month': 'long', 'day': 'numeric'})}}</div>
    <textarea id="main" class="input" v-model="inputText" autofocus placeholder="What happened today?"></textarea>

  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'landing-page',
  components: {
    Datepicker
  },
  data: () => {
    return {
      inputText: '',
      title: '',
      date: new Date(Date.now())
    }
  }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css?family=Merriweather:700'); */
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
