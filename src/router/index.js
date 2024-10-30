import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/indexPage.vue'
import Layout from '@/views/Layout/indexPage.vue'
import Home from '@/views/Home/indexPage.vue'
import Category from '@/views/Category/indexPage.vue'
import SubCategory from '@/views/SubCategory/indexPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/category/:id',
          name: 'category',
          component: Category
        },
        {
          path: '/category/sub/:id',
          name: 'subcategory',
          component: SubCategory
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
