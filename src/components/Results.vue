<template>
  <p>Reaction Time - {{ score }}ms</p>
  <h4 class="rank">{{ rank }}</h4>
</template>

<script>
export default {
  props: ['score'],
  data: () => ({
    rank: null,
  }),
  mounted() {
    if (this.score < 250) {
      this.rank = 'Rapid Reflexes, even for ninjas!';
    } else if (this.score < 500) {
      this.rank = 'Ninja Reflexes';
    } else {
      this.rank = 'Snail Pace';
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
