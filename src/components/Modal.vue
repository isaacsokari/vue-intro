<template>
  <div v-show="showModal" class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === '' }">
      <slot></slot>
      <h3>This is after the default slot and before the named slot</h3>

      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['theme', 'showModal'],
  methods: {
    closeModal() {
      this.$emit('closemodal');
    },
  },
};
</script>

<style>
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

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}

.modal .actions a {
  color: #333;
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  /* margin: 10px; */
}

.modal.sale {
  background: crimson;
  color: white;
}

.modal.sale h1 {
  color: white;
}

.modal.sale .actions {
  color: white;
}

.modal.sale .actions a {
  color: white;
}
</style>
