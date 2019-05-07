<template>
  <div id="wrapper">
    <input
      id="title"
      class="input"
      v-model="title"
      placeholder="Today's Title"
    />
    <!-- <datepicker class="input" v-model="date" placeholder="Select Date"></datepicker> -->
    <div date="date" class="input">
      {{
        date.toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }}
    </div>
    <textarea
      id="main"
      class="input"
      v-model="body"
      autofocus
      placeholder="What happened today?"
    ></textarea>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'landing-page',
  components: {
    Datepicker
  },
  computed: {
    entry() {
      const entryId = this.$route.params.id
      // TODO: Probably not a bad idea to move this to a getter.
      const entry = this.$store.state.Entries[entryId]
      this.title = entry.title
      return entry
    }
  },
  data() {
    return {
      body: '',
      title: '',
      date: Date.now()
    }
  },
  beforeMount() {
    const { title, body, date } = this.entry
    this.title = title
    this.body = body
    this.date = new Date(date)
  }
}
</script>

<style>
/*@import url('https://fonts.googleapis.com/css?family=Merriweather:700'); */
#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  width: 100vw;
  flex: 1 1 auto;
  padding: 30px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.input {
  border: 0;
  outline: none;
  background-color: transparent;
  width: 100%;
  padding-bottom: 10px;
}

/* Specific elements. */
#main {
  top: 0;
  height: 100%;
  resize: none;
  font-size: 1.7em;
  flex: 1 1 auto;
  overflow-y: auto;
}
#title {
  font-size: 40px;
  color: black;
  flex: 0 0 auto;
}
</style>
