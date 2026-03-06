<template>
  <div>
    <h1>Create Product</h1>
    <form v-on:submit.prevent="createProduct">
      <p>Name: <input type="text" v-model="product.name"></p>
      <p>Description: <textarea v-model="product.description"></textarea></p>
      <p>Price: <input type="number" step="0.01" v-model="product.price"></p>
      <p>Stock: <input type="number" v-model="product.stock"></p>
      <p>Image URL: <input type="text" v-model="product.image"></p>
      <p><button type="submit">Create Product</button></p>
    </form>
  </div>
</template>

<script>
import ProductsService from '../../services/ProductsService'

export default {
  data () {
    return {
      product: {
        name: '',
        description: '',
        price: 0,
        stock: 0,
        image: ''
      }
    }
  },
  methods: {
    async createProduct () {
      try {
        await ProductsService.post(this.product)
        this.$router.push({ name: 'products' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>