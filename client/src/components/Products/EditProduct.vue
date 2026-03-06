<template>
  <div v-if="product">
    <h1>Edit Product</h1>
    <form v-on:submit.prevent="editProduct">
      <p>Name: <input type="text" v-model="product.name"></p>
      <p>Description: <textarea v-model="product.description"></textarea></p>
      <p>Price: <input type="number" step="0.01" v-model="product.price"></p>
      <p>Stock: <input type="number" v-model="product.stock"></p>
      <p>Image URL: <input type="text" v-model="product.image"></p>
      <p><button type="submit">Edit Product</button></p>
    </form>
  </div>
</template>

<script>
import ProductsService from '../../services/ProductsService'

export default {
  data () {
    return {
      product: null
    }
  },
  async created () {
    try {
      let productId = this.$route.params.productId
      this.product = (await ProductsService.show(productId)).data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async editProduct () {
      try {
        await ProductsService.put(this.product)
        this.$router.push({ name: 'products' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>