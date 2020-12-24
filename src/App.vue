<template>
  <h1>My First Vue App</h1>
  <Modal
    :header="header"
    :text="text"
    theme="sale"
    :showModal="showModal"
    @closemodal="toggleModal"
  />
  <button @click="toggleModal">Show Modal</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      header: 'Modal Header',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias praesentium eaque doloremque quam cum aliquam nobis impedit, dolore laborum libero totam quod excepturi nisi expedita, dolor temporibus deleniti tempora.',
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
body {
  position: relative;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
