<template>
  <div class="container">
    <h1>Edit Product</h1>
    <form v-on:submit.prevent="editProduct">
      <div class="mb-3">
        <label class="form-label">Name:</label>
        <input type="text" v-model="product.name" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Price:</label>
        <input type="number" v-model="product.price" class="form-control">
      </div>
      <p>
        <button type="submit" class="btn btn-warning">Update Product</button>
        <button type="button" class="btn btn-secondary" v-on:click="navigateTo('/products')">กลับ</button>
      </p>
    </form>
  </div>
</template>

<script>
import ProductsService from '../../services/ProductsService'

export default {
  data() {
    return {
      product: { name: '', description: '', price: 0, stock: 0 }
    }
  },
  async created() {
    try {
      let productId = this.$route.params.productId
      this.product = (await ProductsService.show(productId)).data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async editProduct() {
      try {
        await ProductsService.put(this.product)
        this.$router.push({ name: 'products' })
      } catch (err) {
        console.log(err)
      }
    },
    navigateTo(route) { this.$router.push(route) }
  }
}
</script>