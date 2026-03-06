import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../components/Users/Index.vue')
    },
    // --- แก้ไขจุดนี้: เพิ่ม 'blogs' กลับเข้ามาเพื่อป้องกันหน้าจอขาว (Crash) ---
    {
      path: '/products',
      name: 'products',
      component: () => import('../components/Products/Index.vue')
    },
    {
      path: '/product/create',
      name: 'products-create',
      component: () => import('../components/Products/CreateProduct.vue')
    },
    {
      path: '/product/edit/:productId',
      name: 'product-edit',
      component: () => import('../components/Products/EditProduct.vue')
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: () => import('../components/Products/ShowProduct.vue')
    }
  ]
})

export default router