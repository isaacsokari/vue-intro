<template>
  <h1>My First Vue App</h1>
  <Modal theme="sale" :showModal="showModal" @closemodal="toggleModalOne">
    <h1>Modal Header</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio
      reprehenderit unde facilis suscipit autem, quibusdam quo itaque nesciunt
      dicta consequatur aliquam rerum et nam quas. Voluptas doloribus dolore
      deleniti?
    </p>

    <template v-slot:links>
      <a href="#">Link in a named slot</a>
    </template>
  </Modal>
  <button @click="toggleModalOne">Show Modal One</button>

  <Modal :showModal="showModalTwo" @closemodal="toggleModalTwo">
    <h1>{{ modalHeader }}</h1>
    <p>{{ modalText }}</p>
  </Modal>
  <button @click="toggleModalTwo">Show Modal Two</button>
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
      showModal: false,
      showModalTwo: false,
      modalHeader: 'Modal Two Header',
      modalText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias praesentium eaque doloremque quam cum aliquam nobis impedit, dolore laborum libero totam quod excepturi nisi expedita, dolor temporibus deleniti tempora.'
    };
  },
  methods: {
    toggleModalOne() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
