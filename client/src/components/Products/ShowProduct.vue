<template>
  <div class="container">
    <h1>Show Product</h1>
    <div v-if="product">
      <p>ID: {{ product.id }}</p>
      <p>ชื่อ: {{ product.name }}</p>
      <p>รายละเอียด: {{ product.description }}</p>
      <p>ราคา: {{ product.price }}</p>
      <p>สต็อก: {{ product.stock }}</p>
      <p>
        <button class="btn btn-warning" v-on:click="navigateTo('/product/edit/'+ product.id)">แก้ไข product</button>
        <button class="btn btn-secondary" v-on:click="navigateTo('/products')">กลับ</button>
      </p>
    </div>
  </div>
</template>

<script>
import ProductsService from '../../services/ProductsService'
export default {
  data () { return { product: null } },
  async created () {
    let productId = this.$route.params.productId
    this.product = (await ProductsService.show(productId)).data
  },
  methods: { navigateTo (route) { this.$router.push(route) } }
}
</script>