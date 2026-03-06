import { createRouter, createWebHistory } from 'vue-router'

import UserCreate from '../components/Users/CreateUser.vue'
import UserEdit from '../components/Users/EditUser.vue'
import UserShow from '../components/Users/ShowUser.vue'
import UserIndex from '../components/Users/Index.vue'

import Login from '../components/Login.vue'

import ProductIndex from '../components/Products/Index.vue'
import ProductCreate from '../components/Products/CreateProduct.vue'
import ProductEdit from '../components/Products/EditProduct.vue'
import ProductShow from '../components/Products/ShowProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },

    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/products',
      name: 'products',
      component: ProductIndex
    },
    {
      path: '/product/create',
      name: 'product-create',
      component: ProductCreate
    },
    {
      path: '/product/edit/:productId',
      name: 'product-edit',
      component: ProductEdit
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: ProductShow
    }
  ]
})

export default router