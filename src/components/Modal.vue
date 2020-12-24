<template>
  <div v-show="showModal" class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === '' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'theme', 'showModal'],
  methods: {
    closeModal() {
      this.$emit('closemodal')
    }
  }
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: auto auto;
  background: white;
  border-radius: 10px;
  /* z-index: 100; */
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
}

.modal h1 {
  color: #03cfb4;
}

.modal.sale {
  background: crimson;
  color: white;
}

.modal.sale h1 {
  color: white;
}

</style>
