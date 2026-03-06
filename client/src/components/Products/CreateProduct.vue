<template>
  <div class="container">
    <h1>Create Product</h1>
    <form v-on:submit.prevent="createProduct">
      <div class="mb-3">
        <label class="form-label">Name:</label>
        <input type="text" v-model="product.name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Description:</label>
        <textarea v-model="product.description" class="form-control"></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">Price:</label>
        <input type="number" step="0.01" v-model="product.price" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Stock:</label>
        <input type="number" v-model="product.stock" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Create Product</button>
    </form>
  </div>
</template>

<script>
import ProductsService from '../../services/ProductsService'

export default {
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: 0,
        stock: 0,
        image: 'null'
      }
    }
  },
  methods: {
    async createProduct() {
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