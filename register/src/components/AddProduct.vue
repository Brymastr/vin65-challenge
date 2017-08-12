<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header">
              <slot name="header">
                <h2>Add a new product</h2>
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                Name: <input v-model="name">
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                Unit: <input v-model="unit">
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                Price: <input v-model="price">
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button" @click="addProduct">
                  Add
                </button>
                <button class="modal-default-button" @click="$emit('close')">
                  Cancel
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
import config from '../config';
import { Bus } from '../bus';
export default {
  name: 'add-product',
  data () {
    return {
      name: '',
      unit: '',
      price: 0
    }
  },
  methods: {
    addProduct: function() {
      this.$emit('addProduct', {
        name: this.name,
        unit: this.unit,
        regular_price: this.price
      })
      this.$emit('close');
    }
  },
  computed: {
    total: function() {
      return this.price * this.quantity;
    }
  },
  async mounted() {

  }
}
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  input {
    width: 100px;
  }
</style>
