<template>
  <div class="hello products-container">

    <!-- List of Products -->
    <div 
      class="product"
      v-for="product in products"
      :key="product.name"
      @click="() => { showItemModal = true; selectedProduct = product }">

      <h1>{{product.name}}</h1>
      <p>${{product.regular_price}}/{{product.unit}}</p>
    </div>

    <!-- Add New Product button -->
    <div
      class="product"
      style="border-color: blue; color: blue;"
      @click="showProductModal = true">
      <h1>New Product</h1>
      <p>Add a product to this list</p>
    </div>

    <!-- Add New Product button -->
    <div
      class="product"
      style="border-color: red; color: red;"
      @click="deleteProducts">
      <h1>Delete Products</h1>
      <p>Permanently delete all products</p>
    </div>

    <!-- Add Item modal -->
    <add-item 
      v-if="showItemModal"
      @close="showItemModal = false"
      :name="selectedProduct.name"
      :price="selectedProduct.regular_price"
      :unit="selectedProduct.unit">
    </add-item>

    <!-- Add Product modal -->
    <add-product 
      v-if="showProductModal"
      @close="showProductModal = false"
      @addProduct="addProduct">
    </add-product> 
  </div>

</template>

<script>
import config from '../config';
import AddItem from './AddItem';
import AddProduct from './AddProduct';
export default {
  name: 'products',
  data () {
    return {
      products: [],
      showItemModal: false,
      showProductModal: false,
      selectedProduct: {},
      deleteProductsClickCount: 0
    }
  },
  methods: {
    getProducts: async function() {
      const response = await fetch(`${config.url}/products`);
      return response.json();
    },
    addProduct: async function(product) {
      const response = await fetch(`${config.url}/products`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(product)
      });

      this.products.push(product);
    },
    deleteProducts: async function() {
      if(this.deleteProductsClickCount < 3) {
        this.deleteProductsClickCount++;
        return;
      }

      const response = await fetch(`${config.url}/products`, {
        method: "DELETE"
      });

      this.products = [];
    }
  },
  components: {
    'add-item': AddItem,
    'add-product': AddProduct
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
  }

  
</style>
