<template>
  <div class="hello products-container">
    <div 
      class="product"
      v-for="product in products"
      :key="product.name"
      @click="() => { showModal = true; selectedProduct = product }">
      
      <h1>{{product.name}}</h1>
      <p>${{product.regular_price}}/{{product.unit}}</p>
    </div>
    <add-item 
      v-if="showModal"
      @close="showModal = false"
      :name="selectedProduct.name"
      :price="selectedProduct.regular_price"
      :unit="selectedProduct.unit">
    </add-item> 
  </div>

</template>

<script>
import config from '../config';
import AddItem from './AddItem';
export default {
  name: 'products',
  data () {
    return {
      products: [],
      showModal: false,
      selectedProduct: {}
    }
  },
  methods: {
    getProducts: async function() {
      const response = await fetch(`${config.url}/products`);
      return response.json();
    },
  },
  components: {
    'add-item': AddItem
  },
  async mounted() {
    this.products = await this.getProducts();
  }
}
</script>

<style scoped>
  .products-container {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
  }

  .product {
    border: 1px solid black;
    padding: 5px;
    margin: 5px; 
    width: calc(100% * (1/4) - 50px);
    flex-grow: 1; 
    height: 20%;

    cursor: pointer;
  }

  .product :hover {
    background: darken(inherit, 50%);
  }

  
</style>
