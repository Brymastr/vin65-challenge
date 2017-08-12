<template>
  <div class="cart">
    <h1>Cart</h1>
    <a @click="clearCart">empty</a> 
    <div class="horizontal-line"></div>

    <!-- Headers -->
    <div class="line-item">
      <div class="line-item-attribute">Item</div>
      <div class="line-item-attribute">Quantity</div>
      <div class="line-item-attribute">Price</div>
    </div>
    
    <!-- Line Items -->
    <div 
      class="line-item"
      v-for="item in items"
      :key="item.name">

      <div class="line-item-attribute">{{item.name}}</div>
      <div class="line-item-attribute">{{item.quantity}} {{item.unit}}</div>
      <div class="line-item-attribute">${{item.price}}</div>
    </div>

    <!-- Total -->
    <div class="line-item">
      <div class="line-item-attribute">Total</div>
      <div class="line-item-attribute"></div>
      <div class="line-item-attribute">${{calculateTotal}}</div>
    </div>
  </div>
</template>

<script>
import config from '../config';
import { Bus } from '../bus';
export default {
  name: 'cart',
  data () {
    return {
      items: []
    }
  },
  methods: {
    clearCart: function() {
      this.items = [];
    }
  },
  computed: {
    calculateTotal: function() {
      if(this.items.length > 0)
        return this.items.reduce((acc, item) => {
          return acc + item.price
        }, 0);
      else return 0;
    }
  },
  async mounted() {
    Bus.$on('addItem', item => {
      this.items.splice(-1, 0, item);
    });
  }
}
</script>

<style scoped>
  .cart {
    padding: 5px;
    border-left: 5px solid black;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .line-item {
    width: 100%;
    height: 25px;
    display: flex;
    flex-direction: row;
  }

  .line-item-attribute {
    width: 33%;
  }

  a {
    cursor: pointer;
    color: red;
  }

  h1 {
    margin-bottom: 5px;
  }

  .horizontal-line {
    border-bottom: 5px solid black;
    margin: 10px 0 10px 0;
  }
  
</style>
