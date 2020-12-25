<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    <h2>Click Me!</h2>
  </div>
</template>

<script>
export default {
  props: ['delay'],
  name: 'Block',
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },

    stopTimer() {
      clearInterval(this.timer);
      this.$emit('stopTimer', this.reactionTime);
    },
  },
  mounted() {
    console.log('block mounted');
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  updated() {
    console.log('block updated');
  },
  unmounted() {
    console.log('block unmounted');
  },
};
</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
