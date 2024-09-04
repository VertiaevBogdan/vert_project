import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import MainHeader from '@/components/main-page/main-header/MainHeader.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainHeader
    },
  ]
})

export default router
