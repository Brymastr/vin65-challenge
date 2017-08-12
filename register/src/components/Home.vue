<template>
  <div class="hello">
    <div class="half-page-vertical">
      <products class="half-page-vertical-left"></products>
      <cart class="half-page-vertical-right"></cart>
    </div>
  </div>

</template>

<script>
import config from '../config';
import Products from './Products';
import Cart from './Cart';
export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods: {
   
  },
  async mounted() {

  },
  components: {
    'products': Products,
    'cart': Cart
  },
  events: {
    'addItem': function(product) {
      this.$broadcast('addItem', product);
    }
  }
}
</script>

<style scoped>
  .half-page-vertical {
    display: flex;
    flex-direction: row;
  }

  .half-page-vertical-left {
    width: 66vw;
    height: 100%;
  }

  .half-page-vertical-right {
    width: 33vw;
    height: 100%;
  }
</style>
