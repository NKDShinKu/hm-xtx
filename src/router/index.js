import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/indexPage.vue'
import Layout from '@/views/Layout/indexPage.vue'
import Home from '@/views/Home/indexPage.vue'
import Category from '@/views/Category/indexPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
