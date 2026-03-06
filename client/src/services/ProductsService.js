import Api from '../services/Api' // เปลี่ยนจาก '../' เป็น '@/' เพื่อความถูกต้องของ Path

export default {
  index () {
    return Api().get('products')
  },
  show (productId) {
    return Api().get('product/' + productId)
  },
  post (product) {
    return Api().post('product', product)
  },
  put (product) {
    // ต้องแน่ใจว่าค่าที่ส่งมามี product.id
    return Api().put('product/' + product.id, product)
  },
  delete (product) {
    return Api().delete('product/' + product.id)
  }
}