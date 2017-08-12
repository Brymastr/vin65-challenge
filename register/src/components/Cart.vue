<template>
  <div class="cart">
    <h1>Cart</h1>
  </div>
</template>

<script>
import config from '../config';
export default {
  name: 'cart',
  data () {
    return {
      items: []
    }
  },
  methods: {
  },
  async mounted() {
  }
}
</script>

<style scoped>
  .cart {
    padding: 5px;
    border-left: 5px solid black;
    height: 100vh;
  }

  h1 {
    border-bottom: 5px solid black;
  }
  
</style>
