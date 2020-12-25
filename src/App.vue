<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>

  <Block v-if="isPlaying" :delay="delay" @stopTimer="stop" />

  <Results v-if="showResults" :score="score" />
</template>

<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      showResults: false,
      score: 0,
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.showResults = false;
      this.delay = 2000 + Math.floor(Math.random() * 5001);
    },
    stop(time) {
      this.isPlaying = false;
      this.showResults = true;
      this.score = time;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app,
#modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
