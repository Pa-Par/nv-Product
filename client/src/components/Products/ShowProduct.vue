<template>
  <div v-if="product">
    <h1>Show Product</h1>
    <p>ID: {{ product.id }}</p>
    <p>Name: {{ product.name }}</p>
    <p>Description: {{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
    <p>Stock: {{ product.stock }}</p>
    <p>Image URL: {{ product.image }}</p>
    <p>
      <button v-on:click="navigateTo('/product/edit/'+ product.id)">แก้ไขข้อมูล</button>
      <button v-on:click="navigateTo('/products')">กลับ</button>
    </p>
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
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>