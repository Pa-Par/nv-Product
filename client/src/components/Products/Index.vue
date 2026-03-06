<template>
  <div class="container">
    <h2>Get all products</h2>
    <p><button class="btn btn-secondary" v-on:click="logout">Logout</button></p>
    <h4>จำนวน product {{ products.length }}</h4>
    <p><button class="btn btn-success" v-on:click="navigateTo('/product/create')">สร้าง product</button></p>
    
    <div v-for="product in products" :key="product.id" class="card mb-3 p-3">
      <p><strong>ชื่อสินค้า:</strong> {{ product.name }}</p>
      <p><strong>ราคา:</strong> {{ product.price }} บาท</p>
      <p><strong>คงเหลือ:</strong> {{ product.stock }} ชิ้น</p>
      <p>
        <button class="btn btn-info btn-sm me-1" v-on:click="navigateTo('/product/'+ product.id)">ดูข้อมูล product</button>
        <button class="btn btn-warning btn-sm me-1" v-on:click="navigateTo('/product/edit/'+ product.id)">แก้ไข product</button>
        <button class="btn btn-danger btn-sm" v-on:click="deleteProduct(product)">ลบข้อมูล product</button>
      </p>
    </div>
  </div>
</template>

<script>
import ProductsService from '../../services/ProductsService'

export default {
  data () {
    return { products: [] }
  },
  async created () {
    this.refreshData()
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name: 'login' })
    },
    navigateTo (route) { this.$router.push(route) },
    async deleteProduct (product) {
      if (confirm("Want to delete?")) {
        try {
          await ProductsService.delete(product)
          this.refreshData()
        } catch (err) { console.log(err) }
      }
    },
    async refreshData() {
      this.products = (await ProductsService.index()).data
    }
  }
}
</script>