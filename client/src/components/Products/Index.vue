<template>
  <div>
    <h2>Get all products</h2>
    <p><button v-on:click="navigateTo('/product/create')">สร้าง Product</button></p>
    <h4>จำนวน Product: {{ products.length }}</h4>
    
    <div v-for="product in products" v-bind:key="product.id">
      <p>ID: {{ product.id }}</p>
      <p>ชื่อสินค้า: {{ product.name }}</p>
      <p>รายละเอียด: {{ product.description }}</p>
      <p>ราคา: {{ product.price }} บาท</p>
      <p>สต๊อก: {{ product.stock }} ชิ้น</p>
      <p>
        <button v-on:click="navigateTo('/product/'+ product.id)">ดูข้อมูล Product</button>
        <button v-on:click="navigateTo('/product/edit/'+ product.id)">แก้ไขข้อมูล</button>
        <button v-on:click="deleteProduct(product)">ลบข้อมูล Product</button>
      </p>
      <hr>
    </div>
  </div>
</template>

<script>
import ProductsService from '../../services/ProductsService'

export default {
  data () {
    return {
      products: []
    }
  },
  async created () {
    this.products = (await ProductsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async deleteProduct (product) {
      let result = confirm("Want to delete?")
      if (result) {
        try {
          await ProductsService.delete(product)
          this.products = (await ProductsService.index()).data
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
}
</script>